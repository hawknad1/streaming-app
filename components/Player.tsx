import {
  ArrowPathRoundedSquareIcon,
  HeartIcon,
  QueueListIcon,
  DeviceTabletIcon,
  ArrowUturnRightIcon,
  SpeakerWaveIcon,
  SpeakerXMarkIcon,
  ArrowsRightLeftIcon,
} from "@heroicons/react/24/outline";
import {
  PauseIcon,
  BackwardIcon,
  ForwardIcon,
  PlayIcon,
} from "@heroicons/react/24/solid";
import Image from "next/image";
import React, { useState } from "react";
import asake from "../assets/asake.jpg";
import Play from "./Play";

type Props = {};

const Player = (props: Props) => {
  const [repeat, setRepeat] = useState(false);
  const [play, setPlay] = useState(false);
  const [shuffle, setShuffle] = useState(false);

  return (
    <div className="flex items-center justify-between sticky bottom-0 p-4 h-24 w-full bg-[#191919] border-t border-gray-800 ">
      <div className="flex items-center justify-between w-48">
        <Image src={asake} alt="" className="h-16 w-16" />
        <div>
          <p className="font-semibold text-gray-200 hover:text-white cursor-pointer hover:underline">
            I'm Ready
          </p>
          <p className="text-xs text-gray-300 hover:text-white cursor-pointer hover:underline">
            Tri Triggers
          </p>
        </div>
        <HeartIcon className="h-6 w-6 text-gray-200 hover:text-white cursor-pointer " />
      </div>

      <div className="flex space-x-3 items-center">
        <button onClick={() => setShuffle(!shuffle)}>
          <ArrowsRightLeftIcon
            className={`h-6 w-6 ${
              shuffle ? "text-green-500" : ""
            } text-gray-300`}
          />
        </button>
        <button>
          <BackwardIcon className="h-7 w-7 text-gray-300" />
        </button>
        <div className="bg-white flex justify-center rounded-full h-10 w-10 ">
          {play ? (
            <button onClick={() => setPlay(!play)} className="">
              <PauseIcon className="h-6 w-6 rounded-full text-black" />
            </button>
          ) : (
            <button onClick={() => setPlay(!play)} className="">
              <PlayIcon className="h-6 w-6 rounded-full text-black" />
            </button>
          )}
        </div>

        <button>
          <ForwardIcon className="h-7 w-7 text-gray-300" />
        </button>
        <button onClick={() => setRepeat(!repeat)}>
          <ArrowPathRoundedSquareIcon
            className={`h-6 w-6 ${
              repeat ? "text-green-500" : ""
            } text-gray-300`}
          />
        </button>
      </div>

      <div className="flex space-x-3 items-center ">
        <QueueListIcon className="h-5 w-5 text-gray-300 hover:text-white" />
        <DeviceTabletIcon className="h-5 w-5 text-gray-300 hover:text-white" />
        <SpeakerWaveIcon className="h-5 w-5 text-gray-300 hover:text-white" />
      </div>
    </div>
  );
};

export default Player;
