import { createSlice } from "@reduxjs/toolkit";
import data from "../../components/Shipping/dataShipping.json"
const cartPageSlice = createSlice({
  name: "CartPage",
  initialState: { dataShipping : data },
  reducers: {
    addToShipping: (state, action) => {
      console.log("Da ket noi " + action.payload);
      state.dataShipping = action.payload;
      console.log(state.dataShipping);
    }, // Tự động tạo 1 action  type: CartPage/addToShipping
  },
});

export default cartPageSlice
export const {addToShipping} = cartPageSlice.actions
  





