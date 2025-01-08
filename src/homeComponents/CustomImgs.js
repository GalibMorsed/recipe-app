import React from "react";

export default function Customimgs({ imgsrc, pt }) {
  return (
    <div className="custom-img" style={{ paddingTop: pt }}>
      <img src={imgsrc} alt="" />
    </div>
  );
}
