import { projectsData } from "../../data/projectsData";
import APProjectCard from "../APProjectCard";

export default function ProjectCards() {
    const projectCards = projectsData.map((projectData) => {
    return (
      <APProjectCard
        key={projectData.name}
        name={projectData.name}
      />
    );
  });

    return projectCards
}