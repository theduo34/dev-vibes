import React, { useState, useEffect, useRef } from 'react';
import { Col, Row } from "antd";
import Home from "./components/Pages/Home";
import {useNavigate} from "react-router-dom";

const App = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeItem, setActiveItem] = useState('home');
    const mobileMenuRef = useRef(null);
    const navigate = useNavigate();

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const menuListedItems = [
        { label: 'Home', key: 'home', children: <Home />},
        { label: 'About', key: 'about', children: "About"},
        { label: 'Projects', key: 'projects', children: "Projects"},
        { label: 'Contact', key: 'contact', children: "Contact"}
    ];

    const handleMenuClick = (key) => {
        setActiveItem(key);
        setIsMobileMenuOpen(false);

        let path = "";
        if(key === 'home') {
            path = "/";
        }
        else if (key === 'about') {
            path = "/about";
        }
        else if (key === 'projects') {
            path = "/projects";
        }
        else if (key === 'contact') {
            path = "/contact";
        }

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
            <nav className="bg-dev-950">
                <div className="mx-auto px-2 sm:px-6 lg:px-8">
                    <div className="relative flex h-16 items-center justify-between">
                        {/* Logo */}
                        <div className="flex items-center font-semibold  text-white">
                            ES
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
                                <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                                </svg>
                            </button>
                        </div>

                        <div className="flex flex-1 items-center justify-end sm:items-stretch sm:justify-end">
                            <div className="hidden sm:block">
                                <div className="flex space-x-4">
                                    {menuListedItems.map((item) => (
                                        <div
                                            key={item.key}
                                            className={`rounded-md px-4 py-2 text-sm font-medium cursor-pointer ${
                                                activeItem === item.key ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white'
                                            }`}
                                            onClick={() => handleMenuClick(item.key)}
                                        >
                                            {item.label}
                                        </div>
                                    ))}
                                </div>
                            </div>
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
                        </div>
                    </div>
                )}
            </nav>

            <Row>
                <Col span={24}>
                    <Col
                        sm={{ span: 24 }}
                        md={{ span: 16, offset: 4 }}
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
