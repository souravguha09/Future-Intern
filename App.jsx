import { useState } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";

export default function App() {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => setCart([...cart, product]);
  const removeFromCart = (id) => setCart(cart.filter((item) => item.id !== id));

  return (
    <div>
      <Navbar cartCount={cart.length} />
      <Home addToCart={addToCart} cartItems={cart} removeFromCart={removeFromCart} />
    </div>
  );
}