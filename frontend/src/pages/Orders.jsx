import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import axios from "axios";
import { Link } from "react-router-dom";

const Orders = () => {
  const { backendUrl, token, currency } = useContext(ShopContext);
  const [orderData, setOrderData] = useState([]);

  const loadOrderData = async () => {
    try {
      if (!token) return;

      const response = await axios.post(
        backendUrl + "/api/order/userorders",
        {},
        { headers: { token } }
      );

      if (response.data.success) {
        let allOrdersItem = [];

        response.data.orders.forEach((order) => {
          order.items.forEach((item) => {
            allOrdersItem.push({
              ...item,
              status: order.status,
              payment: order.payment,
              paymentMethod: order.paymentMethod,
              date: order.date,
            });
          });
        });

        setOrderData(allOrdersItem.reverse());
      }
    } catch (error) {
      console.error("Failed to load orders", error);
    }
  };

  useEffect(() => {
    loadOrderData();
  }, [token]);

  return (
    <div className="border-t pt-16">

      {/* Title */}
      <div className="text-2xl">
        <Title text1={"MY"} text2={"ORDERS"} />
      </div>

      {/* EMPTY STATE */}
      {orderData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center text-gray-600">
          <p className="text-xl font-medium text-gray-800">
            You haven’t placed any orders yet
          </p>
          <p className="text-sm mt-2 max-w-md">
            Once you place an order, it will appear here so you can track its
            status and details.
          </p>

          <Link
            to="/collection"
            className="mt-6 border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition"
          >
            Start Shopping
          </Link>
        </div>
      ) : (
        /* ORDERS LIST */
        <div className="mt-8">
          {orderData.map((item) => (
            <div
              key={`${item._id}-${item.date}`}
              className="py-4 border-t border-b text-gray-700 flex flex-col md:flex-row md:items-center md:justify-between gap-4"
            >
              {/* Left */}
              <div className="flex items-start gap-6 text-sm">
                <img
                  className="w-16 sm:w-20"
                  src={item.image[0]}
                  alt={item.name}
                />
                <div>
                  <p className="sm:text-base font-medium">
                    {item.name}
                  </p>
                  <div className="flex flex-wrap items-center gap-3 mt-1 text-sm text-gray-700">
                    <p>{currency}{item.price}</p>
                    <p>Qty: {item.quantity}</p>
                    <p>Size: {item.size}</p>
                  </div>
                  <p className="mt-1">
                    Date:{" "}
                    <span className="text-gray-400">
                      {new Date(item.date).toDateString()}
                    </span>
                  </p>
                  <p className="mt-1">
                    Payment:{" "}
                    <span className="text-gray-400">
                      {item.paymentMethod}
                    </span>
                  </p>
                </div>
              </div>

              {/* Right */}
              <div className="md:w-1/2 flex justify-between items-center">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-green-500"></span>
                  <p className="text-sm md:text-base">
                    {item.status}
                  </p>
                </div>

                <button
                  onClick={loadOrderData}
                  className="border px-4 py-2 text-sm font-medium rounded-sm hover:bg-gray-100"
                >
                  Track Order
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Orders;
