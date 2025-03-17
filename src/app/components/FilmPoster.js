import Image from "next/image";
import posterPlaceholder from "/public/images/poster-placeholder.jpg"

export default function FilmPoster({ src, title, year }) {
  return (
    <div>
      <Image
        src={src}
        alt={`${title} poster`}
        className="w-[200px] h-[300px] object-cover brutal border-2 border-black rounded-lg mb-2"
      />
      <h3 className="font-display text-2xl font-bold mb-2">
        {title}
      </h3>
      <p className="font-display text-base text-grayText mb-4">{year}</p>
    </div>
  );
}
