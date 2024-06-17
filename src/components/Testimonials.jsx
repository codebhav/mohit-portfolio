import React from "react";
import { testimonials } from "../constants";
import { SectionWrapper } from "../hoc";

const Testimonials = () => {
  return (
    <div className="h-[335px] md:h-[680px] bg-[#4C82C2] bg-opacity-15 justify-center items-center flex flex-col font-jakarta overflow-hidden">
      <h1 className="text-[#190041] font-semibold text-[32px] md:text-[54px]">Testimonials</h1>
      <h2 className="text-[10px] md:text-[18px] text-[#706D79]">
        Look what others have said about us:
      </h2>

      <div className="mt-[14px] md:mt-20 overflow-x-auto">
        <div className="flex flex-row items-center animate-loop-scroll space-x-[8px] md:space-x-16 group-hover:paused">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white flex flex-col justify-center items-center rounded-lg shadow-lg max-w-[319px] md:max-w-[540px] p-5 shrink-0"
            >
              <p className="text-[#706D79] text-justify font-inter text-[9px] md:text-[16px]">
                "{testimonial.testimonial}"
              </p>
              <div className="pt-5 flex items-center flex-col mb-0">
                <div className="font-inter text-[8px] md:text-lg font-medium">
                  {testimonial.name}
                </div>
                <div className="text-[#706D79] font-inter text-[8px] md:text-[14px]">
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
