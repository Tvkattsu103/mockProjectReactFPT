import "./App.css";
import CategoryOverview from "./components/CategoryOverview/Category";
import Help from "./components/Help/Help";
import "bootstrap-icons/font/bootstrap-icons.css";
import HomePage from "./components/Home/HomePage";
import OrderConfirmation from "./components/OrderConfirmation/OrderConfirmationPage";
import PaymentMethods from "./components/PaymentMethods/PaymentMethods";
import Search from "./components/Search/Search";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Payment from "./components/Payment/Payment";
import EmailSignUp from "./components/EmailSignUp/EmailSignUp";
import Address from "./components/Address/Address";
import Login from "./components/Login/Login";
import OrderHistory from "./components/Order/OrderHistory";
import Register from "./components/Register/Register";
import Shipping from "./components/Shipping/Shipping";

import CardPage from "./components/UICartPage/CardPage";
import UIMyProfile from "./components/UIMyProfile/Main";
import Product from "./components/UIProduct/Product.js";
import MainReturn from "./components/UIReturns/MainReturn";
import CategoryPage from "./components/CategoryPage/CategoryPage";
import CardPage2 from "./components/UICartPage/CartPage2";

function App() {
  const ProtectedRoute = ({ children }) => {
    if (!localStorage.getItem("currentuser")) {
      return <Navigate to="/Login" replace />;
    }

    return children;
  };

  return (
    <>
      <Router>
        <div id="main-ct" className="p-child-dkr">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/:title/:gia" element={<Product />} />
            <Route path="/categoryoverview" element={<CategoryOverview />} />
            <Route path="/categorypage" element={<CategoryPage />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/:title/:gia" element={<Product />} />
            <Route path="/emailsignup" element={<EmailSignUp />} />
            <Route path="/Search" element={<Search />} />
            <Route
              path="/PaymentMethods"
              element={
                <ProtectedRoute>
                  <PaymentMethods />
                </ProtectedRoute>
              }
            />
            {/* <Route path="/" exact element={<App/>}></Route> */}
            <Route path="/Login" element={<Login />}></Route>
            <Route path="/Register" element={<Register />}></Route>
            <Route path="/Shipping" element={<Shipping />}></Route>
            <Route
              path="/OrderHistory"
              element={
                <ProtectedRoute>
                  <OrderHistory />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="/Address" element={<Address />}></Route>

            <Route path="CardPage" element={<CardPage />} />
            <Route path="/CardPage2" element={<CardPage2 />} />
            <Route path="Product" element={<Product />} />
            <Route
              path="MyProfile"
              element={
                <ProtectedRoute>
                  <UIMyProfile />
                </ProtectedRoute>
              }
            />
            <Route
              path="/CheckoutReview"
              element={
                <ProtectedRoute>
                  <OrderConfirmation />
                </ProtectedRoute>
              }
            />
            {/* <Route path="Main" element={<Main />} /> */}
            <Route path="MainReturn" element={<MainReturn />} />
            <Route path="/Help" element={<Help />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
