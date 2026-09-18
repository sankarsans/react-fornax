import { useEffect, useState } from "react";
import ContactBanner from "./ContactBanner";
import ProcessSteps from "./ProcessSteps";
import ConstructionJourney from "./ConstructionJourney";

const packages = [
  {
    id: 1,
    badge: "PACKAGE 1",
    badgeBg: "#0C7D89",
    name: "Concept Design",
    subtitle: "Visualize Your Home",
    price: "₹45",
    unit: "per sqft",
    btnColor: "#0C7D89",
  },
  {
    id: 2,
    badge: "PACKAGE 2",
    badgeBg: "#7CB342",
    name: "Construction Design",
    subtitle: "Prepare Your Home for Construction",
    price: "₹85",
    unit: "per sqft",
    btnColor: "#7CB342",
  },
  {
    id: 3,
    badge: "PACKAGE 3",
    badgeBg: "#F47920",
    name: "Complete Home Design",
    subtitle: "Complete Architecture + Interiors",
    price: "₹115",
    unit: "per sqft",
    btnColor: "#F47920",
  },
];

const features = [
  { label: "SCHEME DRAWING : ALL FLOORS (2D)", p1: true, p2: true, p3: true },
  { label: "ELEVATION DESIGN (3D)", p1: true, p2: true, p3: true },
  { label: "INITIAL SITE ASSESSMENT *", p1: true, p2: true, p3: true },
  { label: "STRUCTURAL DRAWINGS", p1: false, p2: true, p3: true },
  { label: "SOIL TEST REPORT *", p1: false, p2: true, p3: true },
  { label: "ELEVATION DETAIL DRAWING (2D)", p1: false, p2: true, p3: true },
  { label: "WORKING DRAWING : ALL FLOORS (2D)", p1: false, p2: true, p3: true },
  {
    label: "ELECTRICAL DRAWING : ALL FLOORS (2D)",
    p1: false,
    p2: true,
    p3: true,
  },
  {
    label: "PLUMBING DRAWING : ALL FLOORS (2D)",
    p1: false,
    p2: true,
    p3: true,
  },
  { label: "INTERIOR VIEWS : ALL ROOMS (3D)", p1: false, p2: false, p3: true },
  {
    label: "INTERIOR DETAILING : ALL ROOMS (2D)",
    p1: false,
    p2: false,
    p3: true,
  },
  { label: "CONSTRUCTION ESTIMATE", p1: true, p2: true, p3: true },
];

export default function DesignPackage() {
  const renderStatus = (included) =>
    included ? (
      <span
        className="fw-bold"
        style={{ color: "#2E7D32", fontSize: "1.2rem" }}
      >
        &#10003;
      </span>
    ) : (
      <span
        className="fw-bold"
        style={{ color: "#D32F2F", fontSize: "1.1rem" }}
      >
        &#10005;
      </span>
    );
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div>
      <ProcessSteps />
      <section
        id="ContructionPackage"
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
              Our
            </span>
            <h2
              className="fw-black text-dark mb-3"
              style={{
                fontSize: "2.4rem",
                fontWeight: "900",
                letterSpacing: "0.02em",
              }}
            >
              ARCHITECTURAL DESIGN PACKAGES
            </h2>
            <div
              className="mx-auto rounded mb-4"
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#2b2b2b",
              }}
            />

            {/* Description Box with Accent Left Border */}
            <div
              className="mx-auto text-start bg-white p-3 p-md-4 rounded-3 shadow-sm border-start"
              style={{
                maxWidth: "960px",
                borderLeftColor: "#0C7D89",
                borderLeftWidth: "4px !important",
                borderColor: "#E9ECEF",
              }}
            >
              <p
                className="m-0 text-secondary"
                style={{ fontSize: "0.92rem", lineHeight: "1.7" }}
              >
                All designs will be done by a team of Architects, Structural
                Engineers, and 3D Visualizers, in coordination with Civil
                Engineers and Project Managers, ensuring both Creativity and
                Practicality for Construction.
              </p>
            </div>
          </div>

          {/* Comparison Table Container */}
          <div
            className="bg-white rounded-4 shadow-sm border overflow-hidden mx-auto"
            style={{ maxWidth: "1150px", borderColor: "#E9ECEF" }}
          >
            <div className="table-responsive">
              <table className="table table-borderless align-middle mb-0 text-center">
                <thead>
                  {/* Package Colored Headers */}
                  <tr>
                    <th
                      className="text-start p-4 align-bottom"
                      style={{ width: "34%", backgroundColor: "#ffffff" }}
                    ></th>

                    {packages.map((pkg) => (
                      <th
                        key={pkg.id}
                        className="p-0 align-bottom"
                        style={{ width: "22%", backgroundColor: "#ffffff" }}
                      >
                        <div
                          className="py-2 text-white fw-bold small text-uppercase mx-2 rounded-top-3"
                          style={{
                            backgroundColor: pkg.badgeBg,
                            letterSpacing: "0.05em",
                          }}
                        >
                          {pkg.badge}
                        </div>
                      </th>
                    ))}
                  </tr>

                  {/* Subtitle & Price Cards */}
                  <tr
                    className="border-bottom"
                    style={{ borderColor: "#E9ECEF" }}
                  >
                    <th className="bg-white text-start align-middle px-4">
                      <span
                        className="fw-bold text-dark d-block text-uppercase"
                        style={{ fontSize: "1.05rem", letterSpacing: "0.03em" }}
                      >
                        Architectural Design Package
                      </span>
                      <span
                        className="d-inline-flex align-items-center justify-content-center rounded-circle mt-2 text-white"
                        style={{
                          width: "24px",
                          height: "24px",
                          backgroundColor: "#2b2b2b",
                          fontSize: "12px",
                        }}
                      >
                        &rarr;
                      </span>
                    </th>
                    {packages.map((pkg) => (
                      <th key={pkg.id} className="bg-white p-3 align-top">
                        <div
                          className="fw-bold text-dark mb-1"
                          style={{ fontSize: "0.95rem" }}
                        >
                          {pkg.name}
                        </div>
                        <div
                          className="text-muted fw-normal mb-3"
                          style={{ fontSize: "0.75rem", minHeight: "28px" }}
                        >
                          {pkg.subtitle}
                        </div>
                        <div>
                          <span
                            className="fw-black text-dark"
                            style={{ fontSize: "1.9rem", fontWeight: "900" }}
                          >
                            {pkg.price}
                          </span>
                          <span
                            className="text-secondary small fw-medium ms-1"
                            style={{ fontSize: "0.78rem" }}
                          >
                            {pkg.unit}
                          </span>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>

                <tbody>
                  {features.map((item, idx) => {
                    const isEven = idx % 2 === 0;
                    // Explicit background color for alternating contrast
                    const cellBg = isEven ? "#F4F6F9" : "#FFFFFF";

                    return (
                      <tr
                        key={idx}
                        style={{
                          borderBottom: "1px solid #E5E7EB",
                        }}
                      >
                        <td
                          className="text-start px-4 py-3 fw-semibold text-secondary"
                          style={{
                            backgroundColor: cellBg,
                            fontSize: "0.85rem",
                            letterSpacing: "0.01em",
                          }}
                        >
                          {item.label}
                        </td>
                        <td
                          className="py-3"
                          style={{
                            backgroundColor: cellBg,
                            borderLeft: "1px solid #E5E7EB",
                          }}
                        >
                          {renderStatus(item.p1)}
                        </td>
                        <td
                          className="py-3"
                          style={{
                            backgroundColor: cellBg,
                            borderLeft: "1px solid #E5E7EB",
                          }}
                        >
                          {renderStatus(item.p2)}
                        </td>
                        <td
                          className="py-3"
                          style={{
                            backgroundColor: cellBg,
                            borderLeft: "1px solid #E5E7EB",
                          }}
                        >
                          {renderStatus(item.p3)}
                        </td>
                      </tr>
                    );
                  })}

                  {/* Booking Button Footer Row */}
                  <tr
                    style={{
                      borderTop: "2px solid #D1D5DB",
                    }}
                  >
                    <td style={{ backgroundColor: "#F4F6F9" }}></td>
                    {packages.map((pkg) => (
                      <td
                        key={pkg.id}
                        className="p-3"
                        style={{
                          backgroundColor: "#F4F6F9",
                          borderLeft: "1px solid #E5E7EB",
                        }}
                      >
                        <button
                          type="button"
                          className="btn text-white fw-bold rounded-pill px-4 py-2 border-0 shadow-sm"
                          style={{
                            backgroundColor: pkg.btnColor,
                            fontSize: "0.82rem",
                            letterSpacing: "0.04em",
                          }}
                          onClick={() => setIsModalOpen(true)}
                        >
                          Book Now
                        </button>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Section Notes */}
          <div className="mx-auto mt-4" style={{ maxWidth: "1150px" }}>
            <div
              className="fw-bold text-dark mb-2"
              style={{ fontSize: "0.95rem" }}
            >
              Note:
            </div>
            <ul
              className="text-muted ps-3 small d-flex flex-column gap-1"
              style={{ lineHeight: "1.6" }}
            >
              <li>Site Supervision & Construction Support not included.</li>
              <li>Minimum Built-up area should be 2000 sqft.</li>
              <li>
                Initial Site Assessment and Soil Testing Report will be an
                additional cost.
              </li>
              <li>Dedicated web and app access for 1 year.</li>
            </ul>
          </div>
        </div>
        <ContactBanner
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </section>
      <ConstructionJourney />
    </div>
  );
}
