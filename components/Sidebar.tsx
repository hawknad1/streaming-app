import React from "react";
import {
  MagnifyingGlassIcon,
  HomeIcon,
  EllipsisHorizontalIcon,
  QueueListIcon,
  PlusSmallIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import MyPlayList from "./MyPlayList";
import { PLAYLIST } from "../Data";

type Props = {};

const Sidebar = (props: Props) => {
  return (
    <div className="bg-black p-4 w-[250px] h-screen pb-36 overflow-y-scroll scrollbar-hide">
      <MyPlayList />
      <div className="">
        {PLAYLIST.map(({ playlist }, index) => (
          <p
            key={index}
            className="text-gray-400 font-medium cursor-pointer text-sm py-1.5 hover:text-white"
          >
            {playlist}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
