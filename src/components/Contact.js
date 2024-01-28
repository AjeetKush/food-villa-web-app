import React, { useState } from "react";
import ContactImage from "../images/ContactImage.png";

const Contact = () => {
  const [message, setMessage] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-center py-16 px-8 bg-gray-100">
      <div className="md:w-1/2 mr-6">
        <img
          src={ContactImage}
          alt="Contact Us"
          className="w-full h-auto rounded-lg shadow-md"
        />
      </div>
      <div className="md:w-1/2">
        <div className="text-center md:text-left mb-8">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
            Contact us
          </h1>
        </div>
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-4">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            />
          </div>
          <div className="mb-6">
            <textarea
              placeholder="Type your Message here..."
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:border-indigo-500"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-500 text-white p-4 rounded-md transition duration-300 hover:bg-indigo-600"
          >
            Submit
          </button>
          {message && (
            <p className="mt-4 text-green-600">
              Thanks for contacting Food Villa, we will reply ASAP.
            </p>
          )}
        </form>
      </div>
    </div>
  );
};

export default Contact;
