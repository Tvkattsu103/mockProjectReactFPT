import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Search from "./components/Search/Search";
import { render } from "react-dom";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmationPage";

const root = document.getElementById("root");
render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />} />
      <Route path="HomePage" element={<HomePage />} />
      <Route path="Search" element={<Search />} />
      <Route path="OrderConfirmation" element={<OrderConfirmation />} />
    </Routes>
  </BrowserRouter>,
  root

  // <React.StrictMode>
  //   <App />
  // </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
