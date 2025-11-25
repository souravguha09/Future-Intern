export default function Navbar({ cartCount }) {
  return (
    <nav className="flex justify-between items-center bg-gray-900 text-white px-8 py-4">
      <h1 className="text-xl font-bold text-teal-400">MiniStore</h1>
      <div className="flex items-center space-x-6">
        <a href="#" className="hover:text-teal-300">Home</a>
        <a href="#" className="hover:text-teal-300">Products</a>
        <a href="#" className="hover:text-teal-300">Checkout</a>
        <div className="relative">
          <span className="material-icons">shopping_cart</span>
          {cartCount > 0 && (
            <span className="absolute -top-2 -right-3 bg-teal-500 text-xs px-2 py-1 rounded-full">
              {cartCount}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
}