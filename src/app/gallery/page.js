"use client";

import Image from "next/image";
import useMasonry from "../utils/useMasonry";
import { getImageURL, listImages } from "../utils/storage";
import { useEffect, useState } from "react";

export default function gallery() {
  const [imagesURL, setImagesURL] = useState([])
  const masonryContainer = useMasonry();

  useEffect(() => {
    const fetchImages = async() => {
      const urls = await listImages("images/")
      setImagesURL(urls)
    }
    fetchImages()
  }, []);

  const images = imagesURL.map((url, index) => {
    return (
      <Image className="brutal rounded-md border-2 border-black" key={index} src={url} width={400} height={500} alt="gallery image" style={{objectFit: "cover"}} />
    )
  })
  return (
    <>
      <section id="heading" className="w-lg text-center mx-auto mt-15 mb-10">
        <h1 className="font-display font-bold text-6xl mb-4">Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur. Tempus faucibus faucibus enim
          pretium rhoncus fames leo. Urna id tempor bibendum turpis libero vitae
          risus id.
        </p>
      </section>
      <section>
        <div
          className="grid items-start gap-4 grid-cols-3 w-4xl mx-auto"
        >
          {images}
        </div>
      </section>
    </>
  );
}
