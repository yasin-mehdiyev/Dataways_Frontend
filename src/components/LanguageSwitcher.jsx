import React from "react";
// Multi_Language in React
import i18next from 'i18next';
// Redux
import { useSelector } from "react-redux";

const LanguageSwitcher = ({ languages }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  const handleSwitchLanguage = (e) => {
    const { target } = e;
    i18next.changeLanguage(target.value);
  };

  return (
    <>
      <select className={`w-[51px] h-[48px] border rounded-[20px] flex ${ isDarkMode ? "bg__dark" : "" }`} onChange={handleSwitchLanguage}>
        {languages?.length &&
          languages.map(({ id, code, name }) => {
            return (
              <option key={id} value={code}>
                {name}
              </option>
            );
          })}
      </select>
    </>
  );
};

export default LanguageSwitcher;
