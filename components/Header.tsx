import {
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";

type Props = {};

const Header = (props: Props) => {
  const [color, setColor] = useState(false);

  const chnageColor = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(
    () => window.addEventListener("scroll", chnageColor),
    [chnageColor]
  );

  return (
    <div
      className={`flex px-8 py-4  ${
        color ? "bg-black bg-opacity-80" : ""
      } sticky top-0 z-50 items-center`}
    >
      <div className="flex flex-1 space-x-4">
        <div className="rounded-full p-1 bg-black bg-opacity-70">
          <ChevronLeftIcon className="w-6 h-6  text-white cursor-pointer" />
        </div>
        <div className="rounded-full p-1 bg-black bg-opacity-80">
          <ChevronRightIcon className="w-6 h-6 text-white cursor-pointer" />
        </div>
      </div>

      <div className="flex items-center space-x-2 justify-start bg-black bg-opacity-90 p-1 rounded-full w-36 hover:bg-gray-700 cursor-pointer">
        <div className="bg-gray-600 rounded-full p-0.5">
          <UserIcon className="h-6 w-6  text-white" />
        </div>
        <p className="font-medium tracking-[0.5px] text-white text-sm">
          kenste100
        </p>
        <ChevronDownIcon className="h-5 w-5 text-white" />
      </div>
    </div>
  );
};

export default Header;
