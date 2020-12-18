import React from "react";
import { useRouter } from "next/router";

const ThemeOptions = () => {
  const router = useRouter();

  const onClickHandler = (theme) => {
    switch (theme) {
      case "light":
        localStorage.theme = "light";
        router.reload();
        break;
      case "dark":
        localStorage.theme = "dark";
        router.reload();
        break;
      default:
        localStorage.removeItem("theme");
        router.reload();
        break;
    }
  };
  return (
    <div
      className="dark:bg-darkGray rounded-xl px-0"
      role="menu"
      aria-orientation="vertical"
      aria-labelledby="options-menu"
    >
      <p
        onClick={() => onClickHandler("dark")}
        className="dark:hover:text-blue-500 block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 rounded-t-xl cursor-pointer"
        role="menuitem"
      >
        Dark
      </p>
      <p
        onClick={() => onClickHandler("light")}
        className="dark:hover:text-blue-500 block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 cursor-pointer"
        role="menuitem"
      >
        Light
      </p>
      <p
        onClick={() => onClickHandler("system")}
        className="dark:hover:text-blue-500 block px-4 py-2 text-sm text-gray-700 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:text-gray-900 cursor-pointer rounded-b-xl"
        role="menuitem"
      >
        System
      </p>
    </div>
  );
};

export default ThemeOptions;
