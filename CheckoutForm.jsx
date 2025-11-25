import { useState } from "react";

export default function CheckoutForm() {
  const [status, setStatus] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("✅ Checkout successful! Your order has been placed.");
  };

  return (
    <form onSubmit={handleSubmit} className="bg-gray-800 p-6 rounded-md mt-6 max-w-md mx-auto">
      <h2 className="text-xl text-white mb-4 font-semibold">Checkout Simulation</h2>
      <input type="text" placeholder="Full Name" className="w-full mb-3 p-2 rounded-md" required />
      <input type="email" placeholder="Email" className="w-full mb-3 p-2 rounded-md" required />
      <input type="text" placeholder="Address" className="w-full mb-3 p-2 rounded-md" required />
      <button className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded-md w-full">
        Confirm Order
      </button>
      {status && <p className="mt-3 text-teal-400 text-center">{status}</p>}
    </form>
  );
}