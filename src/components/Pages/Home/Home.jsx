import React from 'react';
import { LinkedinOutlined, TwitterOutlined, MediumOutlined, InstagramOutlined } from '@ant-design/icons';

const Home = () => {
    return (
        <div
            className="w-full flex items-center justify-around flex-col md:flex-row gap-4 max-h-screen overflow-hidden">
            {/* col - name and description */}
            <div className="w-full md:w-[40%] flex flex-col items-start justify-center md:justify-start gap-1">
                <h3 className={"items-center text-2xl lg:text-4xl font-semibold"}>
                    Hi, I'm <span className={"text-blue-400"}>Emmanuel Somuah</span>
                </h3>
                <h4 className={"items-center font-semibold text-xl md:text-2xl"}>
                    Fullstack Web Developer
                </h4>
                <p>
                    I’m a passionate fullstack web developer with a love for creating user-friendly,
                    efficient designs and clean code. With a keen eye for detail, strong communication skills,
                    and a collaborative spirit, I deliver high-quality solutions that enhance user experiences and
                    align with business goals. Driven by a continuous desire to learn, I aim to make a positive
                    impact in the tech industry.
                </p>
                <div className="flex items-center font-semibold pt-8 md:pt-8 gap-8">
                    <div className={"px-3 py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-md hover:shadow-md"}>
                        <button>Hire Me</button>
                    </div>
                    <div className={"px-3 py-1 font-semibold bg-blue-400 hover:bg-blue-500 rounded-md hover:shadow-md"}>
                        <button>See my project</button>
                    </div>
                </div>
                {/* social handles */}
                <div className="items-center flex space-x-4 pt-4">
                    <p className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
                        <LinkedinOutlined/></p>
                    <p className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
                        <TwitterOutlined/></p>
                    <p className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
                        <MediumOutlined/></p>
                    <p className={"flex items-center justify-center p-2 rounded-full shadow-md bg-blue-400 border border-neutral-600"}>
                        <InstagramOutlined/></p>
                </div>
            </div>

            {/* Profile image with animated border */}
            <div className="flex items-center justify-center rounded-full border-animate">
                <img
                    className="rounded-full w-96 h-96"
                    src="/images/picture2%20(2).png"
                    alt="Profile"
                />
            </div>
        </div>
    );
};

export default Home;
