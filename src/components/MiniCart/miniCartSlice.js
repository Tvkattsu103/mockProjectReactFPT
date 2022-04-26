import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'miniCart',
    initialState: {
        open: false,
    },
    reducer: {
        changeState: (state, action) => {
            state.open = action.payload;
        }
    }
})