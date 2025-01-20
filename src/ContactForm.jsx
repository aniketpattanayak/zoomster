import React from "react";
const ContactForm = () => (
  <section className="bg-gray-100 p-10">
    <h2 className="text-2xl font-bold text-center">Contact Us</h2>
    <form className="mt-8 max-w-lg mx-auto">
      <input
        type="text"
        placeholder="Your Name"
        className="block w-full p-2 mb-4 border rounded"
      />
      <input
        type="email"
        placeholder="Your Email"
        className="block w-full p-2 mb-4 border rounded"
      />
      <textarea
        placeholder="Your Message"
        className="block w-full p-2 mb-4 border rounded"
        rows="4"
      ></textarea>
      <button
        type="submit"
        className="block w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
      >
        Send Message
      </button>
    </form>
  </section>
);
export default ContactForm;