import React from "react";

const steps = [
  {
    title: "Contact Us",
    description:
      "Reach out via WhatsApp, phone, or email to inquire about the car, its availability, and final price.\n(Phone: +971527463341 | Email: info@tajcarsllc.com)",
    emoji: "📞",
  },
  {
    title: "Confirm Vehicle & Deal",
    description:
      "We’ll share full vehicle details, photos, and documents. Once confirmed, we’ll finalize the deal terms including destination, modifications (if any), and payment.",
    emoji: "✅",
  },
  {
    title: "Make Payment",
    description:
      "Pay securely through bank transfer. We provide official invoice and payment acknowledgment.",
    emoji: "💳",
  },
  {
    title: "Vehicle Preparation",
    description:
      "Your vehicle is inspected, cleaned, and any requested modifications (e.g., left-hand conversion, branding, accessories) are made.",
    emoji: "🧰",
  },
  {
    title: "Shipping & Documentation",
    description:
      "We handle complete export paperwork, customs clearance, and shipment to your destination port or doorstep.",
    emoji: "🚢",
  },
  {
    title: "Receive Your Vehicle",
    description:
      "Get regular shipping updates. Receive your car with all documents at your port/country as promised.",
    emoji: "🚗",
  },
];

const StepsToBuy = () => {
  return (
    <section className="py-12 px-4 bg-gray-300 text-gray-200">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-6">
          How to Buy a Car from Taj Cars LLC
        </h1>
        <p className="text-gray-600 mb-8">
          Follow these simple steps to purchase your dream car with ease.
        </p>
      </div>
      <div className="max-w-7xl mx-auto text-center">
      
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-gray-200 p-6 rounded-2xl border shadow hover:shadow-lg transition"
            >
              <div className="text-5xl mb-4">{step.emoji}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
              <p className="text-sm text-gray-600 whitespace-pre-line">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StepsToBuy;
