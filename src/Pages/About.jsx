import React from "react";
import { FaAward, FaShieldAlt, FaShippingFast, FaUsers } from "react-icons/fa";
import { Link } from "react-router";


const About = () => {
  const features = [
    {
      icon: <FaAward className="h-8 w-8 text-purple-500" />,
      title: "Premium Quality",
      description: "We curate only the finest tech products from trusted brands worldwide."
    },
    {
      icon: <FaShieldAlt className="h-8 w-8 text-blue-500" />,
      title: "Secure Shopping",
      description: "Your data and transactions are protected with enterprise-grade security."
    },
    {
      icon: <FaShippingFast className="h-8 w-8 text-green-500" />,
      title: "Fast Delivery",
      description: "Free shipping on orders over $50 with express delivery options available."
    },
    {
      icon: <FaUsers className="h-8 w-8 text-pink-500" />,
      title: "Expert Support",
      description: "Our tech specialists are here to help you find the perfect products."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 w-full  px-4 md:px-16 text-white pt-16">

      {/* Main Content */}
      <main className="container mx-auto px-4 py-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            About Shoppie
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto text-lg">
            Founded in 2020, Shoppie has become the premier destination for luxury tech products.
            We believe technology should enhance your lifestyle while reflecting your personal style.
          </p>
        </div>

        {/* Our Story & Mission */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6">
            <h2 className="text-3xl font-bold">Our Story</h2>
            <p className="text-gray-400">
              What started as a passion project has grown into a trusted marketplace for discerning
              tech enthusiasts. We partner directly with manufacturers to bring you the latest
              innovations at competitive prices.
            </p>
            <p className="text-gray-400">
              Every product in our catalog is hand-picked by our team of experts who understand
              the balance between cutting-edge technology and timeless design.
            </p>
          </div>
          <div className="bg-gray-900 p-8 rounded-2xl shadow-lg">
            <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
            <p className="text-gray-400">
              To democratize access to premium technology while maintaining the highest standards
              of quality, service, and customer satisfaction. We're not just selling products –
              we're crafting experiences.
            </p>
          </div>
        </div>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gray-900 p-6 rounded-2xl text-center shadow-md hover:shadow-purple-500 transition duration-300"
            >
              <div className="flex justify-center mb-4">{feature.icon}</div>
              <h4 className="text-lg font-semibold mb-2">{feature.title}</h4>
              <p className="text-gray-400 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default About;
