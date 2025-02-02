import { PROFILE } from "../constants";
import { RiArrowRightUpLine } from "@remixicon/react";
import heroBackground from "/Pic/3.jpg";

function Hero() {
  return (
    <section
      className="relative grid min-h-screen grid-cols-1 items-center justify-center gap-12 sm:px-10 lg:grid-cols-2 bg-cover bg-center"
      style={{
        backgroundImage: `url(${heroBackground})`,
      }}
      id="home"
    >
      {/* Left content */}
      <div className="flex justify-center lg:justify-start px-2">
        <div className="relative w-[400px] h-[400px] rounded-full wave-border">
          <img
            src="/profile.png"
            alt={PROFILE.name}
            className="hero-img border border-gray-500 rounded-full w-full h-full object-cover p-1"
          />
        </div>
      </div>

      {/* Right content */}
      <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
        <div className="mt-5 lg:mt-18">
          <h1 className="hero-title mb-1 text-3xl sm:text-4xl lg:text-5xl font-extrabold">
            {PROFILE.name}
          </h1>
          <h2 className="hero-subheading bg-gradient-to-b from-pink-200 to-purple-300 bg-clip-text text-2xl tracking-tighter text-transparent mb-3">
            {PROFILE.role}
          </h2>
        </div>
        <p className="hero-text max-w-2xl lg:pl-3 text-lg sm:text-[16px] tracking-widew ml-10 lg:text-[20px] lg:mb-4 lg:ml-[-8px] text-left">
          {PROFILE.subheading}
        </p>

        <div className="flex text-center">
          <a
            href="/Tamuna Kvantaliani.pdf"
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
