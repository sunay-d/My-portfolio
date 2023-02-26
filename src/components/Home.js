import React from "react"
import '../animate.js'

export default function Home(props){
    const tr = props.tr
    return (    
    <section id="home" className="reveal revealLeft active">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="assets/images/logo.svg"
          />
        </div>
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-end md:text-right mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-purple mt-3">
            <span className="splash">{tr ? "Merhaba, ben Sunay." :"Hello! I'm Sunay."}</span>
          </h1>
          {tr ? 
          (<p className="mb-4 leading-relaxed">Web yolculuğunuzda sizinle birlikte öğrenmeye  <br/>ve yenilikler yaratmaya istekli, meraklı bir web geliştiricisiyim.</p>): 
          (<p className="mb-4 leading-relaxed">A curious developer, eager to learn <br/> and innovate alongside you on your web journey.</p>)}
          {tr ? 
          (<p className="mb-8"><a className="text-white" href="assets/files/sunay_dogan.pdf" download>Özgeçmişimi buradan indirebilirsiniz.</a></p>) 
          : (<p className="mb-8">Download my <span><a className="text-white" href="assets/files/sunay_dogan_resume.pdf" download>resume</a></span></p>)}
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-black bg-yellow border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-lg">
              {tr ? 'Benimle çalışmak ister misiniz?' : 'Work With Me'}
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              {tr ? 'Portfolyoma göz atın.' : 'See My Portfolio'}
            </a>
          </div>
          <div className="social flex flex-wrap gap-5 mt-10 py-0">
            <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://open.spotify.com/user/f7wkhl9pmo1uvrm2rl6vmfv43?si=c07bcef7bda54539" target="blank"><i className="text-4xl hover:text-spotify  text-base fa fa-spotify"></i></a>
            <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://twitter.com/nagodyanus" target="blank"><i className="text-4xl  hover:text-twitter text-base fa fa-twitter"></i></a>
            <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://linkedin.com/in/sunay-dogan" target="blank"><i className="text-4xl  hover:text-linkedin py-0 fa fa-linkedin-square"></i></a>
            <a className="inline-flex items-center  focus:outline-none rounded text-base mt-4 md:mt-0" href="https://github.com/sunay-d" target="blank"><i className="text-4xl  hover:text-white text-base fa fa-github"></i></a>
            <a className="inline-flex items-center  focus:outline-none rounded hover:text-white text-base mt-4 md:mt-0 " href="https://leetcode.com/sunay_/" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 24 24"><path fill="currentColor" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
          </div>
        </div>
      </div>
    </section>)
}