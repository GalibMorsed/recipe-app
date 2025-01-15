import React from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import LogPage from "./navPages/logPage";
import Navbar from "./homeComponents/navbar";
import Home from "./navPages/home";
import Footer from "./homeComponents/footer";
import Recipes from "./navPages/recipes";
import Settings from "./navPages/settings";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container main">
        <Routes>
          <Route path="/logPage" element={<LogPage />} />
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />
          <Route path="/settings" element={<Settings />} />
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
