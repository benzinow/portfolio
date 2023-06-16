import React from "react";
import "./App.css";
import Header from "./components/Header";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Bio from "./components/Bio";

function App() {
  return (
    <div className="App">
      <Header />
      <Bio />
      <Portfolio />
      <Contact id="contact" /> {/* Add the id attribute */}
      <Footer />
    </div>
  );
}

export default App;
