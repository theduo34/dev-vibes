import React from 'react';



const Home = () => {
    return (
        <div className="w-full flex items-center justify-between flex-col md:flex-row gap-4 h-screen overflow-hidden">
            {/* col - name and description */}
            <div className="w-full md:w-[40%] flex flex-col items-start justify-center md:justify-start gap-1">
                <h3 className={"items-center text-md md:text-lg lg:text-2xl font-semibold"}>
                    Hi, I'm <span className={"text-blue-400"}>Emmanuel Somuah</span>
                </h3>
                <h4 className={"items-center font-semibold"}>
                    Fullstack Web Developer
                </h4>
                <p>
                    I am a passionate frontend developer with a love for technology and a drive for continuous learning.
                    I enjoy designing user-friendly interfaces with Figma and writing clean, efficient code. My attention
                    to detail, good time management, and strong communication skills help me deliver high-quality work.
                    I work well with others and thrive in team settings, always aiming to create solutions that meet business
                    needs and improve user experiences. My goal is to use my skills and passion for technology to make a positive
                    impact in the industry.
                </p>
                <div className="flex items-center font-semibold pt-8 md:pt-8 gap-8">
                    <button className={"px-3 py-2 bg-blue-500 rounded-md"}>
                        Hire me
                    </button>
                    <button className={"px-3 py-2 bg-blue-500 rounded-md"}>
                        See my project
                    </button>
                </div>
            </div>

            {/* col - profile image */}
            <div className="items-center">
            <img
                    className=" object-cover object-center"
                    src="/images/profilePicture.JPG"
                    alt="Profile"
                    style={{width: "600px", height: "600px"}}
                />
            </div>
        </div>
    );
};

export default Home;
