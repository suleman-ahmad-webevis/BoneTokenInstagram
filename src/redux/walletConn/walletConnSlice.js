import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import metaMaskWallet from "./walletConnService";
import { toast } from "react-toastify";

const initialState = {
  metaMaskAddress: null,
  isErrors: false,
  isSuccess: false,
  isDisSuccess: false,
  isLoading: false,
  message: "",
};

export const metaMaskConnection = createAsyncThunk(
  "/metaMask/connectWallet",
  async (account, thunkAPI) => {
    try {
      return await metaMaskWallet.walletConnect(account);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const metaMaskDisconnect = createAsyncThunk(
  "/metaMask/discountWallet",
  async (thunkAPI) => {
    try {
      return await metaMaskWallet.walletDisconnect();
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const metaMaskSlice = createSlice({
  name: "metaMaskWallet",
  initialState,
  reducers: {
    reset: (state) => {
      state.metaMaskAddress = null;
      state.isLoading = false;
      state.isSuccess = false;
      state.isErrors = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(metaMaskConnection.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(metaMaskConnection.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.metaMaskAddress = action.payload;
      })
      .addCase(metaMaskConnection.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
        state.metaMaskAddress = null;
      })
      .addCase(metaMaskDisconnect.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(metaMaskDisconnect.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isDisSuccess = true;
        state.metaMaskAddress = action.payload;
      })
      .addCase(metaMaskDisconnect.rejected, (state) => {
        state.isLoading = false;
        state.isErrors = true;
      });
  },
});

export const { reset } = metaMaskSlice.actions;
export default metaMaskSlice.reducer;
