import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
  return (
    <div className="border-t">

      {/* ---------- PAGE HEADER ---------- */}
      <div className="text-center pt-10">
        <Title text1={"ABOUT"} text2={"US"} />
        <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
          Crafting quality fashion with purpose, comfort, and trust at the core.
        </p>
      </div>

      {/* ---------- ABOUT CONTENT ---------- */}
      <div className="my-16 flex flex-col md:flex-row gap-16 items-center max-w-6xl mx-auto px-4">
        <img
          className="w-full md:max-w-[420px] rounded-lg shadow-sm"
          src={assets.about_img}
          alt="About us"
        />

        <div className="flex flex-col gap-6 md:w-2/4 text-gray-600 text-sm sm:text-base leading-relaxed">
          <p>
            We are a modern fashion and lifestyle brand built with one clear
            purpose — to make quality clothing accessible, stylish, and reliable
            for everyday wear. Every product is thoughtfully curated with
            attention to fabric, comfort, and detail.
          </p>

          <p>
            From everyday essentials to standout pieces, we blend modern trends
            with practical design to deliver a smooth, dependable shopping
            experience. Our focus is simple: honest pricing, consistent quality,
            and long-term customer trust.
          </p>

          <div>
            <h3 className="font-semibold text-gray-800 mb-2">
              Our Mission
            </h3>
            <p>
              To create well-designed, comfortable, and durable fashion that
              fits seamlessly into daily life — without unnecessary complexity
              or inflated pricing.
            </p>
          </div>
        </div>
      </div>

      {/* ---------- WHY CHOOSE US ---------- */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <Title text1={"WHY"} text2={"CHOOSE US"} />
            <p className="mt-3 text-sm sm:text-base text-gray-600 max-w-xl mx-auto">
              What sets us apart and keeps our customers coming back.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Card 1 */}
            <div className="bg-white border rounded-xl p-8 text-sm text-gray-600 flex flex-col gap-4">
              <h4 className="font-semibold text-gray-800">
                Quality Assurance
              </h4>
              <p>
                Every product goes through careful selection and quality checks
                to ensure durability, comfort, and long-lasting performance.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white border rounded-xl p-8 text-sm text-gray-600 flex flex-col gap-4">
              <h4 className="font-semibold text-gray-800">
                Seamless Experience
              </h4>
              <p>
                From browsing to checkout, we focus on a clean, intuitive, and
                hassle-free shopping experience across all devices.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white border rounded-xl p-8 text-sm text-gray-600 flex flex-col gap-4">
              <h4 className="font-semibold text-gray-800">
                Customer-First Support
              </h4>
              <p>
                Our support team is always ready to help, ensuring clarity,
                transparency, and satisfaction at every step.
              </p>
            </div>

          </div>
        </div>
      </div>

      {/* ---------- NEWSLETTER ---------- */}
      <NewsletterBox />
    </div>
  );
};

export default About;
