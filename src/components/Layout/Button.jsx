import React from "react";
// Redux
import { useSelector } from "react-redux";
// React Scroll
import { Link } from "react-scroll";

export const Button = ({
  type = "button",
  content,
  handleClick = () => {},
  sectionName = "",
  isScrollToTop = false
}) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <button
      type={type}
      className={`w-[215px] h-[48px] rounded-[10px] ${
        isDarkMode ? "dark" : "light"
      }__mode__button`}
      onClick={handleClick}
    >
      {!isScrollToTop ? (
        content
      ) : (
        <Link to={sectionName || ""} offset={-150}>
          { content }
        </Link>
      )}
    </button>
  );
};

export default Button;
