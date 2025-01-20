import React from 'react';

const ServicesSlider = () => {
  const services = [
    "Digital Media PR", "Pre-Post Production", "Web Designing",
    "App Development", "OTT TV Platform", "Event & Celebrity Management"
  ];

  return (
    <section id="services" className="py-16 px-8 bg-gray-100">
      <h2 className="text-3xl font-bold text-center">Our Services at Zoomster Hub</h2>
      <div className="mt-8 flex justify-center gap-6 overflow-x-auto">
        {services.map((service, index) => (
          <div key={index} className="bg-white shadow-lg p-6 rounded-lg min-w-[200px] text-center">
            <h3 className="font-semibold">{service}</h3>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesSlider;

