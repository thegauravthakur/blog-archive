import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { IoCloseOutline } from "react-icons/io5";
import MobileAppBarTile from "./MobileAppBarTile";

const Nav = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <nav className="flex justify-between px-5 md:px-10 lg:px-20 bg-white text-gray-900 shadow fixed min-w-full z-40">
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
            About Us
          </button>
        </div>
        <button
          onClick={() => setShow(true)}
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
      <div
        className={`${
          show ? "fixed z-40 " : "hidden"
        } top-0 bg-white my-3 p-5  min-w-full shadow-2xl rounded-2xl border md:hidden  `}
      >
        <div className="flex justify-between ">
          <p
            onClick={() => router.push("/")}
            className="text-lg text-red-600 font-bold cursor-pointer"
          >
            Gaurav's Blog
          </p>
          <button
            onClick={() => setShow(false)}
            className="focus:outline-none remove-touch-effect "
          >
            <IoCloseOutline />
          </button>
        </div>
        {/*<p className="uppercase text-gray-600 py-2">Furniture</p>*/}
        <MobileAppBarTile
          loc={"/"}
          name={"Home"}
          onClick={() => router.push("/")}
        />
        <MobileAppBarTile
          loc={"/portfolio"}
          name={"Portfolio"}
          onClick={() => {
            window.location.href = "https://gauravthakur.in";
          }}
        />
        {/*<p className="uppercase text-gray-600 py-2">Features</p>*/}
        <MobileAppBarTile
          loc={"/About Us"}
          name={"About Us"}
          onClick={() => router.push("/about")}
        />
      </div>
    </Fragment>
  );
};

export default Nav;
