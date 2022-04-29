import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'emailSignUp',
    initialState: {
        offcode: 'WELCOME10',
        open: false,
        emailInput: '',
        emailErr: false,
        showOffCode: false
    },
    reducers: {
        changeState: (state, action) => {
            state.open = action.payload;
        },
        changeEmailInput: (state, action) => {
            state.emailInput = action.payload;
        },
        changeEmailErrState: (state, action) => {
            state.emailErr = action.payload;
        },
        changeShowOffCodeState: (state, action) => {
            state.showOffCode = action.payload;
        }
    }
})