import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartReducer from "../components/MiniCart/miniCartSlice";
import productSlice from "../components/UIProduct/ProductSlice"
import cartPageSlice from "../components/UICartPage/CartPageSlice.js"
const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartReducer.reducer,
    product: productSlice.reducer,
    cartpage: cartPageSlice.reducer
  },
});

export default store;
