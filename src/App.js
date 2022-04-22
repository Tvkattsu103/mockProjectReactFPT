import './App.css';
import Category from './components/Category/Category';
import HomePage from "./components/Home/HomePage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Payment from './components/Payment/Payment';
import EmailSignUp from './components/EmailSignUp/EmailSignUp';
function App() {
  return (
    <>
    <Router>
      <div id="main-ct" className="p-child-dkr">
        
            <Routes>
              <Route path="/" element={<HomePage/>} />
              <Route path="/category" element={<Category/>} />
              <Route path="/payment" element={<Payment/>} />
              <Route path="/emailsignup" element={<EmailSignUp/>} />
            </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;
