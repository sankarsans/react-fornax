import { services } from "./content/content.json";

export default function Whatwedo() {
  return (
    <section
      className="whatwedo text-white py-5 px-3"
      style={{
        background: "linear-gradient(135deg, #0f1115 0%, #161920 100%)",
        position: "relative",
      }}
    >
      <div className="container my-5">
        {/* Modern Section Header with tracking/sub-bar line */}
        <div className="text-center mb-5">
          <span
            className="text-warning fw-bold text-uppercase tracking-wider small d-block mb-2"
            style={{ letterSpacing: "3px" }}
          >
            Our Specialization
          </span>
          <h2
            className="fw-black display-5 text-white"
            style={{ fontWeight: "800", letterSpacing: "-0.03em" }}
          >
            What do we do?
          </h2>
        </div>

        {/* Responsive Grid Container */}
        <div className="row g-4 justify-content-center">
          {services.map((service) => (
            <div className="col-12 col-md-6 col-lg-3" key={service.id}>
              {/* Premium Dark Card with applied 'service-card' link hook */}
              <div
                className="card border-0 p-4 h-100 d-flex flex-column justify-content-between align-items-center position-relative shadow-lg text-center service-card"
                style={{
                  backgroundColor: "#1d212c",
                  borderRadius: "20px",
                  border: "1px solid rgba(255, 255, 255, 0.05)",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)", // Custom ease transition curve
                }}
              >
                {/* Upper Wrapper Content */}
                <div className="d-flex flex-column align-items-center w-100">
                  {/* Glassmorphic/Glowing Icon Backdrop Frame */}
                  <div
                    className="d-flex align-items-center justify-content-center mb-4 rounded-4 service-icon-box"
                    style={{
                      width: "60px",
                      height: "60px",
                      background:
                        "linear-gradient(135deg, rgba(241, 196, 15, 0.15) 0%, rgba(241, 196, 15, 0.03) 100%)",
                      border: "1px solid rgba(241, 196, 15, 0.3)",
                      boxShadow: "0 8px 20px rgba(241, 196, 15, 0.1)",
                      transition: "all 0.3s ease",
                    }}
                  >
                    <i
                      className={`bi ${service.icon} fs-4`}
                      style={{
                        color: "#f1c40f",
                        transition: "transform 0.3s ease",
                      }}
                    ></i>
                  </div>

                  {/* Refined Card Title */}
                  <h4 className="fw-bold text-white fs-5 mb-3 px-1 lh-base">
                    {service.title}
                  </h4>

                  {/* High Legibility Body Copy */}
                  <p
                    className="mb-4 text-secondary px-2 text-secondary-color"
                    style={{
                      fontSize: "0.875rem",
                      lineHeight: "1.7",
                      fontWeight: "400",
                      color: "#a0a5b5",
                    }}
                  >
                    {service.description}
                  </p>
                </div>

                {/* Modern Sleek Accent Button Action Layer */}
                <a
                  className="btn fw-semibold px-4 py-2 text-dark rounded-3 w-100 mt-2 service-cta-btn"
                  style={{
                    backgroundColor: "#f1c40f",
                    fontSize: "0.85rem",
                    letterSpacing: "1px",
                    border: "none",
                    fontWeight: "700",
                    boxShadow: "0 4px 15px rgba(241, 196, 15, 0.3)",
                    transition: "all 0.3s ease",
                  }}
                  href="#Contact"
                >
                  BOOK NOW
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
