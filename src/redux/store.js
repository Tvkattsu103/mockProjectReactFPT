import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import miniCartSlice from "../components/MiniCart/miniCartSlice";
import emailSignUpSlice from "../components/EmailSignUp/emailSignUpSlice";
import userSlice from "../components/Login/userSlice";
import registerSlice from "../components/Register/registerSlice";
import addressSlice from "../components/Address/addressSlice";
import productSlice from "../components/UIProduct/ProductSlice";
import orderConfirmSlide from "../components/OrderConfirmation/orderConfirmSlide";
import paymentMethodSlide from "../components/PaymentMethods/paymentMethodSlice";
import cartPageSlice from "../components/UICartPage/CartPageSlice";
import listSlide from "../components/Search/listSlide";

const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    miniCart: miniCartSlice.reducer,
    user: userSlice.reducer,
    registerUser: registerSlice.reducer,
    address: addressSlice.reducer,
    emailSignUp: emailSignUpSlice.reducer,
    product: productSlice.reducer,
    orderConfirm: orderConfirmSlide.reducer,
    paymentMethod: paymentMethodSlide.reducer,
    cartpage: cartPageSlice.reducer,
    list: listSlide.reducer,
  },
});

export default store;

