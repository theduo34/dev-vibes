import React from "react";

export const AboutCard = ({ title, description, icon,  className = "" }) => {
  return (
    <div
      className={`relative p-4 lg:p-12 rounded-2xl bg-slate-900/[0.8] backdrop-blur-xl shadow-lg transition-transform translate-y-1 hover:scale-110 duration-300 hover:shadow-2xl hover:border-purple-400 overflow-hidden bg-[linear-gradient(90deg,rgba(4,7,29,1),0%,rgba(12,14,35,1),100%)] ${className}`}
    >
      <div className="relative z-10 flex items-center space-x-4">
        <div className="p-3 rounded-full bg-purple-100 text-4xl text-purple-600 shadow-sm">{icon}</div>
        <h4 className="text-lg md:text-xl font-semibold">
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
