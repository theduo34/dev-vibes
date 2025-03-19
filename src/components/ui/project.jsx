export const ProjectCard = (
  {
    id,
    title,
    description,
    liveSiteUrl,
    projectImage,
    technologies
  }) => {
  return (
    <div
      key={id}
      className="left-1/2 top-1/2 p-4 flex justify-start items-start rounded-2xl shadow-[0_8px_16px_rgb(0_0_0/0.4)]
      border border-white/[0.1] group-hover/pin:border-white/[0.2] transition duration-700 overflow-hidden"
    >
      <div className="relative z-50">
        <div className="relative flex items-center justify-center h-full mb-10">
          <div className="relative w-full h-full overflow-hidden rounded-xl bg-[#13162d]">
            <img
              alt={title}
              loading="lazy"
              width="552"
              height="330"
              decoding="async"
              src={`/images/projects/${projectImage}.png`}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        <h3 className="font-bold lg:text-2xl md:text-xl text-base line-clamp-1">
         <span className={"font-mono"}> {title}</span>
        </h3>
        <p className="lg:text-xl lg:font-normal font-light text-sm line-clamp-2 text-balance flex flex-wrap">
          {description}
        </p>

        <div className="flex items-center justify-between mt-7 mb-3">
          <div className="flex items-center">
            {technologies.map((tech, index) => (
              <div
                key={tech}
                className="border border-white/[0.1] rounded-full bg-black lg:w-10 lg:h-10 w-8 h-8 flex justify-center items-center"
                style={{ transform: `translateX(-${index * 10}px)` }}
              >
                <img
                  alt={tech}
                  width="80"
                  height="80"
                  decoding="async"
                  className="p-2 w-auto h-auto"
                  src={`images/technologies/${tech}.png`}
                />
              </div>
            ))}
          </div>

          <div className="text-purple-400">
            <a
              className="flex items-center gap-2 text-purple lg:text-lg md:text-xs text-sm"
              href={liveSiteUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Check Live Site
              <svg
                stroke="currentColor"
                fill="currentColor"
                strokeWidth="0"
                viewBox="0 0 448 512"
                color="#CBACF9"
                className="text-purple-400"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M429.6 92.1c4.9-11.9 2.1-25.6-7-34.7s-22.8-11.9-34.7-7l-352 144c-14.2 5.8-22.2 20.8-19.3 35.8s16.1 25.8 31.4 25.8H224V432c0 15.3 10.8 28.4 25.8 31.4s30-5.1 35.8-19.3l144-352z"></path>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
