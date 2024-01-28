import React from "react";
import "../style/Home.css";
import HeaderHome from "../components/HeaderHome";
import IntroductionHome from "../components/IntroductionHome";
import CommonQuestionsHome from "../components/CommonQuestionsHome";
import ContainerCountries from "../containers/ContainerCountries";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <IntroductionHome/>
      <ContainerCountries/>
      <CommonQuestionsHome/>
    </>
  );
};

export default Home;
