import './App.css';
import Category from './components/Category';
import HomePage from "./components/Home/HomePage";
import Login from './components/Login/Login';
import Register from './components/Register/Register';

function App() {
  return (
    <>
    {/* <Category/> */}
    <HomePage />
    <Login/>
    <Register/>
    </>
  );
}

export default App;
