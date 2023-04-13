import { Route, Routes } from "react-router-dom";

import './App.css';

// importing all components
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';
import ProductDetails from './components/productDetails';
import AddProduct from './components/addProduct';


// App component
function App(props) {

  return (
    <div className="App">
      {/* Navbar */}
      <Navbar store={props.store} />

      <Routes>

        {/* Route for Products page */}
        <Route path="/" element={ <ProductList store={props.store} /> } />

        {/* Route for cart page */}
        <Route path="/cart" element={ <Cart store={props.store} /> } />

        {/* Route for Product detail page */}
        <Route path="/product-details" element={ <ProductDetails store={props.store} /> } />

        {/* Route for add Product page */}
        <Route path="/add-product" element={ <AddProduct store={props.store} /> } />

      </Routes>
      
    </div>
  );
}

export default App;
