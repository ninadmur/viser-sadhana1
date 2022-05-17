import React from "react";

const Button = ({ onTap, color, label, selected }) => {
  return (
    <button
      onClick={onTap}
      className={`${color} ${
        selected == label && "bg-[#FFCF2E]"
      } border-2 w-36 py-2 font-bold`}
    >
      {label}
    </button>
  );
};

export default Button;
