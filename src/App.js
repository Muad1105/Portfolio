import React, { Suspense } from "react";
import "./App.css";
import Homepage from "./components/Homepage";
import About from "./components/about/About";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Contact from "./components/contact/Contact";
import Head from "./components/head/Head";
import Body from "./components/body/Body";
import Footer from "./components/footer/Footer";
import ScrollToTop from "./components/scrollToTop/ScrollToTop";
// import {}

function App() {
  return (
    <div className="App">
      <Suspense fallback="loading">
        <Nav />
        <Head />
        <About />
        <Skills />
        <Body />
        <Contact />
        <Footer />
        <ScrollToTop />
      </Suspense>
    </div>
  );
}

export default App;
