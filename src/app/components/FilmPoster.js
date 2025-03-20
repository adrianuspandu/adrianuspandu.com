import Image from "next/image";
export default function FilmPoster({ src, title, year }) {
  return (
    <div className="max-w-[300px]">
      <Image
        src={src}
        alt={`${title} poster`}
        className="object-cover brutal border-2 border-black rounded-lg mb-2"
      />
      <h3 className="font-display text-lg font-bold mb-2">
        {title}
      </h3>
      <p className="font-display text-base text-grayText mb-4">{year}</p>
    </div>
  );
}
