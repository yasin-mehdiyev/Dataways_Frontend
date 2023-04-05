import React from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import Button from "../../components/Layout/Button";
import Section from "../../components/Layout/Section";
import NavbarSimple from "../../components/Layout/NavbarSimple";
// React-Router-DOM(V6)
import { useNavigate } from "react-router-dom";
// React-Translate
import { useTranslation } from "react-i18next";

const NotFound = () => {
  const { t: translate } = useTranslation();
  const isDarkMode = useSelector((state) => state.mode.darkMode);
  const navigate = useNavigate();

  return (
    <>
      <NavbarSimple />
      <Section wrapperClassName="not__found__wrapper">
        <div className="error__image">
          <img src={`/assets/images/404_${ !isDarkMode ? "light" : "dark" }.svg`} alt="Dataways.az" />
        </div>
        <p className={`error__text ${ isDarkMode ? "color__light" : "" }`}>
          {translate("app_error_text")}
        </p>
        <div className="come__back">
          <Button content={translate("app_come_back_btn")} handleClick={() => navigate("/")} />
        </div>
      </Section>
    </>
  );
};

export default NotFound;
