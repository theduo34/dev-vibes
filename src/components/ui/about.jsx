import React from "react";

export const AboutCard = ({ title, description, icon,  className = "" }) => {
  return (
    <div
      className={`relative p-4 lg:p-8 rounded-xl border bg-opacity-80 backdrop-blur-lg shadow-lg transition-all duration-300 transform hover:-translate-y-1 hover:shadow-2xl hover:border-purple-400 overflow-hidden ${className}`}
    >
      <div className="relative z-10 flex items-center space-x-4">
        <div className="p-3 rounded-full bg-purple-100 text-4xl text-purple-600 shadow-sm">{icon}</div>
        <h4 className="text-lg md:text-xl font-semibold text-purple-400">
          <span className={"font-mono"}>
            {title}
          </span>
        </h4>
      </div>
      <p className="relative z-10 mt-3 text-sm md:text-md leading-relaxed">
        {description}
      </p>
    </div>
  );
};
