export default function ProductCard({ product, addToCart }) {
  return (
    <div className="bg-gray-800 p-4 rounded-lg shadow-md text-center hover:scale-105 transition">
      <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded-md mb-3" />
      <h3 className="text-lg font-semibold text-white">{product.name}</h3>
      <p className="text-teal-400 font-bold mb-2">₹{product.price}</p>
      <button
        onClick={() => addToCart(product)}
        className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md"
      >
        Add to Cart
      </button>
    </div>
  );
}