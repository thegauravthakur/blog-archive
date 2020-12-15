import React from "react";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  return (
    <nav className="flex justify-between px-5 md:px-10 lg:px-20 bg-white text-gray-900 shadow">
      <p
        onClick={() => router.push("/")}
        className="self-center font-bold text-lg text-red-700 select-none cursor-pointer"
      >
        Gaurav's Blog
      </p>
      <div className="grid grid-cols-4 hidden sm:block ">
        <button
          onClick={() => router.push("/")}
          className="py-4 px-8 border-b-4  border-white hover:border-red-700  focus:outline-none font-semibold"
        >
          Home
        </button>
        <button
          onClick={() => {
            window.location.href = "https://gauravthakur.in";
          }}
          className="py-4 px-8 border-b-4  border-white hover:border-red-700  focus:outline-none font-semibold"
        >
          Portfolio
        </button>
        <button className="py-4 px-8 border-b-4  border-white hover:border-red-700 hover:text-gray-800 hover:bg-white focus:outline-none font-semibold">
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
