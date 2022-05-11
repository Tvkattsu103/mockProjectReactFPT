import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'miniCart',
    initialState: {
        open: false,
        items: [
            {
                image:'https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg',
                title:'The Weekend Spring Dress',
                price:40,
                quantity:1
            }
        ]
    },
    reducers: {
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