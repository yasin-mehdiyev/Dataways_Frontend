import React from "react";

const EducationBoard = ({ lessonId, lesson, activeLessonIndex }) => {
  return (
    <>
      <div className={`education__item ${ lessonId === activeLessonIndex ? "active" : "" }`}>
        <span>{lesson}</span>
      </div>
    </>
  );
};

export default EducationBoard;
