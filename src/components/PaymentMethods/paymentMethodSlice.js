import { createSlice } from "@reduxjs/toolkit";
export default createSlice({
  name: "paymentMethod",
  initialState: [
    // {
    //   id: 1,
    //   method: "VISA Debit (9332)",
    //   expMonth: "08",
    //   expYear: "22",
    //   customerName: "Baymard Institute Asp",
    //   image: require("../../images/visaIcon.png"),
    //   isDefault: true,
    // },
    // {
    //   id: 2,
    //   method: "VISA Debit (3207)",
    //   expMonth: "04",
    //   expYear: "18",
    //   customerName: "John Newman",
    //   image: require("../../images/visaIcon.png"),
    //   isDefault: false,
    // },
    // {
    //   id: 3,
    //   method: "VISA Debit (3207)",
    //   expMonth: "07",
    //   expYear: "23",
    //   customerName: "Yasuo",
    //   image: require("../../images/visaIcon.png"),
    //   isDefault: false,
    // },
    {
      "id": 1,
      "method": "diners-club-international",
      "expMonth": 3,
      "expYear": 23,
      "customerName": "Ambrose Fullwood",
      image: require("../../images/visaIcon.png"),
      "isDefault": true
    }, {
      "id": 2,
      "method": "laser",
      "expMonth": 6,
      "expYear": 24,
      "customerName": "Donny Monks",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 3,
      "method": "americanexpress",
      "expMonth": 9,
      "expYear": 23,
      "customerName": "Jamie Trevascus",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 4,
      "method": "jcb",
      "expMonth": 10,
      "expYear": 24,
      "customerName": "Dimitri Clack",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 5,
      "method": "jcb",
      "expMonth": 7,
      "expYear": 23,
      "customerName": "Niccolo Hakey",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 6,
      "method": "jcb",
      "expMonth": 1,
      "expYear": 22,
      "customerName": "Gris Coleman",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 7,
      "method": "diners-club-enroute",
      "expMonth": 1,
      "expYear": 21,
      "customerName": "Ariella Gouck",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 8,
      "method": "maestro",
      "expMonth": 6,
      "expYear": 20,
      "customerName": "Michaela Urion",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 9,
      "method": "china-unionpay",
      "expMonth": 3,
      "expYear": 20,
      "customerName": "Farlie Goulden",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }, {
      "id": 10,
      "method": "jcb",
      "expMonth": 11,
      "expYear": 21,
      "customerName": "Georgeanna Storre",
      image: require("../../images/visaIcon.png"),
      "isDefault": false
    }]
    ,
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
