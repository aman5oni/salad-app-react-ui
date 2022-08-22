import React from "react";
import "./HomePage.css";
import SaladMainImg from "../../assets/images/SaladMainImg.png";

const HomePage = () => {
  return (
    <div className="homePageContainer">
      <div className="headingContainer">
        <h1 className="HeadingMain">Vegetables Are Must On A Diet.</h1>
      </div>
      <div className="horizontalLine"></div>
      <div className="paragraphContainer">
        <p className="pagagraph">
          Studies suggest that eating freash. healthy food triggers an in a
          built in cue in the brain to eat varied and balanced diet soo
          replacing unhealthy processed foods. Studies suggest that eating fresh
          healthy triggers an in a built in cue in the brain to eat a a varied
          and balanced.
        </p>
      </div>
      <div className="imageMainContainer">
        <div className="imageSubContainer">
          <img src={SaladMainImg} alt="SaladImage" />
        </div>
      </div>
      <div className="buttonContainer">Order Now</div>
    </div>
  );
};

export default HomePage;
