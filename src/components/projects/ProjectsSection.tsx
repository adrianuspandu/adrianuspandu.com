import ProjectCards from "./ProjectCards";

export default function ProjectsSection() {
    return (
        <section id="projects-section" className="flex flex-col">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                <ProjectCards />
            </div>
        </section>
    )
}