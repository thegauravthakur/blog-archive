import React, { useState } from "react";
import { WiMoonAltFirstQuarter } from "react-icons/wi";
import ThemeOptions from "./ThemeOptions";

const MobileThemeButton = () => {
  const [show, setShow] = useState(false);
  return (
    <div
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onClick={() => setShow(true)}
      className="relative inline-block text-left self-center"
    >
      <div>
        <WiMoonAltFirstQuarter
          size={30}
          className="dark:text-gray-300 text-gray-700 self-center"
        />
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

export default MobileThemeButton;
