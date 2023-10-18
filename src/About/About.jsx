import React from "react";
import book1 from "../assets/book1.jpg";
import book2 from "../assets/book2.jpg";
import book3 from "../assets/book3.jpg";
import book4 from "../assets/book4.jpg";

const About = () => {
  return (
    <div className="absolute bg-signUp bg-contain flex flex-col md:flex-row justify-between items-center h-screen w-10/12 mx-auto p-4">
      <form action="" className="bg-white border border-1-black">
        <label htmlFor="firstName" className="font-bold mb-8 leading-6 text-gray-900">First Name</label>
        <input type="text" id="firstName" className="w-full mb-6 border border-2-black" />
        <label htmlFor="email" className="font-bold mb-8">Email</label>
        <input type="email" id="email" className="w-full border border-1-black" />
      </form>
    </div>
  );
};

export default About;
