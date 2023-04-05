import React from 'react';
// Redux
import { useSelector } from 'react-redux';

const Card = ({ children }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <div className={`card__wrapper ${ isDarkMode ? "bg__dark dark__mode__border" : "" }`}>
      { children }
    </div>
  )
}

export default Card;
