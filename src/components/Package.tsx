import { packages } from "./content/content.json";

export default function Package() {
  return (
    <div
      className="package bg-dark text-white py-5 px-3"
      style={{ backgroundColor: "#121212", minHeight: "100vh" }}
    >
      <div className="container my-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span className="text-warning text-uppercase tracking-wider small fw-bold mb-2 d-inline-block">
            Pricing Plans
          </span>
          <h2
            className="fw-black display-5 text-white"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            Our Packages
          </h2>
        </div>

        {/* 2-Column Responsive Grid Layout */}
        <div className="row g-4 justify-content-center">
          {packages.map((pkg) => (
            <div className="col-12 col-md-6 col-xl-5" key={pkg.id}>
              {/* Premium Pricing Card */}
              <div
                className="package-card bg-white text-dark p-4 p-md-4 rounded-4 shadow d-flex flex-column align-items-center text-center h-100"
                style={{
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                  border: "1px solid #e0e0e0",
                }}
              >
                {/* Modernized Icon Ring */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-circle mb-4"
                  style={{
                    width: "80px",
                    height: "80px",
                    backgroundColor: "rgba(255, 193, 7, 0.1)",
                    border: "2px solid #FFC107",
                  }}
                >
                  <i
                    className={`bi ${pkg.icon}`}
                    style={{ color: "#E0A800", fontSize: "2.25rem" }}
                  ></i>
                </div>

                {/* Package Titles */}
                <h4
                  className="fw-extrabold mb-1 tracking-tight text-uppercase"
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
              className="p-3 text-center rounded-3 shadow-sm border border-opacity-10"
              style={{
                backgroundColor: "#1a1a1a",
                borderColor: "rgba(255,255,255,0.08)",
              }}
            >
              <p
                className="mb-0 text-secondary fw-medium light-text"
                style={{ fontSize: "0.95rem", color: "#b3b3b3" }}
              >
                <span className="text-warning fw-bold">Note:</span> Above prices
                may vary based on specific client requirements and customized
                design preferences.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
