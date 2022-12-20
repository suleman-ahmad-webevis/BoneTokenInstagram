import { configureStore } from "@reduxjs/toolkit";
//Products
import productReducer from "./product/productSlice";
//Cart
import cartReducer from "./cart/cartSlice";
//FavouritesList
import favouritesReducer from "./favouritesList/favouritesListSlice";
//WalletConn
import walletConnect from "./walletConn/walletConnSlice";
//Dog
import dogReducer from "./dog/dogSlice";
//Recently Viewed Products
import recentlyViewedReducer from './recentlyViewed/recentlySlice'
//Other configs
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "redux";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  blacklist: ["product", "dogs"],
};

const rootReducer = combineReducers({
  //Product
  product: productReducer,
  //Cart
  cart: cartReducer,
  //Favourites
  favourites: favouritesReducer,
  //Wallet
  wallet: walletConnect,
  //Dog
  dog: dogReducer,
  //Recently Viewed Products
  recentlyViewed: recentlyViewedReducer
});

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
