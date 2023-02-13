import React from "react";

import Header from "./components/Header";
import SideNav from "./components/SideNav";
import About from "./components/About";
import Resume from "./components/Resume";
import Portfolio from "./components/Portfolio";
import Footer from "./components/Footer";
import ContactUs from "./components/ContactUs";

import resumeData from "./resumeData";

const App = () => {
  return (
    <div className="App">
      <SideNav resumeData={resumeData} />
      <Header resumeData={resumeData} />
      <About resumeData={resumeData} />
      <Resume resumeData={resumeData} />
      <Portfolio resumeData={resumeData} />
      <ContactUs resumeData={resumeData} />
      <Footer resumeData={resumeData} />{" "}
    </div>
  );
};

export default App;
