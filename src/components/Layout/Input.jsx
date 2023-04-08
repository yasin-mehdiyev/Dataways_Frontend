import React from "react";
// Redux
import { useSelector } from "react-redux";

const Input = ({ type, name, placeholder, onChange, value = "" }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <input
      name={name}
      type={type}
      value={value}
      placeholder={placeholder}
      className={`${isDarkMode ? "bg__dark" : ""}`}
      onChange={(e) => onChange(e.target.name, e.target.value)}
    />
  );
};

export default Input;
