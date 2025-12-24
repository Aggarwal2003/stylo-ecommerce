import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const LatestCollection = () => {
  const { products } = useContext(ShopContext);
  const [latestProducts, setLatestProducts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (products && products.length > 0) {
      // If products have createdAt → sort by newest
      const sorted = [...products].sort(
        (a, b) => new Date(b.createdAt || 0) - new Date(a.createdAt || 0)
      );

      setLatestProducts(sorted.slice(0, 10));
    }
  }, [products]);

  return (
    <section className="my-14">
      {/* Heading */}
      <div className="text-center py-8">
        <Title text1={"LATEST"} text2={"COLLECTIONS"} />

        <p className="w-11/12 sm:w-3/4 mx-auto mt-3 text-xs sm:text-sm md:text-base text-gray-600">
          Our latest collection blends modern design, premium comfort, and
          everyday versatility for effortless style.
        </p>
      </div>

      {/* Products */}
      {latestProducts.length === 0 ? (
        <p className="text-center text-sm text-gray-500">
          No products available
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {latestProducts.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              image={item.image}
              name={item.name}
              price={item.price}
            />
          ))}
        </div>
      )}

      {/* View All */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/collection")}
          className="border border-gray-800 px-8 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          View All Products
        </button>
      </div>
    </section>
  );
};

export default LatestCollection;
