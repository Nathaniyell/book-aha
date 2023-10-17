import {BrowserRouter as Router, Link} from 'react-router-dom'
import React, { useEffect, useState } from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  const [colourChange, setColourChange] = useState(false);

  const handleNavColour = () => {
    if (window.scrollY >= 80) {
      setColourChange(true);
    } else {
      setColourChange(false);
    }
  };
useEffect(() => {
handleNavColour()
  window.addEventListener("scroll", handleNavColour);

  return () => {
    window.removeEventListener("scroll", handleNavColour); 
  };
}, [colourChange]);


  return (
    <Router>
    <div
      className={`flex items-center justify-around pt-3 fixed w-full flex-wrap z-10 ${
        colourChange ? "bg-black" : "bg-inherit"
      }`}
    >
      <img className="w-1/5 text-white" src={logo} alt="Logo" />
      <ul className="flex text-white items-center justify-around lg:w-1/4 w-[40%]">
        {["About", "SignUp", "EN"].map((item) => {
          return (
            <Link to={`/${item}`} key={item}>
              <button className="text-white tracking-[2px] text-[14px] md:text-xl">
                {item}
              </button>
            </Link>
          );
        })}
      </ul>
      <Button title={"Download App"} fontSize={"sm"} padding={6} />
    </div>
    </Router>
  );
};

export default Navbar;
