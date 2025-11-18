import { projectsData } from "/data/projectsData.ts";
import APProjectCard from "../../components/APProjectCard";

export const metadata = {
  title: "Pandu's Projects",
  description:
    "See all of Adrianus Pandu's Projects in Web Development and Design",
  openGraph: {
    title: "Pandu's Projects",
    description:
      "See all of Adrianus Pandu's Projects in Web Development and Design",
    url: "https://adrianuspandu.vercel.app/projects",
    siteName: "Adrianus Pandu",
    type: "website",
  },
};

export default function Projects() {
  const projectCards = projectsData.map((projectData) => {
    return (
      <APProjectCard
        key={projectData.name}
        name={projectData.name}
      />
    );
  });
  return (
    <>
      <section
        id="heading"
        className="[background-image:radial-gradient(circle_at_2px_2px,var(--dottedGrid)_2px,transparent_0)] [background-size:30px_30px] pb-10 mb-5"
      >
        <div className="max-w-lg text-center mx-auto pt-30 lg:pt-40 px-4">
          <h1 className="font-display font-bold text-4xl lg:text-6xl mb-4">
            Projects
          </h1>
          <p className="text-sm lg:text-base">
            Here you can find some projects that I've worked on throughout my
            learning journey. Feel free to explore and I hope you find these
            projects to be interesting.
          </p>
        </div>
      </section>

      <section id="projects-section" className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
          {projectCards}
        </div>
      </section>
    </>
  );
}
