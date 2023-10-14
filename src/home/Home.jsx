import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {

    const data = [
        {
        title: "Organize your thoughts",
        description: "Organise all the inspiration, ideas and lessons from books you’re reading.",
        img: "",
        smFlexDirection: "col",
        lgFlexDirection: "row"
    },
        {
        title: "Share your thoughts",
        description: "Send your thoughts on books and articles to a community of readers like yourself",
        img: "",
        smFlexDirection: "col-reverse",
        lgFlexDirection: "row-reverse"
    },
        {
        title: "Discover new content",
        description: "Find book reviews, new books, events and more exciting content curated for you.",
        img: "",
        smFlexDirection: "col",
        lgFlexDirection: "row"
    },
    ]
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
      <section className="bg-white w-11/12 mx-auto my-4 h-full">
        
      </section>
    </>
  );
};

export default Home;
