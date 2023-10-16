import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [colourChange, setColourChange] = useState(false);

useEffect(() => {
  const handleNavColour = () => {
    if (window.scrollY >= 80) {
      setColourChange(true);
    } else {
      setColourChange(false);
    }
  };

  window.addEventListener("scroll", handleNavColour);

  return () => {
    window.removeEventListener("scroll", handleNavColour); 
  };
}, [colourChange]);


  return (
    <div
      className={`flex items-center justify-around pt-3 fixed w-full flex-wrap z-10 ${
        colourChange ? "bg-black" : "bg-inherit"
      }`}
    >
      <img className="w-1/5 text-white" src={logo} alt="Logo" />
      <ul className="flex text-white items-center justify-around lg:w-1/4 w-[40%]">
        {["About", "SignUp", "EN"].map((item) => {
          return (
            <li key={item}>
              <button className="text-white tracking-[2px] text-[14px] md:text-xl">
                {item}
              </button>
            </li>
          );
        })}
      </ul>
      <Button title={"Download App"} fontSize={"sm"} padding={6} />
    </div>
  );
};

export default Navbar;
