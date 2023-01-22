import Image from "next/image";
import React from "react";
import asake from "../assets/asake.jpg";
import ArtistCard from "./ArtistCard";
import { TOPMIX, GENRE } from "../Data";

type Props = {};

const TopMix = (props: Props) => {
  return (
    <div>
      {GENRE.map(({ genre }, index) => (
        <div className="mx-2 w-full mr-auto ml-auto">
          <div className="flex items-center">
            <p className="font-bold text-[23px] text-gray-100 mt-4 py-4 hover:underline cursor-pointer flex-1">
              {genre}
            </p>
            <p className="font-semibold text-sm mr-6 text-gray-400 hover:underline cursor-pointer">
              SHOW ALL
            </p>
          </div>
          <ArtistCard />
        </div>
      ))}
    </div>
  );
};

export default TopMix;
