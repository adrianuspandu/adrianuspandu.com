export default function ProjectHeaderSection() {
    return (
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
    )
}