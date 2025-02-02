/* eslint-disable react/prop-types */
import { useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Modal = ({
  PROJECTS,
  selectedImageIndex,
  setSelectedImageIndex,
  setIsModalOpen,
  totalImages,
}) => {
  const handleClose = () => setIsModalOpen(false);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === totalImages - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrevious = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? totalImages - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") handleNext();
      else if (e.key === "ArrowLeft") handlePrevious();
      else if (e.key === "Escape") handleClose();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedImageIndex]);

  const handleModalClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 p-4"
      onClick={handleModalClick}
    >
      <button
        onClick={handleClose}
        className="fixed top-6 right-6 text-white text-4xl font-bold   rounded-full shadow-md z-50 sm:hidden"
      >
        ✕
      </button>

      <div className="relative bg-white p-2 rounded-lg border-2 border-white max-w-4xl mx-auto">
        {/* Image */}
        <div className="relative">
          <img
            src={PROJECTS[selectedImageIndex].imgSrc}
            alt={PROJECTS[selectedImageIndex].title}
            className="w-full object-cover rounded-lg"
            style={{ maxHeight: "70vh", maxWidth: "100%" }}
          />
        </div>

        {/* Navigation Arrows */}
        <button
          onClick={handlePrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <IoIosArrowBack />
        </button>
        <button
          onClick={handleNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white text-4xl"
        >
          <IoIosArrowForward />
        </button>
      </div>
    </div>
  );
};

export default Modal;
