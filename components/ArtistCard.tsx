import Image from "next/image";
import React from "react";
import { TOPMIX } from "../Data";

type Props = {};

const ArtistCard = (props: Props) => {
  return (
    <div className="grid grid-cols-5 justify-center">
      {TOPMIX.map((artist, index) => (
        <div
          key={index}
          className="flex justify-center h-[280px] w-48 bg-[#191919] hover:bg-[#222222] cursor-pointer relative rounded-lg"
        >
          <div className="top-4 absolute">
            <Image
              src={artist.posterImg}
              alt=""
              className="h-40 w-40 rounded-md object-cover shadow-black  "
            />
            <div className="absolute py-3">
              <p className="text-white font-bold text-lg">{artist.artist}</p>
              <p className=" text-sm text-gray-400">
                Stonebwoy, Daddy Lumba, Fameye, Medikal
              </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArtistCard;
