import React from "react";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-3">
      <img className="w-1/5 text-white" src={logo} alt="Logo" />
      <ul className="flex text-white items-center justify-around md:w-1/4 w-[52%]">
        {["About BookAha", "SignUp", "EN"].map(
          (item) => {
            return (
              <li>
                <button className="text-white tracking-[2px] text-[12px]">{item}</button>
              </li>
            );
          }
        )}
      </ul>
      <button className="text-sm text-black bg-white border p-2 text-center mr-4">Download App</button>
    </div>
  );
};

export default Navbar;
