import Image from "next/image";
import { projectsData } from "../../../../data/projectsData";
import Link from "next/link";
import backArrow from "../../../../public/icons/back-arrow.svg";

export default async function ProjectItemPage({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/${slug}/${slug}.mdx`);

  const projectData = projectsData.find((project) => project.name === slug);

  const projectTags = projectData.tags.map((tag) => {
    return (
      <span
        key={tag}
        className="bg-background p-3 border-2 border-black rounded-md text-xs font-bold"
      >
        {tag}
      </span>
    );
  });

  return (
    <>
      <section className="[background-image:radial-gradient(circle_at_2px_2px,var(--dottedGrid)_2px,transparent_0)] [background-size:30px_30px] pt-30 lg:pt-40 pb-10 mb-5">
        <h1 className="font-bold text-5xl text-center md:text-6xl mb-8">
          {projectData.title}
        </h1>
        <div className="flex flex-row flex-wrap gap-3 justify-center">
          {projectTags}
        </div>
      </section>
      <article className="mt-10 max-w-xl mx-auto px-4">
        <Link className="underline hover:text-white" href="/projects">
          <Image className="inline mr-2" src={backArrow} />
          Back to all projects
        </Link>
        <Post />
      </article>
    </>
  );
}

export function generateStaticParams() {
  return [{ slug: "jukeboxd" }, { slug: "my-mensa" }];
}

export const dynamicParams = true;
