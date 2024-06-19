import React from "react";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";

const Testimonials = () => {
  return (
    <div className="bg-[#4C82C2] bg-opacity-15 justify-center items-center flex flex-col font-jakarta overflow-hidden">
      <h1 className="text-[#190041] font-semibold text-3xl md:text-5xl pt-10">
        Testimonials
      </h1>
      <h2 className="text-xs md:text-lg text-[#706D79] py-4">
        Look what others have said about us:
      </h2>

      <div className="py-2 overflow-x-auto group">
        <div className="flex flex-row items-center animate-loop-scroll space-x-2 md:space-x-16 group-hover:paused">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg max-w-xs md:max-w-lg p-5 shrink-0"
            >
              <p className="text-[#706D79] text-justify font-inter text-xs md:text-lg">
                "{testimonial.testimonial}"
              </p>
              <div className="pt-5 flex items-center flex-col mb-0">
                <div className="font-inter text-xs md:text-lg font-medium">
                  {testimonial.name}
                </div>
                <div className="text-[#706D79] font-inter text-xs md:text-sm">
                  {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SectionWrapper(Testimonials, "testimonials");
