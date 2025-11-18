import React from "react"
import APProjectCard from "../APProjectCard"

export default function HighlightedProjectsSection() {
    return (
        <section id="highlighted-projects" className="flex flex-col px-8 pb-20">
            <div className="border-4 border-black bg-yellowAccent rounded-lg inline-block mx-auto mb-8">
                <h2 className="text-2xl lg:text-4xl text-background text-center font-display font-bold px-6 py-3">
                    Highlighted Projects
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mx-auto gap-4">
                <APProjectCard name="jukeboxd" />
                <APProjectCard name="adrianuspandu" />
                <APProjectCard name="museum-lumina" />
            </div>
        </section>
    )
}