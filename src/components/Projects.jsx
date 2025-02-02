import { useState } from "react";
import { PROJECTS } from "../constants";
import Modal from "./Modal";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="lg:p-16 mb-10 p-2" id="projects">
      <h2 className="my-8 text-center text-3xl font-medium lg:text-4xl">
        Interior Design Projects
      </h2>

      <div className="scroll-container flex gap-4 overflow-x-auto">
        {PROJECTS.map((project, index) => (
          <div
            key={project.id}
            className="flex-shrink-0 cursor-pointer "
            onClick={() => handleImageClick(index)}
          >
            <img
              src={project.imgSrc}
              alt={project.title}
              className="h-60 w-full object-cover rounded-lg"
              loading="lazy"
              onError={(e) => (e.target.src = "/fallback.jpg")}
            />
          </div>
        ))}
      </div>

      {isModalOpen && (
        <Modal
          PROJECTS={PROJECTS}
          selectedImageIndex={selectedImageIndex}
          setSelectedImageIndex={setSelectedImageIndex}
          setIsModalOpen={setIsModalOpen}
          totalImages={PROJECTS.length}
        />
      )}
    </section>
  );
}

export default Projects;
