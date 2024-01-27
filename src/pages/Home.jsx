import React from "react";
import "../style/Home.css";
import HeaderHome from "../components/HeaderHome";
import IntroductionHome from "../components/IntroductionHome";
import CommonQuestionsHome from "../components/CommonQuestionsHome";

const Home = () => {
  return (
    <>
      <HeaderHome />
      <IntroductionHome/>
      <CommonQuestionsHome/>
    </>
  );
};

export default Home;
