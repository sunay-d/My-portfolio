
// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-primary md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a id="title" href="#home" className="ml-3 text-xl brand text-purple">Sunay Doğan</a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#about" className="mr-3 hover:text-white">
              About
          </a>
          <a href="#projects" className="mr-3 hover:text-white">
              Portfolio
          </a>
          <a href="#skills" className="mr-3 hover:text-white">
              Skills
          </a>
          <a href="#contact" className="mr-3 hover:text-white">
              Contact
          </a>
          <button className="md:hidden">
            TR
          </button>
        </nav>
        <div className="px-20 flex items-start hidden md:inline-block">
          <button className="mr-10">TR</button>
        </div>
      </div>
    </header>
  );
}