import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "orderConfirm",
  // initialState: {
  //   id: 1,
  //   orderTotal: 9.5,
  //   orderReference: "5D4S15G1C2C",
  //   delivery: "Thusday, 23 May, 2022",
  //   orderStatus: "Delivering",
  //   orderList: [
  //     {
  //       id: 1,
  //       name: "Converse Shoes",
  //       image: require("../../images/more.png"),
  //       description: "aaaaaaaaaaaaaaaaaaaaaa",
  //       type: "Cheap fills",
  //       size: 42,
  //       price: 9.5,
  //       quantity: 1,
  //     },
  //     {
  //       id: 2,
  //       name: "Converse Shoes",
  //       image: require("../../images/converseShoes.webp"),
  //       description: "aaaaaaaaaaaaaaaaaaaaaa",
  //       type: "Cheap fills",
  //       size: 42,
  //       price: 9.5,
  //       quantity: 1,
  //     },
  //   ],
  // },
  initialState:{
    orderList: [],
    money:0,
  },
  reducers: {
    addOrderList: (state, action) => {
      state.orderList.push(action.payload);
    },
    addOldCart: (state, action) => {
      console.log(action.payload);
      state.orderList = action.payload;
    },
    addMoney: (state, action) => {
      state.money = action.payload;
    },
  },
});
