import { useState } from "react";
import ProductList from "./components/ProductList";
import CartItem from "./components/CartItem";
import Navbar from "./components/Navbar";
import "./App.css";

export default function App() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <div className="background-image">
      {!showProducts ? (
        <div>
          <h1>Welcome to Paradise Nursery</h1>
          <button onClick={() => setShowProducts(true)}>
            Get Started
          </button>
        </div>
      ) : (
        <div>
          <Navbar />
          <ProductList />
          <CartItem />
        </div>
      )}
    </div>
  );
}