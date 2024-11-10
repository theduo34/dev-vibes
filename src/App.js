import React, { useState, useEffect, useRef } from 'react';
import { Col, Row } from "antd";
import Home from "./components/Pages/Home";
import { useNavigate } from "react-router-dom";

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home');
    const mobileMenuRef = useRef(null);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuListedItems = [
        { label: 'Home', key: 'home', children: <Home /> },
        { label: 'About', key: 'about', children: "About" },
        { label: 'Projects', key: 'projects', children: "Projects" },
        { label: 'Contact', key: 'contact', children: "Contact" }
    ];

    const handleMenuClick = (key) => {
        setActiveItem(key);
        setIsMobileMenuOpen(false);

        let path = "";
        if (key === 'home') path = "/";
        else if (key === 'about') path = "/about";
        else if (key === 'projects') path = "/projects";
        else if (key === 'contact') path = "/contact";

        navigate(path);
    };

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

    return (
        <>
            <nav className="shadow-md px-4 md:px-16">
                <div className="mx-auto px-2 sm:px-6 lg:px-16 ">
                    <div className="relative flex h-16 items-center">
                        <div className="flex items-center mr-16">
                            {/* Logo */}
                            <div className="flex items-center font-bold uppercase">
                               <span className={"text-blue-400"}> Emma</span>nuel.
                            </div>
                        </div>

                        {/* Desktop menu items pushed to the right */}
                        <div className="hidden sm:flex flex-1 items-center sm:items-stretch ml-16">
                            <div className="flex space-x-4">
                                {menuListedItems.map((item) => (
                                    <div
                                        key={item.key}
                                        className={`rounded-md px-4 py-1.5 text-md font-medium cursor-pointer ${
                                            activeItem === item.key ? 'items-center shadow-lg' : 'hover:text-blue-600 hover:text-shadow-md'
                                        }`}
                                        onClick={() => handleMenuClick(item.key)}
                                    >
                                        {item.label}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Let's Talk button for desktop */}
                        <div className="hidden md:block items-center px-3 py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-md hover:shadow-md">
                            <button>Let's Talk</button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="absolute inset-y-0 right-0 flex items-center sm:hidden">
                            <button
                                type="button"
                                className="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded={isMobileMenuOpen}
                                onClick={toggleMobileMenu}
                            >
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Mobile menu */}
                {isMobileMenuOpen && (
                    <div
                        className="absolute top-16 left-0 w-full z-10 bg-gray-800"
                        ref={mobileMenuRef}
                    >
                        <div className="space-y-1 px-2 pb-3 pt-2">
                            {menuListedItems.map((item) => (
                                <div
                                    key={item.key}
                                    className={`block rounded-md px-3 py-2 text-base font-medium cursor-pointer ${
                                        activeItem === item.key ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                    }`}
                                    onClick={() => handleMenuClick(item.key)}
                                >
                                    {item.label}
                                </div>
                            ))}

                            {/* Let's Talk button for mobile */}
                            <div className="block md:hidden mt-4 px-3 py-2 text-center font-semibold bg-blue-400 hover:bg-blue-500 hover:shadow-md rounded-md">
                                <button>Let's Talk</button>
                            </div>
                        </div>
                    </div>
                )}
            </nav>

            <Row>
                <Col span={24}>
                    <Col
                        sm={{ span: 24 }}
                        md={{ span: 20, offset: 2 }}
                        className="items-center p-2 md:p-4"
                    >
                        {menuListedItems.map((item) => (
                            activeItem === item.key && (
                                <div key={item.key}>
                                    {item.children}
                                </div>
                            )
                        ))}
                    </Col>
                </Col>
            </Row>
        </>
    );
};

export default App;
