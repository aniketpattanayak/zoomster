import React from 'react';

const Features = () => {
  const features = [
    { title: "Designed for Creators", description: "Tailored for business owners, content creators, and innovators." },
    { title: "User-Friendly Design", description: "Our platform is incredibly intuitive with no technical skills needed." },
    { title: "Affordable Pricing", description: "Competitive rates with no hidden fees." },
    { title: "24/7 Support", description: "Dedicated support team always available to assist you." },
  ];

  return (
    <section className="py-16 px-8 bg-white">
      <h2 className="text-3xl font-bold text-center">Packed with Thousands of Features</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-8">
        {features.map((feature, index) => (
          <div key={index} className="p-6 border rounded-lg">
            <h3 className="font-semibold">{feature.title}</h3>
            <p className="text-gray-600 mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
