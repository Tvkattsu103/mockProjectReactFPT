import { LineAxisOutlined } from "@mui/icons-material";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";


export default createSlice({
    name: "user",
    initialState: {email:'',password:''},
    reducers: {
      loginSuccess: (state, action)=>{
         state.email=action.payload.email;
         state.password=action.payload.password;
      },
      logout:(state)=>{
        state=undefined;
      }
    },
});

