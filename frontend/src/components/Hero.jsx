import { assets } from "../assets/assets";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section className="relative overflow-hidden rounded-2xl border border-gray-200 bg-gradient-to-br from-white to-gray-50">
      <div className="flex flex-col-reverse sm:flex-row items-center">

        {/* LEFT CONTENT */}
        <div className="w-full sm:w-1/2 px-6 sm:px-12 py-14">
          <div className="text-[#414141] space-y-6 max-w-md">

            {/* Tagline */}
            <div className="flex items-center gap-3">
              <span className="w-10 h-[2px] bg-gray-700" />
              <p className="text-sm font-medium tracking-widest uppercase">
                Bestsellers 2025
              </p>
            </div>

            {/* Main Heading */}
            <h1 className="prata-regular text-4xl md:text-5xl leading-tight">
              Upgrade Your <br />
              Everyday Style
            </h1>

            {/* Subheading */}
            <p className="text-gray-600 text-sm md:text-base leading-relaxed">
              Discover premium quality clothing designed for comfort,
              durability, and modern fashion.
            </p>

            {/* CTA Buttons */}
            <div className="flex items-center gap-4 pt-4">
              <button
                onClick={() => navigate("/collection")}
                className="bg-black text-white px-8 py-3 text-sm rounded-full hover:bg-gray-800 transition"
              >
                Shop Now
              </button>

              <button
                onClick={() => navigate("/collection")}
                className="text-sm font-medium text-gray-700 hover:underline"
              >
                Explore Collection →
              </button>
            </div>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="w-full sm:w-1/2 flex justify-center items-center py-10 sm:py-0">
          <img
            src={assets.hero_img}
            alt="Latest Fashion"
            className="w-[80%] max-w-md object-contain drop-shadow-lg"
          />
        </div>
      </div>

      {/* Decorative Blur */}
      <div className="absolute -top-20 -right-20 w-72 h-72 bg-gray-200 rounded-full blur-3xl opacity-40" />
    </section>
  );
};

export default Hero;
