import Image, { StaticImageData } from "next/image";

interface APFilmPosterProps {
  src: StaticImageData;
  title: string;
  year: string;
}

export default function APFilmPoster({ src, title, year }: APFilmPosterProps) {
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
