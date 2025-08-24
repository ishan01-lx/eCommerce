import React, { useEffect, useState } from "react";
import { FaStar } from "react-icons/fa";
import hero from "../images/hero.jpg";
import { FaArrowRightLong } from "react-icons/fa6";
import Product from "./Product";
import { Link } from "react-router";

// Counter component for animation
const Counter = ({ to, duration = 1200 }) => {
  const [count, setCount] = useState(0);
  useEffect(() => {
    let start = 0;
    const end = parseInt(to);
    if (start === end) return;
    let incrementTime = Math.abs(Math.floor(duration / end));
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
    return () => clearInterval(timer);
  }, [to, duration]);
  return <span>{count}{typeof to === "string" && to.match(/[^\d]/g) ? to.replace(/\d/g, "") : ""}</span>;
};

const Home = () => {
  return (
    <div className="overflow-hidden">
      <div className="relative min-h-screen flex flex-col md:flex-row items-center justify-between bg-gradient-to-br from-gray-950 via-gray-900 to-gray-900 px-4 md:px-16 pt-36 pb-12 overflow-hidden">
      {/* Left Content */}
      <div className="w-full md:w-1/2 space-y-6 z-10">
        <div className="inline-flex items-center gap-2 bg-white/10 border border-gray-700 px-4 py-2 rounded-full shadow-lg backdrop-blur-md">
          <FaStar className="text-gray-700" />
          <span className="text-gray-200 font-medium">
            Premium Audio Collection
          </span>
        </div>
        <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight mt-4">
          Elevate Your
          <span className="block bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-400 bg-clip-text text-transparent">
            Audio Experience
          </span>
        </h1>
        <p className="text-xl md:text-xl text-gray-400 max-w-lg">
          Discover our curated collection of premium headphones, speakers, and
          audio accessories designed for the modern audiophile.
        </p>
        {/* CTA Buttons */}
        <div className="block md:flex gap-4 mt-8">
          <button
            className="bg-gradient-to-r from-indigo-50 to-purple-500 text-gray-900  w-full md:w-auto px-8 py-3 justify-center rounded-xl mb-4 md:mb-0 md:rounded-full font-semibold shadow-lg hover:bg-gradient-to-r hover:from-purple-700 hover:to-indigo-100 transition-colors duration-100 
          flex items-center gap-2"
          >
            Shop Collection
            <FaArrowRightLong />
          </button>
          <button className="border border-white/30 bg-gray-950 w-full md:w-auto text-white px-8 py-3 rounded-xl md:rounded-full font-semibold hover:bg-white/10 transition">
          <Link to="/login">Sign in</Link>
          </button>
        </div>

        {/* Animated Stats Section */}
        <div className="flex justify-center md:justify-start gap-10 mt-12 animate-fade-in-up">
          <div className="text-center">
            <div className="text-4xl font-extrabold text-gray-600">
              <Counter to={50} duration={1000} />K+
            </div>
            <div className="text-gray-400 text-lg mt-1">Happy Customers</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-gray-600">
              <Counter to={4.9} duration={1200} />
            </div>
            <div className="text-gray-400 text-lg mt-1">Average Rating</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-extrabold text-gray-600">
              <Counter to={1000} duration={1200} />+
            </div>
            <div className="text-gray-400 text-lg mt-1">Products</div>
          </div>
        </div>
      </div>

      {/* Hero Image with Floating Elements */}
      <div className="relative w-full md:w-[700px] h-[250px] md:h-[500px] flex items-center justify-center mt-12 md:mt-0 z-10">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/30 via-pink-400/20 to-amber-300/10 rounded-3xl blur-2xl "></div>
        {/* Hero Image */}
        <img
          src={hero}
          alt="Premium Wireless Headphones"
          className="relative z-10 w-full h-full object-cover rounded-3xl shadow-2xl hover:shadow-2xl hover:shadow-gray-600 transition-colors duration-1000 animate-float"
        />
      </div>
    </div>

    {/* product section */}

    <Product/>
    </div>

  );
};

export default Home;