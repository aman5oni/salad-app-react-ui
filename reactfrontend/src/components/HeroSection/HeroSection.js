import React from "react";
import "./HeroSection.css";
import LeftVector from "../../assets/images/LeftVector.png";

const HeroSection = () => {
  return (
    <div className="heroSectionContainer">
      <div className="leftContainer">
        <img className="imageMain" src={LeftVector} alt="Left Vector" />
        {/* <div className="text1">Text 1</div>
        <div className="text2">Text 2</div>
        <div className="text3">Text 3</div>
        <div className="text4">Text 4</div>
        <div className="text5">Text 5</div> */}
      </div>
      <div className="rightContainer">
        <div className="headingMain">Salad Help You Lose Weight .</div>
        <p className="paragraphMain">
          Salad is one of the popular friendly foods.you can prepare a salad in
          different ways when trying to lose weight. Salads are loaded with
          fibre
        </p>
        <div className="buttonMain">Order Now</div>
      </div>
    </div>
  );
};

export default HeroSection;
