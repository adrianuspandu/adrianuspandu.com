import { projectsData } from "../../../data/projectsData";
import ProjectCard from "../components/ProjectCard";

export default function Projects() {
  const projectCards = projectsData.map((projectData) => {
    return <ProjectCard key={projectData.name} name={projectData.name} />;
  });
  return (
    <>
      <section id="heading" className="w-lg text-center mx-auto mt-15 mb-10">
        <h1 className="font-display font-bold text-6xl mb-4">Projects</h1>
        <p>
          Here you can find some projects that I've worked on throughout my
          learning journey. Feel free to explore and I hope you find these
          projects to be interesting.
        </p>
      </section>

      <section id="projects-section" className="flex flex-col">
        <div className="grid grid-cols-3 mx-auto gap-4">{projectCards}</div>
      </section>
    </>
  );
}
