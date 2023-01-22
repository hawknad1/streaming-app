import {
  EllipsisHorizontalIcon,
  HomeIcon,
  MagnifyingGlassIcon,
  PlusSmallIcon,
  QueueListIcon,
} from "@heroicons/react/24/outline";
import { HeartIcon } from "@heroicons/react/24/solid";
import React from "react";

type Props = {};

const MyPlayList = (props: Props) => {
  return (
    <div className="top-0 z-50">
      <div className="flex items-center ">
        <EllipsisHorizontalIcon className="w-7 h-7 text-white" />
      </div>
      <div className="flex items-center space-x-2  my-3">
        <HomeIcon className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white" />
        <p className="text-gray-300 hover:text-white font-medium">Home</p>
      </div>
      <div className="flex space-x-2  my-3">
        <MagnifyingGlassIcon className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white" />
        <p className="text-gray-300 hover:text-white font-medium">Search</p>
      </div>
      <div className="flex space-x-2 my-3">
        <QueueListIcon className="w-6 h-6 text-gray-300 cursor-pointer hover:text-white" />

        <p className="text-gray-300 hover:text-white font-medium">
          Your Library
        </p>
      </div>

      <div className="flex space-x-2 my-3 mt-10">
        <PlusSmallIcon className="w-6 h-6 bg-gray-300 rounded-md text-gray-700 cursor-pointer hover:bg-white" />

        <p className="text-gray-300 hover:text-white font-medium">
          Create Playlist
        </p>
      </div>
      <div className="flex space-x-2  my-3">
        <HeartIcon className="w-6 h-6 bg-gray-300 text-sm rounded-md text-gray-700 cursor-pointer hover:text-red-400" />

        <p className="text-gray-300 hover:text-white font-medium">
          Liked Songs
        </p>
      </div>
      <div className="border-b border-gray-600 w-[200px]" />
    </div>
  );
};

export default MyPlayList;
