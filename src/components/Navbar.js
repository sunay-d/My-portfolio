
import React from "react";

export default function Navbar(props) {
  const {tr, setTR} = props
  return (
    <header className="bg-primary md:sticky top-0 z-10">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <a id="title" href="#home" className="ml-3 text-xl brand text-purple">Sunay Doğan</a>
        </div>
        <nav className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
        <a href="#about" className="mr-3 hover:text-white">
              {tr ? 'Hakkımda' : 'About'}
          </a>
          <a href="#projects" className="mr-3 hover:text-white">
              {tr ? 'Portfolyo' : 'Portfolio'}
          </a>
          <a href="#skills" className="mr-3 hover:text-white">
              {tr ? 'Yetenekler' : 'Skills'}
          </a>
          <a href="https://codewhiletrue.com" target="_blank" className="mr-3 hover:text-white">
              {tr ? 'Blog' : 'Blog'}
          </a>
          <a href="#contact" className="mr-3 hover:text-white">
              {tr ? 'İletişim' : 'Contact'}
          </a>
          <button onClick={() => setTR(prev => !prev)} className="md:hidden border-l-2 pl-2">
          {tr ? 'English' : 'Türkçe'}
          </button>
        </nav>
        <div className="px-20 flex items-start hidden md:inline-block">
          <button onClick={() => setTR(prev => !prev)} className="mr-10">{tr ? 'English' : 'Türkçe'}</button>
        </div>
      </div>
    </header>
  )
}