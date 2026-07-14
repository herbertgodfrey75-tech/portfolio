import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";

import { useEffect } from "react";
import AOS from "aos";

function App() {
  useEffect(() => {
  AOS.init({
    duration: 1000,
    once: true,
  });
}, []);
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
      <BackToTop />
    </>
  );
}

export default App;