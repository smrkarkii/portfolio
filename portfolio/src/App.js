import "./App.css";
import "./css/style.css";

import Navbar from "./components/Navbar";
import Project from "./components/Projects";
import Skills from "./components/Skills";
import Intro from "./components/Intro";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Intro />
      <About />
      <Project />
      <Skills />

      <Contact />
      <Footer />
    </>
  );
}

export default App;
