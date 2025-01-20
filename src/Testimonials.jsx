import React from "react";
const Testimonials = () => (
  <section className="bg-white p-10">
    <h2 className="text-2xl font-bold text-center">What Users Say About Zoomster Hub</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
      {["Intuitive design and features!", "Essential tool for business!", "Seamless integration and support!"].map((review, index) => (
        <div key={index} className="bg-gray-200 p-4 rounded shadow">
          {review}
        </div>
      ))}
    </div>
  </section>
);
export default Testimonials;