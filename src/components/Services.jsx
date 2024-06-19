import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { linkImage } from "../assets/index";
import { downloadImage } from "../assets/index";
import { SectionWrapper } from "../hoc";

const Services = () => {
  return (
    <div className={`${styles.sectionPadding} font-jakarta`}>
      <h1 className={"font-semibold text-2xl md:text-6xl"}>
        Our Services
      </h1>
      <p className="text-xs md:text-lg">
        Our range of Services and solutions
      </p>
      <div className="border border-[#1754AC] opacity-50 my-2 md:my-6"></div>

      {services.map((service, index) => (
        <div key={index} className="md:flex md:items-start md:mt-16">
          <div className="md:mr-auto my-6">
            <span className="text-xl md:text-4xl text-[#1754AC] font-semibold">{`0${
              index + 1
            }`}</span>
          </div>
          <div className="md:w-3/5">
            <img
              className="w-full object-cover rounded-lg"
              src={service.thumbnail}
              alt={service.title}
            />
            <h2 className="text-xl md:text-3xl font-semibold my-3 md:mt-4">
              {service.title}
            </h2>
            {index === 0 ? (
              <ul className="list-disc ml-7 md:ml-6 my-3 md:my-5">
                {service.points.map((point, index) => (
                  <li
                    key={index}
                    className="md:mt-1 font-medium text-xs md:text-lg text-[#706D79]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="md:mt-1 font-medium text-xs md:text-lg text-[#706D79]">
                {service.points.map((point, index) => (
                  <p key={index} className="my-6 text-justify">
                    {point}
                  </p>
                ))}
              </div>
            )}
            {(index === 0 || index === 2) &&
              service.links &&
              service.links.length > 0 && (
                <div className="font-bold text-xs md:text-lg">
                  Case Studies:
                  <div className="flex flex-wrap">
                    {service.links.map((link, index) => (
                      <div
                        key={index}
                        className="md:flex md:items-center mr-2 md:mr-6 mt-2"
                      >
                        <a
                          href={link.link}
                          download
                          className="text-blue-500 hover:underline"
                        >
                          <div className="group">
                            <img
                              src={downloadImage}
                              alt="Download"
                              className="mr-2 w-10 md:w-14"
                            />
                            <span className="group-hover:block hidden absolute bg-[#1754AC] text-white font-inter text-sm p-2 rounded-md">
                              {link.title}
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            {(index === 1 || index === 3) &&
              service.links &&
              service.links.length > 0 && (
                <div className="font-bold text-xs md:text-lg">
                  Links:
                  <div className="flex flex-wrap">
                    {service.links.map((link, index) => (
                      <div
                        key={index}
                        className="md:flex md:items-center mr-2 md:mr-6 mt-2"
                      >
                        <a
                          href={link.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-blue-500 hover:underline"
                        >
                          <div className="group">
                            <img
                              src={linkImage}
                              alt="Link"
                              className="mr-2 w-10 md:w-14"
                            />
                            <span className="group-hover:block hidden absolute bg-[#1754AC] text-white font-inter text-sm p-2 rounded-md">
                              {link.title}
                            </span>
                          </div>
                        </a>
                      </div>
                    ))}
                  </div>
                </div>
              )}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Services, "services");
