import React from "react";
// React-Translate
import { useTranslation } from "react-i18next";
// Redux
import { useSelector } from "react-redux";

const EducationBoard = ({ lessonId, lesson, activeLessonIndex }) => {
  const { t: translate } = useTranslation();
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <>
      <div className={`education__item ${ isDarkMode ? "dark__mode__education" : "" } ${ lessonId === activeLessonIndex ? `active ${ isDarkMode ? "dark__mode__active" : "" }` : "" }`}>
        <span>{translate(lesson)}</span>
      </div>
    </>
  );
};

export default EducationBoard;
