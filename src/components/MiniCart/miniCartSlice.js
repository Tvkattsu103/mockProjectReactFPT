import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'miniCart',
    initialState: {
        open: false,
        items: [
        ]
    },
    reducers: {
        initCart: (state, action) => {
            console.log(action.payload.length);
            action.payload.map((p) => {
                state.items.push({...p.attributes, id:p.id})
             } )
              state.items
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        changeState: (state, action) => {
            state.open = action.payload;
        },
        addQuantity: (state, action) => {
            // state.items.quantity = state.items.quantity + action.payload;
            // state.items.find((item) => )
            // console.log("action",state.items.quantity);
        },
    }
})