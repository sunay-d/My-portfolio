
// import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";

export default function Navbar() {
  return (
    <header className="bg-primary md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <a className="title-font font-medium text-white mb-4 md:mb-0">
          <a id="title" href="#about" className="ml-3 text-xl">
            Sunay Doğan
          </a>
        </a>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <a href="#projects" className="mr-3 hover:text-yellow">
              Projects
          </a>
          <a href="#skills" className="hover:text-yellow">
              Skills
          </a>
        </nav>
        <a
          href="#contact"
          className="inline-flex items-center text-white bg-purple/50 border-0 py-1 px-3 focus:outline-none hover:bg-purple rounded text-base mt-4 md:mt-0">
          Contact Me
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4 h-4 ml-1" >
            <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
          </svg>

        </a>
      </div>
    </header>
  );
}