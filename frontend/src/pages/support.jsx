import { Link } from "react-router-dom";

const Support = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900">
            Help & Support
          </h1>
          <p className="text-gray-600 mt-2">
            We’re here to help you with orders, shipping, returns, and more.
          </p>
        </div>

        {/* Quick Actions */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          <SupportCard
            title="Track Order"
            description="Check the status of your order"
            link="/track-order"
          />
          <SupportCard
            title="Returns & Refunds"
            description="Learn about easy returns"
            link="/returns"
          />
          <SupportCard
            title="Shipping Info"
            description="Delivery timelines & locations"
            link="/shipping"
          />
          <SupportCard
            title="Account Help"
            description="Login, signup & security"
            link="/account-help"
          />
        </div>

        {/* Contact Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 bg-white rounded-xl shadow-sm p-8">
          
          {/* FAQs */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>

            <ul className="space-y-3 text-gray-700 text-sm">
              <li>• How long does delivery take?</li>
              <li>• Can I cancel my order?</li>
              <li>• When will I get my refund?</li>
              <li>• Is Cash on Delivery available?</li>
            </ul>

            <Link
              to="/faqs"
              className="inline-block mt-4 text-sm font-medium text-gray-900 hover:underline"
            >
              View all FAQs →
            </Link>
          </div>

          {/* Contact Form */}
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">
              Contact Support
            </h2>

            <form className="space-y-4">
              <input
                type="email"
                placeholder="Your email"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <select
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              >
                <option>Order Issue</option>
                <option>Payment Issue</option>
                <option>Return / Refund</option>
                <option>Other</option>
              </select>

              <textarea
                rows="4"
                placeholder="Describe your issue"
                className="w-full border border-gray-300 rounded-md px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-gray-900"
              />

              <button
                type="submit"
                className="bg-gray-900 text-white px-6 py-2 rounded-md text-sm hover:bg-gray-800 transition"
              >
                Submit Request
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
  );
};

const SupportCard = ({ title, description, link }) => (
  <Link
    to={link}
    className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition"
  >
    <h3 className="text-lg font-semibold text-gray-900">
      {title}
    </h3>
    <p className="text-sm text-gray-600 mt-2">
      {description}
    </p>
  </Link>
);

export default Support;
