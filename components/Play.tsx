import { PlayIcon, PauseIcon } from "@heroicons/react/24/solid";
import React, { useState } from "react";

type Props = {};

const Play = (props: Props) => {
  const [play, setPlay] = useState(false);
  return (
    <>
      {play ? (
        <button
          onClick={() => setPlay(!play)}
          className="bg-[#3CCF4E]  top-5 absolute right-5 flex items-center justify-center rounded-full p-2 h-10 w-10 shadow-xl"
        >
          <PauseIcon className="h-8 w-8 rounded-full " />
        </button>
      ) : (
        <button
          onClick={() => setPlay(!play)}
          className="bg-[#3CCF4E]  absolute top-5 right-5 flex items-center justify-center rounded-full p-2 h-10 w-10 shadow-xl"
        >
          <PlayIcon className="h-8 w-8 rounded-full " />
        </button>
      )}
    </>
  );
};

export default Play;
