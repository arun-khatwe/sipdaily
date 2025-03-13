import Image from "next/image";
import Hero from "./components/Hero";
import MenSection from "./components/MenSection";
import MentoringSection from "./components/MentoringSection";
import Missions from "./components/Missions";
import Contact from "./components/Contact";
import Header from "./components/layout/header/Header";
import HeroTwo from "./components/HeroTwo";
import About from "./components/About";
import AboutTwo from "./components/AboutTwo";
import Description from "./components/Description";
import Plus from "./components/Plus";

export default function HomePage() {
  return (
    <>
      <Header />
      <div id="home">
        <Hero />
      </div>
      <div id="hero-two">
        <HeroTwo />
      </div>
      <div id="about">
        <About />
      </div>
      <div>
        <AboutTwo />
      </div>
      <div>
        <Description />
      </div>
      <div>
        <Plus />
      </div>
      <div id="men">
        <MenSection />
      </div>
      <div id="mentoring">
        <MentoringSection />
      </div>
      <div id="missions">
        <Missions />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}
