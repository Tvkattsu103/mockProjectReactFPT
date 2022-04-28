import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartSlice from "../components/MiniCart/miniCartSlice";
import emailSignUpSlice from "../components/EmailSignUp/emailSignUpSlice";
import userSlice from "../components/Login/userSlice";
import registerSlice from "../components/Register/registerSlice";
import addressSlice from "../components/Address/addressSlice";
const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartSlice.reducer,
    user: userSlice.reducer,
    registerUser: registerSlice.reducer,
    address: addressSlice.reducer,
    emailSignUp: emailSignUpSlice.reducer,
  },
});

export default store;

