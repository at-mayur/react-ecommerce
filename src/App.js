import { Route, Routes } from "react-router-dom";

import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';
import ProductDetails from './components/productDetails';
import AddProduct from './components/addProduct';


function App(props) {

  return (
    <div className="App">
      <Navbar store={props.store} />

      <Routes>

        <Route path="/" element={ <ProductList store={props.store} /> } />

        <Route path="/cart" element={ <Cart store={props.store} /> } />

        <Route path="/product-details" element={ <ProductDetails store={props.store} /> } />

        <Route path="/add-product" element={ <AddProduct store={props.store} /> } />

      </Routes>
      
    </div>
  );
}

export default App;
