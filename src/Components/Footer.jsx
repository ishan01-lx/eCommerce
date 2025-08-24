import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#050B16] text-gray-400 pt-12 pb-6 px-6 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        {/* Logo & Description */}
        <div>
          <h2 className="text-2xl font-bold bg-gradient-to-r from-indigo-200 via-purple-300 to-pink-400 bg-clip-text text-transparent">
            Shoppie
          </h2>
          <p className="mt-3 text-sm leading-6 text-gray-400">
            Premium tech products for the modern lifestyle. Curated with care,
            delivered with excellence.
          </p>
        </div>

        {/* Shop Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Shop</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-indigo-300 cursor-pointer">All Products</li>
            <li className="hover:text-indigo-300 cursor-pointer">Headphones</li>
            <li className="hover:text-indigo-300 cursor-pointer">Smart Watches</li>
            <li className="hover:text-indigo-300 cursor-pointer">Laptops</li>
          </ul>
        </div>

        {/* Support Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Support</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-indigo-300 cursor-pointer">Help Center</li>
            <li className="hover:text-indigo-300 cursor-pointer">Contact Us</li>
            <li className="hover:text-indigo-300 cursor-pointer">Shipping Info</li>
            <li className="hover:text-indigo-300 cursor-pointer">Returns</li>
          </ul>
        </div>

        {/* Company Links */}
        <div>
          <h3 className="text-white font-semibold mb-3">Company</h3>
          <ul className="space-y-2 text-gray-400">
            <li className="hover:text-indigo-300 cursor-pointer">About Us</li>
            <li className="hover:text-indigo-300 cursor-pointer">Careers</li>
            <li className="hover:text-indigo-300 cursor-pointer">Press</li>
            <li className="hover:text-indigo-300 cursor-pointer">Privacy Policy</li>
          </ul>
        </div>
      </div>

      {/* Bottom Divider */}
      <div className="border-t border-gray-800 mt-8 pt-4 text-center text-gray-500 text-sm">
        © 2025 <span className="text-indigo-300 font-medium"><a href="https://www.ishantasitaula.com.np/">Ishan</a></span>. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
