import React from "react";
import "./Navigation.css";
import logoIcon from "../../assets/icons/AS-Foods.png";
const Navigation = () => {
  return (
    <div className="navigationContainer">
      <img className="imageLogo" src={logoIcon} alt="logoIcon" />
      <div className="menuItemsContainer">
        <div className="homeButton active">Home</div>
        <div className="aboutButton">About</div>
        <div className="testimonialsButton">Testimonials</div>
      </div>
      <div className="shopNowButton">Shop Now</div>
    </div>
  );
};

export default Navigation;
