"use client";
import { useEffect } from "react";
import Header from "./components/layout/header/Header";
import Hero from "./components/Hero";
import HeroTwo from "./components/HeroTwo";
import About from "./components/About";
import AboutTwo from "./components/AboutTwo";
import Description from "./components/Description";
import Plus from "./components/Plus";
import MenSection from "./components/MenSection";
import MentoringSection from "./components/MentoringSection";
import Missions from "./components/Missions";
import Contact from "./components/Contact";

export default function HomePage() {
  useEffect(() => {
    const storySection = document.getElementById("story");
    if (storySection) {
      storySection.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

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
      <div id="story">
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