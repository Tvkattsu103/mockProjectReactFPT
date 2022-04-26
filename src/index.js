import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./components/Home/HomePage";
import Search from "./components/Search/Search";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmationPage";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="HomePage" element={<HomePage />} />
        <Route path="Search" element={<Search />} />
        <Route path="OrderConfirmation" element={<OrderConfirmation />} />
        <Route path="PaymentMethods" element={<PaymentMethods />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
