import { Link, Outlet } from 'react-router-dom';
import './App.css';
import Category from './components/Category';
import HomePage from "./components/Home/HomePage";
function App() {

  return (
    <>
      <HomePage />
      <Outlet />
    </>
  );
}

export default App;
