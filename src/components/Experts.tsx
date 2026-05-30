import { experts } from "./content/content.json";

export default function Experts() {
  return (
    <div
      className="expert bg-dark text-white py-5 px-3"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container my-4">
        {/* Section Header */}
        <div className="text-center mb-5 position-relative">
          <h2
            className="fw-black display-5 text-white mb-2"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            Our Experts
          </h2>
          {/* Minimalist modern gold accent line underneath */}
          <div
            className="mx-auto rounded"
            style={{ width: "60px", height: "4px", backgroundColor: "#FFC107" }}
          ></div>
        </div>

        {/* 3-Column Responsive Layout Grid */}
        <div className="row g-4 justify-content-center">
          {experts.map((expert) => (
            <div className="col-12 col-md-6 col-lg-4" key={expert.id}>
              {/* Expert Profile Card Frame with Dark Palette */}
              <div
                className="expert-card rounded-4 overflow-hidden shadow position-relative d-flex flex-column"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Profile Image Container with Aspect Ratio Lock */}
                <div className="ratio ratio-1x1 bg-black overflow-hidden position-relative img-frame">
                  <img
                    src={expert.image}
                    alt={expert.name}
                    className="img-fluid object-fit-cover w-100 h-100 profile-img"
                    style={{
                      filter: "grayscale(100%)", // Keeps the uniform classic look from your picture
                      opacity: 0.85,
                      transition: "all 0.5s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  />

                  {/* Subtle decorative gold line inside the image card frame on hover */}
                  <div
                    className="position-absolute bottom-0 start-0 w-100 accent-bar"
                    style={{
                      height: "3px",
                      backgroundColor: "#FFC107",
                      transform: "scaleX(0)",
                      transition: "transform 0.3s ease",
                    }}
                  ></div>
                </div>

                {/* Profile Meta Data Typography Box */}
                <div
                  className="p-4 text-center border-top flex-grow-1"
                  style={{ backgroundColor: "#1a1a1a", borderColor: "#2a2a2a" }}
                >
                  <h4
                    className="text-white mb-1 text-uppercase"
                    style={{
                      fontWeight: "800",
                      fontSize: "1.2rem",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {expert.name}
                  </h4>
                  <p
                    className="mb-0 text-uppercase tracking-wider"
                    style={{
                      fontSize: "0.78rem",
                      color: "#FFC107",
                      letterSpacing: "0.08em",
                      fontWeight: "600",
                    }}
                  >
                    {expert.role}
                  </p>

                  {/* Clean social follow mock icons for a highly modern UI touch */}
                  <div
                    className="social-links mt-3 d-flex justify-content-center gap-3 opacity-0"
                    style={{
                      transition: "all 0.3s ease",
                      transform: "translateY(5px)",
                    }}
                  >
                    <a href="#" className="text-light-emphasis">
                      <i className="bi bi-linkedin fs-6"></i>
                    </a>
                    <a href="#" className="text-light-emphasis">
                      <i className="bi bi-envelope-fill fs-6"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
