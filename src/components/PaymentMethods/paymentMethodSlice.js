import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "paymentMethod",
  initialState: [
    {
      id: 1,
      method: "VISA Debit (9332)",
      expMonth: "08",
      expYear: "22",
      customerName: "Baymard Institute Asp",
      image: require("../../images/visaIcon.png"),
      isDefault: true,
    },
    {
      id: 2,
      method: "VISA Debit (3207)",
      expMonth: "04",
      expYear: "18",
      customerName: "John Newman",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
  ],
  reducers: {
    addMethod: (state, action) => {
      state.push(action.payload);
    },
    deleteMethod: (state, action) => {
      const index = state.findIndex((m) => m.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});
