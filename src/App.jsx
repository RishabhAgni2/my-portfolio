import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Skills from "./components/sections/Skills";
import Timeline from "./components/sections/Timeline";
import Projects from "./components/sections/Projects";


function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Timeline />
      <Projects />
      {/* About, Skills, Timeline, Projects, Achievements, Contact, Footer
          will be added in upcoming phases */}
    </div>
  );
}

export default App;