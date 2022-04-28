// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer);

// export default store;
import { configureStore } from "@reduxjs/toolkit";
import searchSlide from "../components/Search/searchSlide";
import orderConfirmSlide from "../components/OrderConfirmation/orderConfirmSlide";
import paymentMethodSlide from "../components/PaymentMethods/paymentMethodSlice";

const store = configureStore({
  reducer: {
    search: searchSlide.reducer,
    orderConfirm: orderConfirmSlide.reducer,
    paymentMethod: paymentMethodSlide.reducer,
  },
});

export default store;
