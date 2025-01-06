import React from "react";
import Customimgs from "./CustomImgs";

export default function MainSection() {
  const iamegs = [
    "images/foodsimg/img_1.jpg",
    "images/foodsimg/img_2.jpg",
    "images/foodsimg/img_3.jpg",
    "images/foodsimg/img_4.jpg",
    "images/foodsimg/img_5.jpg",
    "images/foodsimg/img_6.jpg",
    "images/foodsimg/img_7.jpg",
    "images/foodsimg/img_8.jpg",
    "images/foodsimg/img_9.jpg",
  ];
  return (
    <>
      <div className="section main">
        <div className="cart texts">
          <h1 className="title">What Are We About</h1>
          <p className="info">
            "Welcome to COOKINGHUB - your ultimate destination for exploring,
            discovering, and creating mouthwatering recipes! Whether you're a
            seasoned chef or a kitchen novice, This platform has something for
            everyone. <br />
            <br />
            Search for recipes by cuisine, ingredients, or dietary preferences,
            and discover step-by-step guides to make every meal a masterpiece.
            From quick weeknight dinners to elaborate gourmet creations,
            COOKINGHUB is here to inspire your culinary journey. <br />
            <br />
            Start exploring today and turn your kitchen into a hub of delicious
            possibilities!"
          </p>
          <button className="btn">Explore now</button>
        </div>
        <div className="cart images">
          {iamegs.map((src, index) => (
            <Customimgs key={index} imgsrc={src} pt={"75%"} />
          ))}
        </div>
      </div>
    </>
  );
}
