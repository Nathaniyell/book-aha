import React from "react";

const Button = ({ title, fontSize, type="submit" }) => {
  return (
    <button
    type={type}
      className={`text-sm md:text-${fontSize} text-black p-1 bg-white border md:p-3 text-center`}
    >
      {title}
    </button>
  );
};

export default Button;
