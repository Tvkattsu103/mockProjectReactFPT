import { createSlice} from "@reduxjs/toolkit";

const listAddress =[
    {
        id : 1,
        name : "Phuong Huynh",
        address : "116 Phan Chu Trinh Street",
        city : "Hue",
        province : "Thua Thien Hue",
        country : "Viet Nam",
        isDefault : true
    },
    {
        id : 2,
        name : "Phuong Huynh",
        address : "5 Vinh Thanh Street",
        city : "Phu Vang",
        province : "Thua Thien Hue",
        country : "Viet Nam",
        isDefault : false
    }
];
export default createSlice({
    name: "address",
    initialState: listAddress,
    reducers: {
      
    },
});
