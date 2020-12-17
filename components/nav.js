import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import { IoCloseOutline } from "react-icons/io5";
import MobileAppBarTile from "./MobileAppBarTile";
import ThemeButton from "./ThemeButton";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import MobileThemeButton from "./MobileThemeButton";
import { AiOutlineMenu } from "react-icons/ai";
import Link from "next/link";

const Nav = () => {
  const [show, setShow] = useState(false);
  const router = useRouter();
  return (
    <Fragment>
      <nav className="flex justify-between px-5 md:px-10 lg:px-20 bg-white dark:bg-deepDarkGray text-gray-900 shadow fixed min-w-full z-40">
        <Link href={"/"}>
          <p className="self-center font-bold text-xl text-red-700 dark:text-white select-none cursor-pointer dark:hover:text-blue-500">
            Gaurav's Blog
          </p>
        </Link>
        <div className="grid grid-cols-4 hidden sm:block dark:text-white ">
          <Link href={"/"}>
            <button className="py-4 px-8 border-b-4  border-white dark:border-deepDarkGray dark:hover:border-blue-600  hover:border-red-700  focus:outline-none font-semibold">
              Home
            </button>
          </Link>
          <button
            onClick={() => {
              window.location.href = "https://gauravthakur.in";
            }}
            className="py-4 px-8 border-b-4  border-white dark:border-deepDarkGray dark:hover:border-blue-600  hover:border-red-700  focus:outline-none font-semibold"
          >
            Portfolio
          </button>
          <ThemeButton />
        </div>
        <div className="flex sm:hidden gap-5">
          <MobileThemeButton />
          <button
            onClick={() => setShow(true)}
            type={"button"}
            className=" focus:outline-none remove-touch-effect py-5 sm:py-0"
          >
            <AiOutlineMenu
              size={25}
              className="dark:text-gray-300 text-gray-700"
            />
          </button>
        </div>
      </nav>
      <div
        style={{ visibility: show ? "visible" : "hidden" }}
        className="bg-white dark:bg-deepDarkGray z-50 my-3 mx-1 p-5 shadow-2xl rounded-2xl border md:hidden fixed right-0 left-0"
      >
        <div className="flex justify-between ">
          <p
            onClick={() => router.push("/")}
            className="text-lg text-red-600 dark:text-gray-300 font-bold cursor-pointer"
          >
            Gaurav's Blog
          </p>
          <button
            onClick={() => setShow(false)}
            className="focus:outline-none remove-touch-effect dark:text-gray-300 "
          >
            <IoCloseOutline size={30} />
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
