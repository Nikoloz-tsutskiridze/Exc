import { RiCloseLine, RiMenu3Line } from "@remixicon/react";
import { useState, useEffect } from "react";
import { NAVIGATION_LINKS } from "../constants";

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [, setShowScrollToTop] = useState(false);

  function toggleMobileMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  function handleClick(e, href) {
    e.preventDefault();
    const targetElement = document.querySelector(href);
    if (targetElement) {
      const offset = -85;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.scrollY + offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
    setIsMenuOpen(false);
  }

  useEffect(() => {
    function handleScroll() {
      const heroSection = document.getElementById("home");
      if (heroSection) {
        const heroBottom = heroSection.getBoundingClientRect().bottom;
        setShowScrollToTop(heroBottom < 0);
      }
    }

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <nav className="fixed top-0 left-0 right-0 z-50 w-full px-6 py-4 backdrop-blur-lg">
        {/* Desktop Nav */}
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-semibold">
            <a href="#home">YourLogo</a>
          </div>

          <ul className="hidden lg:flex items-center gap-8">
            {NAVIGATION_LINKS.map((item, index) => (
              <li key={index}>
                <a
                  className="text-sm text-white hover:text-yellow-400"
                  href={item.href}
                  onClick={(e) => handleClick(e, item.href)}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="lg:hidden text-white focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
          >
            {isMenuOpen ? (
              <RiCloseLine className="m-2 h-6 w-6" />
            ) : (
              <RiMenu3Line className="m-2 h-6 w-6" />
            )}
          </button>
        </div>

        {/* Full-Screen Overlay for Mobile Menu */}
        {isMenuOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-lg">
            <div className="flex flex-col items-center gap-8 text-white">
              <button
                className="absolute top-4 right-4 text-white focus:outline-none"
                onClick={toggleMobileMenu}
                aria-label="Close Menu"
              >
                <RiCloseLine className="h-8 w-8" />
              </button>

              <ul className="flex flex-col items-center gap-6">
                {NAVIGATION_LINKS.map((item, index) => (
                  <li key={index}>
                    <a
                      href={item.href}
                      className="text-xl text-center"
                      onClick={(e) => handleClick(e, item.href)}
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
}

export default NavBar;
