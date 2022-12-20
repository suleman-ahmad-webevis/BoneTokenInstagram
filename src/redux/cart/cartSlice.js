import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const initialState = {
  cartItems: [],
  cartTotalQuantity: 0,
  cartTotalAmount: 0,
  singleItemQuantity: 0,
  itemFromDeliverySlider: {},
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === action.payload._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += 1;
        toast.success("Product quantity increased", { theme: "colored" });
      } else {
        const tempProduct = { ...action.payload, cartQuantity: 1 };
        state.cartItems.push(tempProduct);
        toast.success("Product added to cart ", { theme: "colored" });
      }
    },
    removeFromCart(state, action) {
      const nextCartItem = state.cartItems.filter(
        (cartItem) => cartItem._id !== action.payload._id
      );
      state.cartItems = nextCartItem;
      if (state.cartItems.length) {
        toast.success("Product removed from cart ", { theme: "colored" });
      } else {
        state.itemFromDeliverySlider = {};
      }
    },
    decreaseCart(state, action) {
      const itemIndex = state.cartItems.findIndex(
        (cartItem) => cartItem._id === action.payload
      );
      if (state.cartItems[itemIndex]?.cartQuantity > 1) {
        state.cartItems[itemIndex].cartQuantity -= 1;
        toast.success("Product quantity decreased", { theme: "colored" });
      } else if (state.cartItems[itemIndex]?.cartQuantity === 1) {
        const nextCartItems = state.cartItems.filter(
          (cartItem) => cartItem._id !== action.payload
        );
        toast.success("Product removed ", { theme: "colored" });
        state.cartItems = nextCartItems;
      }
    },
    clearCart(state) {
      if (state.cartItems.length) {
        state.cartItems = [];
      } else toast.info("No product in cart", { theme: "colored" });
    },
    getTotals(state) {
      let { total, quantity } = state.cartItems.reduce(
        (cartTotal, cartItem) => {
          const { retailPrice, cartQuantity } = cartItem;
          const itemTotal = retailPrice * cartQuantity;
          cartTotal.total += itemTotal;
          cartTotal.quantity += cartQuantity;
          return cartTotal;
        },
        { total: 0, quantity: 0 }
      );
      total = parseFloat(total.toFixed(2));
      state.cartTotalQuantity = quantity;
      state.cartTotalAmount = total;
    },
    getItemQuantity(state, action) {
      let cartItemQuantity =
        state.cartItems.length &&
        state.cartItems.find((cartItem) => cartItem._id === action.payload);
      state.singleItemQuantity = cartItemQuantity?.cartQuantity;
    },
    saveItemFromDeliverySlider(state, action) {
      state.itemFromDeliverySlider = action.payload;
    },
    incQuantity(state, action) {
      //This function is for product detail
      const { quantity, product } = action.payload;
      const itemIndex = state.cartItems.findIndex(
        (item) => item._id === product._id
      );
      if (itemIndex >= 0) {
        state.cartItems[itemIndex].cartQuantity += quantity > 0 ? quantity : 1;
      } else {
        const tempProduct = {
          ...product,
          cartQuantity: quantity > 0 ? quantity : 1,
        };
        state.cartItems.push(tempProduct);
        toast.success("Product added to cart ", { theme: "colored" });
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  decreaseCart,
  increaseCart,
  clearCart,
  getTotals,
  getItemQuantity,
  saveItemFromDeliverySlider,
  incQuantity,
} = cartSlice.actions;

export default cartSlice.reducer;
