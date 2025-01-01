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
            CokingHub is a place where you can please your soul and tummy with
            delicious food recepies of all cuisine. And our service is
            absolutley free. So start exploring now.
          </p>
          <button className="btn">Explore now</button>
        </div>
        <div className="cart images">
          {iamegs.map((src, index) => (
            <Customimgs key={index} imgsrc={src} pt={"85%"} />
          ))}
        </div>
      </div>
    </>
  );
}
