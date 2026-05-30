import logoImg from "../assets/logo.png";

export default function Header() {
  // Custom Smooth Scroll Interceptor
  const handleScroll = (e: any, targetId: any) => {
    e.preventDefault(); // Stop default instant jumping behavior

    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // Find the position of the section minus an offset for the sticky navbar height (approx 70px)
      const navbarOffset = 72;
      const elementPosition = targetElement.getBoundingClientRect().top;
      const offsetPosition =
        elementPosition + window.pageYOffset - navbarOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth", // Native smooth scroll engine trigger
      });

      // Optional: Close Bootstrap mobile menu automatically after a link click
      const navbarCollapse = document.getElementById("navbarNav");
      if (navbarCollapse && navbarCollapse.classList.contains("show")) {
        // Simple fallback to remove show class or trigger programmatic BS collapse toggle
        navbarCollapse.classList.remove("show");
      }
    }
  };

  return (
    // position-sticky top-0 keeps the navbar visible at all times
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white position-sticky top-0 z-3 shadow-sm py-3"
      style={{ borderBottom: "1px solid #eaedf0" }}
    >
      <div className="container">
        <a
          className="navbar-brand fw-black text-dark"
          href="#"
          onClick={(e) => handleScroll(e, "home")}
          style={{ fontWeight: "900", letterSpacing: "-0.01em" }}
        >
          <img
            src={logoImg}
            alt="Shantha Ventures Logo"
            height="55"
            className="d-inline-block align-top me-2"
          />
        </a>

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
                className="nav-link text-secondary hover-gold-nav fw-semibold px-3"
                href="#About"
                onClick={(e) => handleScroll(e, "About")}
              >
                About Us
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-3"
                href="#Features"
                onClick={(e) => handleScroll(e, "Features")}
              >
                Features
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-3"
                href="#Videos"
                onClick={(e) => handleScroll(e, "Videos")}
              >
                Videos
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-3"
                href="#Package"
                onClick={(e) => handleScroll(e, "Package")}
              >
                Packages
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-3"
                href="#Projects"
                onClick={(e) => handleScroll(e, "Projects")}
              >
                Projects
              </a>
            </li>

            <li className="nav-item">
              <a
                className="nav-link text-secondary hover-gold-nav fw-semibold px-3"
                href="#Contact"
                onClick={(e) => handleScroll(e, "Contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Modern navigation link style rules updated for high accessibility contrast */}
      <style>{`
    .hover-gold-nav {
      color: #4b5563 !important; /* Premium dark-gray color for unhovered links */
      transition: all 0.2s ease-in-out;
    }
    .hover-gold-nav:hover {
      color: #C68F00 !important; /* Slightly deeper gold for perfect contrast visibility on white backgrounds */
    }
  `}</style>
    </nav>
  );
}
