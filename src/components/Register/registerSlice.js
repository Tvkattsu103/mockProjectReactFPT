import { createSlice } from "@reduxjs/toolkit";

const listUser =[
    {
        email:"thehuy.2pro@gmail.com",
        password:"123456",
        name:"Huy",
        surname:"Hoàng Thế",
        province:"Thừa Thiên Huế",
        city:"TP Huế",
        address:"116 Phan Chu Trinh"
    },
    {
        email:"huynhphuong@gmail.com",
        password:"123456",
        name:"Phương",
        surname:"Huỳnh Văn",
        province:"Thừa Thiên Huế",
        city:"Phú Vang",
        address:"Vinh Thanh"
    }
];
export default createSlice({
    name: "registerUser",
    initialState: listUser,
    reducers: {     
      addUser: (state,action) =>{
        state.push(action.payload);
      }     
    },
});