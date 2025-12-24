const Shipping = () => {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-12">
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Shipping Information
          </h1>
  
          <ul className="space-y-4 text-sm text-gray-700">
            <li>• Orders are processed within 24 hours</li>
            <li>• Delivery takes 2–5 business days in India</li>
            <li>• International delivery: 7–14 business days</li>
            <li>• Tracking link shared via email & SMS</li>
          </ul>
  
          <p className="mt-6 text-sm text-gray-600">
            Delays may occur during festivals or sales.
          </p>
        </div>
      </div>
    );
  };
  
  export default Shipping;
  