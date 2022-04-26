// import { createStore } from 'redux';
// import rootReducer from './reducer';

// const store = createStore(rootReducer);

// export default store;

import { configureStore } from "@reduxjs/toolkit";
import miniCartReducer from "../components/MiniCart/miniCartSlice";

const store = configureStore({
    reducer: {
        miniCart: miniCartReducer.reducer,
    }
});

export default store;