import React from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between px-5 md:px-10 lg:px-20 bg-gray-800 text-white ">
      <p
        onClick={() => router.push("/")}
        className="self-center font-bold text-lg text-gray-300 select-none cursor-pointer"
      >
        Gaurav's Blog
      </p>
      <div className="grid grid-cols-4 hidden sm:block">
        <button
          onClick={() => {
            window.location.href = "https://gauravthakur.in";
          }}
          className="py-5 px-5 lg:px-10 hover:text-gray-800 hover:bg-white focus:outline-none"
        >
          Portfolio
        </button>
        <button className="py-5 px-5 lg:px-10 hover:text-gray-800 hover:bg-white focus:outline-none">
          React
        </button>
        <button className="py-5 px-5 lg:px-10 hover:text-gray-800 hover:bg-white focus:outline-none">
          C++
        </button>
        <button className="py-5 px-5 lg:px-10 hover:text-gray-800 hover:bg-white focus:outline-none">
          JavaScript
        </button>
      </div>
      <button
        type={"button"}
        className="sm:hidden focus:outline-none remove-touch-effect py-5 sm:py-0"
      >
        <svg
          className="h-6 w-6 text-gray-400 hover:text-gray-600"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
    </nav>
  );
};

export default Nav;
