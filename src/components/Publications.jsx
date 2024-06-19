import React, { useState, useEffect } from "react";
import axios from "axios";
import { linkImage, myVideos, otherVideos } from "../assets/index";
import { books, papers } from "../constants";
import { styles } from "../styles";
import Footer from "./Footer";

import { article1, article2 } from "../assets";

const BlogSection = () => {
  const [blogPosts, setBlogPosts] = useState([]);

  useEffect(() => {
    const fetchBlogPosts = async () => {
      try {
        const response = await axios.get(
          "https://www.googleapis.com/blogger/v3/blogs/8530927588085798151/posts",
          {
            params: {
              key: "AIzaSyDwfx1noEatm5ssUdO8-vF6b9hMhVZ0jPU",
              maxResults: 4,
            },
          }
        );

        setBlogPosts(response.data.items);
      } catch (error) {
        console.error("Error fetching blog posts:", error);
      }
    };

    fetchBlogPosts();
  }, []);

  const extractDescription = (content) => {
    const description =
      content
        .replace(/&nbsp;/g, " ")
        .replace(/<\/?[^>]+(>|$)/g, " ")
        .replace(/\n/g, " ")
        .trim()
        .slice(0, 300) + "...";
    return description;
  };

  return (
    <div className="pt-10">
      <h2 className="font-jakarta font-semibold text-xl md:text-4xl text-[#190041]">
        Blogs
      </h2>
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="py-10 flex flex-col md:flex-row  md:justify-between"
        >
          <div className="font-inter text-[#B2B1B8]">
            {new Date(post.published).toLocaleDateString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
            })}
          </div>
          <div className="md:w-3/5">
            <h2 className="font-jakarta text-xl md:text-3xl font-semibold">
              {post.title}
            </h2>
            <p className="font-inter text-xs text-justify md:text-lg text-[#706D79] py-2">
              {extractDescription(post.content)}
            </p>
            <div className="py-6">
              <a href={post.url} target="_blank" rel="noopener noreferrer">
                <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-10 rounded">
                  Read More
                </button>
              </a>
            </div>
          </div>
        </div>
      ))}

      <div className="bg-[#1754AC] rounded-lg cursor-pointer mt-10">
        <a href="https://mohitmokalmediation.blogspot.com/">
          <div className="px-6 py-3 text-center text-white text-base md:text-lg font-inter">
            Read Other Posts
          </div>
        </a>
      </div>
    </div>
  );
};

const BookCard = ({ book }) => (
  <div className="flex flex-col max-w-full">
    <img
      src={book.thumbnail}
      alt="Books"
      className="max-h-60 object-scale-down"
    />
    <h3 className="py-2 font-jakarta text-xl md:text-2xl text-black]">
      {book.title}
    </h3>
    <h3 className="-mt-2 font-jakarta text-xl md:text-2xl text-black]">
      {book.edition}
    </h3>
    <p className="font-jakarta font-bold text-xs md:text-lg text-black">
      Link to book:
    </p>
    <a
      href={book.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-3 hover:underline"
    >
      <img src={linkImage} alt="Link" className="w-10 md:w-14" />
    </a>
  </div>
);

const PapersCard = ({ paper }) => (
  <div className="flex flex-col md:w-5/12">
    <h3 className="py-2 font-jakarta text-xl md:text-2xl text-black]">
      {paper.title}
    </h3>
    <p className="py-2 font-jakarta font-bold text-xs md:text-xl text-black">
      {paper.date}
    </p>
    <div className="flex flex-wrap items-center">
      {paper.tags.map((tag, index) => (
        <span
          key={index}
          className="border border-[#4C82C2] text-xs md:text-base text-[#4C82C2] px-2 py-1 md:px-3 md:py-1 rounded-full flex items-center m-1 md:m-2"
        >
          {tag}
        </span>
      ))}
    </div>
    <p className="py-2 font-jakarta font-medium text-justify text-sm md:text-lg text-[#706D79]">
      {paper.description}
    </p>
    <p className="font-jakarta font-bold text-xs md:text-lg text-black">
      Link to Paper:
    </p>
    <a
      href={paper.link}
      target="_blank"
      rel="noopener noreferrer"
      className="text-blue-500 mt-3 hover:underline"
    >
      <img src={linkImage} alt="Link" className="w-10 md:w-14" />
    </a>
  </div>
);

const Publications = () => {
  return (
    <div className="flex flex-col">
      <div className={`${styles.sectionPadding} mt-28 md:mt-8`}>
        <h1 className="font-jakarta font-semibold text-2xl md:text-5xl text-[#190041]">
          Publications
        </h1>
        <p className="font-jakarta text-xs md:text-lg text-[#706D79]">
          Lets take a look at my contributions in literature:
        </p>

        <div className="py-5 md:py-10 w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-xl md:text-4xl text-[#190041]">
            Contributor in Books:
          </h2>
          <div className="flex flex-col md:flex-row justify-between ml-0 gap-10 mt-4 md:mt-6">
            {books.map((book, index) => (
              <BookCard key={index} book={book} />
            ))}
          </div>
        </div>

        <div className="py-10 w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-xl md:text-4xl text-[#190041]">
            Research Papers:
          </h2>
          <div className="flex flex-row flex-wrap ml-0 justify-between gap-y-10 mt-6">
            {papers.map((paper, index) => (
              <PapersCard key={index} paper={paper} />
            ))}
          </div>
        </div>

        <div className="py-10 w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-xl md:text-4xl text-[#190041]">
            Videos - YouTube:
          </h2>
          <div className="flex flex-col md:flex-row ml-0 md:space-x-20 gap-y-10 mt-6">
            <div className="flex flex-col gap-6 justify-center items-center w-1/2">
              <a
                href="https://youtube.com/playlist?list=PL_d0lgKXwPlLRNxsYZ7ECx2rt0ObsRs4A&si=wdKaQ_MwVHeXeqFP"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                <img src={otherVideos} alt="My Other Videos" className="" />
              </a>
              <p className="py-2 font-jakarta text-xl md:text-2xl text-black">
                My Other Videos
              </p>
            </div>
            <div className="flex flex-col gap-6 justify-center items-center w-1/2">
              <a
                href="https://www.youtube.com/channel/UCa2sAikt_Fe5oYprKZFUfeQ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 mt-3 hover:underline"
              >
                <img src={myVideos} alt="My Videos" className="" />
              </a>
              <p className="py-2 font-jakarta text-xl md:text-2xl text-black">
                My YouTube Videos
              </p>
            </div>
          </div>
        </div>

        <div className="py-10 w-full justify-center items-center">
          <h2 className="font-jakarta font-semibold text-xl md:text-4xl text-[#190041]">
            Articles featuring Mohit:
          </h2>
          <div className="mt-6">
            <div className="md:pt-16 pt-6 flex flex-col md:flex-row space-y-4 md:justify-between">
              <div className="font-inter text-[#B2B1B8]">Mar 25, 2024</div>
              <div className="md:w-3/5">
                <img src={article1} alt="Thumbnail" className="rounded-lg" />
                <h2 className="py-4 md:py-6 font-jakarta text-xl md:text-3xl font-semibold">
                  The Lawyer Who Never Goes to Court. Member Spotlight: Mohit
                  Mokal
                </h2>
                <p className="font-inter text-xs md:text-lg text-[#706D79] text-justify">
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
                <div className="py-6">
                  <a href="https://notes.agami.in/p/from-conversations-to-collaborations">
                    <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-10 rounded">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
            <div className="md:pt-16 pt-6 flex flex-col md:flex-row space-y-4 md:justify-between">
              <div className="font-inter text-[#B2B1B8]">Aug 29, 2023</div>
              <div className="md:w-3/5">
                <img src={article2} alt="Thumbnail" className="rounded-lg" />
                <h2 className="py-4 md:py-6 font-jakarta text-xl md:text-3xl font-semibold">
                  From Conversations to Collaborations
                </h2>
                <p className="font-inter text-xs md:text-lg text-[#706D79] text-justify">
                  Mohit Mokal Takes Us through His Five Days Spent in Kochi at
                  The Residency
                </p>
                <div className="py-4">
                  <a href="https://mediatorsbeyondborders.org/the-lawyer-who-never-goes-to-court-member-spotlight-mohit-mokal/">
                    <button className="bg-[#1754AC] hover:bg-blue-700 text-inter font-medium text-white py-2 px-10">
                      Read More
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <BlogSection />
      </div>
      <Footer />
    </div>
  );
};

export default Publications;
