import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/productList';
import Cart from './components/cart';
import ProductDetails from './components/productDetails';

function App() {
  return (
    <div className="App">
      <Navbar />
      <ProductDetails />
    </div>
  );
}

export default App;
