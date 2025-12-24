import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
  return (
    <div className="border-t">

      {/* ---------- PAGE HEADER ---------- */}
      <div className="text-center pt-10">
        <Title text1={"CONTACT"} text2={"US"} />
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          We’d love to hear from you. Reach out for support, inquiries, or
          collaboration opportunities.
        </p>
      </div>

      {/* ---------- CONTACT CONTENT ---------- */}
      <div className="my-16 flex flex-col md:flex-row items-center gap-16 max-w-6xl mx-auto px-4">
        
        {/* Image */}
        <img
          className="w-full md:max-w-[420px] rounded-lg shadow-sm"
          src={assets.contact_img}
          alt="Contact us"
        />

        {/* Details */}
        <div className="flex flex-col gap-8 text-sm sm:text-base text-gray-600">
          
          {/* Store Info */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Our Store
            </h3>
            <p>
              Rajiv Chowk, Connaught Place <br />
              New Delhi, India
            </p>
            <p className="mt-2">
              Phone: +91 1800 1200 1200 <br />
              Email: <span className="underline">admin@clothify.com</span>
            </p>
          </div>

          {/* Careers */}
          <div>
            <h3 className="font-semibold text-lg text-gray-800 mb-2">
              Careers at Clothify
            </h3>
            <p>
              Join a growing team that values creativity, quality, and customer
              experience. Explore exciting opportunities with us.
            </p>
          </div>

          {/* CTA */}
          <button className="w-fit border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition">
            Explore Careers
          </button>
        </div>
      </div>

      {/* ---------- NEWSLETTER ---------- */}
      <NewsletterBox />
    </div>
  );
};

export default Contact;
