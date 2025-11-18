import Image, { StaticImageData } from "next/image";

interface APAlbumPickProps {
  src: StaticImageData;
  title: string;
  artist: string;
}

export default function APAlbumPick({ src, title, artist }: APAlbumPickProps) {
  return (
    <div className="max-w-[300px]">
      <Image
        src={src}
        alt={`${title} album cover`}
        className="object-cover brutal border-2 border-black rounded-lg mb-2"
      />
      <h3 className="font-display text-lg font-bold mb-2">{title}</h3>
      <p className="font-display text-base text-grayText mb-4">{artist}</p>
    </div>
  );
}
