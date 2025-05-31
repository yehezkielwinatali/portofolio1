import ThemeToggle from "../components/ThemeToggle";
import StarBackground from "../components/StarBackground";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import About from "../components/About";
import Skills from "../components/Skills";
import Projects from "../components/Projects";
import Footer from "../components/Footer";
import Contact from "../components/Contact";
import GreetingAlert from "../components/GreetingAlert";
import { useState } from "react";

const Home = () => {
  const [showGreeting, setShowGreeting] = useState(true);
  const closeGreeting = () => {
    setShowGreeting(false);
  };
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {showGreeting && <GreetingAlert onClose={closeGreeting} />}
      {/* Theme Toggle */}
      <ThemeToggle />

      {/* Background Effects */}
      <StarBackground />
      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <HeroSection />
      <About />
      <Skills />
      <Projects />
      <Contact />
      {/* Footers */}
      <Footer />
    </div>
  );
};

export default Home;
