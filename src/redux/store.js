import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartReducer from "../components/MiniCart/miniCartSlice";
import productSlice from "../components/UIProduct/ProductSlice"
const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartReducer.reducer,
    product: productSlice.reducer
  },
});

export default store;
