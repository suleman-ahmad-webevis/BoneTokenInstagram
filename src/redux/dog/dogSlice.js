import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import dogService from "./dogService";
import { toast } from "react-toastify";

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: "",
};

export const postTheDog = createAsyncThunk(
  "dog/postTheDog",
  async (dog, thunkAPI) => {
    try {
      return await dogService.postTheDog(dog);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTheDogs = createAsyncThunk(
  "dog/getTheDogs",
  async (thunkAPI) => {
    try {
      return await dogService.getTheDogs();
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const getTheDog = createAsyncThunk(
  "dog/getTheDog",
  async (params, thunkAPI) => {
    try {
      return await dogService.getTheDog(params);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const putTheDog = createAsyncThunk(
  "dog/putTheDog",
  async (dog, thunkAPI) => {
    try {
      toast.success("Updated successfully", { theme: "colored" });
      return await dogService.putTheDog(dog);
    } catch (error) {
      const message = error.message;
      toast.error(message, { theme: "colored" });
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const dogSlice = createSlice({
  name: "dog",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
      state.isSuccess = false;
      state.isError = false;
      state.message = "";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getTheDogs.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheDogs.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.dogs = action.payload;
      })
      .addCase(getTheDogs.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.dogs = [];
      })
      .addCase(getTheDog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getTheDog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleDog = action.payload;
      })
      .addCase(getTheDog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.singleDog = [];
      })
      .addCase(putTheDog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(putTheDog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleDog = action.payload;
      })
      .addCase(putTheDog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.singleDog = [];
      })
      .addCase(postTheDog.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(postTheDog.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.singleDog = action.payload;
      })
      .addCase(postTheDog.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.singleDog = [];
      });
  },
});

export const { reset } = dogSlice.actions;
export default dogSlice.reducer;
