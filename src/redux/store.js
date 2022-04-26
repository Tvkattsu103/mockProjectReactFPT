import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartReducer from "../components/MiniCart/miniCartSlice";

const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartReducer.reducer,
  },
});

export default store;
