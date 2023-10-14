import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative bg-heroSection bg-auto bg-no-repeat h-screen">
        <Navbar />
        <div className="relative">
          <div className="w-[330px] bg-black md:w-1/5 h-[290px]bg-black text-white absolute md:right-52 top-20">
            <h1 className="font-bold text-4xl relative left-32">
              Share thoughts from books you love
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
