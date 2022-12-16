import React from "react"

export default function About(){
    return (    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="assets/images/logo.svg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white mt-3">
            Hello! I'm Sunay.
            <br className="hidden lg:inline-block" /> I love to create beautiful websites
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a web developer specialized on front-end. Check out my <span><a className="text-yellow" href="assets/files/sunay_dogan_resume.pdf" download>resume</a></span>
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-orange border-0 py-2 px-6 focus:outline-none hover:bg-yellow rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Portfolio
            </a>
          </div>
          <div className="social flex flex-wrap gap-5 mt-10 py-0">
          <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://linkedin.com/in/sunay-dogan" target="blank"><i class="text-4xl  hover:text-linkedin py-0 fa fa-linkedin-square"></i></a>
          <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://github.com/sunay-d" target="blank"><i class="text-4xl  hover:text-white text-base fa fa-github"></i></a>
          <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://twitter.com/nagodyanus" target="blank"><i class="text-4xl  hover:text-twitter text-base fa fa-twitter"></i></a>
          <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://open.spotify.com/user/f7wkhl9pmo1uvrm2rl6vmfv43?si=c07bcef7bda54539" target="blank"><i class="text-4xl hover:text-spotify  text-base fa fa-spotify"></i></a>
        </div>
        </div>
      </div>
    </section>)
}