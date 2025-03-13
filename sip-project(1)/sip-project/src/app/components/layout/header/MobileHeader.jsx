"use client";
import { useState } from "react";

const MobileHeader = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleScrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
      setIsModalOpen(false); // Close menu after clicking
    }
  };

  return (
    <div className="fixed top-0 left-0 w-full bg-white shadow-md z-50 p-4 flex justify-end">
      <button className="text-3xl" onClick={toggleModal}>
        &#9776;
      </button>
      <div className="ml-6">
        <button className="bg-red-500 text-white p-4 mb-1">Join Us</button>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-end z-50">
          <div className="w-64 bg-white h-full p-4 relative">
            <button
              className="absolute top-4 right-4 text-3xl"
              onClick={toggleModal}
            >
              &times;
            </button>
            <ul className="space-y-4 mt-10">
              <li
                className="cursor-pointer"
                onClick={() => handleScrollToSection("home")}
              >
                Home
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleScrollToSection("about")}
              >
                About Us
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleScrollToSection("men")}
              >
                Men
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleScrollToSection("mentoring")}
              >
                Mentoring
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleScrollToSection("missions")}
              >
                Missions
              </li>
              <li
                className="cursor-pointer"
                onClick={() => handleScrollToSection("contact")}
              >
                Contact Us
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileHeader;
