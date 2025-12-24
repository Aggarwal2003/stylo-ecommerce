import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import CartTotal from "../components/CartTotal";
import { Link } from "react-router-dom";

const Cart = () => {
  const {
    products,
    currency,
    cartItems,
    updateQuantity,
    navigate,
  } = useContext(ShopContext);

  const [cartData, setCartData] = useState([]);

  useEffect(() => {
    if (products.length > 0) {
      const tempData = [];
      for (const productId in cartItems) {
        for (const size in cartItems[productId]) {
          if (cartItems[productId][size] > 0) {
            tempData.push({
              _id: productId,
              size,
              quantity: cartItems[productId][size],
            });
          }
        }
      }
      setCartData(tempData);
    }
  }, [cartItems, products]);

  return (
    <div className="border-t pt-14">
      <div className="text-2xl mb-6">
        <Title text1={"YOUR"} text2={"CART"} />
      </div>

      {/* EMPTY CART */}
      {cartData.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center text-gray-600">
          <p className="text-xl font-medium text-gray-800">
            Your cart is empty
          </p>
          <p className="text-sm mt-2 max-w-md">
            Browse products and add items to your cart.
          </p>

          <Link
            to="/collection"
            className="mt-6 border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition"
          >
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          {/* CART ITEMS */}
          <div className="flex flex-col gap-6">
            {cartData.map((item) => {
              const productData = products.find(
                (product) => product._id === item._id
              );

              return (
                <div
                  key={`${item._id}-${item.size}`}
                  className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 sm:p-6 border rounded-xl bg-white shadow-sm"
                >
                  {/* Image */}
                  <img
                    className="w-24 sm:w-28 rounded-md object-cover"
                    src={productData.image[0]}
                    alt={productData.name}
                  />

                  {/* Info */}
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <p className="text-base sm:text-lg font-medium text-gray-800">
                        {productData.name}
                      </p>

                      <div className="flex items-center gap-4 mt-2 text-sm text-gray-600">
                        <p className="font-medium text-gray-800">
                          {currency}
                          {productData.price}
                        </p>
                        <span className="px-3 py-1 border rounded bg-gray-50">
                          Size: {item.size}
                        </span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity */}
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-gray-500">
                          Qty
                        </span>
                        <input
                          type="number"
                          min={1}
                          defaultValue={item.quantity}
                          className="w-16 border rounded px-2 py-1 text-sm"
                          onChange={(e) =>
                            e.target.value === "" ||
                            e.target.value === "0"
                              ? null
                              : updateQuantity(
                                  item._id,
                                  item.size,
                                  Number(e.target.value)
                                )
                          }
                        />
                      </div>

                      {/* Remove */}
                      <button
                        onClick={() =>
                          updateQuantity(item._id, item.size, 0)
                        }
                        className="flex items-center gap-2 text-sm text-red-500 hover:underline"
                      >
                        <img
                          src={assets.bin_icon}
                          className="w-4"
                          alt="Remove"
                        />
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* TOTAL */}
          <div className="flex justify-end my-20">
            <div className="w-full sm:w-[420px]">
              <CartTotal />
              <div className="w-full text-end">
                <button
                  onClick={() => navigate("/place-order")}
                  className="bg-black text-white text-sm my-8 px-8 py-3 rounded hover:bg-gray-800 transition"
                >
                  PROCEED TO CHECKOUT
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
