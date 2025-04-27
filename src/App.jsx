import React, { useState, useEffect } from "react";
import './App.css'
import BG from "./assets/rupixen-Ai6sfNRvlvc-unsplash.webp";
import BG2 from "./assets/traf-ukTd6UiQbLQ-unsplash.webp";
import profile from "./assets/profile-pic.webp";
import profile2 from './assets/portfolio2.webp';
import webpage1 from './assets/Sunny-Side-webpage.webp';
import webpage2 from './assets/SCO-agency-webpage.webp';
import webpage3 from './assets/resturent-webpage.webp';
import webpage4 from './assets/Weather-dashboard.webp';
import certificate1 from './assets/hightect-certificate.webp'
import certificate2 from './assets/code-visionary-certificate.webp'



import { FaFacebook, FaGithub, FaLinkedin,FaHtml5, FaCss3Alt, FaReact, FaInstagram, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import {SiJavascript, SiTailwindcss} from 'react-icons/si'

function LandingPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'auto';
    return () => (document.body.style.overflow = 'auto');
  }, [isOpen]);

  const [activeSection, setActiveSection] = useState("Projects");

  const visitContact = () => {
    window.location.href = "#Contact";
  };

  const visitPortfolio = () => {
    window.location.href = "#Portfolio";
  };

  const socialicons = [
    { id:1, link:"https://github.com/m-mudassir-arain" , media:<FaGithub/>},
    { id:2, link:"https://facebook.com/khalidsharif.arain.1" , media:<FaFacebook/> },
    { id:3, link:"https://linkedin.com/in/mudassirarain04" , media:<FaLinkedin/> }
  ];

  const ProjectsShowCase =[
    { id:1, 
      image:webpage1 , 
      title: 'Graphics and Photography', 
      description:'Make the webpage using the photos and graphics. For this user-friendly interface, HTML and CSS are used.',
      weblink:'https://m-mudassir-arain.github.io/SunnySide-webpage-project'
    },
    { id:2, 
      image:webpage2, 
      title: 'SCO & Marketing Agency',
      description:'Make a website for a digital marketing agency and SCO. For this user-friendly interface, HTML and CSS are used.',
      weblink:'https://m-mudassir-arain.github.io/SCO-and-Marketing-WebProject'
    },
    { id:3, 
      image:webpage3 , 
      title: 'Restaurant',
      description:'Make a beautiful, straightforward restaurant website. For this user-friendly interface, HTML and CSS are used.',
      weblink:'https://m-mudassir-arain.github.io/Resturent-Webpage-HighTech'
    },
    { id:4, 
      image:webpage4 , 
      title: 'Weather Dashboard',
      description:'Develop the Weather Dashboard website, which focuses on real-time weather forecasting.utilizing JavaScript, HTML, CSS, and API.',
      weblink:'https://m-mudassir-arain.github.io/Weather-Dashboard-WebProject '
    },
  ];
  const certificates = [
    {id:1, image:certificate1},
    {id:2, image:certificate2}
  ];

  const TechIcons = [
    {id:1, Sicon:<FaHtml5 className="text-orange-600 text-9xl"/>},
    {id:2, Sicon:<FaCss3Alt className="text-blue-600 text-9xl"/>},
    {id:3, Sicon:<SiJavascript className="text-yellow-400 text-9xl"/>},
    {id:4, Sicon:<FaReact className="text-cyan-400 text-9xl" />},
    {id:5, Sicon:<SiTailwindcss className="text-sky-400 text-9xl"/>}
  ];


  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, phone, message } = formData;

    const whatsappMessage = `Hello, I am ${name}%0AMy Email: ${email}%0APhone: ${phone}%0AMessage: ${message}`;
    const phoneNumber = "923083065787"; // 👈 YOUR WhatsApp number (with country code, no + or spaces)

    window.open(`https://wa.me/${phoneNumber}?text=${whatsappMessage}`, "_blank");
  };
  return (
    <>
    {/* -------------------Navbar Section----------------------- */}
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-[#032426]/75">
      <nav className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8 text-white">
        <div className="flex items-center justify-between h-20 md:h-28">

          {/* Brand */}
          <div className="flex-shrink-0" id="Brandname">
            <a href="#" className="text-white font-bold text-3xl md:text-4xl">
              Muhammad Mudassir
            </a>
          </div>

          {/* Hamburger Menu (Mobile Only) */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="text-white focus:outline-none"
            >
              <svg
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Desktop Links (Hidden on Mobile) */}
          <div className="hidden lg:flex space-x-6">
            <a href="#Home" className="text-xl font-semibold hover:text-emerald-500 transition">Home</a>
            <a href="#About" className="text-xl font-semibold hover:text-emerald-500 transition">About</a>
            <a href="#Portfolio" className="text-xl font-semibold hover:text-emerald-500 transition">Portfolio</a>
            <a href="#Contact" className="text-xl font-semibold hover:text-emerald-500 transition">Contact</a>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden h-[100vh] flex justify-center items-center top-20 left-0 w-full bg-[#032426]/95 backdrop-blur-lg px-6 py-4 transition-all duration-300 z-50 overflow-y-auto">
            <ul className="space-y-14 text-white text-left">
              <li><a href="#Home" onClick={() => setIsOpen(false)} className="block text-3xl font-semibold hover:text-emerald-500">Home</a></li>
              <li><a href="#About" onClick={() => setIsOpen(false)} className="block text-3xl font-semibold hover:text-emerald-500">About</a></li>
              <li><a href="#Portfolio" onClick={() => setIsOpen(false)} className="block text-3xl font-semibold hover:text-emerald-500">Portfolio</a></li>
              <li><a href="#Contact" onClick={() => setIsOpen(false)} className="block text-3xl font-semibold hover:text-emerald-500">Contact</a></li>
            </ul>
          </div>
        )}
      </nav>
    </header>


    {/* -------------------Home Section------------------------- */}
      <section id="Home" className="relative h-[100%] text-white overflow-hidden flex justify-center items-end">
        <div className="absolute inset-0 -z-10">
          <img
            src={BG}
            alt="Background"
            className="w-full h-[100%] object-cover brightness-20"
          />
        </div>

        <div className="w-[80%] mx-auto flex flex-col md:flex-row justify-center items-center h-[100%] md:mt-24 px-6" id="home-section">

          <div className="flex flex-col w-[50%]" id="home-left">
            <h1 className="text-6xl font-bold leading-tight">
              Hello,  I'm <br />Muhammad Mudassir<br />
              <span className="font-extrabold text-emerald-700 text-6xl">FRONTEND DEVELOPER</span>
            </h1>
            <p className="text-2xl font-normal mt-4 mb-6 w-[95%] text-gray-300 leading-relaxed">
              I'm an enthusiastic front-end programmer. Using web design to create user-friendly, responsive interfaces 
              and intuitive online experiences is something I enjoy doing.
            </p>
            <div className="flex items-center gap-4" id="home-buttons">
              <button className="bg-emerald-700 text-white text-xl font-semibold px-4 py-2 rounded hover:bg-emerald-800 transition" type="button" onClick={visitContact}>Hire Me</button>
              <button className="bg-emerald-700 text-white text-xl font-semibold px-4 py-2 rounded hover:bg-emerald-800 transition" type="button" onClick={visitPortfolio}>My Portfolio</button>
              
            </div>
          </div>

          <div className="w-[50%]  flex justify-center items-end-safe" id="home-right">
              <img src={profile2} alt="portfolio-image" className="w-[70%] h-[70%]"/>
          </div>

        </div>
      </section>

      {/* -----------------About Section------------------------- */}
      <section id="About" className="py-16 px-4 h-[100%]">
        <div className="w-[80%] mx-auto flex flex-col md:flex-row items-center" id="about-section">

          <div className="w-[50%] rounded-xl" id="about-left">
              <img src={profile} alt="profile-image" className="w-[80%] h-[80%]" />
          </div>

          <div className="w-full md:w-[50%] mt-10 md:mt-0 md:ml-10" id="about-right">
            <h1 className="text-5xl font-bold mb-4">MY BIOGRAPHY</h1>
            <p className="text-2xl/10 text-gray-600 mb-6" id="about-bio">
              As a front-end developer pursuing a BS in computer science, my name is Muhammad Mudassir. 
              With a full year of development experience, my ability to create reliable and effective web 
              applications has improved. I have a strong interest in using technology, and I'm always looking 
              for ways to develop new skills and advance in the tech sector.
            </p>
            <hr className="mb-8 text-gray-300"/>
            <div className="space-y-2 text-gray-700">
              <p className="text-2xl">Name: <span className="font-medium">Muhammad Mudassir</span></p>
              <p className="text-2xl">Location: <span className="font-medium">Nawabshah, Pakistan</span></p>
              <p className="text-2xl">Email: <span className="font-medium">mmudassirarain04@gmail.com</span></p>
              <p className="text-2xl">Phone: <span className="font-medium">0308-3065787</span></p>
            </div>
            <div className="flex items-center space-x-4 mt-6 mb-7" id="about-buttons">
              <p className="font-bold text-2xl">Follow me on</p>
              <div className="flex justify-evenly items-center w-50" id="about-socialicons">
                {socialicons.map((icons)=>(
                  <a key={icons.id} className="text-emerald-700 hover:text-emerald-800 text-4xl" href={icons.link} >{icons.media}</a>
                ))}
              </div>
            </div>
            <div className="flex items-center gap-4" id="about-buttons">
              <button className="bg-emerald-700 text-white text-xl font-semibold px-4 py-2 rounded hover:bg-emerald-800 transition" type="button" onClick={visitContact}>Hire Me</button>
            </div>
          </div>

        </div>
      </section>

      {/* -----------------Portfolio Section--------------------- */}
      <section id="Portfolio" className="relative py-16 px-4 h-[100%]">
          <div className="absolute inset-0 -z-10">
            <img
              src={BG2}
              alt="Background"
              className="w-full h-[100%] object-cover brightness-70"
            />
          </div>
          <div id="portfolio-section" className="w-[80%] mx-auto flex flex-col justify-center items-center text-center">
            <h1 className="text-5xl font-bold mb-10 text-white">Portfolio Showcase</h1>
            <p className="text-gray-400 max-w-3xl text-2xl mb-10">Explore my journey through projects, certificates and 
              technical expertise. Each section is a reflection of my skills and experience.
            </p>
              <div id="portfolio-buttons" className="w-[80%] h-20 rounded-lg backdrop-blur-2xl shadow-xl/30 bg-gray-500/20 flex flex-wrap justify-evenly items-center">
                <button
                  onClick={() => setActiveSection("Projects")}
                  className={`w-96 h-16 border-2 text-2xl font-semibold text-white rounded-lg transition ${
                    activeSection === "Projects"
                      ? "bg-emerald-700 border-emerald-700"
                      : "border-white hover:bg-emerald-800 active:bg-emerald-700 active:border-emerald-700"
                  }`}
                >
                  Projects
                </button>
                <button
                  onClick={() => setActiveSection("Certificates")}
                  className={`w-96 h-16 border-2 text-2xl font-semibold text-white rounded-lg transition ${
                    activeSection === "Certificates"
                      ? "bg-emerald-700 border-emerald-700"
                      : "border-white hover:bg-emerald-800 active:bg-emerald-700 active:border-emerald-700"
                  }`}
                >
                  Certificates
                </button>
                <button
                  onClick={() => setActiveSection("TechStack")}
                  className={`w-96 h-16 border-2 text-2xl font-semibold text-white rounded-lg transition ${
                    activeSection === "TechStack"
                      ? "bg-emerald-700 border-emerald-700"
                      : "border-white hover:bg-emerald-800 active:bg-emerald-700 active:border-emerald-700"
                  }`}
                >
                  Tech Stack
                </button>
              </div>
              {/* Projects Section */}
              {activeSection === "Projects" && (
                <div id="projects-section" className="mt-8 w-[80%] flex flex-wrap justify-center">
                  {ProjectsShowCase.map((Project) => (
                    <div
                      key={Project.id}
                      id="project"
                      className="bg-[rgba(61,61,61,0.5)] text-gray-300 border-2 border-[#3d3d3d7f] rounded-lg w-[48%] h-[250px] m-2 p-2 flex justify-evenly items-center"
                    >
                      <div className="w-1/2 h-[200px] rounded-lg overflow-hidden mr-2">
                        <img
                          src={Project.image}
                          alt="projects-images"
                          className="w-full h-full object-cover bg-top"
                        />
                      </div>
                      <div className="w-[47%] flex flex-col justify-center items-start">
                        <h5 className="text-lg font-semibold mb-2">{Project.title}</h5>
                        <p className="text-sm text-start mb-3">{Project.description}</p>
                        <a
                          href={Project.weblink}
                          target="blank"
                          className="inline-block px-4 py-2 bg-emerald-700 text-white rounded hover:bg-emerald-800 transition"
                        >
                          Live Demo
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Certificates Section */}
              {activeSection === "Certificates" && (
                <div id="certificate-section" className="mt-8 w-[80%] flex flex-wrap justify-center">
                  {certificates.map((certify) => (
                    <div
                      key={certify.id}
                      className="rounded-xl overflow-hidden m-8 w-xl h-96"
                    >
                      <img
                        src={certify.image}
                        alt="Internship Certificate"
                        className="w-full h-full"
                      />
                    </div>
                  ))}
                </div>
              )}

              {/* Tech Stack Section */}
              {activeSection === "TechStack" && (
                    <div id="stack-section" className="mt-8 w-[80%] flex flex-wrap justify-center">
                      {TechIcons.map((stackIcon) => (
                        <div
                          key={stackIcon.id}
                          className="overflow-hidden m-14 p-2 text-5xl"
                        >
                          {stackIcon.Sicon}
                        </div>
                      ))}
                    </div>
              )}
            
          </div>
      </section>

      {/* -----------------Contact Section----------------------- */}
      <section id="Contact" className="bg-emerald-70 py-16 px-4">
        <div className="w-full max-w-4xl mx-auto py-16 px-4">
          <h2 className="text-5xl font-bold mb-10 text-center">
            Want To Get In Touch?
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="flex flex-col md:flex-row md:space-x-6 space-y-6 md:space-y-0">
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="w-full bg-gray-300 p-4 rounded-md outline-none"
                required
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                className="w-full bg-gray-300 p-4 rounded-md outline-none"
                required
                onChange={handleChange}
              />
            </div>
            <input
              type="tel"
              name="phone"
              placeholder="Phone Number"
              className="w-full bg-gray-300 p-4 rounded-md outline-none"
              required
              onChange={handleChange}
            />
            <textarea
              name="message"
              placeholder="Message"
              className="w-full bg-gray-300 p-4 h-40 rounded-md outline-none resize-none"
              required
              onChange={handleChange}
            />
            <div className="text-right">
              <button
                type="submit"
                className="bg-emerald-700 text-white font-semibold px-6 py-3 rounded-lg hover:bg-emerald-800 transition"
              >
                Submit Now
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* -----------------Footer Section------------------------ */}
      <footer className="bg-[#032426] text-gray-400 pt-10 flex flex-col justify-center items-center">
        <div className="h-64 flex flex-col justify-evenly items-center">
          <div className="text-center mb-6">
            <h2 className="text-white text-5xl font-bold flex justify-center items-center gap-2">
              Muhammad Mudassir
            </h2>
          </div>

          <div id="footer-contact" className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-10 text-sm mb-10">
            <div  className="flex items-center gap-2 text-xl" id="Pnumber">
              <FaPhoneAlt />
              <span>+92 308 3065787</span>
            </div>
            <a href="mudassir@axoonsolutios.com" id="mail" className="flex items-center gap-2 text-xl hover:text-emerald-700">
              <FaEnvelope />
              <span>mudassir@axoonsolutions.com</span>
            </a>
            <div className="flex items-center gap-2 text-xl" id="location">
              <FaMapMarkerAlt />
              <span>Street 1, Jamshed Colony Nawabshah,Sindh, Pakistan</span>
            </div>
          </div>
        </div>
        <div className="w-full bg-[#021a1b] py-4 flex flex-col md:flex-row justify-center items-center px-4">
          <div id="ownBy" className="w-[100%] h-20 flex justify-evenly items-center">
              <p className="text-lg text-gray-400 text-center mb-2 md:mb-0">
                © 2025 Portfolio. All Rights Reserved | Design by{" "}
                <a href="#" className="text-emerald-500 hover:underline">
                  Muhammad Mudassir
                </a>
              </p>

              <div className="flex space-x-3">
                <a href="https://facebook.com/khalidsharif.arain.1" className="bg-[#082f30] hover:bg-emerald-700 p-2 rounded-lg">
                  <FaFacebook className="text-white text-lg" />
                </a>
                <a href="https://linkedin.com/in/mudassirarain04" className="bg-[#082f30] hover:bg-emerald-700 p-2 rounded-lg">
                  <FaLinkedin className="text-white text-lg" />
                </a>
                <a href="https://github.com/m-mudassir-arain" className="bg-[#082f30] hover:bg-emerald-700 p-2 rounded-lg">
                  <FaGithub className="text-white text-lg" />
                </a>
              </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default LandingPage;
