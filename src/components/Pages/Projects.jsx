import {ProjectCard} from "../ui/project";


const myProjects = [
  {
    id: 'jybek',
    title: "Jybek Beauty App",
    description: "A platform connecting beauty service providers and clients for stress-free appointments. Used for service advertising, appointment booking, location-based search, and flexible scheduling.",
    liveSiteUrl: "https://jybek.com",
    projectImage: 'jybek',
    technologies: ["react", "tailwind", "typescript", "nodejs", "mongodb"],
  },
  {
    id: 'kofcityJobCenter',
    title: "Kofcity Job Center",
    description: "A job search platform tailored to job seekers and employers in Koforidua and beyond. User for job listings, applications, and tailored career recommendations. ",
    liveSiteUrl: "https://kofcity-job-center.com",
    projectImage: 'jybek',
    technologies: ["react", "tailwind", "typescript", "nodejs", "mongodb"],
  },
  {
    id: "we'dens",
    title: "We'dens Dental App",
    description: "A Java-based application that connects clients to dental centers and offers dental health tips. Improved accessibility to dental care and promoted better dental hygiene practices",
    liveSiteUrl: "https://jybek.com",
    projectImage: 'wedens',
    technologies: ["java", "javafx", "mongodb"],
  },
]
const Projects = () => {
  return(
    <div className="w-full flex flex-col justify-center items-start py-[4%]">
      <h3 className={"items-center leading-normal font-mono text-2xl lg:text-4xl"}>
       <span className={"font-semibold leading-tight"}>
         Let's tour <span className={"text-purple-400"}>my projects</span>
       </span>
      </h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pt-8">
        {
          myProjects.map((project) => (
            <ProjectCard
              id={project.id}
              title={project.title}
              description={project.description}
              liveSiteUrl={project.liveSiteUrl}
              projectImage={project.projectImage}
              technologies={project.technologies}
            />
          ))
        }
      </div>

    </div>
  )
}
export default Projects;