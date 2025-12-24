import  { useState } from "react";

const TrackOrder = () => {
  const [orderId, setOrderId] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Tracking order: ${orderId}`);
  };

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white p-8 rounded-xl shadow-sm w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">
          Track Your Order
        </h1>
        <p className="text-sm text-gray-600 mb-6">
          Enter your Order ID to see delivery status.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Order ID (e.g. ORD12345)"
            className="w-full border rounded-md px-4 py-2 text-sm"
            value={orderId}
            onChange={(e) => setOrderId(e.target.value)}
            required
          />

          <button className="w-full bg-gray-900 text-white py-2 rounded-md text-sm hover:bg-gray-800">
            Track Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default TrackOrder;
