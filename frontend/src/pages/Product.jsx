import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";
import toast from "react-hot-toast";


const Product = () => {
  const { productId } = useParams();
  const { products, currency, addToCart } = useContext(ShopContext);

  const [productData, setProductData] = useState(null);
  const [image, setImage] = useState("");
  const [size, setSize] = useState("");

  // Tabs & Reviews
  const [activeTab, setActiveTab] = useState("description");
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState("");
  const [reviews, setReviews] = useState([
    {
      name: "Rahul Sharma",
      rating: 4,
      comment: "Very good quality, fitting is perfect.",
    },
    {
      name: "Aman Verma",
      rating: 3,
      comment: "Product is good but delivery was late.",
    },
  ]);

  useEffect(() => {
    const product = products.find((item) => item._id === productId);
    if (product) {
      setProductData(product);
      setImage(product.image[0]);
    }
  }, [productId, products]);

  const renderStars = (count) => {
    return [...Array(5)].map((_, index) => (
      <img
        key={index}
        src={index < count ? assets.star_icon : assets.star_dull_icon}
        className="w-3"
        alt=""
      />
    ));
  };

  const submitReview = () => {
    if (!rating || !reviewText) {
      alert("Please add rating and review");
      return;
    }

    setReviews([
      ...reviews,
      {
        name: "You",
        rating,
        comment: reviewText,
      },
    ]);

    setRating(0);
    setReviewText("");
  };

  if (!productData) return <div className="opacity-0"></div>;

  return (
    <div className="border-t-2 pt-10 transition-opacity duration-500 opacity-100">
      {/* ---------- Product Data ---------- */}
      <div className="flex gap-12 flex-col sm:flex-row">

        {/* Images */}
        <div className="flex-1 flex flex-col-reverse gap-3 sm:flex-row">
          <div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%]">
            {productData.image.map((item, index) => (
              <img
                key={index}
                src={item}
                onClick={() => setImage(item)}
                className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
                alt=""
              />
            ))}
          </div>

          <div className="w-full sm:w-[80%]">
            <img src={image} className="w-full h-auto" alt="" />
          </div>
        </div>

        {/* Info */}
        <div className="flex-1">
          <h1 className="font-medium text-2xl mt-2">
            {productData.name}
          </h1>

          <div className="flex items-center gap-1 mt-2">
            {renderStars(4)}
            <p className="pl-2">({reviews.length})</p>
          </div>

          <p className="mt-5 text-3xl font-medium">
            {currency}
            {productData.price}
          </p>

          <p className="mt-5 text-gray-500 md:w-4/5">
            {productData.description}
          </p>

          {/* Sizes */}
          <div className="flex flex-col gap-4 my-8">
            <p>Select Size</p>
            <div className="flex gap-2">
              {productData.sizes.map((item, index) => (
                <button
                  key={index}
                  onClick={() => setSize(item)}
                  className={`border py-2 px-4 bg-gray-100 ${
                    item === size ? "border-orange-500" : ""
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          <button
            onClick={() => {
              if (!size) {
                toast.error("Please select a size");
                return;
              }

              addToCart(productData._id, size);
              toast.success("Added to cart");
            }}
            className="bg-black text-white px-8 py-3 text-sm hover:bg-gray-800 transition"
          >
            ADD TO CART
          </button>


          <hr className="mt-8 sm:w-4/5" />

          <div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
            <p>100% Original product.</p>
            <p>Cash on delivery available.</p>
            <p>Easy return within 7 days.</p>
          </div>
        </div>
      </div>

      {/* ---------- Description & Reviews ---------- */}
      <div className="mt-20">
        <div className="flex border-b">
          <button
            onClick={() => setActiveTab("description")}
            className={`px-5 py-3 text-sm border-r ${
              activeTab === "description"
                ? "font-semibold border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Description
          </button>

          <button
            onClick={() => setActiveTab("reviews")}
            className={`px-5 py-3 text-sm ${
              activeTab === "reviews"
                ? "font-semibold border-b-2 border-black"
                : "text-gray-500"
            }`}
          >
            Reviews ({reviews.length})
          </button>
        </div>

        <div className="border px-6 py-6 text-sm text-gray-600">
          {activeTab === "description" && (
            <div className="flex flex-col gap-4">
              <p>{productData.description}</p>
              <p>
                Premium material, durable stitching, and comfortable fit.
              </p>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className="flex flex-col gap-8">
              {reviews.map((review, index) => (
                <div key={index} className="border-b pb-4">
                  <p className="font-medium text-gray-800">
                    {review.name}
                  </p>
                  <div className="flex gap-1 my-1">
                    {renderStars(review.rating)}
                  </div>
                  <p>{review.comment}</p>
                </div>
              ))}

              {/* Write Review */}
              <div>
                <h3 className="font-semibold mb-3">
                  Write a Review
                </h3>

                <div className="flex gap-2 mb-3">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <img
                      key={star}
                      src={
                        star <= rating
                          ? assets.star_icon
                          : assets.star_dull_icon
                      }
                      className="w-5 cursor-pointer"
                      onClick={() => setRating(star)}
                      alt=""
                    />
                  ))}
                </div>

                <textarea
                  value={reviewText}
                  onChange={(e) => setReviewText(e.target.value)}
                  className="w-full border px-4 py-2 text-sm rounded mb-3"
                  placeholder="Write your review..."
                />

                <button
                  onClick={submitReview}
                  className="bg-black text-white px-6 py-2 text-sm"
                >
                  Submit Review
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* ---------- Related Products ---------- */}
      <RelatedProducts
        category={productData.category}
        subCategory={productData.subCategory}
      />
    </div>
  );
};

export default Product;
