import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Projects from "./components/Projects";
import AIWork from "./components/AIWork";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-dark-950 text-dark-200">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <AIWork />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
