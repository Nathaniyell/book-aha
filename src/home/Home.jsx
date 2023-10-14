import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative bg-heroSection bg-auto bg-no-repeat h-screen">
        <Navbar />
        <div className="relative">
          <div className="w-[48%] bg-black md:w-1/4 text-white absolute top-24 md:top-20 right-52 p-2">
            <h1 className="font-bold w-full relative text-[30px]">
              <span className="relative -right-36">Share thoughts from</span> <br /><span className="relative -right-60">books you love</span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
