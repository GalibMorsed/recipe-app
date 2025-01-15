import React from "react";
import { Link, useLocation } from "react-router-dom";

const FirstSection = () => {
  return (
    <div className="first-section">
      <div className="recipe-content">
        <h1>
          Choose from <br /> thousands of recipes
        </h1>
        <p>
          Appropriately integrate technically sound value with scalable
          infomediaries to negotiate sustainable strategic theme areas.
        </p>
        <Link to="/logPage" className="btn">
          SignUp Today
        </Link>
      </div>
      <div className="first-image"></div>
    </div>
  );
};

export default FirstSection;
