import React, { useState } from "react";

const faqs = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept credit/debit cards, PayPal, and UPI payments.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Shipping fees may vary based on location.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking link via email.",
  },
  {
    question: "What is your return policy?",
    answer:
      "You can return the product within 30 days of delivery for a full refund.",
  },
  {
    question: "Are your products organic and certified?",
    answer:
      "Yes, our products are 100% organic and certified by recognized organizations.",
  },
];

const ProductFAQs = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 max-w-2xl">
        <h2 className="text-3xl font-bold text-center mb-8 text-green-800">
          Product FAQs
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white border border-gray-300 rounded-lg shadow-md"
            >
              <button
                className="w-full text-left p-4 font-semibold flex justify-between items-center text-gray-800"
                onClick={() => toggleFAQ(index)}
              >
                {faq.question}
                <span>{openIndex === index ? "−" : "+"}</span>
              </button>
              {openIndex === index && (
                <div className="p-4 border-t text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductFAQs;
