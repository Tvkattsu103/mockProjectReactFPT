import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "search",
  initialState: {key: ''},
  reducers: {
    searchKeyChange: (state, action) => {
      state.key = action.payload;
    },
  },
});

