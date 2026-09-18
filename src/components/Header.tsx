import { Link, useLocation, useNavigate } from "react-router-dom";
import logoImg from "../assets/logo.png";

export default function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  // Check if current page is Home (adjust '/' or '/Home' to match your routing)
  const isHomePage =
    location.pathname === "/" || location.pathname.toLowerCase() === "/home";

  const closeMobileMenu = () => {
    const navbarCollapse = document.getElementById("navbarNav");
    if (navbarCollapse && navbarCollapse.classList.contains("show")) {
      navbarCollapse.classList.remove("show");
    }
  };

  const scrollToElement = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      const navbarOffset = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleScroll = (e: any, targetId: string) => {
    e.preventDefault();
    closeMobileMenu();

    if (isHomePage) {
      // If already on Home, scroll immediately
      scrollToElement(targetId);
    } else {
      // If on another page, navigate to Home and pass target section in state
      navigate(`/Home#${targetId}`, { state: { scrollTo: targetId } });
    }
  };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 z-3 shadow-sm py-3"
      style={{ borderBottom: "1px solid #eaedf0" }}
    >
      <div className="container">
        <Link
          to="/Home"
          className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
        >
          <img
            src={logoImg}
            alt="Fornax Home Developers Logo"
            height="55"
            className="d-inline-block align-top me-2"
          />
        </Link>

        <button
          className="navbar-toggler border-0 shadow-none"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div
          className="collapse navbar-collapse justify-content-end"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-2 mt-3 mt-lg-0">
            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
                href="#About"
                onClick={(e) => handleScroll(e, "About")}
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <Link
                to="/ContructionPackage"
                className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
                onClick={closeMobileMenu}
              >
                Construction Package
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/DesignPackage"
                className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
                onClick={closeMobileMenu}
              >
                Design Package
              </Link>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
                href="#Package"
                onClick={(e) => handleScroll(e, "Package")}
              >
                Packages
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
                href="#Projects"
                onClick={(e) => handleScroll(e, "Projects")}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-2"
                href="#Contact"
                onClick={(e) => handleScroll(e, "Contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      <style>{`
        .hover-gold-nav {
          color: #4b5563 !important;
          transition: all 0.2s ease-in-out;
        }
        .hover-gold-nav:hover {
          color: #C68F00 !important;
        }
      `}</style>
    </nav>
  );
}
