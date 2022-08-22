import React from "react";
import "./BestSalads.css";
import RightSalad from "../../assets/images/RightSalad.png";
import LeftSalad1 from "../../assets/images/LeftDownSalad1.png";
import LeftSalad2 from "../../assets/images/LeftDownSalad2.png";

const BestSalads = () => {
  return (
    <div className="mainSaladsContainer">
      <div className="saladHeadingContainer">Best Salads</div>
      <div className="bestSaladsContainer">
        <div className="leftSaladsContainer">
          <div className="leftSaladsUpContainer">
            <div className="saladsHeading">Chopped Raw Vegetables</div>
            <div className="saladsParagraph">
              Salad Greens Contain Vitamin A, Vitamin C beta-carotine calcium
              polate fibre and piroprotene . leafy vegatables are good for
              healthy diet
            </div>
          </div>
          <div className="leftSaladsDownContainer">
            <div className="leftSaladsDownLeftContainer">
              <img
                className="leftSaladImage1"
                src={LeftSalad1}
                alt="leftsalad1"
              />
            </div>
            <div className="leftSaladsDownRightContainer">
              <img
                className="leftSaladImage2"
                src={LeftSalad2}
                alt="leftsalad2"
              />
            </div>
          </div>
        </div>
        <div className="rightSaladsContainer">
          <img className="rightSaladImage" src={RightSalad} alt="rightsalad" />
        </div>
      </div>
      <div className="saladOrderNowButton">Order Now</div>
    </div>
  );
};

export default BestSalads;
