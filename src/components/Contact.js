// src/components/Contact.js

import React from "react";
import '../animate.js'

export default function Contact(props) {

    const [name, setName] = React.useState("");
    const [email, setEmail] = React.useState("");
    const [message, setMessage] = React.useState("");
    const tr = props.tr
  
    function encode(data) {
      return Object.keys(data)
        .map(
          (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
        )
        .join("&");
    }
  
    function handleSubmit(e) {
      e.preventDefault();
      fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", name, email, message }),
      })
        .then(() => alert("Message sent!"))
        .catch((error) => alert(error));}

  return (
    <section id="contact" className="reveal revealLeft relative">
      <div className="container px-5 py-10 mx-auto flex sm:flex-nowrap flex-wrap">
        <div className="lg:w-2/3 md:w-1/2 bg-white rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
          <iframe
            width="100%"
            height="100%"
            title="map"
            className="absolute inset-0"
            frameBorder={0}
            marginHeight={0}
            marginWidth={0}
            style={{ filter: "opacity(0.7)" }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9169.699983346756!2d32.85933831210611!3d39.91856215081282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x14d34e5334cab73f%3A0x3c313b33ef38c2e8!2zS8O8bHTDvHIsIDA2NDIwIMOHYW5rYXlhL0Fua2FyYQ!5e0!3m2!1str!2str!4v1671190795503!5m2!1str!2str"
          />
          <div className="bg-secondary relative flex flex-wrap py-6 rounded shadow-md">
            <div className="lg:w-1/2 px-6">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {tr ? 'ADRES' : 'ADDRESS'}
              </h2>
              <p className="mt-1">
                06420 Çankaya / Ankara <br />
                {tr ? 'TÜRKİYE' : 'TURKEY'}
              </p>
            </div>
            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
              <h2 className="title-font font-semibold text-white tracking-widest text-xs">
                {tr ? 'E-POSTA' : 'E-MAIL'}
              </h2>
              <a className="text-yellow leading-relaxed">
                sunay.dogan@pm.me
              </a>
              <div className="social flex flex-wrap gap-2 mt-4 py-0">
                <a className="inline-flex items-center  focus:outline-none rounded text-base mt-2 md:mt-0" href="https://open.spotify.com/user/f7wkhl9pmo1uvrm2rl6vmfv43?si=c07bcef7bda54539" target="blank"><i className="text-xl text-spotify  text-base fa fa-spotify"></i></a>
                <a className="inline-flex items-center  focus:outline-none rounded text-base mt-2 md:mt-0" href="https://twitter.com/nagodyanus" target="blank"><i className="text-xl  text-twitter text-base fa fa-twitter"></i></a>
                <a className="inline-flex items-center  focus:outline-none rounded text-base mt-2 md:mt-0" href="https://linkedin.com/in/sunay-dogan" target="blank"><i className="text-xl  text-linkedin py-0 fa fa-linkedin-square"></i></a>
                <a className="inline-flex items-center  focus:outline-none rounded text-base mt-2 md:mt-0" href="https://github.com/sunay-d" target="blank"><i className="text-xl  text-white text-base fa fa-github"></i></a>
                <a className="inline-flex items-center  focus:outline-none rounded text-base mt-2 md:mt-0" href="https://leetcode.com/sunay_/" target="blank"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24"><path fill="orange" d="M13.483 0a1.374 1.374 0 0 0-.961.438L7.116 6.226l-3.854 4.126a5.266 5.266 0 0 0-1.209 2.104a5.35 5.35 0 0 0-.125.513a5.527 5.527 0 0 0 .062 2.362a5.83 5.83 0 0 0 .349 1.017a5.938 5.938 0 0 0 1.271 1.818l4.277 4.193l.039.038c2.248 2.165 5.852 2.133 8.063-.074l2.396-2.392c.54-.54.54-1.414.003-1.955a1.378 1.378 0 0 0-1.951-.003l-2.396 2.392a3.021 3.021 0 0 1-4.205.038l-.02-.019l-4.276-4.193c-.652-.64-.972-1.469-.948-2.263a2.68 2.68 0 0 1 .066-.523a2.545 2.545 0 0 1 .619-1.164L9.13 8.114c1.058-1.134 3.204-1.27 4.43-.278l3.501 2.831c.593.48 1.461.387 1.94-.207a1.384 1.384 0 0 0-.207-1.943l-3.5-2.831c-.8-.647-1.766-1.045-2.774-1.202l2.015-2.158A1.384 1.384 0 0 0 13.483 0zm-2.866 12.815a1.38 1.38 0 0 0-1.38 1.382a1.38 1.38 0 0 0 1.38 1.382H20.79a1.38 1.38 0 0 0 1.38-1.382a1.38 1.38 0 0 0-1.38-1.382z"/></svg></a>
              </div>
            </div>
          </div>
        </div>
        <form
          data-netlify="true"
          name="contact"
          onSubmit={handleSubmit}
          className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
          <h2 className="splash text-white sm:text-4xl text-3xl mb-1 font-medium title-font">
            {tr ? 'İletişim' : 'Contact Me'}
          </h2>
            {tr ? 
            <p className="leading-relaxed mb-5">Yeni fırsatları duymaya ve olası işbirliklerini tartışmaya her zaman açığım. Herhangi bir sorunuz veya geri bildiriminiz için bana ulaşmaktan çekinmeyin.</p>: 
            <p className="leading-relaxed mb-5">I'm always open to hearing about new opportunities and discussing potential collaborations. Feel free to reach out to me with any inquiries or feedback you may have.</p>}
          <div className="relative mb-4">
            <label htmlFor="name" className="leading-7 text-sm text-gray-400">
              {tr ? 'Ad' : 'Name'}
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full bg-secondary rounded border border-primary focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label htmlFor="email" className="leading-7 text-sm text-gray-400">
              {tr ? 'E-posta' : 'E-mail'}
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full bg-secondary rounded border border-primary focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="relative mb-4">
            <label
              htmlFor="message"
              className="leading-7 text-sm text-gray-400">
              {tr ? 'Mesaj' : 'Message'}
            </label>
            <textarea
              id="message"
              name="message"
              className="w-full bg-secondary rounded border border-primary focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
              onChange={(e) => setMessage(e.target.value)}
            />
          </div>
          <button
            type="submit"
            className="text-black bg-yellow border-0 py-2 px-6 focus:outline-none hover:bg-orange rounded text-lg">
            {tr ? 'Gönder':'Submit'}
          </button>
        </form>
      </div>
    </section>
  );
}