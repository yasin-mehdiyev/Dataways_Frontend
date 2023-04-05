import React, { useState } from "react";
// Redux
import { useSelector } from "react-redux";
// Components
import Navbar from "../../components/Layout/Navbar";
import Input from "../../components/Layout/Input";
import Section from "../../components/Layout/Section";
import Button from "../../components/Layout/Button";
import Box from "../../components/Layout/Box";
import Card from "../../components/Layout/Card";
import LanguageSwitcher from "../../components/LanguageSwitcher";
import DarkModeSwitcher from "../../components/DarkModeSwitcher";
import SpecialitiesBoard from "../../components/SpecialitiesBoard";
import EducationBoard from "../../components/EducationBoard";
import LessonBoard from "../../components/LessonBoard";
import SocialAccountsBoard from "../../components/SocialAccountsBoard";
// Translation
import { useTranslation } from "react-i18next";
// React-icons
import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";
// Utilities
import {
  languageSwitchers,
  specialities,
  socialMediaAccounts,
} from "../../helpers/constants";
import { educationBoard } from "../../helpers/educationBoard";
import ScrollToTop from "../../components/ScrollToTop";

const Home = () => {
  const { t: translate } = useTranslation();
  const isDarkMode = useSelector((state) => state.mode.darkMode);

  const [activeEducationIndex, setActiveEducationIndex] = useState(
    educationBoard[0].id
  );

  const hanleChangeEducation = (id) => {
    if (id !== activeEducationIndex) {
      setActiveEducationIndex(id);
    }
  };

  const findActiveEducationMore = educationBoard?.find(
    (education) => education.id === activeEducationIndex
  );
  const { moreInfo } = findActiveEducationMore;

  return (
    <>
      {/* <Navbar /> */}

      {/*  START ------ Landing Section -------- START */}
      <Section wrapperClassName="landing__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="landing__boxer">
                <h1>
                  <span>{translate("app_landing_title_text")}</span> <br />
                  <span>{translate("app_landing_title_content")}</span>
                </h1>
                <p>{translate("app_landing_content")}</p>
                <div className="contact__us__btn">
                  <Button content={translate("app_contact_us")} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <SpecialitiesBoard specialities={specialities} />
            </div>
            <div className="col-lg-12 d-none d-lg-flex justify-content-lg-center align-items-center">
              <div className="mt-80">
                <ScrollToTop handleClick={() => window.scrollTo({top: 600, left: 0, behavior: 'smooth'})} icon={<AiOutlineArrowDown />} />
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/*  END ------ Landing Section -------- END */}

      {/*  START ------ About Section -------- START */}
      <Section wrapperClassName="about__us">
        <div className="container">
          <div className="row">
            <div className="order-2 col-lg-5 order-lg-1 d-flex align-items-center">
              <div className="image__wrapper">
                <img src="/assets/images/about_us.gif" alt="Dataways.az" />
              </div>
            </div>
            <div className="order-1 col-lg-6 offset-lg-1 order-lg-2">
              <div className="about__us__content">
                <h2 className={`${isDarkMode ? "color__light" : ""}`}>
                  {translate("app_about_title")}
                </h2>
                <p>
                  {" "}
                  <span>{translate("app_about_content_up")}</span> <br />
                  <span>{translate("app_about_content_middle")}</span> <br />
                  <span>{translate("app_about_content_down")}</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/*  END ------ About Section -------- END */}

      {/* START ------ Education Section -------- START  */}
      <Section wrapperClassName="education__programs">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 mb-4">
              <h2 className="education__programs__title">
                {translate("app_education_programs_title")}
              </h2>
            </div>
          </div>

          <div className="row mb-5">
            {educationBoard.length &&
              educationBoard.map(({ id, name }) => {
                return (
                  <div
                    className="col-lg-4 mb-3"
                    key={id}
                    onClick={() => hanleChangeEducation(id)}
                  >
                    <EducationBoard
                      lessonId={id}
                      lesson={name}
                      activeLessonIndex={activeEducationIndex}
                    />
                  </div>
                );
              })}
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Box>
                <div className="more__info__wrapper">
                  <div className="more__info__item">
                    <h4>{translate(moreInfo?.generalInfo?.title)}</h4>
                    <Card>
                      <span
                        className={`info ${isDarkMode ? "color__light" : ""}`}
                      >
                        {translate(moreInfo?.generalInfo?.description)}
                      </span>
                    </Card>
                  </div>
                  <div className="more__info__item">
                    <h4>{translate(moreInfo?.studyDuration?.description)}</h4>
                    <Card>
                      <span
                        className={`info ${isDarkMode ? "color__light" : ""}`}
                      >
                        {translate(moreInfo?.studyDuration?.description)}
                      </span>
                    </Card>
                  </div>
                  <div className="more__info__item">
                    <h4>{translate(moreInfo?.studyPlan?.title)}</h4>
                    <Card>
                      <ul className="education__list">
                        {moreInfo?.studyPlan?.lessonList?.length &&
                          moreInfo?.studyPlan?.lessonList?.map(
                            ({ id, name }) => {
                              return <LessonBoard key={id} name={name} />;
                            }
                          )}
                      </ul>
                    </Card>
                  </div>
                </div>
              </Box>
            </div>
          </div>
        </div>
      </Section>
      {/* END ------ Education Section -------- END  */}

      {/* Start------Contact Section----------Start */}
      <Section wrapperClassName="contact__wrapper">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h2 className="head__title">{translate("app_contact_us")}</h2>
            </div>
          </div>

          <Box>
            <div className="row">
              <div className="col-lg-5">
                <form className="form__input">
                  <Input
                    type="text"
                    placeholder={translate("app_contact_name")}
                  />
                  <Input
                    type="text"
                    placeholder={translate("app_contact_surname")}
                  />
                  <Input
                    type="text"
                    placeholder={translate("app_contact_phone_or_mail")}
                  />
                  <textarea
                    placeholder={translate("app_contact_help")}
                    rows={7}
                    className={`${ isDarkMode ? "bg__dark" : "" }`} />
                  <div className="text-center">
                    <Button
                      content={translate("app_contact_send_us")}
                      handleClick={(e) => e.preventDefault()}
                    />
                  </div>
                </form>
              </div>
              <div className="col-lg-7">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="contact__title">
                      <h2>
                        <span>{translate("app_contact_us_question_one")} </span>
                        <span>
                          {" "}
                          {translate("app_contact_us_question_last")}
                        </span>
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row mt-4 sm:mt-0">
                  <div className="col-lg-12 d-flex justify-content-center align-items-center">
                    <span className="text-gray-400 text-[16px] font-medium">
                      {translate("app_contact_us_find_us")}
                    </span>
                  </div>
                </div>
                <div className="row mt-4 d-flex justify-content-center align-items-center">
                  {socialMediaAccounts.length &&
                    socialMediaAccounts.map((item) => {
                      return <SocialAccountsBoard key={item.id} {...item} />
                    })}
                </div>
              </div>
            </div>
          </Box>
        </div>
      </Section>
      {/* START ------ Contact Section ---------- START */}

      {/* START ------ ScrollToTop Section ---------- START */}
      <Section wrapperClassName="scroll__to__top__wrapper d-none d-lg-flex">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 d-flex justify-content-end">
              <ScrollToTop handleClick={() => window.scrollTo({top: 0, left: 0, behavior: 'smooth'})} icon={<AiOutlineArrowUp />} />
            </div>
          </div>
        </div>
      </Section>
      {/* END ------ ScrollToTop Section ---------- END */}

      {/*  START ------ Footer Section -------- START */}
      <Box>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 d-none d-lg-flex align-items-center justify-content-center">
                <img
                  src={`/assets/images/logo_footer_${
                    isDarkMode ? "dark" : "light"
                  }.svg`}
                  alt="Dataways.az"
                />
              </div>
              <div className="col-lg-6 d-flex align-items-center justify-content-center">
                <span>© Dataways.az</span>
              </div>
              <div className="col-lg-3">
                <div className="d-none d-lg-flex align-items-center justify-content-center">
                  <span className="mr-3">
                    <LanguageSwitcher languages={languageSwitchers} />
                  </span>
                  <span>
                    <DarkModeSwitcher />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </Box>
      {/*  END ------ Footer Section -------- END */}
    </>
  );
};

export default Home;
