import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <div
        id="nav"
        className="hidden md:flex justify-between items-end mt-10 px-10  h-20 w-full z-50 fixed"
      >
        <ul className="flex gap-4 font-[sembold] pb-8 text-[#B3B3B3]">
          <li>
            <a href="#work">Work</a>
          </li>
          <li>
            <a href="https://dribbble.com/pranjalmewaraa">Shots</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
        </ul>
        <p className="text-[2vw] font-[heavy] mix-blend-difference">
          P<span className="font-[italica] text-[#14CF93]">k</span>.
        </p>
        <ul className="flex gap-4 font-[sembold] pb-8 text-[#B3B3B3]">
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            {" "}
            <a href="#contact">Contact</a>{" "}
          </li>
        </ul>
      </div>
      <div className="flex md:hidden w-full justify-between items-center min-h-10 pt-5 pb-2 px-10 z-50 fixed bg-white shadow-md">
        <p className="text-black font-semibold text-3xl">
          P<span className="font-italic text-[#14CF93]">k</span>.
        </p>
        <div className="md:hidden cursor-pointer" onClick={toggleMenu}>
          <div className="w-8 h-1 bg-black mb-1"></div>
          <div className="w-8 h-1 bg-black mb-1"></div>
          <div className="w-8 h-1 bg-black"></div>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } absolute top-16 right-10 bg-white shadow-lg rounded-lg p-5 md:hidden`}
        >
          <ul className="list-none p-0 m-0">
            <li className="py-2 border-b border-gray-200">
              <a href="#work" className="text-black no-underline">
                Work
              </a>
            </li>
            <li className="py-2 border-b border-gray-200">
              <a href="#about" className="text-black no-underline">
                About
              </a>
            </li>
            <li className="py-2 border-b border-gray-200">
              <a href="#contact" className="text-black no-underline">
                Contact
              </a>
            </li>
            <li className="py-2">
              <a href="#resume" className="text-black no-underline">
                Resume
              </a>
            </li>
            <li className="py-2">
              <a
                href="https://dribbble.com/pranjalmewaraa"
                className="text-black no-underline"
              >
                Shots
              </a>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;
