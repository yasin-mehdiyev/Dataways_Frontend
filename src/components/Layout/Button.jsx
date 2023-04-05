import React from "react";
// Redux
import { useSelector } from "react-redux";

export const Button = ({ content, handleClick = () => {} }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <button className={`w-[215px] h-[48px] rounded-[10px] ${ isDarkMode ? "dark" : "light" }__mode__button`} onClick={handleClick}>
      {content}
    </button>
  );
};

export default Button;
