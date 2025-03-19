import {AboutCard} from "../ui/about";


const cardsData = [
  {
    title: "Problem-Solver",
    description: "I thrive on tackling complex challenges, debugging issues, and building efficient solutions that make a real impact.",
    icon: "🧩",
  },
  {
    title: "Strong Communicator",
    description: "Whether it's explaining technical concepts, collaborating with teams, or writing clear documentation, I prioritize effective communication.",
    icon: "💬",
  },
  {
    title: "Team Player",
    description: "I enjoy working in agile environments, contributing to team success, and sharing knowledge to create better software together.",
    icon: "🤝",
  },
  {
    title: "Adaptable & Always Learning",
    description: "Technology evolves fast, and so do I. I'm always exploring new tools, frameworks, and best practices to stay ahead.",
    icon: "📚",
  },
  {
    title: "Accountable & Detail-Oriented",
    description: "I take ownership of my work, manage time effectively, and ensure that every line of code I write is clean, scalable, and maintainable.",
    icon: "✅",
  }
];

const About = () => {

  return(
    <div>
      <h3 className={"flex items-center justify-center md:justify-start leading-normal font-mono text-2xl lg:text-4xl"}>
       <span className={"font-semibold leading-tight"}>
         <span className={"font-mono"}>About  me;</span>
       </span>
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-8">
        {cardsData.map((card, index) => (
          <AboutCard key={index} {...card} />
        ))}
      </div>

    </div>
  )
}
export default About;