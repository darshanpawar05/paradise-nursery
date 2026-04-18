import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";

function App() {
  return (
    <div>
      <Navbar />
      <button>Get Started</button>

      <ProductList />
      <CartItem />
    </div>
  );
}

export default App;