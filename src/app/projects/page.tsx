import APProjectCard from "../../components/APProjectCard";
import ProjectCards from "../../components/projects/ProjectCards";
import ProjectHeaderSection from "../../components/projects/ProjectHeaderSection";
import ProjectsSection from "../../components/projects/ProjectsSection";
import { projectsData } from "../../data/projectsData";

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
  
  return (
    <>
      <ProjectHeaderSection />
      <ProjectsSection />
    </>
  );
}
