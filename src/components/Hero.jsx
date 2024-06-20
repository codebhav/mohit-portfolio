import React from "react";
import { ftServices, companies } from "../constants/index";

const FeaturedServicesContainer = ({ children }) => {
  return (
    <div className="relative mt-8">
      <div className="relative flex justify-center">
        <span className="font-semibold text-lg">Featured Services</span>
      </div>
      <div className="mt-4 flex flex-wrap text-center justify-center">
        {children}
      </div>
    </div>
  );
};

const Hero = () => {
  return (
    <section className="font-inter relative w-full px-3 flex flex-col justify-center items-center pt-32 md:pt-64 pb-16">
      <div className="text-[#1754AC] text-lg md:text-xl font-bold text-center">
        Dispute Resolution Professional
      </div>
      <div className="p-4 text-black text-4xl md:text-6xl font-extrabold font-jakarta text-center">
        Mohit Mokal
      </div>
      <div className="pb-4 flex flex-col text-center text-[#706D79] text-base md:text-lg md:w-1/4">
        <span>
          <span className="font-semibold">Dispute Resolution Professional</span>{" "}
          based in <span className="font-semibold">Mumbai</span>, dedicated to
          promoting and utilizing Mediation and Online Dispute Resolution (ODR).
        </span>
      </div>

      <div className="mt-4 px-6 py-3 bg-[#1754AC] rounded-lg justify-center items-center cursor-pointer">
        <div className="flex-col justify-center items-start inline-flex">
          <div className="self-stretch flex-col justify-start items-center flex">
            <a href="https://calendly.com/mohitmokalmediation">
              <div className="text-center text-white text-base md:text-lg font-inter">
                Let's Book a Consultation Call
              </div>
            </a>
          </div>
        </div>
      </div>

      <FeaturedServicesContainer>
        {ftServices.map((service, index) => (
          <div
            key={index}
            className="border border-[#4C82C2] text-[#4C82C2] px-3 py-1 rounded-full flex items-center m-2"
          >
            <span className="text-sm">{service.title}</span>
          </div>
        ))}
      </FeaturedServicesContainer>

      <h1 className="text-[#706D79] mt-8 text-lg md:text-xl text-center">
        Used and loved by people at brilliant companies
      </h1>

      <div className="px-5 mt-8 flex flex-wrap justify-center items-center gap-8 md:space-x-16">
        {companies.map((company, index) => (
          <div key={index} className="w-20 md:w-24">
            <img
              src={company.icon}
              alt={company.name}
              className="w-full h-auto"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Hero;
