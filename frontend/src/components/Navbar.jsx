import { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { HiOutlineHeart } from "react-icons/hi";
import { useWishlist } from "../context/WishlistContext";

const Navbar = () => {
  const [visible, setVisible] = useState(false);

  const {
    setShowSearch,
    getCartCount,
    navigate,
    token,
    setToken,
    setCartItems,
  } = useContext(ShopContext);

  const { wishlist } = useWishlist();

  const logout = () => {
    navigate("/login");
    localStorage.removeItem("token");
    setToken("");
    setCartItems({});
  };

  return (
    <div className="flex items-center justify-between py-5 font-medium">
      {/* Logo */}
      <Link to="/">
        <img src={assets.logo} className="w-36" alt="" />
      </Link>

      {/* Desktop Links */}
      <ul className="hidden sm:flex gap-5 text-sm text-gray-700">
        {["/", "/collection", "/about", "/contact"].map((path, i) => (
          <NavLink
            key={i}
            to={path}
            className="flex flex-col items-center gap-1"
          >
            <p>
              {path === "/"
                ? "HOME"
                : path.replace("/", "").toUpperCase()}
            </p>
            <hr className="w-2/4 border-none h-[1.5px] bg-gray-700 hidden" />
          </NavLink>
        ))}
      </ul>

      {/* Right Icons */}
      <div className="flex items-center gap-6">
        {/* Search */}
        <img
          onClick={() => {
            setShowSearch(true);
            navigate("/collection");
          }}
          src={assets.search_icon}
          className="w-5 cursor-pointer"
          alt=""
        />

        {/* Profile Dropdown */}
        <div className="relative group">
          <img
            onClick={() => (token ? null : navigate("/login"))}
            className="w-5 cursor-pointer"
            src={assets.profile_icon}
            alt=""
          />

          {token && (
            <div className="absolute right-0 top-6 hidden group-hover:block z-50">
              <div className="flex flex-col w-36 bg-white border border-gray-200 rounded-md shadow-md py-2">
                <p
                  onClick={() => navigate("/myProfile")}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  My Profile
                </p>
                <p
                  onClick={() => navigate("/orders")}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  Orders
                </p>
                          {/* ✅ Admin Login (external site) */}
                <p
                  onClick={() =>
                    window.open(
                      "https://stylo-clothify-admin.vercel.app",
                      "_blank"
                    )
                  }
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >Admin</p>
                <p
                  onClick={logout}
                  className="px-4 py-2 text-sm cursor-pointer hover:bg-gray-100"
                >
                  Logout
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Wishlist */}
        <Link to="/wishlist" className="relative">
          <HiOutlineHeart className="w-5 h-5 cursor-pointer" />
          {wishlist.length > 0 && (
            <p className="absolute right-[-6px] bottom-[-6px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
              {wishlist.length}
            </p>
          )}
        </Link>

        {/* Cart */}
        <Link to="/cart" className="relative">
          <img src={assets.cart_icon} className="w-5" alt="" />
          <p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
            {getCartCount()}
          </p>
        </Link>

        {/* Mobile Menu */}
        <img
          onClick={() => setVisible(true)}
          src={assets.menu_icon}
          className="w-5 cursor-pointer sm:hidden"
          alt=""
        />
      </div>

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 bottom-0 bg-white z-50 transition-all sm:hidden ${
            visible ? "w-full" : "w-0"
        }`}
        >

        <div className="flex flex-col text-gray-600">
          <div
            onClick={() => setVisible(false)}
            className="flex items-center gap-4 p-3 cursor-pointer"
          >
            <img
              className="h-4 rotate-180"
              src={assets.dropdown_icon}
              alt=""
            />
            <p>Back</p>
          </div>

          {["/", "/collection", "/about", "/contact", "/wishlist"].map(
            (path, i) => (
              <NavLink
                key={i}
                onClick={() => setVisible(false)}
                className="py-2 pl-6 border"
                to={path}
              >
                {path === "/"
                  ? "HOME"
                  : path.replace("/", "").toUpperCase()}
              </NavLink>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
