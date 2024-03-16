/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
// import { MdSearch } from "react-icons/md";
// import { FaRegHeart } from "react-icons/fa";
// import { MdOutlineShoppingBag } from "react-icons/md";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header class="bg-white flex-wrap items-center shadow-md">
      <nav className="border-gray-200 bg-white py-6">
        <div className="flex flex-wrap items-center justify-between max-w-screen-xl px-4 mx-auto">
          <a href="#" className="flex items-center">
            <span className="self-center text-3xl font-semibold whitespace-nowrap text-black font-[Lobster]">
              One Store
            </span>
          </a>
          <div className="flex items-center lg:order-2">
            <div className="hidden mt-2 mr-4 sm:inline-block">
              <span />
            </div>
            <Link to='/login' >Login / Register</Link>
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-gray-800 hover:text-gray-600 rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            >
              {/* <MdSearch /> */}
            </a>
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-gray-800 hover:text-gray-600 rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            >
              {/* <FaRegHeart /> */}
            </a>
            <a
              href="https://themesberg.com/product/tailwind-css/landing-page"
              className="text-gray-800 hover:text-gray-600 rounded-lg text-sm px-4 lg:px-2 py-2 lg:py-2.5 sm:mr-2 lg:mr-0"
            >
              {/* <MdOutlineShoppingBag /> */}
            </a>
            {/* <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm text-gray-500 rounded-lg lg:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="true"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                />
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </button> */}
          </div>
          <div
            className="items-center justify-between w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex flex-col mt-4 lg:flex-row lg:space-x-8 lg:mt-0">
              <li>
              <Link to='/Home' >Home</Link>
            
              </li>
              <li>
                <a
                  href="#women"
                  className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase"
                >
                  Women's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase"
                >
                  Men's
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase"
                >
                  Shop
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase"
                >
                  Pages
                </a>
              </li>
              <li>
              <li>
              <Link to='/admin' >ADMIN</Link>
            
              </li>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-3 pr-4 text-black hover:border-b-2 hover:border-[#7d0d0d] lg:p-0 uppercase"
                >
                  <Link to='/cart' >CART</Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
