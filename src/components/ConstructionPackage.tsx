import React, { useState } from "react";
import ConstructionPackagesDifference from "./ConstructionPackagesDifference";

const PACKAGES = [
  { id: "standard", name: "Standard Package", rate: 2199 },
  { id: "premium", name: "Premium Package", rate: 2399 },
  { id: "luxury", name: "Ultra Luxury Package", rate: 2899 },
];

const FLOOR_OPTIONS = [
  { label: "Ground", count: 1, names: ["Ground Floor"] },
  { label: "G + 1", count: 2, names: ["Ground Floor", "First Floor"] },
  {
    label: "G + 2",
    count: 3,
    names: ["Ground Floor", "First Floor", "Second Floor"],
  },
  {
    label: "G + 3",
    count: 4,
    names: ["Ground Floor", "First Floor", "Second Floor", "Third Floor"],
  },
  {
    label: "G + 4",
    count: 5,
    names: [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor",
    ],
  },
  {
    label: "G + 5",
    count: 6,
    names: [
      "Ground Floor",
      "First Floor",
      "Second Floor",
      "Third Floor",
      "Fourth Floor",
      "Fifth Floor",
    ],
  },
];

export default function ConstructionPackage() {
  const [selectedFloorsIndex, setSelectedFloorsIndex] = useState(0);
  const [selectedPackageId, setSelectedPackageId] = useState("standard");

  // Dynamic input fields state
  const [floorAreas, setFloorAreas] = useState({});
  const [sumpLiters, setSumpLiters] = useState("");
  const [septicLiters, setSepticLiters] = useState("");
  const [wallLength, setWallLength] = useState("");
  const [wallHeight, setWallHeight] = useState("");

  const currentPackage =
    PACKAGES.find((p) => p.id === selectedPackageId) || PACKAGES[0];
  const activeFloors = FLOOR_OPTIONS[selectedFloorsIndex].names;

  const handleFloorAreaChange = (floorName, val) => {
    setFloorAreas((prev) => ({
      ...prev,
      [floorName]: val,
    }));
  };

  // Fixed unit rates
  const SUMP_RATE = 30;
  const SEPTIC_RATE = 30;
  const COMPOUND_RATE = 425;

  // Individual item cost calculations
  const floorCosts = activeFloors.map((floorName) => {
    const area = parseFloat(floorAreas[floorName]) || 0;
    return area * currentPackage.rate;
  });

  const totalFloorsCost = floorCosts.reduce((acc, curr) => acc + curr, 0);

  const sumpCost = (parseFloat(sumpLiters) || 0) * SUMP_RATE;
  const septicCost = (parseFloat(septicLiters) || 0) * SEPTIC_RATE;

  const compoundArea =
    (parseFloat(wallLength) || 0) * (parseFloat(wallHeight) || 0);
  const compoundCost = compoundArea * COMPOUND_RATE;

  const totalCost = totalFloorsCost + sumpCost + septicCost + compoundCost;

  const formatCurrency = (amount) =>
    `Rs. ${Math.round(amount).toLocaleString("en-IN")}`;

  return (
    <div>
      <ConstructionPackagesDifference />
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
              COST ESTIMATOR
            </span>
            <h2
              className="fw-black text-dark mb-2"
              style={{
                fontSize: "2.3rem",
                fontWeight: "900",
                letterSpacing: "-0.01em",
              }}
            >
              Home Construction Cost Calculator (2026)
            </h2>
            <p
              className="text-secondary fw-semibold mb-0"
              style={{ fontSize: "1rem" }}
            >
              You can arrive your Construction estimate here
            </p>
            <div
              className="mx-auto rounded mt-3"
              style={{
                width: "50px",
                height: "3px",
                backgroundColor: "#2b2b2b",
              }}
            />
          </div>

          {/* Calculator Main Card */}
          <div
            className="bg-white rounded-4 shadow-sm border p-4 p-md-5 mx-auto"
            style={{ maxWidth: "1080px", borderColor: "#E9ECEF" }}
          >
            {/* Controls Bar: Floors & Package Selector */}
            <div
              className="row g-3 align-items-center mb-4 pb-3 border-bottom"
              style={{ borderColor: "#E9ECEF" }}
            >
              <div className="col-12 col-md-auto d-flex align-items-center gap-2">
                <label
                  className="fw-bold text-dark text-nowrap mb-0"
                  style={{ fontSize: "0.95rem" }}
                >
                  No. of Floors
                </label>
                <select
                  className="form-select form-select-sm rounded-3 fw-semibold border-secondary-subtle"
                  value={selectedFloorsIndex}
                  onChange={(e) =>
                    setSelectedFloorsIndex(Number(e.target.value))
                  }
                  style={{ width: "130px" }}
                >
                  {FLOOR_OPTIONS.map((opt, idx) => (
                    <option key={idx} value={idx}>
                      {opt.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="col-12 col-md-auto d-flex align-items-center gap-2 ms-md-4">
                <label
                  className="fw-bold text-dark text-nowrap mb-0"
                  style={{ fontSize: "0.95rem" }}
                >
                  Package
                </label>
                <select
                  className="form-select form-select-sm rounded-3 fw-semibold border-secondary-subtle"
                  value={selectedPackageId}
                  onChange={(e) => setSelectedPackageId(e.target.value)}
                  style={{ minWidth: "260px" }}
                >
                  {PACKAGES.map((pkg) => (
                    <option key={pkg.id} value={pkg.id}>
                      {pkg.name} @ {pkg.rate}/sqft
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Table Container */}
            {/* Table Container */}
            <div className="table-responsive">
              <table
                className="table align-middle mb-0"
                style={{ borderColor: "#E9ECEF" }}
              >
                {/* Table Header with Slate-Charcoal Contrast Background */}
                <thead className="table-dark">
                  <tr style={{ borderBottom: "2px solid #111418" }}>
                    <th
                      className="py-3 px-4 text-uppercase fw-bold"
                      style={{
                        width: "45%",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: "#FFFFFF",
                      }}
                    >
                      Work
                    </th>
                    <th
                      className="py-3 px-3 text-center text-uppercase fw-bold"
                      style={{
                        width: "25%",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: "#FFFFFF",
                      }}
                    >
                      Area
                    </th>
                    <th
                      className="py-3 px-3 text-center text-uppercase fw-bold"
                      style={{
                        width: "8%",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: "#FFFFFF",
                      }}
                    >
                      Unit
                    </th>
                    <th
                      className="py-3 px-3 text-center text-uppercase fw-bold"
                      style={{
                        width: "10%",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: "#FFFFFF",
                      }}
                    >
                      Rate
                    </th>
                    <th
                      className="py-3 px-4 text-end text-uppercase fw-bold"
                      style={{
                        width: "12%",
                        fontSize: "0.85rem",
                        letterSpacing: "0.06em",
                        color: "#FFFFFF",
                      }}
                    >
                      Cost
                    </th>
                  </tr>
                </thead>

                <tbody>
                  {/* Dynamic Floor Rows */}
                  {activeFloors.map((floorName, idx) => {
                    const currentArea = floorAreas[floorName] || "";
                    const cost =
                      (parseFloat(currentArea) || 0) * currentPackage.rate;

                    return (
                      <tr
                        key={floorName}
                        style={{
                          backgroundColor:
                            idx % 2 === 0 ? "#FFFFFF" : "#FBFBFD",
                        }}
                      >
                        <td
                          className="px-4 py-3 fw-medium text-dark"
                          style={{ fontSize: "0.9rem" }}
                        >
                          Enter required Built up Area for {floorName}
                        </td>
                        <td className="px-3 py-2 text-center">
                          <input
                            type="number"
                            placeholder="Area in sqft"
                            className="form-control form-control-sm text-center mx-auto rounded-2 border-secondary-subtle"
                            style={{ maxWidth: "160px" }}
                            value={currentArea}
                            onChange={(e) =>
                              handleFloorAreaChange(floorName, e.target.value)
                            }
                          />
                        </td>
                        <td className="px-3 py-3 text-center text-muted small">
                          sqft
                        </td>
                        <td
                          className="px-3 py-3 text-center fw-semibold text-secondary"
                          style={{ fontSize: "0.85rem" }}
                        >
                          Rs.{currentPackage.rate}
                        </td>
                        <td
                          className="px-4 py-3 text-end fw-bold text-dark"
                          style={{ fontSize: "0.92rem" }}
                        >
                          {formatCurrency(cost)}
                        </td>
                      </tr>
                    );
                  })}

                  {/* Sump Row */}
                  <tr
                    style={{
                      backgroundColor:
                        activeFloors.length % 2 === 0 ? "#FFFFFF" : "#FBFBFD",
                    }}
                  >
                    <td
                      className="px-4 py-3 fw-medium text-dark"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Size of RCC Water Sump{" "}
                      <span className="text-muted small">
                        (A 4 member family will require 9000 liter capacity)
                      </span>
                    </td>
                    <td className="px-3 py-2 text-center">
                      <input
                        type="number"
                        placeholder="No. of Liters"
                        className="form-control form-control-sm text-center mx-auto rounded-2 border-secondary-subtle"
                        style={{ maxWidth: "160px" }}
                        value={sumpLiters}
                        onChange={(e) => setSumpLiters(e.target.value)}
                      />
                    </td>
                    <td className="px-3 py-3 text-center text-muted small">
                      ltr
                    </td>
                    <td
                      className="px-3 py-3 text-center fw-semibold text-secondary"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Rs.{SUMP_RATE}
                    </td>
                    <td
                      className="px-4 py-3 text-end fw-bold text-dark"
                      style={{ fontSize: "0.92rem" }}
                    >
                      {formatCurrency(sumpCost)}
                    </td>
                  </tr>

                  {/* Septic Tank Row */}
                  <tr
                    style={{
                      backgroundColor:
                        activeFloors.length % 2 === 0 ? "#FBFBFD" : "#FFFFFF",
                    }}
                  >
                    <td
                      className="px-4 py-3 fw-medium text-dark"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Size of Septic Tank
                    </td>
                    <td className="px-3 py-2 text-center">
                      <input
                        type="number"
                        placeholder="No. of Liters"
                        className="form-control form-control-sm text-center mx-auto rounded-2 border-secondary-subtle"
                        style={{ maxWidth: "160px" }}
                        value={septicLiters}
                        onChange={(e) => setSepticLiters(e.target.value)}
                      />
                    </td>
                    <td className="px-3 py-3 text-center text-muted small">
                      ltr
                    </td>
                    <td
                      className="px-3 py-3 text-center fw-semibold text-secondary"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Rs.{SEPTIC_RATE}
                    </td>
                    <td
                      className="px-4 py-3 text-end fw-bold text-dark"
                      style={{ fontSize: "0.92rem" }}
                    >
                      {formatCurrency(septicCost)}
                    </td>
                  </tr>

                  {/* Compound Wall Row */}
                  <tr
                    style={{
                      backgroundColor:
                        activeFloors.length % 2 === 0 ? "#FFFFFF" : "#FBFBFD",
                    }}
                  >
                    <td
                      className="px-4 py-3 fw-medium text-dark"
                      style={{ fontSize: "0.9rem" }}
                    >
                      Plain Compound Wall
                    </td>
                    <td className="px-3 py-2 text-center">
                      <div className="d-flex justify-content-center gap-2">
                        <input
                          type="number"
                          placeholder="Length"
                          className="form-control form-control-sm text-center rounded-2 border-secondary-subtle"
                          style={{ width: "85px" }}
                          value={wallLength}
                          onChange={(e) => setWallLength(e.target.value)}
                        />
                        <input
                          type="number"
                          placeholder="Height"
                          className="form-control form-control-sm text-center rounded-2 border-secondary-subtle"
                          style={{ width: "85px" }}
                          value={wallHeight}
                          onChange={(e) => setWallHeight(e.target.value)}
                        />
                      </div>
                    </td>
                    <td className="px-3 py-3 text-center text-muted small">
                      sqft
                    </td>
                    <td
                      className="px-3 py-3 text-center fw-semibold text-secondary"
                      style={{ fontSize: "0.85rem" }}
                    >
                      Rs.{COMPOUND_RATE}
                    </td>
                    <td
                      className="px-4 py-3 text-end fw-bold text-dark"
                      style={{ fontSize: "0.92rem" }}
                    >
                      {formatCurrency(compoundCost)}
                    </td>
                  </tr>
                </tbody>

                {/* Dedicated Footer with Warm Amber/Gold Gradient & Deep Accent Border */}
                <tfoot>
                  <tr
                    style={{
                      background:
                        "linear-gradient(90deg, #FFF8EC 0%, #FEF3DC 100%)",
                      borderTop: "2px solid #F5A623",
                    }}
                  >
                    <td
                      colSpan="4"
                      className="px-4 py-3 text-end fw-black text-dark text-uppercase"
                      style={{
                        fontSize: "0.95rem",
                        letterSpacing: "0.05em",
                      }}
                    >
                      Total Construction Cost
                    </td>
                    <td
                      className="px-4 py-3 text-end fw-black"
                      style={{
                        color: "#D97706",
                        fontSize: "1.35rem",
                        fontWeight: "900",
                        letterSpacing: "-0.01em",
                      }}
                    >
                      {formatCurrency(totalCost)}
                    </td>
                  </tr>
                </tfoot>
              </table>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
