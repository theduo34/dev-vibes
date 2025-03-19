import React, { useState, useEffect, useRef } from "react";
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import { FadeButton } from "./components/ui/button";
import Experience from "./components/Pages/Experience";
import About from "./components/Pages/About";
import ContactMe from "./components/Pages/ContactMe";

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const mobileMenuRef = useRef(null);

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (mobileMenuRef.current && !mobileMenuRef.current.contains(event.target)) {
                setIsMobileMenuOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [mobileMenuRef]);

    const scrollTo = (sectionName) => {
        const section = document.getElementById(sectionName);
        if (section) {
            section.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
      <div className="relative w-full min-h-screen bg-[linear-gradient(90deg,rgba(4,7,29,1),rgba(12,14,35,1))] text-white m-0 p-0 overflow-hidden">

          {/* Full-Screen Background Grid */}
          <div className="absolute inset-0 pointer-events-none z-0">
              {/* Horizontal Lines (Bigger Spacing) */}
              {[...Array(1000)].map((_, i) => (
                <div
                  key={`h-${i}`}
                  className="absolute w-full border-t border-gray-800 opacity-15"
                  style={{ top: `${(i + 1) * 5}%` }}
                ></div>
              ))}
              {/* Vertical Lines (Bigger Spacing) */}
              {[...Array(1000)].map((_, i) => (
                <div
                  key={`v-${i}`}
                  className="absolute h-full border-l border-gray-800 opacity-15"
                  style={{ left: `${(i + 1) * 5}%` }}
                ></div>
              ))}
          </div>

          {/* Navbar */}
          <nav className="shadow-md w-full px-4 lg:px-[14%] fixed top-0 z-50 border-b border-gray-700 bg-opacity-50 backdrop-blur-md">
              <div className="w-full flex items-center justify-between h-20">
                  <div className="flex items-center font-bold text-lg uppercase">
                      <span className="text-purple-400">Emma</span>nuel.S
                  </div>
                  <FadeButton title={"Let's talk"} onClick={() => scrollTo("contactMe")} />
              </div>
          </nav>

          {/* Page Content */}
          <div className="relative w-full items-center px-4 lg:px-[14%] pt-24 z-10">
              <section id="home">
                  <Home onClick={() => scrollTo("projects")} />
              </section>
              <section id={"about"}>
                  <About />
              </section>
              <section id="projects">
                  <Projects />
              </section>
              <section id={"experience"}>
                  <Experience />
              </section>
              <section id={"contactMe"}>
                  <ContactMe />
              </section>
          </div>

      </div>
    );
};

export default App;
