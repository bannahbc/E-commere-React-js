import logo from './logo.svg';
import './App.css';
import Login from './Pages/Login/Login';
import Home from './Pages/Home/Home';
import { BrowserRouter ,Outlet,Route,Routes } from 'react-router-dom';
import Product from './Pages/Product/Product';
import Error from './Components/Error/Error';
import Navbar from './Components/Navbar/Navbar';
import Card from './Components/Cards/Cards';
import Category from './Components/Category/Category';

const Layout =()=>{
  return(
  <>
  <Navbar/>
  <Outlet/>
  </>)
}

function App() {
  return (
    <div className="App">
       <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="product/:product_id" element={<Product />} />
          <Route path="products" element={<Card heading="All Products" />} />
          <Route path="category" element={<Category/>} />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
