import React from "react";
// Redux
import { useSelector } from "react-redux";
// React-Typical
import Typical from "react-typical";
// Translation
import { useTranslation } from 'react-i18next';

const SpecialitiesBoard = ({ specialities }) => {
    const { t: translate } = useTranslation();
    const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <div className="specialities">
      {specialities?.length &&
        specialities.map(({ id, name }) => {
            const _name = translate(name);
          return (
            <div key={id} className="specialities__item">
              <div className={`specialities__item__border ${isDarkMode ? "bg__light" : "bg__dark"}`}></div>
              <div className={`specialities__item__title ${isDarkMode ? "color__light" : "color__dark"}`}>
                <Typical
                  steps={["", 1000, _name, 4000]}
                  loop={Infinity}
                  wrapper="p"
                />
              </div>
            </div>
          );
        })}
    </div>
  );
};

export default SpecialitiesBoard;
