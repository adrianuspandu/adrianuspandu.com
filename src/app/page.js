import Image from "next/image";
import IconBox from "./components/IconBox";
import HeroImage from "/public/hero-image.svg";
import BrutalLink from "./components/BrutalLink";
import ProjectCard from "./components/ProjectCard";

export default function Home() {
  return (
    <>
      <section
        id="hero"
        className="flex flex-col md:flex-col-reverse lg:flex-row justify-center gap-10 mt-10 px-10 lg:px-30 items-center min-h-[80vh] mb-20"
      >
        <div className="max-w-lg">
          <h1 className="font-display text-4xl/12 xl:text-5xl/16 font-bold mb-7">
            Turn off your <span className="text-greenAccent">mind</span>,{" "}
            <span className="text-purpleAccent">relax</span>, and{" "}
            <span className="text-yellowAccent">take a scroll</span> ~
          </h1>
          <p className="mb-7 md:min-w-md">
            Hi, My name is Pandu! I'm a student at Aachen University of Applied
            Sciences, passionate about <strong>Frontend Web Development</strong>{" "}
            and <strong>UI/UX Design</strong>.
          </p>
          <div className="flex flex-wrap flex-row justify-center md:justify-start items-center gap-10">
            <IconBox />
            <BrutalLink href="/projects" newTab={false} className="bg-secondary">
              See projects
            </BrutalLink>
          </div>
        </div>
        <Image
          className="hidden md:block w-xs lg:w-sm xl:w-md"
          src={HeroImage}
          alt="running stickman, a ring to rule them all, coding symbol, film camera, bass headstock, pen tool, and a star"
        />
      </section>

      {/* HIGHLIGHTED PROJECTS */}
      <section id="highlighted-projects" className="flex flex-col px-8">
        <div className="border-4 border-black bg-yellowAccent rounded-lg inline-block mx-auto mb-8">
          <h2 className="text-2xl lg:text-4xl text-background text-center font-display font-bold px-6 py-3">
            Highlighted Projects
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
          <ProjectCard name="jukeboxd" />
          <ProjectCard name="my-mensa" />
          <ProjectCard name="museum-lumina" />
        </div>
      </section>
    </>
  );
}
