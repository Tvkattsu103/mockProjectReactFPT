import { createSlice } from "@reduxjs/toolkit";
const productCardSlice = createSlice({
    name: "productCardSlice",
    initialState: { img: "" },
    reducers: {
        productCardSliceAction: (state, action) => {
            console.log("Da ket noi " + action.payload);
            state.img = action.payload;
        }, // Tự động tạo 1 action  type: Product/addToCartPage
    },
});

export default productCardSlice

export const { productCardSliceAction } = productCardSlice.actions
