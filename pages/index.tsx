import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import Bottom from "../components/Bottom";
import Middle from "../components/Middle";
import Player from "../components/Player";
import Sidebar from "../components/Sidebar";

const Home: NextPage = () => {
  return (
    <div className="">
      <main className="flex">
        <Sidebar />
        <Middle />
      </main>
      {/* <Bottom /> */}
      <Player />
    </div>
  );
};

export default Home;
