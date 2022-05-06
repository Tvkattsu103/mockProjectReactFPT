import { createSelector } from "@reduxjs/toolkit";
// export const stateMiniCart = (state) => state.miniCart.open;

export const searchSelector = (state) => state.search.key;
export const orderConfirmSelector = (state) => state.orderConfirm;

//initProductList
const listProduct = [
  {
    id: 1,
    name: "name1",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "MEN'S",
    description: "abcabc",
  },
  {
    id: 2,
    name: "name2",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "WOMEN'S",
    description: "abcabc",
  },
  {
    id: 3,
    name: "name3",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "BABY'S",
    description: "abcabc",
  },
  {
    id: 4,
    name: "name4",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "MOM'S",
    description: "abcabc",
  },
  {
    id: 5,
    name: "name5",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "TEEN'S",
    description: "abcabc",
  },
  {
    id: 6,
    name: "name1",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "MEN'S",
    description: "abcabc",
  },
  {
    id: 7,
    name: "name2",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "WOMEN'S",
    description: "abcabc",
  },
  {
    id: 8,
    name: "name3",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "BABY'S",
    description: "abcabc",
  },
  {
    id: 9,
    name: "name4",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "MOM'S",
    description: "abcabc",
  },
  {
    id: 10,
    name: "name5",
    image:
      "https://media.everlane.com/image/upload/c_scale,dpr_1.0,f_auto,q_auto,w_auto/c_limit,w_800/v1/i/dd73d486_3caf.png",
    type: "TEEN'S",
    description: "abcabc",
  },
];

export const listProductSearchSelector = createSelector(
  searchSelector,
  (key) => {
    return listProduct.filter((p) => p.name.includes(key));
  }
);
//miniCart
export const stateMiniCart = ( state ) => state.miniCart.open;
export const miniCartItem = ( state ) => state.miniCart.items;

// phan cua anh HuyHt8
export const userSelector = (state) => state.user;

export const listUser = (state) => state.registerUser;
export const checkUserSelector = createSelector(
  userSelector,listUser,
  (user,listUser) => {
    return listUser.find((p) => p.email===user.email && p.password===user.password);
  }
);
// phan cua anh HuyHt8 address
export const listAddress = (state) => state.address;

//emailSignUp
export const emailErrSelector = ( state ) => state.emailSignUp.emailErr;
export const stateEmailSignUp = ( state ) => state.emailSignUp.open;
export const showOffCodeSelector = ( state ) => state.emailSignUp.showOffCode;
export const emailInputSelector = ( state ) => state.emailSignUp.emailInput;

export const currentOrderConfirmSelector = createSelector(
  orderConfirmSelector,
  (list) => {
    return list;
  }
);

export const listPaymentMethod = (state) => state.paymentMethod;
