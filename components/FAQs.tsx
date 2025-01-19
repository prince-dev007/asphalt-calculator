import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const faqs = [
    {
      question: "Can I use this calculator for a variety of asphalt projects?",
      answer:
        `Yes. This can be used for multiple projects ranging from small driveways and pavements to bigger commercial projects like roads and dams.`,
    },
    {
      question: "How can I calculate the cost of asphalt?",
      answer:
        `You simply need to input the price per unit of mass or volume as per your chosen measurements, in the calculator. After this, you’ll get your approximate project cost.`,
    },
    {
      question: "What is the required base thickness?",
      answer:
        "For many properties, a 3 base of asphalt on top of a 4 to 6 deep base of crushed gravel might be a reasonable alternative to using full-thickness asphalt. For parking lots, it should be an 8’’ crushed gravel base.",
    },
    {
      question: "How many types of Asphalt can I choose from?",
      answer: "You can choose asphalt from mainly 5 types of asphalt, including hot mix asphalt, warm mix asphalt, cold mix asphalt, porous asphalt, and asphalt concrete.",
    },
    {
      question: "Which units are appropriate for input measurements?",
      answer: "There are suitable units for length, area, depth, and density in the calculator for diverse project requirements.",
    },
  ];

  const toggleAccordion = (index: any) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="mt-5">
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-extrabold text-center mb-6">
          Frequently Asked Questions
        </h2>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-700 rounded-lg">
              <button
                className="w-full text-left px-4 py-3 bg-gray-800 font-semibold flex justify-between items-center"
                onClick={() => toggleAccordion(index)}
              >
                <span>{faq.question}</span>
                <span className="text-yellow-400">
                  {activeIndex === index ? "-" : "+"}
                </span>
              </button>
              {activeIndex === index && (
                <div className="px-4 py-3 bg-gray-700 text-gray-300">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQAccordion;
