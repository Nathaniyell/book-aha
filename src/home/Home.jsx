import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative bg-heroSection bg-auto bg-no-repeat">
        <Navbar />
        <div className="flex place-content-end mr-20">
          <div className="w-[200px] h-[125px]  bg-black text-white relative">
            <h1 className="font-bold text-4xl absolute left-24">
              Share thoughts from <br /> <span>books you love </span>
            </h1>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
