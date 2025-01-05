import React from "react";
import Navbar from "./component/navbar";
import MainSection from "./component/mainSection";
import Section2 from "./component/section2";
import Section3 from "./component/section3";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <MainSection />
        <Section2 />
        <Section3 />
      </div>
    </div>
  );
}

export default App;
