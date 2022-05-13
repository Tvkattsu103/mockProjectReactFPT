import { createSelector } from "@reduxjs/toolkit";

// export const stateMiniCart = (state) => state.miniCart.open;

export const searchSelector = (state) => state.search.key;
export const orderConfirmSelector = (state) => state.orderConfirm;
export const listSelector = (state) => state.list.products;
//initProductList

export const listProductSearchSelector = createSelector(
  listSelector, searchSelector,
  (listProduct, key) => {
    return listProduct.filter((p) => p.attributes.title.toLowerCase().includes(key.toLowerCase()));
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
    const e = listUser.find((p) => p.email===user.email && p.password===user.password);
    if(e){
      localStorage.setItem('currentuser',JSON.stringify(e));
    }
    return e;
    
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
