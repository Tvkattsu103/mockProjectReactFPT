import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartReducer from "../components/MiniCart/miniCartSlice";
import userSlice from "../components/Login/userSlice";
import registerSlice from "../components/Register/registerSlice";
import addressSlice from "../components/Address/addressSlice";
const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartReducer.reducer,
    user: userSlice.reducer,
    registerUser: registerSlice.reducer,
    address: addressSlice.reducer
  },
});

export default store;

