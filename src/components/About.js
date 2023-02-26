import React from 'react'

export default function About(props) {
    const tr = props.tr
    return (
        <section id="about" className="reveal text-gray-400 bg-primary body-font">
            <div className="container px-5 pb-10 mx-auto text-center lg:px-40">
                <div className="flex flex-col w-full mb-4">
                    <h1 className="splash sm:text-4xl text-3xl font-medium title-font text-white">{tr ? 'Hakkımda' : 'About me'}</h1>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center px-10'>
                <article className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 ml-5 md:ml-20">
                    {tr ? 
                    <p>Merhaba, ben Sunay. Matematik ve iktisat alanlarında lisans derecesine sahip bir web geliştiricisiyim. <span className='text-white'>Şu anda ODTÜ'de matematik alanında yüksek lisans eğitimimi sürdürüyorum.</span> Bankacılık sektöründe Stratejik Planlama Uzman Yardımcısı olarak iki yıllık bir tecrübeye sahibim. Bu görevimde Microsoft Office uygulamalarının yanı sıra <span className='text-white'>Oracle SQL, VBA ve UiPath gibi teknolojileri de kullanma fırsatı buldum.</span></p>: 
                    <p>Hello, my name is Sunay, and I'm a web developer with a background in mathematics and economics. I hold a bachelor's degree in both fields, and <span className='text-white'>I'm currently pursuing my graduate degree in mathematics</span>. I have over two years of professional experience in the banking sector, where I worked as an assistant specialist in the strategy department. In this role, <span className='text-white'>I utilized Oracle SQL, VBA, UiPath, and Microsoft Office applications</span>.</p>}
                    {tr ? 
                    <p className="mt-5">Üniversite yıllarımda <span className='text-white'>kendi kendime Python öğrendim</span> ve o günden bu yana kodlamaya olan ilgim artarak devam ediyor. 2021 yılında İstanbul Teknik Üniversitesi tarafından düzenlenen <span className='text-white'>Veri Bilimi Uzmanlığı sertifika programı</span>na katıldım, daha sonra Coursera üzerinden <span className='text-white'>Veri Mühendisliği Temelleri</span> profesyonel sertifikasını almaya hak kazandım.</p>:
                    <p className="mt-5">During my college years, <span className='text-white'>I taught myself Python</span> and have since developed a passion for coding. I participated in a <span className='text-white'>Data Science Expertise certificate program</span> held by Istanbul Technical University and completed a <span className='text-white'>professional certificate in Data Engineering Foundations</span>.</p>}
                    {tr ? 
                    <p className="mt-5">Teknik becerilerimin yanı sıra <span className='text-white'>ileri düzey İngilizce bilgisine sahibim </span>ve şu anda kendi kendime Fransızca öğreniyorum. Farklı alanlardaki geçmişim ve becerilerim, problem çözme konusunda benzersiz bir bakış açısı geliştirmeme yardımcı oldu. Her zaman yeni zorlukları üstlenmeye ve yenilikçi çözümler yaratmak için başkalarıyla işbirliği yapmaya hevesliyim.</p>:
                    <p className="mt-5">Aside from my technical skills, <span className='text-white'>I am also fluent in English and my native language, Turkish</span>, and currently teaching myself French. My diverse background and skills have helped me develop a unique perspective on web development and problem-solving. I'm always eager to take on new challenges and collaborate with others to create innovative solutions.</p>}
                    {tr ? 
                    <p className="mt-5">Benim hakkımda daha fazla şey öğrenmek için zaman ayırdığınız için teşekkür ederim. Sizinle birlikte çalışma fırsatını dört gözle bekliyorum!</p>:
                    <p >Thank you for taking the time to learn more about me, and I look forward to potentially working with you in the future!</p>}
                </article>
                <div className='ml-5 md:mr-20'>
                    <img className="w-50px shadow max-w-full h-auto align-middle border-none" src="/assets/images/myPhoto.png"/>
                </div>
            </div>
        </section>
    )
}