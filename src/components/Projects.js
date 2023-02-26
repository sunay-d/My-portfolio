import React from "react";
import { projects } from "../data";
import '../App.css'
import '../animate.js'


export default function Projects(props) {

  const tr = props.tr

    function openDetails(e) {
        document.querySelector(`#${e.target.dataset.id}`).style.display = "block"
    }

    function closeDetails(e) {
        document.querySelector(`#${e.target.dataset.id}`).style.display = "none"
    }

  return (
    <section id="projects" className="reveal revealLeft text-gray-400 bg-primary body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <h1 className="splash sm:text-4xl text-3xl font-medium title-font text-white">
            {tr ? 'Portfolyom' : 'My Portfolio'}
          </h1>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <div key={project.title} className="w-screen md:w-1/2 xl:w-1/3 p-4">
                <div className="flex relative" data-project={project.title}>
                  <img
                    alt="gallery"
                    className="absolute inset-0 w-full h-full object-cover object-center"
                    src={project.img}
                  />
                  <div className="px-8 py-10 relative z-10 w-full border-4 border-purple bg-primary text-white opacity-0 hover:opacity-100">
                    <h2 className="tracking-widest text-sm title-font font-medium text-yellow mb-1">
                      {project.tech}
                    </h2>
              <a
                href="#projects"
                onClick={openDetails}
                className="sm:w-1/2 w-100 p-4 w-full">
                    <h1 className="title-font text-lg font-medium text-white mb-3" data-id={project.id}>
                      {tr ? project.baslik : project.title}
                    </h1>
              </a>
                  </div>
                </div>
              <div id={project.id} className="project-details px-8 py-10 relative z-10 w-full h-90 mx-5 border-4 bg-primary text-white opacity-100">
                  <i data-project={project.id} onClick={closeDetails} className="fa-solid fa-xmark flex flex-row justify-end cursor-pointer text-end text-4xl -mt-2 hover:text-yellow" data-id={project.id}></i>
                  <h1 className="text-3xl md:text-5xl m-0 mb-5">{tr ? project.baslik : project.title}</h1>
                  <div className="flex flex-col md:flex-row justify-center pt-5">
                    <div className="flex flex-col justfiy-center items-start md:w-1/3">
                        <img src={project.img} ></img>
                        <div className="flex flex-row justify-center items-center mt-5">
                            <a href={project.live} className="inline-flex text-black bg-yellow border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-base md:text-lg" target="_blank">{tr ? 'Canlı' : 'See Live'}</a>
                            <a href={project.code} className="ml-1 xl:ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-base md:text-lg" target="_blank">{tr ? 'Kaynak kodu' : 'Source Code'}</a>
                        </div>
                    </div>
                    <div className="pt-5 md:p-5 text-left md:w-2/3">
                        <p>{tr ? project.ozet : project.overview}</p>
                        <p className="mt-5">{tr ? 'Kullanılan teknolojiler: ' :'Technologies used: '}<span className="text-yellow">{project.tech}</span></p>
                    </div>
                    </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}