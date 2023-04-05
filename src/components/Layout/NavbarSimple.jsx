import React from 'react';
// Redux
import { useSelector } from 'react-redux';
// Components
import Section from "./Section";
import Box from "./Box";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
// Utilities
import { languageSwitchers } from "../../helpers/constants";

const NavbarSimple = () => {
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  return (
    <Section wrapperClassName="navbar__error__page">
        <div className="container">
            <Box customClass={`custom__py__20 ${ isDarkMode ? "bg__dark" : "" }`}>
                <div className="row">
                    <div className="col-8 d-flex align-items-center">
                        <div className="logo">
                            <img src={`/assets/images/logo_dataways_${ !isDarkMode ? "dark" : "light" }.svg`} alt="Dataways.az" />
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="more__features">
                            <span>
                                <LanguageSwitcher languages={languageSwitchers} />
                            </span>
                            <span>
                                <DarkModeSwitcher />
                            </span>
                        </div>
                    </div>
                </div>
            </Box>
        </div>
    </Section>
  )
}

export default NavbarSimple
