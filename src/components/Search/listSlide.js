import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "list",
  initialState: {products: [
    // {
    //   id: 1,
    //   title: "name1",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "MEN'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 2,
    //   title: "name2",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "WOMEN'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 3,
    //   title: "name3",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "BABY'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 4,
    //   title: "name4",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "MOM'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 5,
    //   title: "name5",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "TEEN'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 6,
    //   title: "name1",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "MEN'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 7,
    //   title: "name2",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "WOMEN'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 8,
    //   title: "name3",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "BABY'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 9,
    //   title: "name4",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "MOM'S",
    //   description: "abcabc",
    // },
    // {
    //   id: 10,
    //   title: "name5",
    //   image:
    //     "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    //     category: "TEEN'S",
    //     description: "abcabc",
    // },
  ]},
  reducers: {
    changeList: (state, action) => {
      console.log('da ket noi');
      console.log(state.values);
      state.products = action.payload;
      console.log(state);
    },
  },
});
