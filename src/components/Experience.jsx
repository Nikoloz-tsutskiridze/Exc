import { useRef } from "react";
import { EXPERIENCES } from "../constants";

function Experience() {
  const experienceRef = useRef(null);

  return (
    <section
      className="py-28 bg-cover bg-center"
      style={{ backgroundImage: `url('/Pic/11.jpg')` }}
      id="work"
      ref={experienceRef}
    >
      <div className="mx-auto max-w-4xl px-4 relative">
        <h2 className="mb-16 text-center text-3xl font-medium lg:text-4xl text-white">
          Experience
        </h2>
        <div className="flex flex-col space-y-12 gap-8">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="experience-item">
              <div className="flex flex-col items-start justify-between md:flex-row">
                <div className="w-full text-sm font-semibold text-yellow-300 md:w-1/4 lg:text-lg mb-4 md:mb-0">
                  {exp.yearRange}
                  <hr className="w-24 border-t-2 border-stone-400" />
                </div>
                <div className="w-full md:w-3/4">
                  <h3 className="mb-2 text-lg lg:text-2xl text-white">
                    {exp.role}
                    <span className="bg-gradient-to-b from-yellow-200 to-yellow-500 bg-clip-text text-transparent">
                      {exp.company}
                    </span>
                  </h3>
                  <p className="mb-4 text-sm lg:text-base text-white">
                    {exp.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map((tech, id) => (
                      <span
                        key={id}
                        className="rounded-full border-2 border-pink-500/30 px-3 py-1 text-sm font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
