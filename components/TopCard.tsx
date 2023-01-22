import { EllipsisHorizontalIcon } from "@heroicons/react/24/outline";
import Image from "next/image";
import React from "react";
import backend from "../assets/backend.png";

type Props = {};

const TopCard = (props: Props) => {
  return (
    <div className="mt-4 bg-black bg-opacity-80 rounded-md w-full">
      <div className="flex items-center h-[250px] px-4">
        <Image src={backend} width={280} height={280} alt="" />
        <div className="mx-5">
          <p className="text-white text-sm font-bold p-2">PLAYLIST</p>
          <p className="text-white font-bold text-7xl p-2">Jamaican Skankin'</p>
          <p className="text-white text-sm p-2 font-semibold">
            Get cultured on some classic and rare vintage ska out of Jamaica,
            here on Spotify.
          </p>
          <div className="flex items-center space-x-6 mt-2">
            <button className="text-black font-semibold bg-[#3CCF4E] py-3 w-24 rounded-full hover:scale-110 hover:-translate-y-1 duration-200">
              Play
            </button>
            <button className="text-white py-3 w-24 rounded-full hover:scale-110 hover:-translate-y-1 duration-200 border font-semibold">
              Follow
            </button>
            <EllipsisHorizontalIcon className="h-7 w-7 text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopCard;
