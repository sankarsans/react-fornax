import { useState } from "react";

const journeySteps = [
  {
    step: "01",
    title: "Tell Us Your Requirements",
    description:
      "Land dimensions, family requirements, number of floors, rooms, style, budget and future requirements.",
  },
  {
    step: "02",
    title: "Site Assessment",
    description:
      "Understand the plot, access, orientation, site conditions and construction requirements.",
  },
  {
    step: "03",
    title: "Architectural Design",
    description:
      "Floor plans, furniture planning and elevation concepts are developed with you.",
  },
  {
    step: "04",
    title: "Engineering & Detailed Drawings",
    description:
      "Structural, electrical, plumbing and construction drawings are prepared based on the selected package.",
  },
  {
    step: "05",
    title: "Final Design & Built-Up Area",
    description: "The exact design and construction area are established.",
  },
  {
    step: "06",
    title: "Detailed Construction Estimate",
    description:
      "We prepares the construction quotation based on the approved design, specifications and requirements.",
  },
  {
    step: "07",
    title: "Construction Agreement",
    description:
      "Scope, specifications, price and project terms are finalized.",
  },
  {
    step: "08",
    title: "Construction Begins",
    description:
      "With the design, estimate and agreement finalized, your home moves from planning to construction.",
    isDefaultAccent: true,
  },
];

export default function ConstructionJourney() {
  const [hoveredIdx, setHoveredIdx] = useState(null as any);

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
        {/* Header */}
        <div className="text-center mb-5">
          <span
            className="fw-bold text-uppercase d-block mb-1"
            style={{
              color: "#E53935",
              fontSize: "0.85rem",
              letterSpacing: "0.15em",
            }}
          >
            HOW IT WORKS
          </span>
          <h2
            className="fw-black text-dark mb-3"
            style={{
              fontSize: "2.4rem",
              fontWeight: "900",
              letterSpacing: "-0.01em",
            }}
          >
            Your Home Construction Journey
          </h2>
          <p
            className="text-secondary mx-auto"
            style={{
              maxWidth: "680px",
              fontSize: "0.95rem",
              lineHeight: "1.6",
            }}
          >
            From understanding your requirements to beginning construction,
            every stage is planned and executed with clarity.
          </p>
          <div
            className="mx-auto rounded mt-3"
            style={{ width: "50px", height: "3px", backgroundColor: "#2b2b2b" }}
          />
        </div>

        {/* Vertical Timeline Wrapper */}
        <div
          className="position-relative mx-auto"
          style={{ maxWidth: "860px" }}
        >
          {/* Continuous Center-Left Vertical Guide Line */}
          <div
            className="position-absolute"
            style={{
              left: "29px",
              top: "30px",
              bottom: "30px",
              width: "2px",
              backgroundColor: "#E2E8F0",
              zIndex: 0,
            }}
          />

          {/* Timeline Nodes */}
          <div
            className="d-flex flex-column gap-3 position-relative"
            style={{ zIndex: 1 }}
          >
            {journeySteps.map((item, idx) => {
              const isHovered = hoveredIdx === idx;
              const isOchre =
                isHovered || (item.isDefaultAccent && hoveredIdx === null);

              return (
                <div
                  key={idx}
                  className="d-flex align-items-center gap-3 gap-md-4"
                  onMouseEnter={() => setHoveredIdx(idx)}
                  onMouseLeave={() => setHoveredIdx(null)}
                  style={{ cursor: "pointer" }}
                >
                  {/* Numbered Indicator Node */}
                  <div
                    className="rounded-circle d-flex align-items-center justify-content-center fw-bold flex-shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      fontSize: "1rem",
                      letterSpacing: "0.04em",
                      backgroundColor: isOchre ? "#B5843C" : "#212529",
                      color: "#FFFFFF",
                      border: isOchre
                        ? "3px solid #FFFFFF"
                        : "3px solid #FFFFFF",
                      boxShadow: isOchre
                        ? "0 6px 16px rgba(181, 132, 60, 0.45)"
                        : "0 4px 12px rgba(0, 0, 0, 0.2)",
                      transform: isHovered ? "scale(1.1)" : "scale(1)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    {item.step}
                  </div>

                  {/* Horizontal Card */}
                  <div
                    className="bg-white rounded-4 p-4 flex-grow-1"
                    style={{
                      border: isHovered
                        ? "1px solid #B5843C"
                        : "1px solid #E9ECEF",
                      boxShadow: isHovered
                        ? "0 8px 24px rgba(181, 132, 60, 0.12)"
                        : "0 2px 6px rgba(0, 0, 0, 0.03)",
                      transform: isHovered
                        ? "translateX(6px)"
                        : "translateX(0)",
                      transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                    }}
                  >
                    <h5
                      className="fw-bold mb-1"
                      style={{
                        fontSize: "1.05rem",
                        letterSpacing: "0.01em",
                        color: isHovered ? "#B5843C" : "#212529",
                        transition: "color 0.3s ease",
                      }}
                    >
                      {item.title}
                    </h5>
                    <p
                      className="text-muted m-0"
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
