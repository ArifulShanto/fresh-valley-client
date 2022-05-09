import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import AddProduct from './component/AddProduct/AddProduct';
import Header from './component/Header/Header';

function App() {
  return (
    <BrowserRouter>
      <Header></Header>
    </BrowserRouter>
  );
}

export default App;
