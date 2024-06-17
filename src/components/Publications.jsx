import React from "react";
import { linkImage, myVideos, otherVideos } from "../assets/index";
import { books, papers } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";

import { article1, article2 } from "../assets";

const BookCard = ({ book }) => (
  <div className="flex flex-col w-[370px] md:w-[560px]">
    <img
      src={book.thumbnail}
      alt="Books"
      className="rounded-[9.90px] w-[370px] md:w-[560px] h-[187px] md:h-[300px] object-scale-down"
    />
    <h3 className="py-2 font-jakarta text-[20px] md:text-[26px] text-black]">
      {book.title}
    </h3>
    <h3 className="-mt-2 font-jakarta text-[20px] md:text-[26px] text-black]">
      {book.edition}
    </h3>
    <p className="font-jakarta font-bold text-[12px] md:text-[18px] text-black">
      Link to book:
    </p>
    <a
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-3 hover:underline"
    >
      <img
        src={linkImage}
        alt="Link"
        className="mr-[8px] w-[40px] md:w-[60px]"
      />
    </a>
  </div>
);

const PapersCard = ({ paper }) => (
  <div className="flex flex-col w-[370px] md:w-[500px]">
    <h3 className="py-2 font-jakarta text-[20px] md:text-[26px] text-black]">
      {paper.title}
    </h3>
    <p className="py-2 font-jakarta font-bold text-[11px] md:text-[20px] text-black">
      {paper.date}
    </p>
    <div className="flex flex-wrap items-center">
      {paper.tags.map((tag, index) => (
        <span
          key={index}
          className="border border-[#4C82C2] text-[9px] md:text-[16px] text-[#4C82C2] px-[9px] py-[1px] md:px-3 md:py-1 rounded-full flex items-center m-1 md:m-2"
        >
          {tag}
        </span>
      ))}
    </div>
    <p className="py-2 font-jakarta font-medium text-[14px] md:text-[18px] text-[#706D79]">
      {paper.description}
    </p>
    <p className="font-jakarta font-bold text-[12px] md:text-[18px] text-black">
      Link to Paper:
    </p>
    <a
      href={paper.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-3 hover:underline"
    >
      <img
        src={linkImage}
        alt="Link"
        className="mr-[8px] w-[40px] md:w-[60px]"
      />
    </a>
  </div>
);

const Publications = () => {
  return (
    <div className="flex flex-col">
      <div className={`${styles.sectionPadding} mt-[100px] md:mt-[30px]`}>
        <h1 className="font-jakarta font-semibold text-[25px] md:text-[54px] text-[#190041]">
          Publications
        </h1>
        <p className="font-jakarta text-[10px] md:text-[18px] text-[#706D79]">
          Lets take a look at my contributions in literature:
        </p>

        <div className="mt-[20px] py-[20px] md:mt-[40px] md:py-[40px] w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-[20px] md:text-[36px] text-[#190041]">
            Contributor in Books:
          </h2>
          <div className="flex flex-col md:flex-row ml-0 gap-[40px] md:gap-[94px] mt-[16px] md:mt-[24px]">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>

        <div className="py-[40px] w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-[20px] md:text-[36px] text-[#190041]">
            Research Papers:
          </h2>
          <div className="flex flex-row flex-wrap ml-0 gap-x-[94px] gap-y-[40px] mt-[24px]">
            {papers.map((paper, index) => (
              <PapersCard key={index} paper={paper} />
            ))}
          </div>
        </div>

        <div className="py-[40px] w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-[20px] md:text-[36px] text-[#190041]">
            Videos - YouTube:
          </h2>
          <div className="flex flex-col md:flex-row ml-0 md:gap-x-[94px] gap-y-[40px] mt-[24px]">
            <div className="flex flex-col gap-[24px] justify-center items-center">
              <a
                href="https://youtube.com/playlist?list=PL_d0lgKXwPlLRNxsYZ7ECx2rt0ObsRs4A&si=wdKaQ_MwVHeXeqFP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                <img
                  src={otherVideos}
                  alt="My Other Videos"
                  className="mr-[8px]"
                />
              </a>
              <p className="py-2 font-jakarta text-[20px] md:text-[26px] text-black]">
                My Other Videos
              </p>
            </div>
            <div className="flex flex-col gap-[24px] justify-center items-center">
              <a
                href="https://www.youtube.com/channel/UCa2sAikt_Fe5oYprKZFUfeQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                <img src={myVideos} alt="My Videos" className="mr-[8px]" />
              </a>
              <p className="py-2 font-jakarta text-[20px] md:text-[26px] text-black]">
                My YouTube Videos
              </p>
            </div>
          </div>
        </div>

        <div className="py-[40px] w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-[20px] md:text-[36px] text-[#190041]">
            Articles featuring Mohit:
          </h2>
          <div className="mt-[24px]">
            <div className="md:pt-[64px] pt-[25px] flex flex-col md:flex-row space-y-[16px] md:justify-between">
              <div className="font-inter text-[#B2B1B8]">Mar 25, 2024</div>
              <div className="md:w-3/5">
                <img
                  src={article1}
                  alt="Thumbnail"
                  className="md:w-[680px] rounded-lg"
                />
                <h2 className="py-[16px] md:py-[24px] font-jakarta text-[20px] md:text-[32px] font-semibold">
                  The Lawyer Who Never Goes to Court. Member Spotlight: Mohit
                  Mokal
                </h2>
                <p className="font-inter text-[12px] md:text-[18px] text-[#706D79] text-justify">
                  Born and raised in Navi Mumbai, Mohit Mokal is a lawyer and
                  mediator whose family has worked in law for generations.
                  However, after exploring both traditional law and arbitration,
                  Mohit’s life path was changed by a personal study of
                  mediation, and an internship with the renowned mediator Sriram
                  Panchu. Today, Mohit has dedicated his whole career to
                  mediation and works as an independent consultant at his own
                  firm Mohit Mokal Mediation. Mohit has made such a name for
                  himself in the field that he was responsible for designing a
                  completely novel mediation course for law schools across
                  India. As Mohit continues to use innovative and highly
                  effective techniques in both his mediation work and trainings,
                  his mark on the field only continues to grow.
                </p>
                <div className="py-[25px]">
                  <a href="https://notes.agami.in/p/from-conversations-to-collaborations">
                    <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-4 rounded w-[134px]">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:pt-[64px] pt-[25px] flex flex-col md:flex-row space-y-[16px] md:justify-between">
              <div className="font-inter text-[#B2B1B8]">Aug 29, 2023</div>
              <div className="w-[370px] md:w-3/5">
                <img
                  src={article2}
                  alt="Thumbnail"
                  className="w-[370px] md:w-[680px] rounded-lg"
                />
                <h2 className="py-[16px] md:py-[24px] font-jakarta text-[20px] md:text-[32px] font-semibold">
                  From Conversations to Collaborations
                </h2>
                <p className="font-inter text-[12px] md:text-[18px] text-[#706D79] text-justify">
                  Mohit Mokal Takes Us through His Five Days Spent in Kochi at
                  The Residency
                </p>
                <div className="py-[25px]">
                  <a href="https://mediatorsbeyondborders.org/the-lawyer-who-never-goes-to-court-member-spotlight-mohit-mokal/">
                    <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-4 rounded w-[134px]">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="py-[40px] w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-[20px] md:text-[36px] text-[#190041]">
            Blogs
          </h2>
          <div className="mt-[24px]">
            <div className="md:pt-[64px] pt-[25px] flex flex-col md:flex-row space-y-[16px] md:justify-between">
              <div className="font-inter text-[#B2B1B8]">Date</div>
              <div className="w-[370px] md:w-3/5">
                <img
                  src={"thumbnail"}
                  alt="Thumbnail"
                  className="w-[370px] md:w-[680px] rounded-lg"
                />
                <h2 className="py-[16px] md:py-[24px] font-jakarta text-[20px] md:text-[32px] font-semibold">
                  Title
                </h2>
                <p className="font-inter text-[12px] md:text-[18px] text-[#706D79] text-justify">
                  Description
                </p>
                <div className="py-[25px]">
                  <a href="linkToBlogPost">
                    <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-4 rounded w-[134px]">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:pt-[64px] pt-[25px] flex flex-col md:flex-row space-y-[16px] md:justify-between">
              <div className="font-inter text-[#B2B1B8]">Date</div>
              <div className="w-[370px] md:w-3/5">
                <img
                  src={"thumbnail"}
                  alt="Thumbnail"
                  className="w-[370px] md:w-[680px] rounded-lg"
                />
                <h2 className="py-[16px] md:py-[24px] font-jakarta text-[20px] md:text-[32px] font-semibold">
                  Title
                </h2>
                <p className="font-inter text-[12px] md:text-[18px] text-[#706D79] text-justify">
                  Description
                </p>
                <div className="py-[25px]">
                  <a href="linkToBlogPost">
                    <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-4 rounded w-[134px]">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
