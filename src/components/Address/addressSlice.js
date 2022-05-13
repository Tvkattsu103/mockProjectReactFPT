import { createSlice} from "@reduxjs/toolkit";

const listAddress =[
    // {
    //     id : 1,
    //     name : "Phuong Huynh",
    //     address : "116 Phan Chu Trinh Street",
    //     city : "Hue",
    //     province : "Thua Thien Hue",
    //     country : "Viet Nam",
    //     isDefault : true
    // },
    // {
    //     id : 2,
    //     name : "Phuong Huynh",
    //     address : "5 Vinh Thanh Street",
    //     city : "Phu Vang",
    //     province : "Thua Thien Hue",
    //     country : "Viet Nam",
    //     isDefault : false
    // }
];
export default createSlice({
    name: "address",
    initialState: listAddress,
    reducers: {
        initAddress: (state, action) => {
            action.payload.map((p) => {
              return state.push({...p.attributes, id:p.id});
            })
            state.splice(action.payload.length);
          },
        addAddress: (state,action) =>{
            state.push(action.payload);
        },
        changDefault: (state,action)=>{
            state.forEach((m)=> m.isDefault=false);
            state.forEach((m)=> m.id===action.payload?m.isDefault=true:m.isDefault=false);
        },
        deleteAddress: (state, action) => {
            const index = state.findIndex((m) => m.id === action.payload);
            if (index > -1) {
                state.splice(index, 1);
            }
        }
    },
});
