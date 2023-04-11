import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';
import ProductDetails from './components/productDetails';
import AddProduct from './components/addProduct';

function App() {
  return (
    <div className="App">
      <Navbar />
      <AddProduct />
    </div>
  );
}

export default App;
