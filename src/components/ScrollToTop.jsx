import React from "react";
// Redux
import { useSelector } from "react-redux";
// React-Scroll
import { Link } from "react-scroll";

const ScrollToTop = ({ sectionName, icon }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <>
      <Link
        className={`scroll__to__top__item ${
          isDarkMode ? "active__dark__mode" : ""
        }`}
        to={sectionName || ""}
        offset={-150}
      >
        {icon}
      </Link>
    </>
  );
};

export default ScrollToTop;
