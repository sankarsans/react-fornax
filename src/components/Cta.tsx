import { ctaBanner } from "./content/content.json";

export default function Cta() {
  return (
    <div
      className="cta py-5 px-3 position-relative overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #FFC107 0%, #E0A800 100%)",
      }}
    >
      {/* Structural geometric grid line decoration overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.1) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container position-relative z-1 my-3 text-center">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-9 col-xl-8">
            {/* Main Catchy Heading */}
            <h2
              className="text-dark mb-3 display-6 mx-auto"
              style={{
                fontWeight: "800",
                letterSpacing: "-0.02em",
                lineHeight: "1.25",
                maxWidth: "720px",
              }}
            >
              {ctaBanner.heading}
            </h2>

            {/* Supporting Subtext */}
            <p
              className="text-dark text-opacity-75 mb-4 fw-medium mx-auto"
              style={{ fontSize: "1.05rem", maxWidth: "550px" }}
            >
              {ctaBanner.subtext}
            </p>

            {/* Interactive Call Button Anchor Capsule */}
            <a
              href={`tel:${ctaBanner.primaryPhone.replace(/\s+/g, "")}`}
              className="d-inline-flex align-items-center text-decoration-none px-4 py-3 rounded-pill modern-call-btn shadow-lg text-start"
              style={{
                backgroundColor: "#212529",
                color: "#ffffff",
                transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
              }}
            >
              {/* Gold Accented Icon Box */}
              <div
                className="d-flex align-items-center justify-content-center rounded-circle me-3 call-icon-container"
                style={{
                  width: "42px",
                  height: "42px",
                  backgroundColor: "rgba(255, 193, 7, 0.15)",
                  border: "1px solid rgba(255, 193, 7, 0.2)",
                  transition: "all 0.3s ease",
                }}
              >
                <i
                  className="bi bi-telephone-fill"
                  style={{ color: "#FFC107", fontSize: "1.1rem" }}
                ></i>
              </div>

              {/* Phone text layers */}
              <div className="pe-2">
                <small
                  className="d-block text-uppercase tracking-widest text-white-50 font-monospace mb-0.5"
                  style={{ fontSize: "0.65rem" }}
                >
                  Speak to an Expert
                </small>
                <span className="fw-bold fs-4 tracking-tight">
                  {ctaBanner.primaryPhone}
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
