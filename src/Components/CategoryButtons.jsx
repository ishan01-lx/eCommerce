import React from "react";

const CategoryButtons = ({ activeCategory, setActiveCategory }) => {
  const categories = [
    "All Products",
    "Phones",
    "Smart Watches",
    "Laptops",
    "Headphones",
    "Speakers",
    "Accessories",
  ];

  return (
    <div className="flex flex-wrap justify-center items-center gap-4 p-4 bg-[#050715] mt-6">
      {categories.map((category) => {
        const isActive = activeCategory === category;

        return (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`px-5 py-2 rounded-xl font-semibold transition-all duration-300 ease-in-out transform
              ${
                isActive
                  ? "bg-gradient-to-r from-purple-500 to-purple-700 text-white shadow-lg"
                  : "bg-transparent border border-gray-700 text-white"
              }
              hover:scale-110 hover:shadow-white`}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};

export default CategoryButtons;
