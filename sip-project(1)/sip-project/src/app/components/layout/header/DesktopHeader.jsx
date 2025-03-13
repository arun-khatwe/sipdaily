"use client";
import { useEffect, useState } from "react";

const DesktopHeader = () => {
  const [activeSection, setActiveSection] = useState("");

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      // Get the header height
      const headerHeight = document.querySelector(".fixed").offsetHeight;

      // Get the element's position relative to the viewport
      const elementPosition = section.getBoundingClientRect().top;

      // Get the current scroll position
      const offsetPosition =
        elementPosition + window.pageYOffset - headerHeight;

      // Scroll to the adjusted position
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });

      setActiveSection(id);
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      const sectionIds = [
        "home",
        "about",
        "men",
        "mentoring",
        "missions",
        "contact",
      ];

      // Find which section is currently in view
      const current = sectionIds.find((id) => {
        const section = document.getElementById(id);
        if (section) {
          const rect = section.getBoundingClientRect();
          // Adjust the detection point to account for header height
          const headerHeight = document.querySelector(".fixed").offsetHeight;
          return rect.top <= headerHeight && rect.bottom >= headerHeight;
        }
        return false;
      });

      if (current) {
        setActiveSection(current);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);

    // Run once on component mount to set initial active section
    handleScroll();

    // Cleanup function to remove event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="fixed flex justify-around items-center w-full bg-white py-2 shadow-md z-50">
      <div className="flex justify-center items-center gap-8 p-6">
        <ul className="flex space-x-8 border-b-2 border-gray-800 leading-loose font-serif text-xl xl:text-2xl xl:ml-32 text-red-500">
          <li
            className={`cursor-pointer ${
              activeSection === "home" ? "text-red-500" : ""
            }`}
            onClick={() => handleScrollToSection("home")}
          >
            Home
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "about" ? "text-red-500" : ""
            }`}
            onClick={() => handleScrollToSection("about")}
          >
            About Us
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "men" ? "text-red-500" : ""
            }`}
            onClick={() => handleScrollToSection("men")}
          >
            Men
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "mentoring" ? "text-red-500" : ""
            }`}
            onClick={() => handleScrollToSection("mentoring")}
          >
            Mentoring
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "missions" ? "text-red-500" : ""
            }`}
            onClick={() => handleScrollToSection("missions")}
          >
            Missions
          </li>
          <li
            className={`cursor-pointer ${
              activeSection === "contact" ? "text-red-500" : ""
            }`}
            onClick={() => handleScrollToSection("contact")}
          >
            Contact Us
          </li>
        </ul>
      </div>
      <div>
        <button className="bg-red-500 text-white p-4 mb-1">Join Us</button>
      </div>
    </div>
  );
};

export default DesktopHeader;
