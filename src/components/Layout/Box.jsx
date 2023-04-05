import React from 'react';
// Redux
import { useSelector } from 'react-redux';

const Box = ({ children, customClass = "" }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <div className={`box__wrapper ${customClass} ${ isDarkMode ? "bg__dark" : "" }`}>
      { children }
    </div>
  )
}

export default Box;
