import React, { useEffect } from "react";
// Multi_Language in React
import i18next from "i18next";
// Cookie
import Cookies from "universal-cookie";
// Redux
import { useSelector } from "react-redux";
// Utilities
import { defaultLanguage } from "../helpers/constants";

const LanguageSwitcher = ({ languages }) => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);
  const cookies = new Cookies();

  useEffect(() => {
    cookies.set("lang", defaultLanguage);
  }, []);

  const handleSwitchLanguage = (e) => {
    const { target } = e;
    i18next.changeLanguage(target.value);
    cookies.set("lang", target.value);
  };

  const selectedLang = cookies.get("lang");

  return (
    <>
      <select
        className={`w-[51px] h-[48px] border rounded-[20px] flex ${
          isDarkMode ? "bg__dark" : ""
        }`}
        value={selectedLang}
        onChange={handleSwitchLanguage}
      >
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
