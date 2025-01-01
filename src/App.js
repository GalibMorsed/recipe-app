import React from "react";
import Navbar from "./component/navbar";
import MainSection from "./component/mainSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container main">
        <MainSection />
      </div>
    </div>
  );
}

export default App;
