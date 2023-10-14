import React from "react";

const Button = ({ padding, title, marginRight, fontSize, type }) => {
  return (
    <button
    type={type}
      className={`text-${
        ["20px"] || fontSize
      } text-black bg-white border p-${padding} text-center mr-${
        0 || marginRight
      }`}
    >
      {title}
    </button>
  );
};

export default Button;
