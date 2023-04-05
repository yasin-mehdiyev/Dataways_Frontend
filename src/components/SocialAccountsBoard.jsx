import React from "react";
// Redux
import { useSelector } from "react-redux";

const SocialAccountsBoard = ({ icon, content, url }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <div className="col-lg-6">
      <div className="social__item">
        <div className="social__item__wrap justify-content-center justify-content-lg-start">
          <i>{icon}</i>
          <a href={url} target={ url ? "_blank" : "_self" } className={`${ isDarkMode ? "color__light" : "color__dark" }`}>{content}</a>
        </div>
      </div>
    </div>
  );
};

export default SocialAccountsBoard;
