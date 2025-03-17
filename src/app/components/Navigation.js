import BrutalNavLink from "./BrutalNavLink";

export default function Navigation() {
  return (
    <nav
      className="max-w-3xl flex flex-row justify-around pt-4 pb-6
        bg-background border-2 border-black rounded-xl shadow-[10px_10px_black] px-16 my-8 mx-auto"
    >
      <BrutalNavLink href="/">Home</BrutalNavLink>
      <BrutalNavLink href="/projects">Projects</BrutalNavLink>
      <BrutalNavLink href="/gallery">Gallery</BrutalNavLink>
      <BrutalNavLink href="/my-corner">My Corner</BrutalNavLink>
    </nav>
  );
}
