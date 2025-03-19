import React from 'react';
import {FaMedium, FaLinkedin, FaGithub, FaEnvelope} from 'react-icons/fa';

export const Socials = () => {
  return (
    <div className="flex items-center space-x-4">
      <a
        href="mailto:emmsom506@gmail.com"
        className="p-2 rounded-full shadow-md bg-red-500 text-white"
        aria-label="Email"
      >
        <FaEnvelope size={20}/>
      </a>
      <a
        href="https://medium.com/@tHEDUO34"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full shadow-md bg-black text-white"
      >
        <FaMedium size={20}/>
      </a>
      <a
        href="https://www.linkedin.com/in/somuah-emmanuel-66111a1b9/"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full shadow-md bg-blue-700 text-white"
      >
        <FaLinkedin size={20}/>
      </a>
      <a
        href="https://github.com/theduo34"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-full shadow-md bg-gray-800 text-white"
      >
        <FaGithub size={20}/>
      </a>
    </div>
  );
};

