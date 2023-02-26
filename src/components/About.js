import React from 'react'

export default function About() {
    return (
        <section id="about" className="reveal text-gray-400 bg-primary body-font">
            <div className="container px-5 pb-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-4">
                    <h1 className="splash sm:text-4xl text-3xl font-medium title-font text-white">About me</h1>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center px-10'>
                <article className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-5 md:ml-20">
                    <p>Hello, my name is Sunay, and I'm a web developer with a background in mathematics and economics. I hold a bachelor's degree in both fields, and <span className='text-white'>I'm currently pursuing my graduate degree in mathematics</span>. I have over two years of professional experience in the banking sector, where I worked as an assistant specialist in the strategy department. In this role, <span className='text-white'>I utilized Oracle SQL, VBA, UiPath, and Microsoft Office applications</span>.</p>
                    <p className="mt-5">During my college years, <span className='text-white'>I taught myself Python</span> and have since developed a passion for coding. I participated in a <span className='text-white'>Data Science Expertise certificate program</span> held by Istanbul Technical University and completed a <span className='text-white'>professional certificate in Data Engineering Foundations</span>.</p>
                    <p className="mt-5">Aside from my technical skills, <span className='text-white'>I am also fluent in English and my native language, Turkish</span>, and currently teaching myself French. My diverse background and skills have helped me develop a unique perspective on web development and problem-solving. I'm always eager to take on new challenges and collaborate with others to create innovative solutions.</p>
                    <p className="mt-5">Thank you for taking the time to learn more about me, and I look forward to potentially working with you in the future!"</p>
                </article>
                <div className='ml-5 md:mr-20'>
                    <img className="w-50px shadow max-w-full h-auto align-middle border-none" src="/assets/images/myPhoto.png"/>
                </div>
            </div>
        </section>
    )
}