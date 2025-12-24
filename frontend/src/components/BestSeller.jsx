import { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";
import { useNavigate } from "react-router-dom";

const BestSeller = () => {
  const { products } = useContext(ShopContext);
  const [bestSeller, setBestSeller] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (!products || products.length === 0) return;

    // 1️⃣ Prefer explicit bestseller flag
    let filtered = products.filter((item) => item.bestseller === true);

    // 2️⃣ Fallback: if no bestseller flag exists
    if (filtered.length === 0) {
      filtered = [...products].sort(
        (a, b) =>
          (b.numReviews || 0) - (a.numReviews || 0) ||
          (b.rating || 0) - (a.rating || 0)
      );
    }

    setBestSeller(filtered.slice(0, 5));
  }, [products]);

  return (
    <section className="my-14">
      {/* Heading */}
      <div className="text-center py-8">
        <Title text1={"BEST"} text2={"SELLERS"} />

        <p className="w-11/12 sm:w-3/4 mx-auto mt-3 text-xs sm:text-sm md:text-base text-gray-600">
          Customer favorites designed with premium materials, reliable comfort,
          and proven style.
        </p>
      </div>

      {/* Products */}
      {bestSeller.length === 0 ? (
        <p className="text-center text-sm text-gray-500">
          No best sellers available yet
        </p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
          {bestSeller.map((item) => (
            <ProductItem
              key={item._id}
              id={item._id}
              name={item.name}
              image={item.image}
              price={item.price}
            />
          ))}
        </div>
      )}

      {/* CTA */}
      <div className="flex justify-center mt-10">
        <button
          onClick={() => navigate("/collection?sort=bestseller")}
          className="border border-gray-800 px-8 py-2 text-sm hover:bg-black hover:text-white transition"
        >
          View All Best Sellers
        </button>
      </div>
    </section>
  );
};

export default BestSeller;
