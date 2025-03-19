import projectPlaceholder from "/public/images/project-placeholder.jpg";
import { projectsData } from "../../../data/projectsData";
import Image from "next/image";
import BrutalLink from "./BrutalLink";

export default function ProjectCard({ name }) {
  const projectData = projectsData.find((project) => project.name === name);

  const projectTags = projectData.tags.map((tag) => {
    return (
      <span
        key={tag}
        className="p-3 border-2 border-black rounded-md text-xs lg:text-sm font-bold"
      >
        {tag}
      </span>
    );
  });
  return (
    <div className="w-xs xl:w-sm flex flex-col gap-6 border-2 border-black rounded-md shadow-[4px_4px_black] py-3 px-4">
      <Image
        className="object-cover w-full h-[240px] rounded-md"
        src={projectPlaceholder}
        alt={name}
      />
      <h3 className="font-bold text-xl lg:text-3xl">{projectData.title}</h3>
      <p className="text-md lg:text-xl text-grayText">{projectData.description}</p>
      <div className="flex flex-row flex-wrap gap-2">{projectTags}</div>
      <BrutalLink href={projectData.href} newTab={false} className="bg-secondary mt-auto">Learn more</BrutalLink>
    </div>
  );
}
