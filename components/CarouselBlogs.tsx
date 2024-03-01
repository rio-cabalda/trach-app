"use client";

import { images } from "@/constants";
import Image from "next/image";
import { useEffect, useState } from "react";
import Description from "./Descriptions";

const CarouselBlogs = () => {
  const [activeImage, setActiveImage] = useState(0);

  const clickNext = () => {
    setActiveImage((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  const clickPrev = () => {
    setActiveImage((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      clickNext();
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, [activeImage]);

  return (
    <main className="grid place-items-center md:grid-cols-2 grid-cols-1 w-full mx-auto max-w-5xl shadow-2xl rounded-2xl">
      <div
        className={`w-full flex justify-center items-center gap-4 transition-transform ease-in-out duration-500 md:rounded-2xl p-6 md:p-0`}
      >
        {images.map((elem, idx) => (
          <div
            key={idx}
            className={`${
              idx === activeImage
                ? "block w-full h-[80vh] object-cover transition-all duration-500 ease-in-out"
                : "hidden"
            }`}
          >
            <Image
              src={elem.src}
              alt=""
              width={400}
              height={400}
              className="w-full h-full object-cover md:rounded-tl-3xl md:rounded-bl-3xl"
            />
          </div>
        ))}
      </div>

      {/* Arrange Description components with different initial indices */}
      <div className="flex justify-center items-center gap-5">
        <Description activeImage={activeImage} clickNext={clickNext} clickPrev={clickPrev} />
       
      </div>
    </main>
  );
};

export default CarouselBlogs;

