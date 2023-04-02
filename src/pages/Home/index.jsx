import React, { useState } from "react";
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
// Translation
import { useTranslation } from "react-i18next";
// Utilities
import { languageSwitchers, specialities } from "../../helpers/constants";
import { educationBoard } from "../../helpers/educationBoard";

// icons

const Home = () => {
  const { t: translate } = useTranslation();

  const [activeEducationIndex, setActiveEducationIndex] = useState(educationBoard[0].id);

  const hanleChangeEducation = (id) => {
    if (id !== activeEducationIndex) {
      setActiveEducationIndex(id);
    }
  };

  const findActiveEducationMore = educationBoard?.find((education) => education.id === activeEducationIndex);
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
                  <span>Öyrənin, İnkişaf Edin, Uğura Yol Açın:</span> <br />
                  <span>Onlayn Dərsləriniz Üçün Etibarlı Seçim!</span>
                </h1>
                <p>
                  Dataways.az ailəsinə qoşulun və dünyanın hər yerindən
                  müəllimlər və sənaye ekspertləri ilə əməkdaşlıq etmək, yeni
                  bacarıqlar öyrənmək və uğurlu karyera qazanmaq şansını əldə
                  edin.
                </p>
                <div className="contact__us__btn">
                  <Button content={"Bizimlə Əlaqə"} />
                </div>
              </div>
            </div>
            <div className="col-lg-6 d-flex justify-content-center justify-content-lg-end">
              <SpecialitiesBoard specialities={specialities} />
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
                <h2>Haqqımızda</h2>
                <p>
                  {" "}
                  <span>
                    Dataways.az 2023-cü ildən etibarən Azərbaycanda fəaliyyət
                    göstərən online tədris platformasıdır. Biz, tələbələrimiz
                    üçün daha sərfəli kurs qiymətləri təklif etmək məqsədilə
                    dərslərimizi onlayn keçiririk. Bu, həm tələbələrimizin
                    dünyanın hər yerindən peşəkar müəllimlər tapmasına, həm də
                    bizim tələbələrimizi ölkə xaricindəki iş imkanlarına
                    yönləndirməyə imkan verir.
                  </span>{" "}
                  <br />
                  <span>
                    Dərslərimiz əsasən Proqramlaşdırma, Dizayn, Digital
                    Marketinq və İT sahələrində keçirilir. Tələbələrimizin
                    uğurlu karyeraya başlamağa və dünya miqyasında inkişaf
                    etməyə kömək etmək ən başlıca məqsədimizdir. Dataways.az,
                    sənədləşdirilmiş biliklər, təcrübəli müəllimlər və praktiki
                    təlimatlar təklif edərək hər tələbə üçün fərdi inkişaf
                    imkanları yaradır.
                  </span>{" "}
                  <br />
                  <span>
                    Dataways.az ailəsinə qoşulun və dünyanın hər yerindən
                    müəllimlər və sənaye ekspertləri ilə əməkdaşlıq etmək, yeni
                    bacarıqlar öyrənmək və uğurlu karyera qazanmaq şansını əldə
                    edin.
                  </span>
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
              <h2 className="education__programs__title">Tədris Proqramları</h2>
            </div>
          </div>

          <div className="row mb-5">
            {
              educationBoard.length && (
                educationBoard.map(({ id, name}) => {
                  return(
                    <div className="col-lg-4 mb-3" key={id} onClick={() => hanleChangeEducation(id)}>
                      <EducationBoard lessonId={id} lesson={name} activeLessonIndex={activeEducationIndex} />
                    </div>
                  )
                })
              )
            }
          </div>

          <div className="row">
            <div className="col-lg-12">
              <Box>
                <div className="more__info__wrapper">
                  <div className="more__info__item">
                      <h4>{moreInfo?.generalInfo?.title}</h4>
                      <Card>
                        <span className="info">{moreInfo?.generalInfo?.description}</span>
                      </Card>
                  </div>
                  <div className="more__info__item">
                      <h4>{moreInfo?.studyDuration?.description}</h4>
                      <Card>
                        <span className="info">{moreInfo?.studyDuration?.description}</span>
                      </Card>
                  </div>
                  <div className="more__info__item">
                      <h4>{moreInfo?.studyPlan?.title}</h4>
                      <Card>
                        <ul className="education__list">
                          {
                            moreInfo?.studyPlan?.lessonList?.length && (
                              moreInfo?.studyPlan?.lessonList?.map(({ id, name }) => {
                                return <LessonBoard key={id} name={name} />
                              })
                            )
                          }
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

      {/*  START ------ Footer Section -------- START */}
      <Box>
        <footer>
          <div className="container-fluid">
            <div className="row">
              <div className="col-lg-3 d-none d-lg-flex align-items-center justify-content-center">
                <img src="/assets/images/logo_footer.svg" alt="Dataways.az" />
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
