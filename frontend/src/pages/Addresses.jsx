import React, { useState } from "react";

const Addresses = () => {
  const [addresses, setAddresses] = useState([
    {
      id: 1,
      name: "Atharv Aggarwal",
      phone: "9876543210",
      address: "123, Main Street",
      city: "Noida",
      state: "Uttar Pradesh",
      pincode: "201301",
      isDefault: true,
    },
  ]);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-5xl mx-auto">
        
        {/* Header */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold text-gray-900">
            Saved Addresses
          </h1>
          <button className="bg-gray-900 text-white px-4 py-2 rounded-md text-sm hover:bg-gray-800">
            Add New Address
          </button>
        </div>

        {/* Address List */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {addresses.map((addr) => (
            <div
              key={addr.id}
              className="bg-white rounded-xl shadow-sm p-6 border border-gray-200"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="font-semibold text-gray-900">
                    {addr.name}
                  </h3>
                  <p className="text-sm text-gray-600 mt-1">
                    {addr.address}, {addr.city}, {addr.state} -{" "}
                    {addr.pincode}
                  </p>
                  <p className="text-sm text-gray-600 mt-1">
                    Phone: {addr.phone}
                  </p>
                </div>

                {addr.isDefault && (
                  <span className="text-xs bg-gray-900 text-white px-2 py-1 rounded">
                    Default
                  </span>
                )}
              </div>

              <div className="flex gap-4 mt-4 text-sm">
                <button className="text-gray-800 hover:underline">
                  Edit
                </button>
                <button className="text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default Addresses;
