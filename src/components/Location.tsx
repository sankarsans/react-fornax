import { contactInfo, locationInfo } from "./content/content.json";

export default function Location() {
  return (
    <div
      className="location map-section py-5 px-3"
      style={{
        backgroundColor: "#121212",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Structural architectural alignment line layer overlay */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container my-4 position-relative z-1">
        <div className="row g-4 align-items-stretch">
          {/* LEFT COLUMN: Headings, Address, & Operating Hours */}
          <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
            <div className="text-start mb-4 mb-lg-0">
              <span
                className="text-warning text-uppercase tracking-wider small fw-bold mb-2 d-inline-block"
                style={{ color: "#FFC107" }}
              >
                Find Us
              </span>
              <h2
                className="fw-black display-5 text-white mb-3"
                style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
              >
                {locationInfo.sectionTitle}
              </h2>
              <p
                className="text-muted mb-4 lh-lg location-color"
                style={{ fontSize: "1rem", color: "#a0a0a0" }}
              >
                {locationInfo.subtitle}
              </p>

              {/* Office Address Container */}
              <div
                className="p-3 rounded-4 mb-4 border d-flex align-items-start"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 me-3 flex-shrink-0"
                  style={{
                    width: "42px",
                    height: "42px",
                    backgroundColor: "rgba(255, 193, 7, 0.08)",
                    border: "1px solid rgba(255, 193, 7, 0.15)",
                  }}
                >
                  <i
                    className="bi bi-geo-alt-fill"
                    style={{ color: "#FFC107", fontSize: "1.1rem" }}
                  ></i>
                </div>
                <div>
                  <h6
                    className="fw-bold text-white mb-1"
                    style={{ fontSize: "0.95rem" }}
                  >
                    Head Office
                  </h6>
                  <p
                    className="mb-0 text-muted lh-base location-color-1"
                    style={{ fontSize: "0.88rem", color: "#b0b0b0" }}
                  >
                    {contactInfo.address}
                  </p>
                </div>
              </div>

              {/* Dynamic Timings Grid Layer */}
              <div
                className="p-3 rounded-4 border"
                style={{
                  backgroundColor: "rgba(255, 255, 255, 0.02)",
                  borderColor: "rgba(255, 255, 255, 0.08)",
                }}
              >
                <div className="d-flex align-items-center mb-3">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3 me-3"
                    style={{
                      width: "42px",
                      height: "42px",
                      backgroundColor: "rgba(255, 193, 7, 0.08)",
                      border: "1px solid rgba(255, 193, 7, 0.15)",
                    }}
                  >
                    <i
                      className="bi bi-clock-history"
                      style={{ color: "#FFC107", fontSize: "1.1rem" }}
                    ></i>
                  </div>
                  <h6
                    className="fw-bold text-white mb-0"
                    style={{ fontSize: "0.95rem" }}
                  >
                    Office Timings
                  </h6>
                </div>
                <div className="d-flex flex-column gap-2 ps-1">
                  {locationInfo.timings.map((time, idx) => (
                    <div
                      key={idx}
                      className="d-flex justify-content-between align-items-center border-bottom pb-2 last-border-none"
                      style={{ borderColor: "rgba(255,255,255,0.05)" }}
                    >
                      <span
                        className="text-muted small location-color"
                        style={{ color: "#a0a0a0" }}
                      >
                        {time.days}
                      </span>
                      <span
                        className="text-white small font-monospace fw-semibold"
                        style={{ color: "#e0e0e0" }}
                      >
                        {time.hours}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Direct Open Link Map Call To Action */}
            <div className="text-start mt-4">
              <a
                href="https://maps.app.goo.gl/ckYHyYBaEcaLaL8d8"
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-100 py-3 rounded-3 fw-bold text-uppercase tracking-wider text-center direction-btn"
                style={{
                  backgroundColor: "#FFC107",
                  color: "#000000",
                  fontSize: "0.88rem",
                  border: "none",
                  transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                Get Directions{" "}
                <i className="bi bi-box-arrow-up-right ms-2 small"></i>
              </a>
            </div>
          </div>

          {/* RIGHT COLUMN: Modern Full Bleed Embedded Maps Canvas */}
          <div className="col-12 col-lg-7">
            <div
              className="w-100 h-100 rounded-4 overflow-hidden position-relative map-frame-wrapper border shadow-lg"
              style={{
                minHeight: "420px",
                borderColor: "rgba(255, 255, 255, 0.08)",
                backgroundColor: "#1e1e1e",
              }}
            >
              <iframe
                src={locationInfo.googleMapsEmbedUrl}
                title="Office Location Map"
                className="w-100 h-100 dark-map-iframe"
                style={{ border: 0, minHeight: "420px", display: "block" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
