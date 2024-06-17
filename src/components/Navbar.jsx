import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleLinkClick = (link) => {
    setActive(link.title);

    if (link.id === "publications") {
      navigate("/publications");
      window.scrollTo(0, 0);
    } else {
      navigate(`/#${link.id}`);

      if (location.pathname === "/") {
        const element = document.getElementById(link.id);
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-4 fixed z-20 bg-primary`}
    >
      <div className="w-full h-[90px] flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img
            src={logo}
            alt="logo"
            className="w-[120px] h-[120px] relative object-contain cursor-pointer"
          />
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10 ">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title
                  ? "font-inter text-black"
                  : "font-inter text-secondary"
              } hover:text-black text-[18px] font-medium cursor-pointer`}
              onClick={() => handleLinkClick(link)}
            >
              {link.title === "Publications" ? (
                <Link to="/publications">
                  <span className="bg-[#1754AC] text-white p-2 rounded-md">
                    {link.title}
                  </span>
                </Link>
              ) : (
                <a href={`#${link.id}`}>
                      {link.title}
                </a>
              )}
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 bg-[#1754AC] absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title
                      ? "font-inter text-white"
                      : "font-inter text-secondary"
                  } font-inter font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    handleLinkClick(link);
                  }}
                >
                  {link.title === "Publications" ? (
                    <Link to="/publications">{link.title}</Link>
                  ) : (
                    link.title
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
