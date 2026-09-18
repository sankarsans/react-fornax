import React, { useState } from "react";

const steps = [
  {
    step: "01",
    title: "DESIGN",
    description: "Understand requirements and create your home design.",
  },
  {
    step: "02",
    title: "FINALISE",
    description: "Finalise plans, areas, specifications and requirements.",
  },
  {
    step: "03",
    title: "ESTIMATE",
    description: "Prepare a detailed construction estimate for your home.",
  },
  {
    step: "04",
    title: "CONSTRUCT",
    description: "Begin construction with better clarity and planning.",
  },
];

export default function ProcessSteps() {
  const [hoveredIdx, setHoveredIdx] = useState(null);

  return (
    <section
      className="py-5"
      style={{
        backgroundColor: "#FCFCFD",
        backgroundImage: `
          linear-gradient(to right, rgba(230, 230, 230, 0.45) 1px, transparent 1px),
          linear-gradient(to bottom, rgba(230, 230, 230, 0.45) 1px, transparent 1px)
        `,
        backgroundSize: "28px 28px",
      }}
    >
      <div className="container py-4">
        {/* Section Header */}
        <div className="text-center mb-5">
          <span
            className="fw-bold text-uppercase d-block mb-1"
            style={{
              color: "#F5A623",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
            }}
          >
            HOW IT WORKS
          </span>
          <h2
            className="fw-black text-dark mb-2"
            style={{
              fontSize: "2.5rem",
              fontWeight: "900",
              letterSpacing: "-0.01em",
            }}
          >
            Planning to Build Your{" "}
            <span style={{ color: "#E53935" }}>Dream Home?</span>
          </h2>
          <p
            className="text-secondary fw-semibold m-0"
            style={{ fontSize: "1.05rem", letterSpacing: "0.01em" }}
          >
            Design It First. Know What You're Building. Know What It Will Cost.
          </p>
          <div
            className="mx-auto rounded mt-3"
            style={{ width: "50px", height: "3px", backgroundColor: "#2b2b2b" }}
          />
        </div>

        {/* Steps Grid */}
        <div
          className="position-relative mx-auto my-4"
          style={{ maxWidth: "1150px" }}
        >
          {/* Connector Line */}
          <div
            className="position-absolute start-0 w-100 d-none d-lg-block"
            style={{
              height: "2px",
              backgroundColor: "#E2E8F0",
              top: "48px",
              zIndex: 0,
            }}
          />

          <div className="row g-4 position-relative" style={{ zIndex: 1 }}>
            {steps.map((item, idx) => {
              const isHovered = hoveredIdx === idx;

              return (
                <div key={idx} className="col-12 col-sm-6 col-lg-3">
                  <div
                    className="bg-white rounded-4 p-4 text-center h-100 d-flex flex-column align-items-center"
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onMouseLeave={() => setHoveredIdx(null)}
                    style={{
                      border: "1px solid #E9ECEF",
                      cursor: "pointer",
                      transform: isHovered
                        ? "translateY(-6px)"
                        : "translateY(0)",
                      boxShadow: isHovered
                        ? "0 12px 28px rgba(181, 132, 60, 0.15)"
                        : "0 2px 6px rgba(0,0,0,0.03)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {/* Step Number Circle */}
                    <div
                      className="rounded-circle d-flex align-items-center justify-content-center fw-bold mb-3"
                      style={{
                        width: "60px",
                        height: "60px",
                        fontSize: "1rem",
                        letterSpacing: "0.04em",
                        backgroundColor: isHovered ? "#B5843C" : "#FFFFFF",
                        color: isHovered ? "#FFFFFF" : "#212529",
                        border: isHovered
                          ? "2px solid #B5843C"
                          : "2px solid #E2E8F0",
                        boxShadow: isHovered
                          ? "0 6px 16px rgba(181, 132, 60, 0.35)"
                          : "0 2px 6px rgba(0,0,0,0.04)",
                        transform: isHovered ? "scale(1.08)" : "scale(1)",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      {item.step}
                    </div>

                    {/* Title */}
                    <h4
                      className="fw-bold mb-2 text-uppercase"
                      style={{
                        fontSize: "1.05rem",
                        letterSpacing: "0.05em",
                        fontWeight: "800",
                        color: isHovered ? "#B5843C" : "#212529",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.title}
                    </h4>

                    {/* Description */}
                    <p
                      className="text-muted mb-0 small"
                      style={{
                        fontSize: "0.85rem",
                        lineHeight: "1.6",
                      }}
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
