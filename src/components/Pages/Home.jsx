import React from 'react';
import {FadeButton} from "../ui/button";

const Home = ({onClick}) => {
    const handleResumeClick = () => {
        window.open(
          "https://drive.google.com/file/d/1gNPEfSf05GFnpXTLHfQpEQBwrzhxqsO8/view?usp=drive_link",
          "_blank",
          "noopener,noreferrer"
        );
    };

    return (
        <div
            className="w-full flex items-center justify-between flex-col md:flex-row gap-8 py-[8%]">
            <div className="w-full md:w-[40%] flex flex-col items-start justify-center md:justify-start gap-2">
                <h3
                  className="w-full flex flex-col items-start justify-center text-2xl lg:text-4xl font-semibold">
                    <span className={"font-mono"}>Hey there 👋, I'm</span>
                    <span className="font-mono pt-2">Emmanuel Somuah.</span>
                </h3>
                <p className="text-start max-w-2xl mt-2">
                    A fullstack developer passionate about problem-solving,
                    collaboration, and innovation. I craft clean, user-friendly
                    experiences that drive engagement and business success.
                </p>

                <div className="w-full flex items-center justify-between font-semibold pt-8 gap-0 lg:gap-8">
                    <FadeButton title={"See my works"} onClick={onClick} />
                    <FadeButton title={'See my resume'} onClick={handleResumeClick}/>
                </div>
            </div>

            <div className="flex items-center justify-center w-96 h-96 rounded-full overflow-hidden">
                <img
                  className="w-full h-full"
                  src="/images/profilepics/img.png"
                  alt="Profile"
                />
            </div>
        </div>
    );
};

export default Home;
