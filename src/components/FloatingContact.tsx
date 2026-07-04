import React from "react";

export default function FloatingContact() {
  const phoneNumber = "9655483868"; // Replace with your country code + phone number
  const whatsappMessage = encodeURIComponent(
    "Hello! I am interested in your services.",
  );

  return (
    <div
      className="position-fixed end-0 bottom-50 m-4 d-flex flex-column gap-3 z-3"
      style={{
        pointerEvents: "none", // Ensures it doesn't block background clicks outside the buttons
      }}
    >
      {/* Call Button */}
      <a
        href={`tel:${phoneNumber}`}
        className="d-flex align-items-center justify-content-center rounded-circle shadow-lg text-white"
        title="Call Us"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "#0d6efd", // Premium blue matching light theme
          pointerEvents: "auto",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <i className="bi bi-telephone-fill fs-4"></i>
      </a>

      {/* WhatsApp Button */}
      <a
        href={`https://wa.me/${phoneNumber}?text=${whatsappMessage}`}
        target="_blank"
        rel="noopener noreferrer"
        className="d-flex align-items-center justify-content-center rounded-circle shadow-lg text-white"
        title="Chat on WhatsApp"
        style={{
          width: "55px",
          height: "55px",
          backgroundColor: "#25D366", // Official WhatsApp green
          pointerEvents: "auto",
          transition: "transform 0.3s ease, background-color 0.3s ease",
          cursor: "pointer",
        }}
        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <i className="bi bi-whatsapp fs-4"></i>
      </a>
    </div>
  );
}
