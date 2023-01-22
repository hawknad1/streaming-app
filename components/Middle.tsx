import React from "react";

import Image from "next/image";
import Feature from "./Feature";
import TopCard from "./TopCard";
import Header from "./Header";
import TopMix from "./TopMix";

type Props = {};

const Middle = (props: Props) => {
  return (
    <div className="bg-gradient-to-b from-[#13005A] via-[#121212] to-[#121212] w-full  ">
      <Header />
      <div className="pb-16 px-8">
        <TopCard />
        <Feature />
        <TopMix />
      </div>
    </div>
  );
};

export default Middle;
