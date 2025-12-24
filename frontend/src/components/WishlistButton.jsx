import { HiOutlineHeart, HiHeart } from "react-icons/hi";
import { useWishlist } from "../context/WishlistContext";

const WishlistButton = ({ product }) => {
  const { addToWishlist, removeFromWishlist, isInWishlist } = useWishlist();

  const inWishlist = isInWishlist(product._id);

  const toggleWishlist = () => {
    if (inWishlist) {
      removeFromWishlist(product._id);
    } else {
      addToWishlist(product);
    }
  };

  return (
    <button
      onClick={toggleWishlist}
      className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-105 transition"
      aria-label="Add to wishlist"
    >
      {inWishlist ? (
        <HiHeart className="text-red-500 w-5 h-5" />
      ) : (
        <HiOutlineHeart className="w-5 h-5 text-gray-800" />
      )}
    </button>
  );
};

export default WishlistButton;
