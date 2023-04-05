import React from 'react';
// Redux
import { useSelector } from 'react-redux';

const ScrollToTop = ({ handleClick, icon }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <>
      <span className={`scroll__to__top__item ${ isDarkMode ? "active__dark__mode" : "" }`} onClick={handleClick}>{icon}</span>
    </>
  )
}

export default ScrollToTop
