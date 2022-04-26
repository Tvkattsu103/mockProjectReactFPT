import { createStore } from 'redux';
import rootReducer from './reducer';

const store = createStore(rootReducer);

export default store;
// import { configureStore } from "@reduxjs/toolkit";
// import userReducer from "../components/Login/userSlice";

// export default configureStore({
//     reducer:{
//         user:userReducer,
//     },
// });