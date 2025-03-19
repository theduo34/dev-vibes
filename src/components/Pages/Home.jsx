import React from 'react';
import {MyButton} from "../ui/button";

const Home = ({onClick}) => {
    return (
        <div
            className="w-full flex items-center justify-between flex-col md:flex-row gap-8 py-[8%]">
            <div className="w-full md:w-[40%] flex flex-col items-start justify-center md:justify-start gap-2">
                <h3
                  className="w-full flex flex-col items-start justify-center text-2xl lg:text-4xl font-semibold">
                    <span className={"font-mono"}>Hi, I'm</span>
                    <span className="font-mono pt-2">Emmanuel Somuah.</span>
                </h3>
                <p className="text-start max-w-2xl mt-2">
                    A fullstack developer passionate about problem-solving,
                    collaboration, and innovation. I craft clean, user-friendly
                    experiences that drive engagement and business success.
                </p>

                <div className="flex items-center font-semibold pt-8  gap-8">
                    <MyButton title={'See my works'} onClick={onClick}/>
                </div>
            </div>

            <div className="flex items-center justify-center rounded-full border-animate">
                <img
                  className="rounded-full w-96 h-96"
                  src="/images/profilepics/picture2%20(2).png"
                  alt="Profile"
                />
            </div>
        </div>
    );
};

export default Home;
