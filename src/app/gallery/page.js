"use client";

import Image from "next/image";
import { listImages } from "../utils/storage";
import { useEffect, useState } from "react";
import Masonry from "react-masonry-css";

export default function gallery() {
  const [imagesURL, setImagesURL] = useState([]);

  useEffect(() => {
    const fetchImages = async () => {
      const urls = await listImages("images/");
      setImagesURL(urls);
    };
    fetchImages();
  }, []);

  const masonryItems = imagesURL.map((url, index) => {
    return (
      <Image
        key={index}
        className="brutal rounded-md border-2 border-black"
        src={url}
        width={400}
        height={400}
        alt="gallery image"
      />
    );
  });
  return (
    <>
      <section id="heading" className="max-w-lg text-center mx-auto mt-15 mb-10 px-4">
        <h1 className="font-display font-bold text-4xl lg:text-6xl mb-4">Gallery</h1>
        <p className="text-sm lg:text-base">
          Here is a section where I share photos of beautiful places I've
          visited and the memorable moments I've experienced. Take a glimpse
          into my journey through these snapshots!
        </p>
      </section>
      <section>
        <Masonry
          breakpointCols={{ default: 4, 1100: 3, 700: 2, 500: 1 }}
          className="my-masonry-grid"
          columnClassName="my-masonry-grid_column"
        >
          {masonryItems}
        </Masonry>
      </section>
    </>
  );
}
