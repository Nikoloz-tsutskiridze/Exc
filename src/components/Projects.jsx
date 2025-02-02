import { useEffect, useState } from "react";
import { PROJECTS } from "../constants";
import Modal from "./Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  useEffect(() => {
    PROJECTS.forEach(({ imgSrc }) => {
      const img = new Image();
      img.src = imgSrc;
    });
  }, []);

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
            <LazyLoadImage
              src={project.imgSrc}
              alt={project.title}
              effect="blur"
              className="h-60 w-full object-cover rounded-lg"
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
