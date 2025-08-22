import React, { useState } from "react";
import CategoryButtons from "../Components/CategoryButtons";
import Headphones from "./Headphones";

// Dummy product data (replace with your actual products)
const productsData = {
  "All Products": [
    { id: 1, name: "Sony WH-1000XM5", category: "Headphones" },
    { id: 2, name: "Apple Watch Ultra", category: "Smart Watches" },
    { id: 3, name: "MacBook Pro M2", category: "Laptops" },
    { id: 4, name: "JBL BoomBox 3", category: "Speakers" },
    { id: 5, name: "USB-C Charger", category: "Accessories" },
  ],
  Headphones: [
    { id: 1, name: "Sony WH-1000XM5" },
    { id: 2, name: "Bose 700" },
    { id: 3, name: "AirPods Max" },
  ],
  "Smart Watches": [
    { id: 4, name: "Apple Watch Ultra" },
    { id: 5, name: "Samsung Galaxy Watch 6" },
  ],
  Laptops: [
    { id: 6, name: "MacBook Pro M2" },
    { id: 7, name: "Dell XPS 15" },
  ],
  Speakers: [
    { id: 8, name: "JBL BoomBox 3" },
    { id: 9, name: "Sony SRS-XG500" },
  ],
  Accessories: [
    { id: 10, name: "USB-C Charger" },
    { id: 11, name: "Wireless Mouse" },
  ],
};

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");

  return (
    <div className="bg-gray-950 pt-20 md:pt-32 w-full min-h-screen px-4 md:pr-16 md:pl-16 font-bold">
      {/* Headings */}
      <div className="min-w-screen flex items-center justify-center flex-col pr-4 md:pr-0">
        <h1 className="text-3xl mb-5 md:text-5xl md:text-semibold bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Products
        </h1>
        <p className="text-gray-300 text-xl text-center font-light font-sans">
          Discover our carefully curated selection of premium tech products
          designed
        </p>
        <p className="text-gray-300 text-xl text-center font-light font-sans">
          to enhance your lifestyle
        </p>
      </div>

      {/* Category Buttons */}
      <CategoryButtons activeCategory={activeCategory} setActiveCategory={setActiveCategory} />

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-8">
        {productsData[activeCategory]?.map((product) => (
          <div
            key={product.id}
            className="bg-gray-800 text-white p-5 rounded-xl shadow-md hover:shadow-purple-400 transition-transform duration-300 transform hover:scale-105"
          >
            <h2 className="text-xl font-semibold">{product.name}</h2>
            <p className="text-gray-400">{product.category || activeCategory}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Product;
