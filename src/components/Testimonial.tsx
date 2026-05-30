import { testimonials } from "./content/content.json";

export default function Testimonial() {
  return (
    <div
      className="testimonial position-relative py-5 overflow-hidden"
      style={{
        // A rich gold gradient background with a subtle background texture simulation
        background: "linear-gradient(135deg, #FFC107 0%, #E0A800 100%)",
        minHeight: "450px",
        display: "flex",
        alignItems: "center",
      }}
    >
      {/* Background Architectural Overlay Graphic (Simulates your screenshot's background opacity) */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 30%, #000 1px, transparent 1px)",
          backgroundSize: "20px 20px",
        }}
      ></div>

      <div className="container position-relative z-1">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-8 text-center">
            {/* Header section */}
            <span className="text-dark fw-bold text-uppercase tracking-wider small bg-white bg-opacity-50 px-3 py-1 rounded-pill mb-2 d-inline-block">
              Testimonials
            </span>
            <h2
              className="fw-black text-dark mb-4 display-6"
              style={{ fontWeight: "800" }}
            >
              Customer Reviews
            </h2>

            {/* Modernized Carousel Box */}
            <div
              id="testimonialCarousel"
              className="carousel slide p-4 p-md-5 rounded-4 shadow-lg text-white"
              data-bs-ride="carousel"
              style={{
                backgroundColor: "#1E1E1E", // Rich deep grey/black card surface
                border: "1px solid rgba(255, 255, 255, 0.05)",
                backdropFilter: "blur(10px)",
              }}
            >
              <div className="carousel-inner px-md-5">
                {testimonials.map((item, index) => (
                  <div
                    className={`carousel-item ${index === 0 ? "active" : ""}`}
                    key={item.id}
                  >
                    {/* Modern Quote Icon Accent */}
                    <div className="text-warning opacity-25 mb-3">
                      <i className="bi bi-quote fs-1"></i>
                    </div>

                    {/* Dynamic Review text */}
                    <p
                      className="lh-md fs-6 fw-normal text-light-emphasis px-2 px-md-4 text-third-color"
                      style={{ letterSpacing: "0.01em" }}
                    >
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>

              {/* Integrated Control Layout: Clean Side Controls */}
              <button
                className="carousel-control-prev custom-carousel-btn"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="prev"
              >
                <i className="bi bi-chevron-left text-white fs-4"></i>
              </button>

              <button
                className="carousel-control-next custom-carousel-btn"
                type="button"
                data-bs-target="#testimonialCarousel"
                data-bs-slide="next"
              >
                <i className="bi bi-chevron-right text-white fs-4"></i>
              </button>

              {/* Integrated Indicators situated cleanly inside the card framework */}
              <div className="carousel-indicators position-relative mt-4 mb-0 custom-indicators">
                {testimonials.map((item, index) => (
                  <button
                    key={item.id}
                    type="button"
                    data-bs-target="#testimonialCarousel"
                    data-bs-slide-to={index}
                    className={index === 0 ? "active" : ""}
                    aria-current={index === 0 ? "true" : "false"}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
