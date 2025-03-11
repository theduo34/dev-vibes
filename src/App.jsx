import React, { useState, useEffect, useRef } from 'react';
import Home from "./components/Pages/Home";
import Projects from "./components/Pages/Projects";
import {FadeButton} from "./components/ui/button";
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
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [mobileMenuRef]);

    const scrollTo = (sectionName) => {
        const section = document.getElementById(sectionName);
        if(section) {
            section.scrollIntoView({behavior: "smooth"});
        }
    }


    return (
      <div className={"w-full min-h-full bg-[linear-gradient(90deg,rgba(4,7,29,1),rgba(12,14,35,1))] text-white m-0 p-0 overflow-hidden"}>
          {/*<nav className="shadow-md px-4 md:px-16">*/}
          {/*    <div className="mx-auto px-6 lg:px-16 ">*/}
          {/*        <div className="relative flex h-16 items-center">*/}
          {/*            <div className="flex items-center mr-16">*/}
          {/*                /!* Logo *!/*/}
          {/*                <div className="flex items-center font-bold uppercase">*/}
          {/*                   <span className={"text-blue-400"}> Emma</span>nuel.S*/}
          {/*                </div>*/}
          {/*            </div>*/}

          {/*            /!* Desktop menu items pushed to the right *!/*/}
          {/*            /!*<div className="hidden sm:flex flex-1 items-center sm:items-stretch ml-16">*!/*/}
          {/*            /!*    <div className="flex space-x-4">*!/*/}
          {/*            /!*        {menuListedItems.map((item) => (*!/*/}
          {/*            /!*            <div*!/*/}
          {/*            /!*                key={item.key}*!/*/}
          {/*            /!*                onClick={() => scrollTo(item.key)}*!/*/}
          {/*            /!*                className={`relative rounded-md px-4 py-1.5 text-md font-medium cursor-pointer ${*!/*/}
          {/*            /!*                    activeItem === item.key ? 'items-center text-blue-500' : 'hover:text-blue-600 hover:text-shadow-md'*!/*/}
          {/*            /!*                }`}*!/*/}
          {/*            /!*            >*!/*/}
          {/*            /!*                {item.label}*!/*/}
          {/*            /!*            </div>*!/*/}
          {/*            /!*        ))}*!/*/}
          {/*            /!*    </div>*!/*/}
          {/*            /!*</div>*!/*/}

          {/*            /!* Let's Talk button for desktop *!/*/}
          {/*            <div className="flex mx-auto justify-end  items-center px-3 py-1 font-semibold border border-neutral-400 hover:bg-neutral-50 rounded-md hover:shadow-md">*/}
          {/*                <button>Let's Talk</button>*/}
          {/*            </div>*/}

          {/*            /!* Mobile menu button *!/*/}
          {/*            /!*<div className="absolute inset-y-0 right-0 flex items-center sm:hidden">*!/*/}
          {/*            /!*    <button*!/*/}
          {/*            /!*        type="button"*!/*/}
          {/*            /!*        className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"*!/*/}
          {/*            /!*        aria-controls="mobile-menu"*!/*/}
          {/*            /!*        aria-expanded={isMobileMenuOpen}*!/*/}
          {/*            /!*        onClick={toggleMobileMenu}*!/*/}
          {/*            /!*    >*!/*/}
          {/*            /!*        <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"*!/*/}
          {/*            /!*             stroke="currentColor" aria-hidden="true">*!/*/}
          {/*            /!*            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />*!/*/}
          {/*            /!*        </svg>*!/*/}
          {/*            /!*    </button>*!/*/}
          {/*            /!*</div>*!/*/}
          {/*        </div>*/}
          {/*    </div>*/}

          {/*    /!* Mobile menu *!/*/}
          {/*    /!*{isMobileMenuOpen && (*!/*/}
          {/*    /!*    <div*!/*/}
          {/*    /!*        className="absolute top-16 left-0 w-full z-10 bg-gray-800"*!/*/}
          {/*    /!*        ref={mobileMenuRef}*!/*/}
          {/*    /!*    >*!/*/}
          {/*    /!*        <div className="space-y-1 px-2 pb-3 pt-2">*!/*/}
          {/*    /!*            {menuListedItems.map((item) => (*!/*/}
          {/*    /!*                <div*!/*/}
          {/*    /!*                    key={item.key}*!/*/}
          {/*    /!*                    className={`block rounded-md px-3 py-2 text-base font-medium cursor-pointer ${*!/*/}
          {/*    /!*                        activeItem === item.key ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'*!/*/}
          {/*    /!*                    }`}*!/*/}
          {/*    /!*                >*!/*/}
          {/*    /!*                    {item.label}*!/*/}
          {/*    /!*                </div>*!/*/}
          {/*    /!*            ))}*!/*/}

          {/*    /!*            /!* Let's Talk button for mobile *!/*!/*/}
          {/*    /!*            <div className="block md:hidden mt-4 px-3 py-2 text-center font-semibold border hover:bg-blue-500 hover:shadow-md rounded-md">*!/*/}
          {/*    /!*                <button>Let's Talk</button>*!/*/}
          {/*    /!*            </div>*!/*/}
          {/*    /!*        </div>*!/*/}
          {/*    /!*    </div>*!/*/}
          {/*    /!*)}*!/*/}
          {/*</nav>*/}

          <nav className="shadow-md w-full px-4 lg:px-[12%] fixed top-0 z-50 border-b">
              <div className="w-full flex items-center justify-between h-20">
                  <div className="flex items-center font-bold text-lg uppercase">
                      <span className="text-purple-400">Emma</span>nuel.S
                  </div>
                  <FadeButton title={"Let's talk"} onClick={() => scrollTo('contactMe')}/>
              </div>
          </nav>

          <div
            className="w-full  items-center px-4 lg:px-[12%] pt-24">
              <section id="home" >
                  <Home onClick={() => scrollTo('projects')}/>
              </section>
              <section id={'about'}>
                  <About/>
              </section>
              <section id="projects" >
                  <Projects/>
              </section>
              <section id={'experience'}>
                  <Experience/>
              </section>
              <section id={'contactMe'}>
                  <ContactMe/>
              </section>
          </div>

      </div>
    );
};

export default App;
