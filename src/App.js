import React from "react";
import Navbar from "./component/navbar";
import MainSection from "./component/mainSection";
import Section2 from "./component/section2";
import Section3 from "./component/section3";
import Section4 from "./component/section4";
import Footer from "./component/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <MainSection />
        <Section2 />
        <Section3 />
        <Section4 />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
