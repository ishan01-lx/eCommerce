import React, { useState } from "react";
import CategoryButtons from "../Components/CategoryButtons";
import Laptop from '../images/laptop.jpg';
import hero from "../images/hero.jpg";
import Speaker from '../images/speaker2.jpg';
import Joystick from '../images/joystick.jpg';
import SmartWatch from '../images/smartwatch.jpg';
import Iphone from '../images/iphone.jpg';
import Headphone from '../images/headphone.jpg';
import Earbuds from '../images/earbuds.jpg';
import Earbuds2 from '../images/earbuds2.jpg';
import Mouse from '../images/mouse.jpg';
import Samsung from '../images/samsung.jpg';
import GoPro from '../images/gopro.jpg';
import PowerBank from '../images/powerbank.jpg';
import { Link } from "react-router";

const productsData = [

    {
    id: 1,
    name: "GoPro",
    category: "Accessories",
    price: 1159,
    oldPrice: 1499,
    discount: 13,
    rating: 4.8,
    reviews: 807,
    image: GoPro,
    badge: "Featured",
  },
  {
    id: 2,
    name: "Smart Watch Pro",
    category: "Smart Watches",
    price: 499,
    oldPrice: 599,
    discount: 17,
    rating: 4,
    reviews: 892,
    image: SmartWatch,
    badge: "New",
  },
  {
    id: 3,
    name: "Ultra-Thin Laptop",
    category: "Laptops",
    price: 1299,
    oldPrice: 1499,
    discount: 13,
    rating: 4.2,
    reviews: 567,
    image: Laptop,
    badge: "Featured",
  },
  {
    id: 4,
    name: "iPhone 16",
    category: "Phones",
    price: 1159,
    oldPrice: 1499,
    discount: 13,
    rating: 4.8,
    reviews: 807,
    image: Iphone,
    badge: "Featured",
  },
  {
    id: 5,
    name: "BoAt Stone 1200 | Smart Speaker",
    category: "Speakers",
    price: 198,
    oldPrice: 246,
    discount: 32,
    rating: 4.9,
    reviews: 898,
    image: Speaker,
    badge: "Best Product",
  },
  {
    id: 6,
    name: "JBL Tune 720BT - Wireless",
    category: "Headphones",
    price: 560,
    oldPrice: 780,
    discount: 25,
    rating: 4.5,
    reviews: 1284,
    image: Headphone,
    badge: "Best Seller",
  },
  {
    id: 7,
    name: "Apple AirPods Pro 2",
    category: "Accessories",
    price: 560,
    oldPrice: 780,
    discount: 25,
    rating: 4.5,
    reviews: 1284,
    image: Earbuds,
    badge: "Best Seller",
  },
  {
    id: 8,
    name: "XBox Elite Series 2 Controller",
    category: "Accessories",
    price: 560,
    oldPrice: 780,
    discount: 25,
    rating: 4.5,
    reviews: 1284,
    image: Joystick,
    badge: "Best Seller",
  },
  {
    id: 9,
    name: "UGREEN HiTune X5 TWS Wireless Bluetooth 5.2",
    category: "Accessories",
    price: 310,
    oldPrice: 520,
    discount: 25,
    rating: 4.9,
    reviews: 290,
    image: Earbuds2,
    badge: "Best Seller",
  },
  {
    id: 10,
    name: "FFJ Wireless Gaming Mouse, 24000 DPI",
    category: "Accessories",
    price: 50,
    oldPrice: 80,
    discount: 25,
    rating: 4.7,
    reviews: 510,
    image: Mouse,
    badge: "Best Seller",
  },
  {
    id: 11,
    name: "Samsung S25 Ultra",
    category: "Phones",
    price: 1159,
    oldPrice: 1499,
    discount: 13,
    rating: 4.8,
    reviews: 807,
    image: Samsung,
    badge: "Featured",
  },
    {
    id: 12,
    name: "Premium Wireless Headphones",
    category: "Headphones",
    price: 299,
    oldPrice: 399,
    discount: 25,
    rating: 4.5,
    reviews: 1284,
    image: hero,
    badge: "Best Seller",
  },
    {
    id: 13,
    name: "Power Box",
    category: "Accessories",
    price: 299,
    oldPrice: 399,
    discount: 25,
    rating: 4.5,
    reviews: 1284,
    image: PowerBank,
    badge: "Best Seller",
  },

];

const Product = () => {
  const [activeCategory, setActiveCategory] = useState("All Products");
  const [visibleProducts, setVisibleProducts] = useState(6);

  // Filter products based on selected category
  const filteredProducts =
    activeCategory === "All Products"
      ? productsData
      : productsData.filter((item) => item.category === activeCategory);

  // Show more products when clicking Load More
  const handleLoadMore = () => {
    setVisibleProducts((prev) => prev + 3); // Loads 3 more products per click
  };

  return (
    <div className="bg-gray-950 py-20 md:py-32 max-w-screen min-h-screen px-4 md:px-16 font-bold">

      {/* Headings */}
      <div className="w-full flex items-center justify-center flex-col text-center">
        <h1 className="text-3xl mb-5 md:text-5xl md:text-semibold bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-400 bg-clip-text text-transparent">
          Featured Products
        </h1>
        <p className="text-gray-300 text-xl font-light font-sans hidden md:flex">
          Discover our carefully curated selection of premium tech products
          designed to enhance your lifestyle.
        </p>
        <p className="text-gray-300 text-xl font-light font-sans flex md:hidden">
          Discover our carefully curated selection
        </p>
        <p className="text-gray-300 text-xl font-light font-sans flex md:hidden">
          of premium tech products
        </p>
        <p className="text-gray-300 text-xl font-light font-sans flex md:hidden">
          designed to enhance your lifestyle.
        </p>
      </div>

      {/* Category Buttons */}
      <CategoryButtons
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
      />

      {/* Products Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-10">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
          <div
            key={product.id}
            className="relative bg-gray-900 rounded-2xl shadow-lg overflow-hidden hover:shadow-purple-500 transition-all duration-300"
          >
            {/* Product Image */}
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-60 md:h-80 object-cover transition-transform duration-300 group-hover:scale-105"
              />

              {/* Badge & Discount */}
              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.badge && (
                  <span className="bg-gradient-to-r from-yellow-400 to-yellow-600 text-gray-900 text-xs font-bold px-2 py-1 rounded-md">
                    {product.badge}
                  </span>
                )}
                <span className="bg-red-600 text-white text-xs font-semibold px-2 py-1 rounded-md">
                  -{product.discount}%
                </span>
              </div>

              {/* Add to Cart Button */}
              <button className="absolute inset-0 flex justify-center items-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <span className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white font-semibold px-4 py-2 rounded-xl shadow-lg hover:scale-110 transition-transform">
                  Add to Cart
                </span>
              </button>
            </div>

            {/* Product Info */}
            <div className="p-4">
              {/* Rating */}
              <div className="flex items-center gap-1 text-yellow-400">
                {Array.from({ length: 5 }, (_, i) => (
                  <span key={i}>
                    {i < Math.round(product.rating) ? "★" : "☆"}
                  </span>
                ))}
                <span className="text-gray-400 text-sm ml-1">
                  ({product.reviews})
                </span>
              </div>

              {/* Name */}
              <h2 className="text-lg font-semibold text-white mt-2">
                {product.name}
              </h2>

              {/* Price */}
              <div className="flex items-center gap-2 mt-2">
                <span className="text-purple-400 font-bold text-xl">
                  ${product.price}
                </span>
                <span className="text-gray-500 line-through text-md">
                  ${product.oldPrice}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Load More Button */}
      {visibleProducts < filteredProducts.length && (
        <div className="flex justify-center mt-10">
          <button
            onClick={handleLoadMore}
            className="bg-gradient-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-xl font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          >
            Load More Products
          </button>
        </div>
      )}
    </div>
  );
};

export default Product;
