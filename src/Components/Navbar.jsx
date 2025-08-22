import React from "react";
import { IoIosSearch } from "react-icons/io";
import { Link } from "react-router";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-white dark:bg-gray-900  fixed pl-2 md:pl-8 lg:pl-16 xl:pl-20">
        <div className="max-w-screen-xl px-4 mx-auto 2xl:px-0 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-8">
              <div className="shrink-0">
                <a href="#" title="" className="">
                  <p className="text-amber-500 font-extrabold text-3xl">
                    Shopp<span className="text-amber-50 font-bold">io</span>
                  </p>
                </a>
              </div>

              <ul className="hidden lg:flex items-center mx-40 justify-start gap-4 md:gap-8 py-3 sm:justify-center">
                <li>
                  <Link to={"/"}>
                    <a
                      href="#"
                      title=""
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    >
                      Home
                    </a>
                  </Link>
                </li>
                <li className="shrink-0">
                  <Link to="/product">
                    <a
                      href="#"
                      title=""
                      className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                    >
                      Products
                    </a>
                  </Link>
                </li>
                <li className="shrink-0">
                    <Link to="/categories">
                  <a
                    href="#"
                    title=""
                    className="flex text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Categories
                  </a>
                  </Link>
                </li>
                <li className="shrink-0">
                    <Link to="/about">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    About
                  </a>
                  </Link>
                </li>
                <li className="shrink-0 pr-20">
                    <Link to="/contact">
                  <a
                    href="#"
                    title=""
                    className="text-sm font-medium text-gray-900 hover:text-primary-700 dark:text-white dark:hover:text-primary-500"
                  >
                    Contact
                  </a>
                  </Link>
                </li>
              </ul>

              <div className="w-64 p-1 px-2 rounded-md gap-3 flex text-white items-center border border-gray-500">
                <IoIosSearch className="hover:text-gray-500 transition"/>
                <div className="w-[1px] h-6 bg-gray-500"></div>
                <input type="text" placeholder="Search Products...." className="focus:outline-0 text-xs"/>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
