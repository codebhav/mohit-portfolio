import React from "react";
import { styles } from "../styles";
import { services } from "../constants";
import { linkImage } from "../assets/index";
import { downloadImage } from "../assets/index";
import { SectionWrapper } from "../hoc";

const Services = () => {
  return (
    <div className={`${styles.sectionPadding} font-jakarta`}>
      <h1 className={"font-semibold text-[25px] md:text-[54px]"}>
        Our Services
      </h1>
      <p className="text-[10px] md:text-[18px]">
        Our range of Services and solutions
      </p>
      <div className="border border-[#1754AC] opacity-50 my-[9px] md:my-[24px]"></div>

      {services.map((service, index) => (
        <div key={index} className="md:flex md:items-start md:mt-[60px]">
          <div className="md:mr-auto my-[24px]">
            <span className="text-[19px] md:text-[40px] text-[#1754AC] font-semibold">{`0${
              index + 1
            }`}</span>
          </div>
          <div className="md:w-3/5">
            <img
              className="w-[680px] h-[200px] object-cover rounded-lg"
              src={service.thumbnail}
              alt={service.title}
            />
            <h2 className="text-[20px] md:text-[32px] font-semibold my-[12px] md:mt-[16px]">
              {service.title}
            </h2>
            {index === 0 ? (
              <ul className="list-disc ml-[28px] md:ml-[24px] my-[11px] md:my-[20px]">
                {service.points.map((point, index) => (
                  <li
                    key={index}
                    className="md:mt-[4px] font-medium text-[12px] md:text-[18px] text-[#706D79]"
                  >
                    {point}
                  </li>
                ))}
              </ul>
            ) : (
              <div className="md:mt-[4px] font-medium text-[12px] md:text-[18px] text-[#706D79]">
                {service.points.map((point, index) => (
                  <p key={index} className="my-[24px] md:my-[24px]">
                    {point}
                  </p>
                ))}
              </div>
            )}
            {(index === 0 || index === 2) &&
              service.links &&
              service.links.length > 0 && (
                <div className="md:mt-[16px] font-bold text-[12px] md:text-[18px]">
                  Case Studies:
                  <div className="flex flex-wrap">
                    {service.links.map((link, index) => (
                      <div
                        key={index}
                        className="md:flex md:items-center mr-[9px] md:mr-[24px] mt-[8px]"
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
                              className="mr-[8px] w-[40px] md:w-[60px]"
                            />
                            <span class="group-hover:block hidden absolute bg-[#1754AC] text-white font-inter text-sm p-2 rounded-md">
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
                <div className="md:mt-[16px] font-bold text-[12px] md:text-[18px]">
                  Links:
                  <div className="flex flex-wrap">
                    {service.links.map((link, index) => (
                      <div
                        key={index}
                        className="md:flex md:items-center mr-[9px] md:mr-[24px] mt-[8px]"
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
                              className="mr-[8px] w-[40px] md:w-[60px]"
                            />
                            <span class="group-hover:block hidden absolute bg-[#1754AC] text-white font-inter text-sm p-2 rounded-md">
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
