export default function Cart({ cartItems, removeFromCart }) {
  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div className="bg-gray-900 text-white p-4 rounded-md mt-6">
      <h2 className="text-xl mb-3 font-semibold">🛒 Cart</h2>
      {cartItems.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <>
          {cartItems.map((item, index) => (
            <div key={index} className="flex justify-between border-b border-gray-700 py-2">
              <p>{item.name}</p>
              <p>₹{item.price}</p>
              <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-600">
                Remove
              </button>
            </div>
          ))}
          <div className="flex justify-between mt-3 text-teal-400 font-bold">
            <span>Total:</span>
            <span>₹{total}</span>
          </div>
        </>
      )}
    </div>
  );
}