import Image from "next/image";
import { projectsData } from "../../../../data/projectsData";
import Link from "next/link";
import backArrow from "../../../../public/icons/back-arrow.svg"

export default async function ProjectItemPage({ params }) {
  const { slug } = await params;
  const { default: Post } = await import(`../../content/${slug}.mdx`);

  const projectData = projectsData.find((project) => project.name === slug);
  
    const projectTags = projectData.tags.map((tag) => {
      return (
        <span
          key={tag}
          className="p-3 border-2 border-black rounded-md text-xs font-bold"
        >
          {tag}
        </span>
      );
    });

  return (
    <div className="w-xl mx-auto">
      <section>
        <h1 className="font-bold text-6xl mb-4">
            Lorem Ipsum
        </h1>
        <div className="flex flex-row flex-wrap gap-3">
            {projectTags}
        </div>
      </section>
      <article className="mt-10">
        <Link href="/projects"><Image className="inline mr-2" src= {backArrow}/>Back to all projects</Link>
        <Post />
      </article>
    </div>
  );
}

export function generateStaticParams() {
  return [{ slug: "test" }, { slug: "about" }];
}

export const dynamicParams = true;
