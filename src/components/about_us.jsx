import React from "react";
import Logo from "../assets/logo.png";

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-white text-gray-900 px-6 py-10">
      {/* Header Section */}
      <header className="max-w-4xl mx-auto flex items-center space-x-4 mb-8">
        <img src={Logo} alt="Found It Logo" className="w-10 h-10" />
        <h1 className="text-2xl font-semibold">Found It</h1>
      </header>
      
      {/* Main Content Section */}
      <div className="max-w-4xl mx-auto bg-white shadow-md p-8 rounded-lg">
        <h2 className="text-3xl font-bold">Get started with Found It</h2>
        <p className="text-gray-700 mt-2">
          Found It is a dedicated platform for helping students recover lost belongings. Whether it’s 
          a misplaced ID card, a lost laptop, or even a forgotten notebook, our system connects people 
          who have lost their items with those who have found them.
        </p>
        <p className="text-gray-700 mt-2">
          Our mission is to create a trusted community where students can safely report lost and found 
          items, ensuring that no item is left unclaimed. Join us in making our campus a more connected 
          and responsible space.
        </p>
      </div>
      
      {/* Additional Information Section */}
      <div className="max-w-4xl mx-auto mt-10">
        <h3 className="text-xl font-semibold mb-3">Why Choose Found It?</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Fast & Reliable:</strong> Quick item recovery process.</li>
            <li><strong>Secure:</strong> Verified users ensure safety.</li>
            <li><strong>Easy to Use:</strong> Simple interface for everyone.</li>
            <li><strong>Community Driven:</strong> Helping students help each other.</li>
          </ul>
          <ul className="list-disc pl-5 space-y-2 text-gray-700">
            <li><strong>Real-Time Updates:</strong> Instant notifications on found items.</li>
            <li><strong>Location-Based Search:</strong> Easily find lost items in your area.</li>
            <li><strong>Identity Protection:</strong> Communicate anonymously until confirmation.</li>
            <li><strong>24/7 Accessibility:</strong> Report and search for items anytime, anywhere.</li>
          </ul>
        </div>
      </div>
      
      {/* Back to Home Button */}
      <div className="max-w-4xl mx-auto mt-8 text-center">
        <button className="bg-yellow-400 text-black px-6 py-2 rounded-lg font-medium hover:bg-yellow-500 transition duration-200">
          Back to Home
        </button>
      </div>
      
      {/* Footer */}
      <footer className="max-w-4xl mx-auto mt-12 text-center text-gray-600 text-sm">
        Created by the Found It team © 2025
      </footer>
    </div>
  );
};

export default AboutUs;
