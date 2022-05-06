import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
    name: 'miniCart',
    initialState: {
        open: false,
        items: [
            {
                image:'https://www3.assets-gap.com/webcontent/0028/965/940/cn28965940.jpg',
                title:'The Weekend Spring Dress',
                price:40
            }
        ]
    },
    reducers: {
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        changeState: (state, action) => {
            state.open = action.payload;
        }
    }
})