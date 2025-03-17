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
          Lorem ipsum dolor sit amet consectetur. Tempus faucibus faucibus enim
          pretium rhoncus fames leo. Urna id tempor bibendum turpis libero vitae
          risus id.
        </p>
      </section>

      <section id="projects-section" className="flex flex-col">
        <div className="grid grid-cols-3 mx-auto gap-4">{projectCards}</div>
      </section>
    </>
  );
}
