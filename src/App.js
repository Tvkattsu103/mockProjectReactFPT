// import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Category from './components/Category/Category';
import HomePage from "./components/Home/HomePage";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmationPage";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import Search from "./components/Search/Search";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Payment from './components/Payment/Payment';
import EmailSignUp from './components/EmailSignUp/EmailSignUp';
import Address from './components/Address/Address';
import Login from './components/Login/Login';
import OrderHistory from './components/Order/OrderHistory';
import Register from './components/Register/Register';
import Shipping from './components/Shipping/Shipping';

import CardPage from './components/UICartPage/CardPage';
import Main from './components/UICheckOut/Main';
import UIMyProfile from './components/UIMyProfile/Main';
import Product from './components/UIProduct/Product.js';
import MainReturn from './components/UIReturns/MainReturn';
// import Product from "./components/UIProduct/TestGird.js";

function App() {

  return (
    <>
      <Router>
        <div id="main-ct" className="p-child-dkr">

          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/category" element={<Category />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/emailsignup" element={<EmailSignUp />} />
            {/* <Route path="/" element={<><HomePage /><Outlet /></>} /> */}
            {/* <Route path="HomePage" element={<HomePage />} /> */}
            <Route path="/Search" element={<Search />} />
            <Route path="/OrderConfirmation" element={<OrderConfirmation />} />
            <Route path="/PaymentMethods" element={<PaymentMethods />} />
            {/* <Route path="/" exact element={<App/>}></Route> */}
            <Route path="/Login" element={<Login/>}></Route>
            <Route path="/Register" element={<Register/>}></Route>
            <Route path="/Shipping" element={<Shipping/>}></Route>
            <Route path="/OrderHistory" element={<OrderHistory/>}></Route>
            <Route path="/Address" element={<Address/>}></Route>
            
            <Route path="CardPage" element={<CardPage />} />
            <Route path="Product" element={<Product />} />
            <Route path="MyProfile" element={<UIMyProfile />} />
            <Route path="Main" element={<Main/>} />
            <Route path="MainReturn" element={<MainReturn/>} />
          </Routes>
        </div>
      </Router>
      {/* <HomePage />
      <Outlet /> */}
    {/* <Category/> */}
    {/* <HomePage /> */}
    {/* <Product/> */}
    </>
  );
}

export default App;
