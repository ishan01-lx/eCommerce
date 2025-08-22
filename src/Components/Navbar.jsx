import { useState } from "react";
import { CgShoppingCart } from "react-icons/cg";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";
import Nepal from "../images/Nepal.png";
import { RiArrowDropDownLine } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

const Navbar = () => {
  const [searchFocused, setSearchFocused] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // <-- NEW

  return (
    <div>
      <nav className="bg-white dark:bg-gray-900 z-50 fixed pl-1 md:pl-8 xl:-ml-16 w-full">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8 w-full">
              <div className="shrink-0">
                <a href="#" title="">
                  <p className="bg-gradient-to-r from-indigo-200 via-purple-400 to-pink-700 bg-clip-text text-transparent font-bold md:font-extrabold text-3xl">
                    Shopp<span className="text-amber-50 font-bold">io</span>
                  </p>
                </a>
              </div>

              {/* Desktop Nav */}
              <ul className="hidden lg:flex items-center mx-40 justify-start gap-4 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link to={"/"}>
                    <span className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:text-gray-600 transition-colors duration-300">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link to="/product">
                    <span className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:text-gray-600 transition-colors duration-300">
                      Products
                    </span>
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link to="/categories">
                    <span className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:text-gray-600 transition-colors duration-300">
                      Categories
                    </span>
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link to="/about">
                    <span className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:text-gray-600 transition-colors duration-300">
                      About
                    </span>
                  </Link>
                </li>
                <li className="shrink-0 pr-20">
                  <Link to="/contact">
                    <span className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500 hover:text-gray-600 transition-colors duration-300 ">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>

              {/* Mobile Nav */}
              <ul
                className={`${
                  menuOpen ? "flex" : "hidden"
                } flex-col absolute top-20 left-0 w-full bg-white dark:bg-gray-900 shadow-lg lg:hidden z-50`}
              >
                <li className="border-b border-gray-200 dark:border-gray-700">
                  <Link to={"/"} onClick={() => setMenuOpen(false)}>
                    <span className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      Home
                    </span>
                  </Link>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700">
                  <Link to="/product" onClick={() => setMenuOpen(false)}>
                    <span className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      Products
                    </span>
                  </Link>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700">
                  <Link to="/categories" onClick={() => setMenuOpen(false)}>
                    <span className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      Categories
                    </span>
                  </Link>
                </li>
                <li className="border-b border-gray-200 dark:border-gray-700">
                  <Link to="/about" onClick={() => setMenuOpen(false)}>
                    <span className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      About
                    </span>
                  </Link>
                </li>
                <li>
                  <Link to="/contact" onClick={() => setMenuOpen(false)}>
                    <span className="block px-6 py-3 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition">
                      Contact
                    </span>
                  </Link>
                </li>
              </ul>

              <div
                className={`w-48 md:w-64 p-1 ml-5 px-1 md:px-2 hidden rounded-md gap-2 md:gap-3 md:flex text-white items-center border border-gray-500 ${
                  searchFocused ? "outline-2 outline-blue-700" : ""
                }`}
              >
                <IoIosSearch className="hover:text-gray-600 transition-colors duration-300" />
                <div className="w-[1px] h-6 bg-gray-500"></div>
                <input
                  type="text"
                  placeholder="Search Products...."
                  className="focus:outline-0 text-xs"
                  onFocus={() => setSearchFocused(true)}
                  onBlur={() => setSearchFocused(false)}
                />
              </div>
              <div className="ml-16 flex gap-1">
                <img src={Nepal} alt="nepal flag" className="w-5 h-5" />
                <RiArrowDropDownLine className="text-white text-2xl" />
              </div>

              <div className="-ml-5 flex gap-3 relative text-white">
                <CgShoppingCart className="text-xl hover:text-gray-600 transition-colors duration-300" />
                <div className="bg-conic-180 from-indigo-900 via-indigo-400 to-indigo-600 absolute rounded-full w-5 -top-4 -right-2 left-5 text-xs h-5">
                  <p className="text-center">3</p>
                </div>
              </div>

              {/* Hamburger */}
              <button
                className="flex md:hidden text-white text-2xl ml-2"
                onClick={() => setMenuOpen((prev) => !prev)}
                aria-label="Toggle menu"
              >
                <GiHamburgerMenu />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;