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
            <Route path="Search" element={<Search />} />
            <Route path="OrderConfirmation" element={<OrderConfirmation />} />
            <Route path="PaymentMethods" element={<PaymentMethods />} />
          </Routes>
        </div>
      </Router>
      {/* <HomePage />
      <Outlet /> */}
    </>
  );
}

export default App;
