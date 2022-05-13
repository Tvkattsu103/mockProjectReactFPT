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
            action.payload.map((p) => {
                state.items.push({ ...p.attributes, id: p.id })
            })
            state.items.splice(action.payload.length);
        },
        addItem: (state, action) => {
            state.items.push(action.payload);
        },
        changeState: (state, action) => {
            state.open = action.payload;
        },
        deleteItem: (state, action) => {
            state.items = state.items.filter((p) => p.id !== action.payload)
        },
        addQuantity: (state, action) => {
            state.items.map((p) => {
                console.log(p.id === action.payload);
                if (p.id === action.payload) {
                    p.quantity ++;
                }
            })
        },
        removeQuantity: (state, action) => {
            state.items.map((p) => {
                console.log(p.id === action.payload);
                if (p.id === action.payload) {
                    p.quantity --;
                }
            })
        },
    }
})