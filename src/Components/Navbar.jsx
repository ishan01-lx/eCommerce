import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";
import India from "../images/India.webp";
import Nepal from "../images/Nepal.png";
import UK from "../images/UK.webp";
import USA from "../images/USA.png";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  // Country Selector
  const [selectedCountry, setSelectedCountry] = useState({
    name: "Nepal",
    flag: Nepal,
  });

  const countries = [
    { name: "Nepal", flag: Nepal },
    { name: "India", flag: India },
    { name: "USA", flag: USA },
    { name: "UK", flag: UK },
  ];

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 z-50 fixed border-b border-gray-800 w-full px-4 md:px-16 shadow-md">
        <div className="max-w-screen-xl mx-auto py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="shrink-0">
              <Link to="/">
                <p className="bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-700 bg-clip-text text-transparent font-bold md:font-extrabold text-3xl hover:tracking-wide transition-all duration-300">
                  Shopp<span className="text-amber-50 font-bold">ie</span>
                </p>
              </Link>
            </div>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center justify-start gap-8 py-3">
              {["Home", "Product", "About", "Contact"].map((item, i) => (
                <li key={i}>
                  <Link
                    to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                    className="relative text-sm font-medium text-gray-900 dark:text-white hover:text-purple-500 transition duration-300 group"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-500 to-pink-500 group-hover:w-full transition-all duration-300"></span>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side utilities */}
            <div className="flex items-center gap-6 relative">
              {/* Search */}
              <div
                className={`w-48 md:w-64 p-1 px-2 hidden rounded-md gap-3 md:flex text-white items-center border border-gray-500 transition-all duration-300 ${
                  searchFocused ? "outline-2 outline-purple-500 shadow-md" : ""
                }`}
              >
                <IoIosSearch />
                <div className="w-[1px] h-6 bg-gray-500"></div>
                <input
                  type="text"
                  placeholder="Search Products...."
                  className="focus:outline-0 text-xs bg-transparent"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>

              {/* Country Selector - Hoverable */}
              <div className="relative group">
                <button className="flex items-center gap-1">
                  <img
                    src={selectedCountry.flag}
                    alt={selectedCountry.name}
                    className="w-6 h-6 rounded-full shadow-sm"
                  />
                </button>

                {/* Dropdown */}
                <div className="absolute right-0 mt-2 w-36 bg-white dark:bg-gray-800 shadow-xl rounded-lg overflow-hidden opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-2 transform transition-all duration-300">
                  {countries.map((country) => (
                    <button
                      key={country.name}
                      onClick={() => setSelectedCountry(country)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-gradient-to-r hover:from-purple-500 hover:to-pink-500 hover:text-white transition-all duration-300"
                    >
                      <img
                        src={country.flag}
                        alt={country.name}
                        className="w-5 h-5 rounded-full"
                      />
                      {country.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Cart */}
              <div className="relative text-white cursor-pointer">
                <CgShoppingCart className="text-xl hover:text-purple-400 transition" />
                <div className="bg-gradient-to-tr from-indigo-600 via-purple-500 to-pink-500 absolute rounded-full w-5 -top-3 -right-3 text-xs h-5 flex items-center justify-center text-white font-medium shadow-md">
                  3
                </div>
              </div>

              {/* Login Button */}
              <Link
                to="/login"
                className="px-4 py-1 rounded-lg bg-gradient-to-r from-purple-500 to-pink-500 text-white text-sm font-medium hover:scale-105 hover:shadow-lg transition-all duration-300"
              >
                Sign in
              </Link>

              {/* Hamburger */}
              <button
                className="flex md:hidden text-white text-2xl"
                onClick={() => setMenuOpen((prev) => !prev)}
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          {menuOpen && (
            <div className="lg:hidden mt-4 space-y-2 flex flex-col bg-gray-100 dark:bg-gray-800 p-4 rounded-lg shadow-md">
              {["Home", "Product", "About", "Contact"].map((item, i) => (
                <Link
                  key={i}
                  to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-gray-800 dark:text-gray-200 hover:text-purple-500 transition duration-300"
                >
                  {item}
                </Link>
              ))}
            </div>
          )}
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
