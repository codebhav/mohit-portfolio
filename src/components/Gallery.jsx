import React from "react";
import { galleryImages } from "../constants";

const Gallery = () => {
  return (
    <div className="h-[435px] md:h-[680px] justify-center items-center flex flex-col font-jakarta overflow-hidden">
      <h1 className="text-[#190041] md:mt-0 font-semibold text-[32px] md:text-[54px]">
        Gallery
      </h1>
      <h2 className="text-[10px] md:text-[18px] text-[#706D79]">
        Photo wall from events
      </h2>

      <div className="overflow-x-auto">
      <div className="mt-[14px] md:mt-20 group">
        <div className="flex animate-loop-scroll-reverse space-x-[8px] md:space-x-16 group-hover:paused ">
          {galleryImages.map((image, index) => (
            <div
              key={index}
              className="bg-white max-w-[319px] md:max-w-[540px] h-[200px] md:h-[300px] shrink-0 overflow-hidden rounded-lg"
            >
              <img
                key={image.name}
                src={image.image}
                alt={image.name}
                className="object-cover w-full h-full"
              />
            </div>
          ))}
        </div>
        <div className="mt-9 ">
          
        </div>
      </div>
      </div>
    </div>
  );
};
export default Gallery;
