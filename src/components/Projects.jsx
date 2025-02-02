/* eslint-disable react/prop-types */
import { useState, memo, useEffect } from "react";
import { PROJECTS } from "../constants";
import Modal from "./Modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const ProjectCard = memo(({ project, onClick }) => (
  <div
    className="cursor-pointer overflow-hidden rounded-lg shadow-md hover:scale-105 transition-transform"
    onClick={onClick}
  >
    <LazyLoadImage
      src={project.imgSrc}
      alt={project.title}
      effect="blur"
      className="w-full h-[300px] object-cover rounded-lg"
      width="100%"
      height="300px"
      style={{ minWidth: "100%", minHeight: "300px" }}
      onError={(e) => (e.target.src = "/fallback.jpg")}
    />
  </div>
));

ProjectCard.displayName = "ProjectCard";

function Projects() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [visibleProjects, setVisibleProjects] = useState(6);

  useEffect(() => {
    PROJECTS.forEach((project) => {
      const img = new Image();
      img.src = project.imgSrc;
    });
  }, []);

  const handleImageClick = (index) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  };

  return (
    <section className="lg:p-16 mb-10 p-2" id="projects">
      <h2 className="my-8 text-center text-3xl font-medium lg:text-4xl">
        My Projects
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {PROJECTS.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            onClick={() => handleImageClick(index)}
          />
        ))}
      </div>

      {visibleProjects < PROJECTS.length && (
        <button
          onClick={() => setVisibleProjects((prev) => prev + 6)}
          className="mt-6 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
        >
          Load More
        </button>
      )}

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

export default memo(Projects);
