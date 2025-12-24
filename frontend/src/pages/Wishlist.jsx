import { Link } from "react-router-dom";
import { useWishlist } from "../context/WishlistContext";

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useWishlist();

  if (wishlist.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50">
        <h2 className="text-2xl font-semibold text-gray-900">
          Your wishlist is empty
        </h2>
        <Link
          to="/"
          className="mt-4 text-sm text-gray-700 underline"
        >
          Continue shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-10">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">
          My Wishlist
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {wishlist.map((product) => (
            <div
              key={product._id}
              className="bg-white rounded-xl shadow-sm p-4"
            >
              <img
                src={product.images?.[0]?.url}
                alt={product.name}
                className="w-full h-56 object-cover rounded-md"
              />

              <h3 className="mt-3 font-semibold text-gray-900">
                {product.name}
              </h3>

              <p className="text-sm text-gray-600">
                ₹{product.price}
              </p>

              <div className="flex justify-between mt-4 text-sm">
                <Link
                  to={`/product/${product._id}`}
                  className="underline"
                >
                  View
                </Link>

                <button
                  onClick={() => removeFromWishlist(product._id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
