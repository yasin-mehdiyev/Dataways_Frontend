import React from "react";
// Components
import LanguageSwitcher from "../../components/LanguageSwitcher";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import SpecialitiesBoard from "../../components/SpecialitiesBoard";
// Translation
import { useTranslation } from "react-i18next";
// Utilities
import { languageSwitchers, specialities } from "../../helpers/constants";
import Navbar from "../../components/Layout/Navbar";

const Home = () => {
  const { t: translate } = useTranslation();

  return (
    <>

      <Navbar />

      {/* <div style={{ margin: "20px" }}>
        <LanguageSwitcher languages={languageSwitchers} />
      </div> */}

      <p>{translate("app_hello_world")}</p>
      <p>{translate("app_initial_key")}</p>

      <br />
      <br />

      <br />
      <br />

      <SpecialitiesBoard specialities={specialities} />

      <h1 className="text-3xl font-bold underline">Hello world!</h1>
    </>
  );
};

export default Home;
