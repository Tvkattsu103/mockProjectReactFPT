import { createSlice } from "@reduxjs/toolkit";
import data from '../UICartPage/DataCartPage.json'
// const productInitialState = {
//   product: data
// }
// const Product = (state = productInitialState, action) => {
//   switch (action.type) {
//     case "AddToCartPage":
//       const item = {
//         ...state,
//         product: {
//           ...state.product,
//           type: action.payload.type,
//           size: action.payload.size,
//           width: action.payload.width,
//           name: action.payload.name,
//           price: action.payload.price,
//         }
//       }
//       return item
//     default:
//       return state
//   }
// }

const productSlice = createSlice({
  name: "Product",
  initialState: { product: data },
  reducers: {
    addToCartPage: (state, action) => {
      console.log("Da ket noi " + action.payload);
      state.product = action.payload
    }, // Tự động tạo 1 action  type: Product/addToCartPage
  },
});

export default productSlice

export const { addToCartPage } = productSlice.actions






