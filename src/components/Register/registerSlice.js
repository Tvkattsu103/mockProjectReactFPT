import { createSlice } from "@reduxjs/toolkit";

const listUser =[
    
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
      initUser: (state, action) => {
        action.payload.map((p) => {
          return state.push({...p.attributes, id:p.id});
        })
      },
      addUser: (state,action) =>{
        state.push(action.payload);
      }     
    },
});