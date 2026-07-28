import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Projects from "./components/sections/Projects";
import Achievements from "./components/sections/Achievements";
import Contact from "./components/sections/Contact";

function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      <Achievements />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;