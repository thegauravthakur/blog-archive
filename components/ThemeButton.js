import React, { useState } from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import ThemeOptions from "./ThemeOptions";

const ThemeButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(true)}
      className="relative inline-block text-left"
    >
      <div>
        <button
          type="button"
          className="py-4 px-8 border-b-4  border-white dark:border-deepDarkGray dark:hover:border-blue-600  hover:border-red-700  focus:outline-none font-semibold flex gap-3"
          id="options-menu"
          aria-haspopup="true"
          aria-expanded="true"
        >
          Theme
          <WiMoonAltFirstQuarter size={22} className="self-center" />
        </button>
      </div>
      <div
        className={`origin-top-right ${
          !show ? "hidden" : ""
        } absolute right-0 w-56 rounded-xl dark:bg-darkGray shadow-lg bg-white ring-1 ring-black ring-opacity-5`}
      >
        <ThemeOptions setShow={setShow} />
      </div>
    </div>
  );
};

export default ThemeButton;
