import ProductCard from "../components/ProductCard";
import Cart from "../components/Cart";
import CheckoutForm from "../components/CheckoutForm";
import { products } from "../data";

export default function Home({ addToCart, cartItems, removeFromCart }) {
  return (
    <div className="px-6 py-10 bg-gray-950 min-h-screen">
      <h2 className="text-3xl text-teal-400 font-bold text-center mb-8">Shop Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {products.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
      <Cart cartItems={cartItems} removeFromCart={removeFromCart} />
      <CheckoutForm />
    </div>
  );
}