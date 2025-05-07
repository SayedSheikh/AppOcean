import React from "react";
import { FaStore, FaMobileAlt, FaShieldAlt } from "react-icons/fa";

const AboutUs = () => {
  return (
    <div className="min-h-[calc(100vh-115px)] max-w-[1200px] w-11/12 mx-auto py-10 space-y-8">
      <title>AppOcean | AbouUs</title>

      <h1 className="text-4xl font-bold text-center">About Our App Store</h1>
      <p className="text-lg text-gray-300 text-center">
        Welcome to our app store — your gateway to discovering and installing
        top-rated mobile apps with ease. Whether you're a gamer, a productivity
        enthusiast, or just looking for something fun, we've got something for
        you.
      </p>

      <div className="grid md:grid-cols-3 gap-6 ">
        <div className="bg-[#39455f6d] p-6 rounded-xl text-center shadow-primary shadow-sm">
          <FaStore className="text-4xl mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Curated Apps</h2>
          <p className="text-gray-400">
            We feature handpicked apps across various categories, reviewed for
            performance, safety, and user satisfaction.
          </p>
        </div>

        <div className="bg-[#39455f6d] p-6 rounded-xl text-center shadow-primary shadow-sm">
          <FaMobileAlt className="text-4xl mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">User Friendly</h2>
          <p className="text-gray-400">
            Our clean and responsive design ensures a seamless browsing
            experience across all devices.
          </p>
        </div>

        <div className="bg-[#39455f6d] p-6 rounded-xl text-center shadow-primary shadow-sm">
          <FaShieldAlt className="text-4xl mx-auto mb-4 text-primary" />
          <h2 className="text-xl font-semibold mb-2">Trusted Reviews</h2>
          <p className="text-gray-400">
            Read and write honest reviews to help the community make better
            choices. We value your feedback.
          </p>
        </div>
      </div>

      <div className="text-center pt-8">
        <p className="text-gray-400">
          Built with ❤️ using React, Tailwind, React-router and powered by your
          feedback.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
