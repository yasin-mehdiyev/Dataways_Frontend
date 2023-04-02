import React from "react";

export const Button = ({ content }) => {
  return (
    <button className="w-[215px] h-[48px] bg-black text-white rounded-[10px]">
      {content}
    </button>
  );
};

export default Button;
