import React from "react";

const Product = () => {
  return (
    <div className="bg-gray-950 pt-20 md:pt-32 w-full min-h-screen px-4 md:pr-16 md:pl-16 font-bold">
      <div className="min-w-screen flex items-center justify-center flex-col pr-4 md:pr-0">
        <h1 className="text-3xl mb-5 md:text-5xl md:text-semibold bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Products
        </h1>
        <p className="text-gray-300 text-xl text-center font-light font-sans">
          Discover our carefully curated selection of premium tech products
          designed
        </p>{" "}
        <p className="text-gray-300 text-xl text-center font-light font-sans">
          to enhance your lifestyle
        </p>
      </div>
    </div>
  );
};

export default Product;
