import React, { useState, useEffect } from "react";

// Translation
import { useTranslation } from "react-i18next";

// Redux
import { useDispatch, useSelector } from "react-redux";
import { handleOpen } from "../../store/features/navbar/navbarSlice";

// React-Icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// React-Scroll
import { Link } from "react-scroll";

// Components
import LanguageSwitcher from "../LanguageSwitcher";
import DarkModeSwitcher from "../DarkModeSwitcher";

// Helpers
import { languageSwitchers } from "../../helpers/constants";
import { navbarRoutes } from "../../helpers/navbarRoutes";

const Navbar = () => {
  const dispatch = useDispatch();
  const { t: translate } = useTranslation();
  const isDarkMode = useSelector((state) => state.mode.darkMode);
  const isOpenNavbar = useSelector((state) => state.navbar.isOpen);
  const [isFixed, setIsFixed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 130) {
        setIsFixed(true);
      } else {
        setIsFixed(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const handleClick = () => {
    dispatch(handleOpen(!isOpenNavbar));
  };

  return (
    <>
      <div
        className={`navbar__wrapper h-[80px] sm:h-[80px] md:h-[111px] ${
          !isFixed ? "mt-[12px]" : "fixed__navbar_animate"
        } flex justify-center items-center`}
        id="navbar__scroll_to_top"
      >
        <div
          className={`w-[90%] h-[80px] sm:h-[80px] md:h-[111px] mx-auto flex justify-around items-center ${
            isDarkMode ? "bg-[#161616]" : "bg-[#ffffff]"
          } ${
            isFixed ? "fixed__navbar" : ""
          } border rounded-[20px] shadow-[5px 5px 8px 0px #231F200A] shadow-[-5px -5px 8px 0px #0000000A]`}
        >
          <div className="w-[86px] h-[37px] md:w-[115px] md:h-[50px] logo">
            <img
              className="text-full md:"
              src={`/assets/images/${
                !isDarkMode
                  ? "logo_dataways_dark.svg"
                  : "logo_dataways_light.svg"
              }`}
              alt="Dataways.az"
            />
          </div>
          <nav>
            <ul className="hidden md:flex gap-x-[93px] m-0 font-montserrat navbar__menu">
              {navbarRoutes.length &&
                navbarRoutes.map(({ id, name, url }) => {
                  return (
                    <li key={id}>
                      <Link
                        className={`text-[#161616] no-underline ${
                          isDarkMode ? "active__dark" : ""
                        }`}
                        to={url || ""}
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        {translate(name)}
                      </Link>
                    </li>
                  );
                })}
            </ul>
          </nav>
          <div className="hidden md:flex items-center gap-x-5">
            <LanguageSwitcher languages={languageSwitchers} />
            <DarkModeSwitcher />
          </div>
          <div onClick={handleClick} className="block md:hidden">
            {!isOpenNavbar ? (
              <AiOutlineMenu size={30} />
            ) : (
              <AiOutlineClose
                size={30}
                style={{ position: "fixed", top: "26", zIndex: "50", cursor: "pointer" }}
              />
            )}
          </div>

          {/* mobile nav */}
          <nav
            className={`fixed top-0 left-0 w-full h-screen transition-transform duration-1000 ${
              isOpenNavbar
                ? "transform translate-x-0"
                : "transform -translate-x-full"
            } z-40 ${isDarkMode ? "bg__dark__active" : "bg__light__active"}`}
          >
            <div className="mt-6 md:mt-0 ml-10 md:ml-0 w-[86px] h-[37px] md:w-[115px] md:h-[50px]  mb-[80px] md:mb-0 logo">
              <img
                className="text-full md: "
                src={`/assets/images/${
                  !isDarkMode
                    ? "logo_dataways_dark.svg"
                    : "logo_dataways_light.svg"
                }`}
                alt="Dataways.az"
              />
            </div>

            <ul className="px-10 uppercase font-montserrat navbar__menu">
              {navbarRoutes.length &&
                navbarRoutes.map(({ id, name, url }) => {
                  return (
                    <li className="mt-5" key={id}>
                      <Link
                        className={`${isDarkMode ? "active__dark" : ""}`}
                        to={url || ""}
                        spy={true}
                        smooth={true}
                        offset={-150}
                        duration={500}
                      >
                        {translate(name)}
                      </Link>
                    </li>
                  );
                })}
            </ul>

            <div className="flex flex-col gap-x-5 mt-5 px-10  md:hidden">
              <span>
                <DarkModeSwitcher />
              </span>
              <span className="mt-5">
                <LanguageSwitcher languages={languageSwitchers} />
              </span>
            </div>
          </nav>
        </div>
      </div>
    </>
  );
};

export default Navbar;
