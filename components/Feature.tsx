import Image from "next/image";
import React from "react";
import asake from "../assets/asake.jpg";
import { PlayIcon } from "@heroicons/react/24/solid";
import Play from "./Play";

type Props = {};

const Feature = (props: Props) => {
  return (
    <div className="w-full">
      <p className="font-bold text-[35px] text-gray-100 py-3  ">
        Good afternoon
      </p>
      <div className="grid grid-cols-3 w-full">
        <div
          className={`flex relative overflow-hidden items-center hover:bg-gray-700 cursor-pointer space-x-4 h-[75px] w-[340px] bg-gray-800 m-2 rounded-[5px]`}
        >
          <Image src={asake} alt="" className="h-[75px] w-[75px] " />
          <div className="">
            <p className="opacity-100 text-white font-bold text-base flex-1">
              Liked Songs
            </p>
            <Play />
          </div>
        </div>
        <div
          className={`flex relative overflow-hidden items-center hover:bg-gray-700 cursor-pointer space-x-4 h-[75px] w-[340px] bg-gray-800 m-2 rounded-[5px]`}
        >
          <Image src={asake} alt="" className="h-[75px] w-[75px] " />
          <p className="text-white font-bold text-base flex-1">Liked Songs</p>
          <div className="">
            <Play />
          </div>
        </div>
        <div
          className={`flex relative overflow-hidden items-center hover:bg-gray-700 cursor-pointer space-x-4 h-[75px] w-[340px] bg-gray-800 m-2 rounded-[5px]`}
        >
          <Image src={asake} alt="" className="h-[75px] w-[75px] " />
          <p className="text-white font-bold text-base flex-1">Liked Songs</p>
          <div className="">
            <Play />
          </div>
        </div>
        <div
          className={`flex relative overflow-hidden items-center hover:bg-gray-700 cursor-pointer space-x-4 h-[75px] w-[340px] bg-gray-800 m-2 rounded-[5px]`}
        >
          <Image src={asake} alt="" className="h-[75px] w-[75px] " />
          <p className="text-white font-bold text-base flex-1">Liked Songs</p>
          <div className="">
            <Play />
          </div>
        </div>
        <div
          className={`flex relative overflow-hidden items-center hover:bg-gray-700 cursor-pointer space-x-4 h-[75px] w-[340px] bg-gray-800 m-2 rounded-[5px]`}
        >
          <Image src={asake} alt="" className="h-[75px] w-[75px] " />
          <p className="text-white font-bold text-base flex-1">Liked Songs</p>
          <div className="">
            <Play />
          </div>
        </div>
        <div
          className={`flex relative overflow-hidden items-center hover:bg-gray-700 cursor-pointer space-x-4 h-[75px] w-[340px] bg-gray-800 m-2 rounded-[5px]`}
        >
          <Image src={asake} alt="" className="h-[75px] w-[75px] " />
          <p className="text-white font-bold text-base flex-1">Liked Songs</p>
          <div className="">
            <Play />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
