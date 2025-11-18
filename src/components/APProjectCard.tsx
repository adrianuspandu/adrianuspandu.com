"use client";

import { projectsData } from "../../data/projectsData";
import Image from "next/image";
import APLink from "./APLink";
import { useEffect, useState } from "react";
import { FirebaseService } from "../utils/FirebaseService";

interface APProjectCardProps {
  name: string;
}

export default function APProjectCard({ name }: APProjectCardProps) {

  const [myImage, setMyImage] = useState("");

  const projectData: Project = projectsData.find((project) => project.name === name);

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

  // Get image from Firebase Storage
  useEffect(() => {
    const imgSrc = async () => {
      const imageURL = await FirebaseService.getImageURL(projectData.img);
      setMyImage(imageURL);
    };
    imgSrc();
  }, [projectData.img]);


  return (
    <div className="bg-background w-xs xl:w-sm flex flex-col gap-6 border-2 border-black rounded-md shadow-[4px_4px_black] py-3 px-4">
      {myImage && (
        <Image
          className="object-cover w-full h-[240px] rounded-md"
          src={myImage}
          width={250}
          height={250}
          alt={name}
        />
      )}
      <h3 className="font-bold text-xl lg:text-3xl">{projectData.title}</h3>
      <p className="text-md lg:text-xl text-grayText">
        {projectData.description}
      </p>
      <div className="flex flex-row flex-wrap gap-2">{projectTags}</div>
      <APLink
        href={projectData.href}
        className="bg-secondary mt-auto"
        opensInNewTab={projectData.opensInNewTab}
      >
        Go to project
      </APLink>
    </div>
  );
}
