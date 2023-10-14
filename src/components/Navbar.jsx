import React from "react";
import logo from "../assets/logo.png";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-3">
      <img className="w-1/5 text-white" src={logo} alt="Logo" />
      <ul className="flex text-white items-center justify-around md:w-1/4 w-[52%]">
        {["About BookAha", "SignUp", "EN"].map(
          (item) => {
            return (
              <li key={item}>
                <button className="text-white tracking-[2px] text-[12px] md:text-lg">{item}</button>
              </li>
            );
          }
        )}
      </ul>
        <Button 
      title={"Download App"}
      fontSize={"sm"}
      marginRight={4}
      padding={1}
      />
    </div>
  );
};

export default Navbar;
