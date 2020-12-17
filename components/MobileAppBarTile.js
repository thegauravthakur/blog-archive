import React from "react";
import { useRouter } from "next/router";
const MobileAppBarTile = ({ name, onClick, loc }) => {
  const router = useRouter();
  return (
    <div
      onClick={onClick}
      className="flex py-3 hover:bg-gray-100 dark:hover:bg-gray-600 cursor-pointer"
    >
      <div className="h-6 w-6 text-red-600 dark:text-gray-300 ">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
            clipRule="evenodd"
          />
        </svg>
      </div>
      <p
        className={`${
          router.pathname === loc
            ? "font-bold text-red-600 dark:text-blue-500"
            : "dark:text-gray-300 text-gray-700"
        }`}
      >
        {name}
      </p>
    </div>
  );
};
export default MobileAppBarTile;
