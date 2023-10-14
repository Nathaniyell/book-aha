import React from "react";
import Navbar from "../components/Navbar";
import img1 from "../assets/img1.png";
import img2 from "../assets/img2.png";
import img3 from "../assets/img3.png";
import FlexSection from "../components/FlexSection";
import Footer from "../components/Footer";

const Home = () => {
    const data = [
        {
          title: "Organize your thoughts",
          description:
            "Organise all the inspiration, ideas and lessons from books you’re reading.",
          img: img2,
          lgFlexDirection: false, 
          smFlexDirection: false, 
        },
        {
          title: "Share your thoughts",
          description:
            "Send your thoughts on books and articles to a community of readers like yourself",
          img: img1,
          smFlexDirection: "flex-col-reverse",
          lgFlexDirection: "flex-row-reverse",
        },
        {
          title: "Discover new content",
          description:
            "Find book reviews, new books, events and more exciting content curated for you.",
          img: img3,
          smFlexDirection: false, 
          lgFlexDirection: false, 
        },
      ];
      

  const sections = data.map((section) => {
    return (
      <FlexSection
      key={section.title}
        title={section.title}
        description={section.description}
        img={section.img}
        lgFlexDirection={section.lgFlexDirection}
        smFlexDirection={section.smFlexDirection}
      />
    );
  });
  return (
    <>
      <div className="relative bg-heroSection bg-auto bg-no-repeat h-screen">
        <Navbar />
        <div className="relative">
          <div className="w-[63%] bg-black md:w-1/4 text-white absolute top-24 md:top-20 right-52 p-2">
            <h1 className="font-bold w-full relative text-[30px]">
              <span className="relative -right-36">Share thoughts from</span>
              <br />
              <span className="relative -right-60">books you love</span>
            </h1>
          </div>
        </div>
      </div>
      <section className="bg-white w-11/12 mx-auto mt-10 md:mt-20 mb-4 h-full">
        {sections}
      </section>
      <Footer />
    </>
  );
};

export default Home;
