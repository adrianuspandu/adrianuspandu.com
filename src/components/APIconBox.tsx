import Image from "next/image";
import Behance from "/public/icons/behance.svg";
import Dribbble from "/public/icons/dribbble.svg";
import Github from "/public/icons/github.svg";
import LinkedIn from "/public/icons/linkedin.svg";
import Link from "next/link";

export default function APIconBox() {
  const icons = [
    {
      src: LinkedIn,
      name: "LinkedIn",
      href: "https://www.linkedin.com/in/adrinuspnduw/",
    },
    { src: Github, name: "Github", href: "https://github.com/adrianuspandu" },
    {
      src: Behance,
      name: "Behance",
      href: "https://www.behance.net/adrianuspandu",
    },
    {
      src: Dribbble,
      name: "Dribbble",
      href: "https://dribbble.com/pwicaksono",
    },
  ];

  const iconItems = icons.map((icon) => {
    return (
      <Link
        key={icon.name}
        href={icon.href}
        target="_blank"
        className="p-3 border-2 border-black rounded-xl w-[48px] brutal bg-background"
      >
        <Image src={icon.src} alt={`${icon.name} icon`} />
      </Link>
    );
  });
  
  return <div className="inline-flex flex-row gap-4">{iconItems}</div>;
}
