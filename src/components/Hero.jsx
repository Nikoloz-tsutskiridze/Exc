import { useState, useEffect, useRef } from "react";
import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import profile from "../assets/profile.png";
import heroBackground from "/Pic/5.jpg";

const carouselImages = [
  "/Pic/1.jpg",
  "/Pic/3.jpg",
  "/Pic/5.jpg",
  "/Pic/12.jpg",
  "/Pic/15.jpg",
];

function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const heroRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === carouselImages.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    carouselImages.forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  return (
    <section
      className="relative grid min-h-screen grid-cols-1 items-center justify-center gap-12 sm:px-10 lg:grid-cols-2 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
      id="home"
      ref={heroRef}
    >
      <div className="absolute inset-0 bg-black opacity-40 backdrop-blur-sm"></div>

      {/* Carousel Images */}
      <div
        className="absolute inset-0 bg-cover bg-center rounded-lg"
        style={{
          backgroundImage: `url(${carouselImages[currentImageIndex]})`,
        }}
      />

      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 flex space-x-4 z-10">
        {carouselImages.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full ${
              currentImageIndex === index ? "bg-yellow-400" : "bg-gray-500"
            }`}
          ></div>
        ))}
      </div>

      <div className="flex justify-center lg:justify-start lg:ml-36 z-20">
        <div className="relative w-[250px] h-[250px] sm:w-[300px] sm:h-[300px] lg:w-[400px] lg:h-[400px] rounded-full mt-10">
          <img
            src={profile}
            alt={PROFILE.name}
            loading="lazy"
            className="hero-img border border-yellow-200 rounded-full w-full h-full object-cover p-1"
          />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-left lg:items-start lg:text-left px-6 sm:px-12">
        <div className="mt-5 lg:mt-18">
          <h1
            className="hero-title mb-1 text-3xl sm:text-4xl lg:text-5xl
 font-extrabold"
          >
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-yellow-100 to-yellow-500 bg-clip-text text-2xl tracking-tighter text-transparent mb-3">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl  text-lg sm:text-[16px] tracking-wide ml-10 lg:pl-2 lg:text-[20px] lg:mb-4 lg:ml-[-8px] text-left">
          {PROFILE.subheading}
        </p>

        <div className="flex text-center">
          <a
            href="/Nikoloz-Tsutskiridze.pdf"
            target="_blank"
            rel="noopener noreferrer"
            download="Tamuna Kvantaliani.pdf"
            className="hero-btn flex gap-3 my-3 items-center rounded-full border border-yellow-400/50 px-6 py-4 text-sm sm:text-base font-medium transition duration-300 hover:bg-yellow-500 hover:text-white"
          >
            <span>Download Resume</span>
            <RiArrowRightUpLine className="ml-1 text-lg transition-transform duration-300 hover:-rotate-45" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
