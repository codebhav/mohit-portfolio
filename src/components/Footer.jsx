import React from "react";
import { Link, useLocation } from "react-router-dom";

const Footer = () => {
  const location = useLocation();

  const isMainPage = location.pathname === "/";

  return (
    <div className="bg-[#1754AC] px-7 py-14 md:px-28 md:py-20">
      <div className="flex flex-col md:flex-row md:justify-between md:items-center">
        <Link
          to="/"
          className="flex flex-col mb-14 md:mb-0 md:mr-auto"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <h1 className="font-jakarta text-2xl text-white">
            Mohit Mokal Mediation
          </h1>
          <p className="font-inter text-[#DADADA]">
            Dispute Resolution Professional
          </p>
        </Link>

        <div className="flex flex-col md:flex-row md:space-x-16">
          <div className="flex flex-col mb-4 md:mb-0">
            <a href="https://calendly.com/mohitmokalmediation">
              <p className="font-inter text-white mb-2">Book a Call</p>
            </a>
          </div>
          <div className="flex flex-col mb-4 md:mb-0">
            <p className="font-inter text-white mb-2">
              {isMainPage ? (
                <a href="#about">About</a>
              ) : (
                <Link to="/#about">About</Link>
              )}
            </p>
            <p className="font-inter text-[#DADADA]">
              {isMainPage ? (
                <a href="#services">Services</a>
              ) : (
                <Link to="/#services">Services</Link>
              )}
            </p>
          </div>
          <div className="flex flex-col">
            <p className="font-inter text-white mb-2">
              {isMainPage ? (
                <a href="#contact">Contact Us</a>
              ) : (
                <Link to="/#contact">Contact Us</Link>
              )}
            </p>
            <Link
              to="/publications"
              className="font-inter text-[#DADADA]"
              onClick={() => {
                window.scrollTo(0, 0);
              }}
            >
              Publications
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
