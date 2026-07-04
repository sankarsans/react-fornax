import { useState } from "react";
import { whyFornax, fornaxFeatures } from "./content/content.json";

export default function WhyFornax() {
  // Store the active active feature block ID for clean hover switching
  const [hoveredFeatureId, setHoveredFeatureId] = useState<number | null>(null);

  return (
    <div className="stats bg-white text-dark py-5 px-3">
      <div className="container my-4" style={{ maxWidth: "1200px" }}>
        {/* Section Title Block */}
        <div className="text-center mb-5">
          <h2
            className="fw-black display-5 text-dark mb-2"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            Why Fornax?
          </h2>
          <div
            className="mx-auto rounded mt-2"
            style={{ width: "50px", height: "4px", backgroundColor: "#000000" }}
          ></div>
        </div>

        {/* 8-Stats Grid Layout */}
        <div className="row row-cols-2 row-cols-md-3 row-cols-lg-5 g-5 text-center mb-5 justify-content-center">
          {whyFornax.map((stat) => (
            <div className="col" key={stat.id}>
              <div
                className="d-flex flex-column align-items-center justify-content-center h-100 py-2"
                style={{
                  transition: "transform 0.3s ease",
                  cursor: "default",
                }}
                onMouseEnter={(e) =>
                  (e.currentTarget.style.transform = "translateY(-5px)")
                }
                onMouseLeave={(e) =>
                  (e.currentTarget.style.transform = "translateY(0)")
                }
              >
                <h2
                  className="text-dark mb-2"
                  style={{
                    fontWeight: "800",
                    fontSize: "2.5rem",
                    letterSpacing: "-0.03em",
                  }}
                >
                  {stat.count}
                </h2>
                <p
                  className="mb-0 text-secondary fw-semibold text-capitalize"
                  style={{
                    fontSize: "0.95rem",
                    lineHeight: "1.4",
                    maxWidth: "180px",
                  }}
                >
                  {stat.label}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Highlights Row Feature Boxes */}
        <div className="row row-cols-1 row-cols-sm-2 row-cols-lg-4 g-3 text-center mt-5">
          {fornaxFeatures.map((feature) => {
            const isHovered = hoveredFeatureId === feature.id;

            return (
              <div className="col" key={feature.id}>
                <div
                  className="p-3 d-flex flex-column justify-content-center align-items-center h-100"
                  onMouseEnter={() => setHoveredFeatureId(feature.id)}
                  onMouseLeave={() => setHoveredFeatureId(null)}
                  style={{
                    minHeight: "95px",
                    backgroundColor: isHovered ? "#1a1a1a" : "#ffffff",
                    border: "1px solid #1a1a1a",
                    transition: "all 0.25s ease-in-out",
                    cursor: "pointer",
                  }}
                >
                  <div
                    className="fw-bold"
                    style={{
                      fontSize: "0.95rem",
                      color: isHovered ? "#ffffff" : "#212529",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {feature.title}
                  </div>
                  <div
                    className="mt-1"
                    style={{
                      fontSize: "0.8rem",
                      fontWeight: "500",
                      color: isHovered ? "rgba(255,255,255,0.7)" : "#6c757d",
                      transition: "color 0.25s ease",
                    }}
                  >
                    {feature.subtitle}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
