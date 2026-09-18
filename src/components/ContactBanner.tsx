import { useState, useEffect } from "react";

export default function ContactBanner({
  isOpen,
  onClose,
  selectedPackage,
}: any) {
  const [animate, setAnimate] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    city: "",
  });

  // Handle smooth transition lifecycle
  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => setAnimate(true), 20);
      return () => clearTimeout(timer);
    } else {
      setAnimate(false);
    }
  }, [isOpen]);

  const handleChange = (e: any) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", { ...formData, package: selectedPackage });
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div
      className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center px-3"
      onClick={onClose}
      style={{
        backgroundColor: "rgba(0, 0, 0, 0.65)",
        zIndex: 1055,
        opacity: animate ? 1 : 0,
        transition: "opacity 0.4s ease-out",
      }}
    >
      {/* Modal Container */}
      <div
        className="bg-white position-relative shadow-lg overflow-hidden w-100"
        onClick={(e) => e.stopPropagation()} // Prevent backdrop click when clicking inside modal
        style={{
          maxWidth: "880px",
          borderRadius: "6px",
          opacity: animate ? 1 : 0,
          transform: animate
            ? "translateY(0) scale(1)"
            : "translateY(30px) scale(0.96)",
          transition:
            "transform 0.45s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.45s ease-out",
        }}
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          style={{
            position: "absolute",
            top: "16px",
            right: "16px",
            width: "32px",
            height: "32px",
            borderRadius: "50%",
            backgroundColor: "#333333",
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
            fontWeight: "300",
            boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
          }}
        >
          &#x2715;
        </button>

        <div className="row g-0">
          {/* Left Column: Form Card */}
          <div className="col-12 col-md-5 p-4 d-flex flex-column justify-content-center">
            <div
              className="border shadow-sm rounded-1 overflow-hidden"
              style={{ borderColor: "#eaeaea" }}
            >
              <div
                className="py-2 text-center text-dark fw-bold text-uppercase"
                style={{
                  backgroundColor: "#F3C558",
                  fontSize: "0.85rem",
                  letterSpacing: "0.05em",
                }}
              >
                {selectedPackage
                  ? `Quote for ${selectedPackage}`
                  : "Get a Free Quote !!"}
              </div>

              <form onSubmit={handleSubmit} className="p-3 bg-white">
                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary mb-1">
                    Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="Enter your Name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-control form-control-sm rounded-0 border-secondary-subtle"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary mb-1">
                    Mobile Number *
                  </label>
                  <div className="input-group input-group-sm">
                    <input
                      type="tel"
                      name="phone"
                      required
                      placeholder="Enter mobile number"
                      value={formData.phone}
                      onChange={handleChange}
                      className="form-control rounded-0 border-secondary-subtle"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary mb-1">
                    Email ID *
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    placeholder="Enter your Email ID"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-control form-control-sm rounded-0 border-secondary-subtle"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label small fw-semibold text-secondary mb-1">
                    City *
                  </label>
                  <select
                    name="city"
                    required
                    value={formData.city}
                    onChange={handleChange}
                    className="form-select form-select-sm rounded-0 border-secondary-subtle text-secondary"
                  >
                    <option value="" disabled>
                      Select City
                    </option>
                    <option value="Chennai">Chennai</option>
                    <option value="Salem">Salem</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Hyderabad">Hyderabad</option>
                    <option value="Coimbatore">Coimbatore</option>
                  </select>
                </div>

                <button
                  type="submit"
                  className="btn w-100 rounded-0 fw-bold text-uppercase py-2 mt-2"
                  style={{
                    backgroundColor: "#F3C558",
                    borderColor: "#F3C558",
                    fontSize: "0.8rem",
                    letterSpacing: "0.05em",
                    color: "#212529",
                  }}
                >
                  Get Free Quote
                </button>
              </form>
            </div>
          </div>

          {/* Right Column: Branding */}
          <div className="col-12 col-md-7 p-4 p-lg-5 d-flex flex-column justify-content-between">
            <div>
              <div className="d-flex align-items-center mb-4">
                <span
                  className="fw-black text-dark"
                  style={{
                    fontSize: "2.0rem",
                    fontWeight: "900",
                  }}
                >
                  Fornax Home Developers
                </span>
              </div>

              <div
                className="ps-4 border-start"
                style={{
                  borderLeftWidth: "4px !important",
                  borderColor: "#F3C558",
                }}
              >
                <h1
                  className="fw-light text-dark m-0 text-uppercase lh-sm"
                  style={{ fontSize: "1.9rem", letterSpacing: "0.04em" }}
                >
                  Home <br />
                  Construction <br />
                  <strong className="fw-bolder">Experts</strong> <br />
                  In <br />
                  <span
                    className="fw-bolder"
                    style={{
                      color: "#F3C558",
                      letterSpacing: "0.06em",
                    }}
                  >
                    India
                  </span>
                </h1>
              </div>
            </div>

            <div className="mt-4 pt-3">
              <p
                className="m-0 text-uppercase fw-bold text-dark"
                style={{
                  fontSize: "0.8rem",
                  letterSpacing: "0.08em",
                }}
              >
                We Build Your Dream Home With Quality & Trust
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
