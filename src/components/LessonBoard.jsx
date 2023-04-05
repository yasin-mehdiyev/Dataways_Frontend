import React from "react";
// React-Translate
import { useTranslation } from "react-i18next";
// Redux
import { useSelector } from "react-redux";

const LessonBoard = ({ name }) => {
  const { t: translate } = useTranslation();
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <>
      <li className={`${ isDarkMode ? "dark__mode__icon" : "" }`}>
        <span>{translate(name)}</span>
      </li>
    </>
  );
};

export default LessonBoard;
