import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";
import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useWishlist } from "../context/WishlistContext";

const ProductItem = ({ id, image, name, price }) => {
  const { currency } = useContext(ShopContext);
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(id);

  const toggleWishlist = (e) => {
    e.preventDefault(); // 🔴 stops Link navigation
    e.stopPropagation();

    if (inWishlist) {
      removeFromWishlist(id);
    } else {
      addToWishlist({
        _id: id,
        name,
        price,
        images: [{ url: image[0] }],
      });
    }
  };

  return (
    <Link
      onClick={() => scrollTo(0, 0)}
      className="text-gray-700 cursor-pointer relative"
      to={`/product/${id}`}
    >
      {/* Image */}
      <div className="overflow-hidden relative">
        <img
          className="hover:scale-110 transition ease-in-out"
          src={image[0]}
          alt={name}
        />

        {/* Wishlist Button */}
        <button
          onClick={toggleWishlist}
          className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition"
        >
          {inWishlist ? (
            <HiHeart className="w-5 h-5 text-red-500" />
          ) : (
            <HiOutlineHeart className="w-5 h-5 text-gray-800" />
          )}
        </button>
      </div>

      {/* Product Info */}
      <p className="pt-3 pb-1 text-sm">{name}</p>
      <p className="text-sm font-medium">
        {currency}
        {price}
      </p>
    </Link>
  );
};

export default ProductItem;
