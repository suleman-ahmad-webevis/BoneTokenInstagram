import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    recentlyViewedProducts: [],
    isError: false,
    isSuccess: false,
    isLoading: false,
};


export const recentProductSlice = createSlice({
    name: "product",
    initialState,
    reducers: {
        saveRecentlyViewedProducts: (state, action) => {
            const isitem = state.recentlyViewedProducts.find((item) => {
                return item._id === action.payload._id
            })
            if (isitem !== undefined) {
            }
            else {
                if (state.recentlyViewedProducts.length > 11 && Object.keys(action.payload).length > 0) {
                    state.recentlyViewedProducts.pop()
                    state.recentlyViewedProducts.push(action.payload)
                }
                else {
                    if (Object.keys(action.payload).length > 0)
                        state.recentlyViewedProducts.push(action.payload)
                }
            }
        }
    },
});

export const { reset, saveRecentlyViewedProducts } = recentProductSlice.actions;
export default recentProductSlice.reducer;