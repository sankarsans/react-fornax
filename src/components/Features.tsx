import { features } from "./content/content.json";

export default function Features() {
  return (
    <div
      className="features bg-dark text-white py-5"
      style={{ backgroundColor: "#121212" }}
    >
      <div className="container my-4">
        <div className="row g-4">
          {features.map((item) => (
            <div className="col-12 col-md-6 col-lg-4" key={item.id}>
              {/* Card wrapper with modern border, subtle transition, and hover lift */}
              <div
                className="d-flex align-items-start p-4 rounded-4 h-100 style-card"
                style={{
                  backgroundColor: "#1a1a1a",
                  border: "1px solid #2a2a2a",
                  transition: "all 0.3s ease-in-out",
                }}
              >
                {/* Left Side: Modern Icon Capsule */}
                <div className="me-4">
                  <div
                    className="d-flex align-items-center justify-content-center rounded-3"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "rgba(255, 193, 7, 0.1)", // Light gold tint background
                      border: "1px solid rgba(255, 193, 7, 0.2)",
                    }}
                  >
                    <i
                      className={`bi ${item.icon}`}
                      style={{ color: "#FFC107", fontSize: "1.75rem" }}
                    ></i>
                  </div>
                </div>

                {/* Right Side: High-Contrast Content */}
                <div>
                  <h5
                    className="text-white mb-2"
                    style={{ fontWeight: "700", letterSpacing: "-0.02em" }}
                  >
                    {item.title}
                  </h5>
                  <p
                    className="mb-0 lh-base text-secondary light-text"
                    style={{
                      fontSize: "0.925rem",
                      fontWeight: "400",
                    }}
                  >
                    {item.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
