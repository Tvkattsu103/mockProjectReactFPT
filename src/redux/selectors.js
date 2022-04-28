import { createSelector } from "@reduxjs/toolkit";

// export const stateMiniCart = (state) => state.miniCart.open;

export const searchSelector = (state) => state.search.key;
export const orderConfirmSelector = (state) => state.orderConfirm;

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

export const currentOrderConfirmSelector = createSelector(
  orderConfirmSelector,
  (list) => {
    return list;
  }
);

export const listPaymentMethod = (state) => state.paymentMethod;
