import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  favouritesItems: [],
  favouritesTotalQuantity: 0,
  favouritesTotalAmount: 0,
};

const favouritesSlice = createSlice({
  name: "favourites",
  initialState,
  reducers: {
    addToFavourites(state, action) {
      const itemIndex = state.favouritesItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.favouritesItems[itemIndex].favouritesQuantity = 1;
        toast.info("Already in favourites", { theme: "colored" });
      } else {
        const tempProduct = { ...action.payload, favouritesQuantity: 1 };
        state.favouritesItems.push(tempProduct);
        toast.success("Added to favourites", { theme: "colored" });
      }
    },
    removeFromFavourites(state, action) {
      const nextFavouritesItem = state.favouritesItems.filter(
        (favouritesItem) => favouritesItem._id !== action.payload._id
      );
      toast.success("Removed from favourites", { theme: "colored" });
      state.favouritesItems = nextFavouritesItem;
    },
    clearFavourites(state) {
      if (state.favouritesItems.length) {
        state.favouritesItems = [];
        toast.success("Favourites cleared", { theme: "colored" });
      } else toast.info("No product in favourites", { theme: "colored" });
    },
    getTotalsFavourites(state) {
      let { total, quantity } = state.favouritesItems.reduce(
        (favouritesTotal, favouritesItem) => {
          const { price, favouritesQuantity } = favouritesItem;
          const itemTotal = price * favouritesQuantity;
          favouritesTotal.total += itemTotal;
          favouritesTotal.quantity += favouritesQuantity;
          return favouritesTotal;
        },
        { total: 0, quantity: 0 }
      );
      state.favouritesTotalQuantity = quantity;
      state.favouritesTotalAmount = total;
    },
  },
});

export const { addToFavourites, removeFromFavourites, clearFavourites, getTotalsFavourites } =
  favouritesSlice.actions;

export default favouritesSlice.reducer;
