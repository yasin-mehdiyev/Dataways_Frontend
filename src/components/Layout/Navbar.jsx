import React, { useState } from 'react';

// Redux
import { useSelector } from 'react-redux';

// React-Icons
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

// Components
import LanguageSwitcher from '../LanguageSwitcher';
import DarkModeSwitcher from '../DarkModeSwitcher';

// Helpers
import { languageSwitchers } from '../../helpers/constants';

const Navbar = () => {
    const isDarkMode = useSelector((state) => state.mode.darkMode);
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
        setIsOpen(!isOpen);
    };

  return (
    <>
      <div className={`w-[378px] sm:w-[698px] md:w-[1336px] h-[80px] sm:h-[80px] md:h-[111px] mx-auto flex justify-around items-center ${isDarkMode ? "bg-[#161616]" : "bg-[#ffffff]"} shadow-2xl mt-[12px] border rounded-[20px]`}>
        <div className="w-[86px] h-[37px] md:w-[115px] md:h-[50px] logo">
          <img className="text-full md:" src={`/assets/images/${!isDarkMode ? "logo_dataways_dark.svg" : "logo_dataways_light.svg"}`} alt="Dataways" />
        </div>
        <nav>
          <ul className="hidden md:flex gap-x-[93px] font-montserrat">
            <li>
              <a href='javascript:void(0);'>Haqqimizda</a>
            </li>
            <li>
              <a href="javascript:void(0);">Tədris proqramlari</a>
            </li>
            <li>
              <a href="javascript:void(0);"> Bizimlə Əlaqə</a>
            </li>
          </ul>
        </nav>
        <div className="hidden md:flex items-center gap-x-5">
          <LanguageSwitcher languages={languageSwitchers} />
          <DarkModeSwitcher />
        </div>
        <div onClick={handleClick} className="block md:hidden">
          {!isOpen ? (
            <AiOutlineMenu size={30} />
          ) : (
            <AiOutlineClose
              size={30}
              style={{ position: "absolute", top: "26", zIndex: "30" }}
            />
          )}
        </div>

        {/* mobile nav */}
        <nav
          className={`fixed top-0 left-0 w-full h-screen bg-white  transition-transform duration-1000 ${
            isOpen ? "transform translate-x-0" : "transform -translate-x-full"
          }`}
        >
          <div className="mt-4 md:mt-0 ml-10 md:ml-0 w-[86px] h-[37px] md:w-[115px] md:h-[50px]  mb-[80px] md:mb-0 logo">
            <img className="text-full md: " src={`/assets/images/${!isDarkMode ? "logo_dataways_dark.svg" : "logo_dataways_light.svg"}`} alt="Dataways" />
          </div>

          <ul className="px-10 uppercase font-montserrat">
            <li className="mt-5">
              <a href="javascript:void(0);">Haqqimizda</a>
            </li>
            <li className="mt-5">
              <a href="javascript:void(0);">Tədris proqramlari</a>
            </li>
            <li className="mt-5">
              <a href="javascript:void(0);"> Bizimlə Əlaqə</a>
            </li>
          </ul>

          <div className="flex flex-col gap-x-5 mt-5 px-10  md:hidden">
            <LanguageSwitcher languages={languageSwitchers} />
            <DarkModeSwitcher />
          </div>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
