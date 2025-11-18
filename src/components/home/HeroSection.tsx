import Image from "next/image";
import APIconBox from "../APIconBox";
import APLink from "../APLink";
import HeroImage from "/public/hero-image.svg";

export default function HeroSection() {
    return (
        <section
            id="hero"
            className="flex flex-col md:flex-col-reverse lg:flex-row justify-center gap-10 pt-30 lg:pt-50 px-10 lg:px-30 items-center lg:items-start mb-40"
        >
            {/* Left Column */}
            <div className="max-w-lg">

                {/* Header */}
                <h1 className="font-display text-4xl/12 xl:text-5xl/16 font-bold mb-7">
                    Turn off your <span className="text-greenAccent">mind</span>,{" "}
                    <span className="text-purpleAccent">relax</span>, and{" "}
                    <span className="text-yellowAccent">take a scroll</span> ~
                </h1>

                {/* Subheader */}
                <p className="mb-7 md:min-w-md">
                    Hi, My name is Pandu! I'm an engineering student at Aachen
                    University of Applied Sciences, who is passionate about{" "}
                    <strong>iOS Development and Digital Product Design</strong>.
                </p>

                {/* Icons and Project Button */}
                <div className="flex flex-wrap flex-row justify-center md:justify-start items-center gap-10">
                    <APIconBox />
                    <APLink
                        href="/projects"
                        opensInNewTab={false}
                        className="bg-secondary"
                    >
                        See projects
                    </APLink>
                </div>
            </div>
            <Image
                className="hidden md:block w-xs lg:w-sm xl:w-md"
                src={HeroImage}
                alt="running stickman, a ring to rule them all, coding symbol, film camera, bass headstock, pen tool, and a star"
            />
        </section>
    )
}