import { packages } from "./content/content.json";

export default function Package() {
  return (
    <div
      className="package bg-white text-dark py-5 px-3"
      style={{ backgroundColor: "#ffffff", minHeight: "100vh" }}
    >
      <div className="container my-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-warning text-uppercase tracking-wider small fw-bold mb-2 d-inline-block">
            Pricing Plans
          </span>
          <h2
            className="fw-black display-5 text-dark"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            Our Packages
          </h2>
        </div>

        {/* 2-Column Responsive Grid Layout */}
        <div className="row g-4 justify-content-center">
          {packages.map((pkg) => (
            <div className="col-12 col-md-4 col-xl-4" key={pkg.id}>
              {/* Premium Pricing Card */}
              <div
                className="package-card bg-white text-dark p-4 p-md-4 rounded-4 shadow-sm d-flex flex-column align-items-center text-center h-100"
                style={{
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid #e2e8f0",
                }}
              >
                {/* Modernized Icon Ring */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgba(255, 193, 7, 0.15)",
                    border: "2px solid #FFC107",
                  }}
                >
                  <i
                    className={`bi ${pkg.icon}`}
                    style={{ color: "#D4AF37", fontSize: "2.25rem" }}
                  ></i>
                </div>

                {/* Package Titles */}
                <h4
                  className="fw-extrabold mb-1 tracking-tight text-uppercase text-dark"
                  style={{ fontWeight: "800", fontSize: "1.4rem" }}
                >
                  {pkg.title}
                </h4>

                {/* Pricing Block */}
                <div className="my-1">
                  <span className="text-muted small fw-medium">Starts @ </span>
                  <span
                    className="fs-3 fw-bold text-dark"
                    style={{ letterSpacing: "-0.01em" }}
                  >
                    ₹{pkg.price}
                  </span>
                  <span className="text-secondary small font-monospace">
                    /Sqft
                  </span>
                </div>

                {/* Sub-note text placeholder logic */}
                <div style={{ minHeight: "24px" }} className="mb-4">
                  {pkg.note ? (
                    <span className="badge bg-light text-secondary border px-2 py-1 small fw-normal">
                      {pkg.note}
                    </span>
                  ) : (
                    <span className="opacity-0">&nbsp;</span>
                  )}
                </div>

                {/* Clean Call To Action Button */}
                <a
                  href="#Contact"
                  className="btn w-100 py-2.5 rounded-3 fw-bold text-uppercase tracking-wider transition-all cta-btn"
                  style={{
                    backgroundColor: "#FFC107",
                    color: "#000000",
                    fontSize: "0.85rem",
                    border: "none",
                    padding: "10px",
                  }}
                >
                  Know More
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Global Disclaimer Banner */}
        <div className="row justify-content-center mt-5">
          <div className="col-12 col-xl-10">
            <div
              className="p-3 text-center rounded-3 shadow-sm border"
              style={{
                backgroundColor: "#f8f9fa",
                borderColor: "#e2e8f0",
              }}
            >
              <p
                className="mb-0 text-muted fw-medium"
                style={{ fontSize: "0.95rem", color: "#4a5568" }}
              >
                <span className="text-warning fw-bold">Note:</span> Minimum
                overall built-up area should be 1500 sqft.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
