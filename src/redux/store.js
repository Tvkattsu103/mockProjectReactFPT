import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartSlice from "../components/MiniCart/miniCartSlice";
import emailSignUpSlice from "../components/EmailSignUp/emailSignUpSlice";

const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartSlice.reducer,
    emailSignUp: emailSignUpSlice.reducer,
  },
});

export default store;
