import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <>
      <div className="relative bg-heroSection bg-auto bg-no-repeat">
        <Navbar />
        <div className="flex ">
          <div className="w-[125px] h-[125px]  bg-black text-white">
            {" "}
            <h1>Share thoughts from books you love </h1>{" "}
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
