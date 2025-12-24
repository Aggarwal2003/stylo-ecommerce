import React, { useState } from "react";

const faqs = [
  {
    question: "How long does delivery take?",
    answer:
      "Orders are delivered within 2–5 business days in India.",
  },
  {
    question: "Is Cash on Delivery available?",
    answer:
      "Yes, Cash on Delivery is available on most products.",
  },
  {
    question: "How do I return a product?",
    answer:
      "You can initiate a return from My Orders within 7 days.",
  },
  {
    question: "When will I receive my refund?",
    answer:
      "Refunds are processed within 5–7 business days after approval.",
  },
];

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div className="min-h-screen bg-gray-50 px-4 py-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-sm">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Frequently Asked Questions
        </h1>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-md"
            >
              <button
                onClick={() =>
                  setOpenIndex(openIndex === index ? null : index)
                }
                className="w-full text-left px-4 py-3 text-sm font-medium text-gray-900 flex justify-between"
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-4 pb-4 text-sm text-gray-600">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default FAQs;
