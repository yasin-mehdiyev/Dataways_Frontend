import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorMode } from "../helpers/constants";
import { togglerDarkMode } from "../store/features/mode/modeSlice";

const DarkModeSwitcher = () => {
    const dispatch = useDispatch();
    const isDarkMode = useSelector((state) => state.mode.darkMode);

  useEffect(() => {
    if (isDarkMode) {
      document.body.style = `background: ${colorMode.DARK_MOOE}; color: ${colorMode.LIGHT_MODE} !important; transition: .7s`;
      return;
    }
    document.body.style = `background: ${colorMode.LIGHT_MODE}; transition: .7s`;
  }, [isDarkMode]);

  return (
    <div id="darkmode__wrapper">
      <input
        type="checkbox"
        id="darkmode__switcher"
        onChange={() => dispatch(togglerDarkMode(!isDarkMode))}
      />
      <label htmlFor="darkmode__switcher" style={ isDarkMode ? { borderColor: "rgb(255 255 255 / 50%)" } : { borderColor: "rgba(0, 0, 0, 0.5)" }}></label>
    </div>
  );
};

export default DarkModeSwitcher;
