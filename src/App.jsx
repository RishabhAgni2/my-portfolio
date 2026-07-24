import Navbar from "./components/layout/Navbar";
import Hero from "./components/sections/Hero";

function App() {
  return (
    <div className="bg-bg text-text-primary min-h-screen">
      <Navbar />
      <Hero />
      {/* About, Skills, Timeline, Projects, Achievements, Contact, Footer
          will be added in upcoming phases */}
    </div>
  );
}

export default App;