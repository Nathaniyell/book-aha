import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import Button from "./Button";
import USA from "../assets/us.png";
import FR from "../assets/fr.png";
import ESP from "../assets/Mask.svg";

const Navbar = () => {
  const [colourChange, setColourChange] = useState(false);
  const [selectCity, setSelectCity] = useState("EN");

  const handleNavColour = () => {
    if (window.scrollY >= 40) {
      setColourChange(true);
    } else {
      setColourChange(false);
    }
  };

  useEffect(() => {
    handleNavColour();
    window.addEventListener("scroll", handleNavColour);

    return () => {
      window.removeEventListener("scroll", handleNavColour);
    };
  }, [colourChange]);

  const formSubmitHandler = (e)=>{
    e.preventDefault()
  }

  return (
    <div
      className={`py-3 md:py-0 pr-2 flex items-center justify-around pt-3 fixed w-full flex-wrap z-10 ${
        colourChange ? "bg-black" : "bg-inherit"
      }`}
    >
      <Link to="/">
        {" "}
        <img className="w-[40%] md:w-full text-white" src={logo} alt="Logo" />
      </Link>
      <ul className="flex text-white items-center justify-around lg:w-1/4 -ml-32 md:-ml-0 w-[45%]">
        {["About", "SignUp"].map((item) => {
          return (
            <Link to={`/${item}`} key={item}>
              <button className="text-white tracking-[2px] md:ml-0 text-[14px] md:text-xl hover:underline">
                {item}
              </button>
            </Link>
          );
        })}
        <div>
          <form onSubmit={formSubmitHandler}>
            <select name="language" value={selectCity} defaultValue="EN" onChange={e=>setSelectCity(e.target.value)} className={`text-white ${ colourChange ? "bg-black" : "bg-inherit"}`}>
              <option value="1">
                <img src={USA} alt="EN-US" className="block w-[400px]" />
                EN
              </option>
              <option value="2">
                <img src={FR} alt="FR" className="inline" />
                FR
              </option>
              <option value="3">
                <img src={ESP} alt="ESP" className="inline" />
                ESP
              </option>
            </select>
          </form>
        </div>
      </ul>
      <Button
        classes="hidden sm:block"
        title={"Download App"}
        fontSize={"sm"}
        padding={6}
      />
    </div>
  );
};

export default Navbar;
