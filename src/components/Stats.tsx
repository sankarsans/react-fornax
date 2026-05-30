import { stats } from "./content/content.json";

export default function Stats() {
  return (
    <div
      className="stats bg-white text-dark py-5 px-3"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Decorative architectural grid line overlay tailored for a light theme */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.06) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container my-4 position-relative z-1">
        {/* 4-Column Responsive Grid Layout */}
        {/* Section Title Block */}
        <div className="text-center mb-5">
          <h2
            className="fw-black display-5 text-dark mb-2"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            Our Milestones
          </h2>
          <p className="text-muted small text-uppercase tracking-wider fw-bold">
            Building trust through proven excellence and structural integrity.
          </p>
          <div
            className="mx-auto rounded mt-2"
            style={{ width: "50px", height: "4px", backgroundColor: "#FFC107" }}
          ></div>
        </div>
        <div className="row g-4 justify-content-center">
          {stats.map((stat) => (
            <div className="col-6 col-md-6 col-lg-3" key={stat.id}>
              {/* Premium Light Theme Stat Card */}
              <div
                className="stat-card p-4 rounded-4 text-center d-flex flex-column align-items-center justify-content-center h-100"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid #eaedf0",
                  transition: "all 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                }}
              >
                {/* Icon Wrapper with soft amber tint background */}
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 mb-3 stat-icon-container"
                  style={{
                    width: "60px",
                    height: "60px",
                    backgroundColor: "rgba(255, 193, 7, 0.1)",
                    border: "1px solid rgba(255, 193, 7, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i
                    className={`bi ${stat.icon}`}
                    style={{ color: "#D49B00", fontSize: "1.75rem" }}
                  ></i>
                </div>

                {/* Big Bold Dark Counter Number */}
                <h2
                  className="text-dark mb-1 fw-extrabold display-6"
                  style={{ fontWeight: "800", letterSpacing: "-0.03em" }}
                >
                  {stat.count}
                </h2>

                {/* Clean Deep-Gold Label Text for clear contrast against white */}
                <p
                  className="mb-0 fw-bold text-uppercase tracking-wider"
                  style={{ color: "#C68F00", fontSize: "0.78rem" }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
