import { createSlice } from "@reduxjs/toolkit";
import { v4 as uuidv4 } from "uuid";

export default createSlice({
  name: "paymentMethod",
  initialState: [
    {
      id: 1,
      method: "diners-club-international",
      expMonth: 3,
      expYear: 23,
      customerName: "Ambrose Fullwood",
      image: require("../../images/visaIcon.png"),
      isDefault: true,
    },
    {
      id: 2,
      method: "laser",
      expMonth: 6,
      expYear: 24,
      customerName: "Donny Monks",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 3,
      method: "americanexpress",
      expMonth: 9,
      expYear: 23,
      customerName: "Jamie Trevascus",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 4,
      method: "jcb",
      expMonth: 10,
      expYear: 24,
      customerName: "Dimitri Clack",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 5,
      method: "jcb",
      expMonth: 7,
      expYear: 23,
      customerName: "Niccolo Hakey",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 6,
      method: "jcb",
      expMonth: 1,
      expYear: 22,
      customerName: "Gris Coleman",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 7,
      method: "diners-club-enroute",
      expMonth: 1,
      expYear: 21,
      customerName: "Ariella Gouck",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 8,
      method: "maestro",
      expMonth: 6,
      expYear: 20,
      customerName: "Michaela Urion",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 9,
      method: "china-unionpay",
      expMonth: 3,
      expYear: 20,
      customerName: "Farlie Goulden",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
    {
      id: 10,
      method: "jcb",
      expMonth: 11,
      expYear: 21,
      customerName: "Georgeanna Storre",
      image: require("../../images/visaIcon.png"),
      isDefault: false,
    },
  ],
  reducers: {
    addMethod: (state, action) => {
      state.push({
        id: uuidv4(),
        method: action.payload.type,
        expMonth: action.payload.month,
        expYear: action.payload.year,
        customerName: action.payload.name,
        image: require("../../images/visaIcon.png"),
        isDefault: false,
      });
    },
    deleteMethod: (state, action) => {
      const index = state.findIndex((m) => m.id === action.payload);
      if (index > -1) {
        state.splice(index, 1);
      }
    },
  },
});
