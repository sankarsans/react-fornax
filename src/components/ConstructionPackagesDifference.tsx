import React, { useState, useEffect } from "react";
import FloatingContact from "./FloatingContact";
import ContactBanner from "./ContactBanner";

// Complete dataset for all 3 packages containing all 9 sections transcribed exactly
const PACKAGES_DATA = [
  {
    id: "standard",
    name: "STANDARD PACKAGE",
    price: "₹ 2499",
    unit: "per sqft",
    sections: [
      {
        id: "project_management",
        title: "Project Management",
        items: [
          "Site Engineer : Site Supervision & Quality Monitoring",
          "Project Manager : Visit site Twice in a Week",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring",
          "Architect : Support Till Design Completion",
        ],
      },
      {
        id: "structure",
        title: "Structure",
        items: [
          "Basement Height : Upto 3 feet",
          "Steel : Arun TMT / GBR or Equivalent",
          "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4.5 Inch Thick Inner Walls",
          "Cement : Ramco / Dalmia",
          "M Sand : Blockwork & All Masonry Works",
          "P Sand : Plastering Works",
          "Concrete Grade : M20 | RMC for Roof",
          "Ceiling Height : 10 Feet",
          "Steel Reinforcement : As per Standard",
          "Parapet Wall : 3' Feet Height | 6\" Thick (Only for Floor with Headroom)",
          "Anti-termite treatment : Basement",
        ],
      },
      {
        id: "bathroom_plumbing",
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). Size 2'X2' Vitrified Tile. Upto ₹50/Sqft. 1 Colour for 2 Bathrooms",
          "Bath & CP Fittings : Parryware | Upto ₹20000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, 2-in-1 Wall Mixer.",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brand: Ashirvad",
          "Overhead Tank : 2000 litres Ultratech | 3 Layered | UV Protected | White Colour",
        ],
      },
      {
        id: "flooring",
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 4'X2' | Vitrified Tiles Upto ₹65/Sqft. 1 Model for Living, Dining and Kitchen. KAG / Sunheart or Equivalent",
          "Balcony & Utility : Size 2'X2' | Upto 50/Sqft | Antiskid",
          "Staircase : Full Body Tile : Upto ₹110/sqft",
          "Car Parking : 1'X1' Heavy Duty Tile | Upto ₹50/Sqft",
          "Terrace Flooring : Screed Concreting with Waterproofing",
        ],
      },
      {
        id: "kitchen_dining",
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Tile (2'X2') | Upto ₹55/Sqft",
          "Sink Faucet : Upto ₹3000 / No",
          "Kitchen Sink : Stainless Steel sink with Drain Upto ₹5000",
          "Dining : Wall Mounted Wash Basin",
          "Kitchen Granite Top : Upto ₹140/Sqft",
        ],
      },
      {
        id: "doors_windows",
        title: "Door, Windows and Railing",
        items: [
          'Main Door : Malaysian Teak Door & Teak Frame - Readymade | 32mm Thickness | 5"X3" Thick Frame | 7\' Height 3.5 Feet Width | Lock | Upto 30000/no | 1 No only.',
          "Room Doors : Flush Door| Mahogany Wood Frame | 7'X3'",
          "Bathroom Door : WPC Door & Frame | 7'X2.5'",
          "Windows : UPVC Sliding White | Max 5' X 5' | One Window Per Room | 5mm Clear Glass",
          "Staircase Railing : SS 304 Grade Railing",
          "Balcony Railing : SS 304 Grade Railing with 8mm Toughened Glass with Posts",
        ],
      },
      {
        id: "painting",
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Nippon",
          "Wall Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Breeze emulsion | Nippon",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Sumo Xtra | Nippon",
          "Elevation Putty : 2 Coat of Putty for Front Elevation | Nippon Exterior Putty",
        ],
      },
      {
        id: "electrical",
        title: "Electrical",
        items: [
          "Wires - Orbit (FRLS)",
          "Switches - Legrand",
          "Bedroom : 3 Switch Box (8-Module) | One at the entrance, one at the bedside, and one near the TV",
          "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
          "Living Room : Upto 4 Switch Box (8 Module)",
          "Dining : 1 Switch (8-Module)",
          "Pooja : 1 Switch (3-Module)",
          "Kitchen : 3 Switch Box (6 Module). Point for HOB, Chimney, RO",
          "Utility : 1 Switch Box (4-Module)",
          "AC Points : 1 for Each Bedroom. 1 for Living Room",
          "Entrance : 1 Switch Box (6-Module)",
          "Balconies : 1 Switch Box (3-Module)",
        ],
      },
      {
        id: "not_included",
        title: "What's Not Included",
        items: [
          "Compound Wall @ 425/Sqft & Gate",
          "Sump & Septic Tank @ 30/Litre",
          "Lift, Lift Pit and Shaft",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
  {
    id: "premium",
    name: "PREMIUM PACKAGE",
    price: "₹ 2749",
    unit: "per sqft",
    sections: [
      {
        id: "project_management",
        title: "Project Management",
        items: [
          "Site Engineer : Site Supervision & Quality Monitoring",
          "Project Manager : Daily Site Visit",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring.",
          "Architect : Dedicated Architect through-out the Project. Stage wise Site Visit. Material Selection Support.",
        ],
      },
      {
        id: "structure",
        title: "Structure",
        items: [
          "Basement Height : Upto 3.5 feet",
          "Steel : ARS / iSteel / Equivalent",
          "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4.5 Inch Thick Inner Walls",
          "Cement : Ramco / Dalmia / UltraTech",
          "M Sand : Blockwork & All Masonry Works",
          "P Sand : Plastering Works",
          "Concrete Grade : M20 | RMC for Roof",
          "Ceiling Height : 10 Feet (FFL to FFL)",
          "Steel Reinforcement : As per DEEJOS Structural Detailing.",
          "Parapet Wall : 3.5' Feet Height | 6\" Thick",
          "RCC Lift Pit : Included (If Required)",
          "Lift Pit & Shaft : Included (If Required)",
          "Anti-termite treatment : Basement",
        ],
      },
      {
        id: "bathroom_plumbing",
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). 4'X2' Digital Vitrified Tile. Upto ₹85/Sqft",
          "Bath & CP Fittings : Jaquar | Upto ₹30000 Per Bathroom | Wall Mounted EWC, Wall Mounted Wash Basin, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. Brands: Ashirwad / Finolex",
          "Overhead Tank : 3000 litres Sintex | UV Protected | White Colour. With Sensor.",
          "Solar Heater Plumbing Lines : Included (If Required)",
        ],
      },
      {
        id: "flooring",
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 4'X2' | Tiles Upto ₹90/Sqft. Somany / Kajaria / KAG / Sunheart",
          "Balcony & Utility : Size 2'X2' | Upto 60/Sqft",
          "Staircase : Granite Upto ₹160/sqft",
          "Car Parking : 2'X2' Heavy Stone| Upto ₹80/Sqft",
          "Terrace Flooring : White Cooling Tile Size 1'X1' | Anuj | with Waterproofing",
        ],
      },
      {
        id: "kitchen_dining",
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Tile (4'X2') | Upto ₹65/Sqft",
          "Sink Faucet : Designer Brand | Upto ₹4500 /nos",
          "Kitchen Sink : Quartz Sink with Drain Upto ₹7000",
          "Dining : Wash Basin with Granite Counter",
          "Kitchen Granite Top : Upto ₹160/Sqft",
        ],
      },
      {
        id: "doors_windows",
        title: "Door, Windows and Railing",
        items: [
          'Main Door : Ghana Teak Door & Teak Frame | 35mm Thickness | 5"X3" Thick Frame | 8\' Height 4 Feet Width | Lock | Upto 52000/no.',
          "Room Doors : Flush Door with Laminate | Ghana Wood Frame | 7'X3'",
          "Bathroom Door : WPC Door & Frame | 7'X2.5'",
          "Windows : UPVC Sliding White - No Restriction on Size and Quantity | 5mm Clear Glass",
          "Staircase Railing : SS 304 Grade Railing",
          "Balcony Railing : 10mm Full Toughened Glass with 304 Grade Railing.",
        ],
      },
      {
        id: "painting",
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Birla",
          "Wall Painting : 1 coat of Primer | 2 coats of Asian Premium Emulsion | Asian",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Asian Premium Emulsion | Asian",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Asian Apex | Asian",
          "Elevation Putty : 2 Coat of Putty for Two sides of Elevation | Birla Wallseal Waterproof",
        ],
      },
      {
        id: "electrical",
        title: "Electrical",
        items: [
          "Wires - Finolex / Havells (FRLS)",
          "Switches - GM",
          "Bedroom : 4 Switch Box(8-Module)",
          "Bathroom : 1 Switch Box(Inner) 4-Module, 1 Switch Box(Outer) 3-Module. Point for Heater & Exhaust",
          "Living Room : Upto 5 Switch Box (8 Module)",
          "Dining : 1 Switch (8-Module)",
          "Pooja : 2 Switch (3-Module)",
          "Kitchen : 5 Switch Box (6 Module). Point for HOB, Chimney, RO",
          "Utility : 2 Switch Box (4-Module)",
          "AC Points : 1 for Each Bedroom. 1 for Living Room",
          "Entrance : 1 Switch Box (6-Module)",
          "Balconies : 1 Switch Box (3-Module)",
          "Electricity Panel Board - Single Service with RLCB - Exterior Grade",
        ],
      },
      {
        id: "not_included",
        title: "What's Not Included",
        items: [
          "Compound Wall @ 425/Sqft & Gate",
          "Sump & Septic Tank @ 30/Litre",
          "Lift",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
  {
    id: "luxury",
    name: "ULTRA LUXURY",
    price: "₹ 3499",
    unit: "per sqft",
    sections: [
      {
        id: "project_management",
        title: "Project Management",
        items: [
          "Site Engineer : Site Supervision & Quality Monitoring",
          "Project Manager : Daily Site Visit",
          "Android/IOS App : Daily Photo Upload. Project Status Monitoring",
          "Architect : Dedicated Architect. Frequent Site Visit. Material & Brand Selection Support including Interiors and Home Decor.",
        ],
      },
      {
        id: "structure",
        title: "Structure",
        items: [
          "Basement Height : Upto 5 feet",
          "Steel : TATA Steel",
          "Wire-Cut Bricks : For Partition walls. 9-Inch Thick Exterior Walls | 4.5 Inch Thick Inner Walls",
          "Cement : Ramco / Dalmia / UltraTech",
          "River Sand : Blockwork & All Masonry Works",
          "River Sand : Plastering Works",
          "Concrete Grade : M25 | RMC for Roof",
          "Ceiling Height : 11 Feet (FFL to FFL)",
          "Steel Reinforcement : 1.5times Strength all as per DEEJOS Structural Drawings and Detailing by DEEJOS Structural Engineer.",
          "Parapet Wall : 3.5' Feet Height | 6\" Thick (Or) Toughened Glass Railing if Required.",
          "RCC Lift Pit : Included (If Required)",
          "RCC Concrete Slab for Base",
          "Lift Pit & Shaft : Included (If Required)",
          "Anti-termite treatment : Basement",
        ],
      },
      {
        id: "bathroom_plumbing",
        title: "Bathroom & Plumbing",
        items: [
          "Wall Tiles : Upto Ceiling (Full Height). 4'X2' Vitrified Tile. Upto ₹120/Sqft",
          "Bath & CP Fittings : Kohler | Upto ₹60000 Per Bathroom | Concealed EWC, Counter Top Wash Basin, Marble Counter Slab, Pillar Tap, Health Faucet, Shower Set, Concealed Wall Mixer.",
          "Plumbing Pipes & Fittings : Inner CPVC, Outer PVC. HDPE flexible pipe. Brands: Ashirwad / Finolex / Jindal",
          "RCC Overhead Tank : Upto 6000 litres with Waterproofing.",
          "Solar Heater Plumbing Lines : Included (If Required)",
        ],
      },
      {
        id: "flooring",
        title: "Flooring",
        items: [
          "Living, Dining, Bedrooms & Kitchen : 6'X6' | Quarts Tiles Upto ₹200/Sqft",
          "Balcony & Utility : Size 2'X2' | Upto 60/Sqft",
          "Staircase : Marble Upto ₹350/sqft",
          "Car Parking : Granite| Upto ₹120/Sqft",
          "Terrace Flooring : 2'X2' Exterior Grade Vitrified Tile. (Any Grade) | with Waterproofing",
        ],
      },
      {
        id: "kitchen_dining",
        title: "Kitchen & Dining",
        items: [
          "Wall Tile : Vitrified Designer Tile (4'X2') | Upto ₹125/Sqft",
          "Sink Faucet : Floor Mounter Pull-Out | Upto ₹8000 / No",
          "Kitchen Sink : Multifunction Sink Upto ₹15000",
          "Dining : Premium Designer Collection Wash Basin with Marble Counter and Designer Tap.",
          "Kitchen Top : Quarts Stone Upto ₹350/Sqft",
        ],
      },
      {
        id: "doors_windows",
        title: "Door, Windows and Railing",
        items: [
          "Main Door : Designer Wood Door of Height upto 8Feet X 5Feet (or) Security Steel Door of Size (8'X4.5') Pure Stainless Steel with Digital Lock.",
          "Room Doors : Flush Door with Laminate | Ghana Wood Frame | 8'X3.5'",
          "Water Proof Flush Door with Designer Laminates | 8'X3'",
          "Windows : Openable Type | UPVC Coloured | No Restriction on Size and Quantity | Toughened Glass",
          "Staircase Railing : Toughened Glass with SS or Wood Railing or Aluminium",
          "Balcony Railing : 10mm Full Toughened Glass with Aluminium Railing.",
        ],
      },
      {
        id: "painting",
        title: "Painting",
        items: [
          "Inner Wall Putty : 2 coats of Wall Putty | Birla",
          "Wall Painting : 1 coat of Primer | 2 coats of Royal Shyne | Asian",
          "Ceiling Painting : 1 coat of Primer | 2 coats of Royal Shyne | Nippon",
          "Exterior Paint : 1 coat of Primer | 2 Coats of Apex Ultima Protek | Asian",
          "Elevation Putty : 2 Coat of Putty for All sides of Elevation | Birla Wallseal Waterproofing",
        ],
      },
      {
        id: "electrical",
        title: "Electrical",
        items: [
          "Wires - Finolex / Havells (FRLS)",
          "Switches - Touch Switches with Glass Plates.",
          "Required power points will be provided for Lifts, DG, Curtain Motors, Swimming Pool, Ro Plant, Pressure Pump, Intercom, Surveillance System, Exterior Light Points, Gate Automation, lightening arrester, Hybrid Solar Heater, Water Fountain, HVAC Systems.",
          "Electricity Panel Board - Upto 2 Service Connection with RLCB Exterior Grade",
        ],
      },
      {
        id: "not_included",
        title: "What's Not Included",
        items: [
          "Compound Wall @ 425/Sqft & Gate",
          "Sump & Septic Tank @ 30/Litre",
          "Lift",
          "Electricity Connection",
          "Building Plan Approval",
          "Elevation Special Materials",
        ],
      },
    ],
  },
];

function EnquireModal({ isOpen, onClose, selectedPackage }) {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    fullName: "",
    phoneNumber: "",
    email: "",
    requirement: "",
  });
  const [submitted, setSubmitted] = useState(false);

  // Sync animation with isOpen changes
  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData((prev) => ({
        ...prev,
        requirement: selectedPackage
          ? `I would like to enquire about the detailed specification for the ${selectedPackage}. Please share the comprehensive PDF and quotation.`
          : "",
      }));
      const timer = setTimeout(() => setAnimate(true), 20);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isOpen, selectedPackage]);

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      onClose();
    }, 2000);
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center p-3"
      onClick={onClose}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.7)",
        backdropFilter: "blur(4px)",
        zIndex: 1055,
        opacity: animate ? 1 : 0,
        transition: "opacity 0.35s ease-out",
      }}
    >
      {/* Modal Container */}
      <div
        className="bg-white position-relative shadow-lg w-100"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: "1050px",
          borderRadius: "20px",
          maxHeight: "92vh",
          overflowY: "auto",
          backgroundImage: `
            linear-gradient(to right, rgba(230, 230, 230, 0.45) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(230, 230, 230, 0.45) 1px, transparent 1px)
          `,
          backgroundSize: "28px 28px",
          opacity: animate ? 1 : 0,
          transform: animate
            ? "translateY(0) scale(1)"
            : "translateY(25px) scale(0.96)",
          transition:
            "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.4s ease-out",
        }}
      >
        {/* Standalone Solid Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "18px",
            right: "18px",
            width: "36px",
            height: "36px",
            borderRadius: "50%",
            backgroundColor: "#212529",
            color: "#ffffff",
            border: "none",
            outline: "none",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
            zIndex: 9999,
            fontSize: "18px",
            lineHeight: "1",
            boxShadow: "0 2px 8px rgba(0,0,0,0.2)",
            transition: "background-color 0.2s ease, transform 0.2s ease",
          }}
          onMouseEnter={(e) =>
            (e.currentTarget.style.backgroundColor = "#000000")
          }
          onMouseLeave={(e) =>
            (e.currentTarget.style.backgroundColor = "#212529")
          }
        >
          &#x2715;
        </button>

        <div className="p-4 p-md-5">
          <div className="row g-4 align-items-stretch">
            {/* Left Column: Heading & Contact Info Cards */}
            <div className="col-12 col-lg-5 d-flex flex-column justify-content-between">
              <div>
                <span
                  className="fw-bold text-uppercase d-block mb-1"
                  style={{
                    color: "#F5A623",
                    fontSize: "0.85rem",
                    letterSpacing: "0.1em",
                  }}
                >
                  CONNECT WITH US
                </span>

                <h2
                  className="fw-black text-dark mb-2"
                  style={{
                    fontSize: "2.3rem",
                    fontWeight: "900",
                    letterSpacing: "-0.01em",
                    lineHeight: "1.15",
                  }}
                >
                  ENQUIRE NOW
                </h2>

                <p
                  className="text-muted mb-4"
                  style={{ fontSize: "0.92rem", lineHeight: "1.6" }}
                >
                  Get in touch with our experts to discuss your dream project or
                  request a detailed specification and quotation.
                </p>
              </div>

              {/* Info Cards Stack */}
              <div className="d-flex flex-column gap-3 my-2">
                {/* Phone Card */}
                <div
                  className="bg-white p-3 rounded-4 d-flex align-items-center gap-3 shadow-sm"
                  style={{ border: "1px solid #E9ECEF" }}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "46px",
                      height: "46px",
                      backgroundColor: "#FFF8E7",
                      color: "#F5A623",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="fw-bold text-dark mb-1"
                      style={{ fontSize: "0.92rem" }}
                    >
                      Phone
                    </div>
                    <div
                      className="text-secondary small fw-medium"
                      style={{ lineHeight: "1.4" }}
                    >
                      <div>+91 9655483868</div>
                      <div>+91 6374732071</div>
                    </div>
                  </div>
                </div>

                {/* Email Card */}
                <div
                  className="bg-white p-3 rounded-4 d-flex align-items-center gap-3 shadow-sm"
                  style={{ border: "1px solid #E9ECEF" }}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "46px",
                      height: "46px",
                      backgroundColor: "#FFF8E7",
                      color: "#F5A623",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4Zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2Zm13 2.383-4.708 2.825L15 11.105V5.383Zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741ZM1 11.105l4.708-2.897L1 5.383v5.722Z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="fw-bold text-dark mb-1"
                      style={{ fontSize: "0.92rem" }}
                    >
                      Email
                    </div>
                    <div className="text-secondary small fw-medium">
                      info.fornaxhd@gmail.com
                    </div>
                  </div>
                </div>

                {/* Address Card */}
                <div
                  className="bg-white p-3 rounded-4 d-flex align-items-start gap-3 shadow-sm"
                  style={{ border: "1px solid #E9ECEF" }}
                >
                  <div
                    className="rounded-3 d-flex align-items-center justify-content-center flex-shrink-0"
                    style={{
                      width: "46px",
                      height: "46px",
                      backgroundColor: "#FFF8E7",
                      color: "#F5A623",
                    }}
                  >
                    <svg
                      width="18"
                      height="18"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>
                  </div>
                  <div>
                    <div
                      className="fw-bold text-dark mb-1"
                      style={{ fontSize: "0.92rem" }}
                    >
                      Address
                    </div>
                    <div
                      className="text-secondary small fw-medium"
                      style={{ lineHeight: "1.4" }}
                    >
                      Opposite the HP Petrol bunk, Near Tharamangalam Bus Stand,
                      Tharamangalam, Salem - 636502.
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Form */}
            <div className="col-12 col-lg-7">
              <div
                className="bg-white p-4 p-md-5 rounded-4 shadow-sm h-100 d-flex flex-column justify-content-center"
                style={{ border: "1px solid #E9ECEF" }}
              >
                {submitted ? (
                  <div className="text-center py-5">
                    <div
                      className="rounded-circle d-inline-flex align-items-center justify-content-center mb-3"
                      style={{
                        width: "64px",
                        height: "64px",
                        backgroundColor: "#DEF7EC",
                        color: "#0E9F6E",
                        fontSize: "28px",
                      }}
                    >
                      ✓
                    </div>
                    <h4 className="fw-bold text-dark mb-2">
                      Enquiry Received!
                    </h4>
                    <p className="text-muted small mb-0">
                      Our structural and architectural specialists will contact
                      you shortly with the complete specification sheets.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="d-flex flex-column gap-3"
                  >
                    {selectedPackage && (
                      <div className="p-2 px-3 rounded-3 bg-light border d-flex align-items-center justify-content-between">
                        <span className="small text-muted">
                          Selected Interest:
                        </span>
                        <span
                          className="badge text-dark fw-bold"
                          style={{ backgroundColor: "#F3C558" }}
                        >
                          {selectedPackage}
                        </span>
                      </div>
                    )}

                    <div className="row g-3">
                      <div className="col-12 col-sm-6">
                        <label className="form-label small fw-semibold text-secondary mb-1">
                          Full Name *
                        </label>
                        <input
                          type="text"
                          name="fullName"
                          placeholder="Full Name"
                          required
                          value={formData.fullName}
                          onChange={handleChange}
                          className="form-control rounded-3 py-2 px-3 border-secondary-subtle"
                          style={{ fontSize: "0.92rem" }}
                        />
                      </div>
                      <div className="col-12 col-sm-6">
                        <label className="form-label small fw-semibold text-secondary mb-1">
                          Phone Number *
                        </label>
                        <input
                          type="tel"
                          name="phoneNumber"
                          placeholder="Phone Number"
                          required
                          value={formData.phoneNumber}
                          onChange={handleChange}
                          className="form-control rounded-3 py-2 px-3 border-secondary-subtle"
                          style={{ fontSize: "0.92rem" }}
                        />
                      </div>
                    </div>

                    <div>
                      <label className="form-label small fw-semibold text-secondary mb-1">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="form-control rounded-3 py-2 px-3 border-secondary-subtle"
                        style={{ fontSize: "0.92rem" }}
                      />
                    </div>

                    <div>
                      <label className="form-label small fw-semibold text-secondary mb-1">
                        Requirement Details
                      </label>
                      <textarea
                        name="requirement"
                        rows="4"
                        placeholder="Briefly tell us about your plot size, floors, and requirement..."
                        value={formData.requirement}
                        onChange={handleChange}
                        className="form-control rounded-3 p-3 border-secondary-subtle"
                        style={{ fontSize: "0.92rem", resize: "none" }}
                      />
                    </div>

                    <button
                      type="submit"
                      className="btn w-100 rounded-3 fw-bold text-dark text-uppercase py-3 mt-1 d-flex align-items-center justify-content-center gap-2"
                      style={{
                        backgroundColor: "#F3C558",
                        borderColor: "#F3C558",
                        fontSize: "0.9rem",
                        letterSpacing: "0.06em",
                      }}
                    >
                      <span>Send Message</span>
                      <span style={{ fontSize: "1.15rem", lineHeight: 1 }}>
                        &rarr;
                      </span>
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ConstructionPackagesDifference() {
  // Global synchronized open section key across all cards.
  // Defaults to "structure" to immediately showcase core technical details
  const [activeSectionId, setActiveSectionId] = useState("structure");

  // State to control modal visibility and pass selected package name
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackageName, setSelectedPackageName] = useState("");

  const handleOpenContact = (pkgName) => {
    setSelectedPackageName(pkgName);
    setIsModalOpen(true);
  };

  // Handle accordion toggle: clicking any header toggles the section across all 3 cards simultaneously
  const handleToggle = (sectionId) => {
    setActiveSectionId((prev) => (prev === sectionId ? null : sectionId));
  };

  return (
    <section
      id="HomeConstructionPackages"
      className="py-5 position-relative"
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
          <h2
            className="fw-bold text-dark text-center"
            style={{
              fontSize: "2.5rem",
              letterSpacing: "-0.01em",
              fontWeight: "800",
            }}
          >
            Our Home Construction Packages
          </h2>
          <div
            className="mx-auto rounded mt-2"
            style={{ width: "50px", height: "3px", backgroundColor: "#E5A93C" }}
          />
          <p
            className="text-muted mt-3 mb-0 small"
            style={{ letterSpacing: "0.02em" }}
          >
            Click any section header in any card to expand and cross-examine
            specifications across all three packages simultaneously.
          </p>
        </div>

        {/* 3-Column Responsive Package Grid */}
        <div className="row g-4 justify-content-center">
          {PACKAGES_DATA.map((pkg) => (
            <div key={pkg.id} className="col-12 col-md-6 col-lg-4">
              <div
                className="bg-white rounded-4 shadow-sm overflow-hidden h-100 d-flex flex-column"
                style={{
                  border: "1px solid #E5E7EB",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease",
                }}
              >
                {/* Yellow Amber Card Header matching screenshots */}
                <div
                  className="p-4 text-center rounded-top-4"
                  style={{
                    backgroundColor: "#E5A93C",
                    borderBottom: "1px solid rgba(0,0,0,0.06)",
                  }}
                >
                  <h4
                    className="fw-bold text-dark text-uppercase mb-2"
                    style={{ fontSize: "1.05rem", letterSpacing: "0.08em" }}
                  >
                    {pkg.name}
                  </h4>
                  <div className="d-flex align-items-baseline justify-content-center gap-1">
                    <span
                      className="fw-bold text-dark"
                      style={{
                        fontSize: "2.4rem",
                        lineHeight: 1,
                        fontWeight: "900",
                      }}
                    >
                      {pkg.price}
                    </span>
                    <span
                      className="text-dark fw-semibold small"
                      style={{ fontSize: "0.85rem" }}
                    >
                      {pkg.unit}
                    </span>
                  </div>
                </div>

                {/* Accordion Stack Container */}
                <div className="flex-grow-1 d-flex flex-column">
                  {pkg.sections.map((sec, idx) => {
                    // Synchronized expansion check
                    const isOpen = activeSectionId === sec.id;

                    return (
                      <div
                        key={sec.id}
                        style={{
                          borderBottom: "1px solid #E5E7EB",
                        }}
                      >
                        {/* Accordion Row Header */}
                        <div
                          onClick={() => handleToggle(sec.id)}
                          className="d-flex align-items-center justify-content-between px-3 py-3"
                          style={{
                            cursor: "pointer",
                            backgroundColor: isOpen ? "#FEF9E7" : "#FFFFFF",
                            userSelect: "none",
                            transition: "background-color 0.2s ease",
                          }}
                        >
                          <span
                            className="fw-bold text-dark"
                            style={{ fontSize: "0.92rem" }}
                          >
                            {sec.title}
                          </span>
                          <span
                            className="fw-bold text-dark fs-5 lh-1"
                            style={{ width: "20px", textAlign: "center" }}
                          >
                            {isOpen ? "−" : "+"}
                          </span>
                        </div>

                        {/* Collapsible Content Area */}
                        <div
                          style={{
                            maxHeight: isOpen ? "1200px" : "0",
                            overflow: "hidden",
                            transition:
                              "max-height 0.4s cubic-bezier(0.16, 1, 0.3, 1)",
                            backgroundColor: "#FEF9E7",
                          }}
                        >
                          <div className="px-3 pb-3 pt-1">
                            <ul
                              className="m-0 ps-3 text-secondary"
                              style={{
                                fontSize: "0.82rem",
                                lineHeight: "1.65",
                              }}
                            >
                              {sec.items.map((item, itemIdx) => {
                                // Split title and description where colon exists for clear bold styling
                                const parts = item.split(" : ");
                                const hasColon = parts.length > 1;

                                return (
                                  <li key={itemIdx} className="mb-2">
                                    {hasColon ? (
                                      <>
                                        <strong className="text-dark fw-bold">
                                          {parts[0]} :
                                        </strong>{" "}
                                        <span>
                                          {parts.slice(1).join(" : ")}
                                        </span>
                                      </>
                                    ) : (
                                      <span>{item}</span>
                                    )}
                                  </li>
                                );
                              })}
                            </ul>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>

                {/* Card Footer with "GET DETAILED SPECIFICATION" Button */}
                <div
                  className="p-3 text-center"
                  style={{
                    backgroundColor: "#FFFFFF",
                    borderTop: "1px solid #E5E7EB",
                  }}
                >
                  <button
                    type="button"
                    onClick={() => handleOpenContact(pkg.name)}
                    className="btn fw-bold text-dark text-uppercase px-4 py-2 rounded-pill shadow-sm"
                    style={{
                      backgroundColor: "#F3C558",
                      borderColor: "#F3C558",
                      fontSize: "0.78rem",
                      letterSpacing: "0.06em",
                      transition: "transform 0.2s ease, box-shadow 0.2s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.transform = "scale(1.03)";
                      e.currentTarget.style.boxShadow =
                        "0 4px 12px rgba(243, 197, 88, 0.4)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.transform = "scale(1)";
                      e.currentTarget.style.boxShadow =
                        "0 2px 4px rgba(0,0,0,0.06)";
                    }}
                  >
                    GET DETAILED SPECIFICATION
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Connected Enquire Now Modal */}
      <ContactBanner
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        selectedPackage={selectedPackageName}
      />
    </section>
  );
}
