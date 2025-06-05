import { ExperienceCard } from "../ui/experience";

const experiences = [
  {
    title: "Doltech Ltd | Frontend Developer",
    description:
      "Designed and implemented the UI/UX for a cashless toll system, enhancing efficiency with IoT-powered solutions.",
    imageSrc: "frontend",
  },
  {
    title: "Kornel Growth Agency | Frontend Developer",
    description:
      "Built a secure investment platform for property and asset management, improving financial tracking for users.",
    imageSrc: "frontend",
  },
  {
    title: "Goodwill Systems | Fullstack Focus",
    description:
      "Built a user-friendly interface and integrated RTK Query for efficient and seamless data fetching.",
    imageSrc: "frontend",
  },
];

const Experience = () => {
  return (
    <div>
      <h3 className="flex items-center justify-center md:justify-start leading-normal font-mono text-2xl lg:text-4xl">
        <span className="font-semibold leading-tight">
          <span className="font-mono">My Work Experience</span>
        </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {experiences.map((experience, index) => (
          <ExperienceCard
            key={index}
            title={experience.title}
            description={experience.description}
            imageSrc={experience.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

export default Experience;
