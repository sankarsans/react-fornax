import { contactInfo } from "./content/content.json";
import { useState } from "react";

export default function Contact() {
  // Local state for the contact form inputs
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });

  const handleChange = (e: any) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form Submitted Safely:", formData);
    alert("Thank you! Your enquiry has been received.");
    setFormData({ name: "", phone: "", email: "", message: "" });
  };

  return (
    <div
      className="contact bg-white text-dark py-5 px-3"
      style={{ position: "relative", overflow: "hidden" }}
    >
      {/* Subtle background architectural lines */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
        style={{
          backgroundImage:
            "linear-gradient(rgba(0,0,0,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.05) 1px, transparent 1px)",
          backgroundSize: "30px 30px",
          pointerEvents: "none",
        }}
      ></div>

      <div className="container my-4 position-relative z-1">
        <div className="row g-5 align-items-center">
          {/* LEFT SIDE: Heading, Description, and Contact Cards */}
          <div className="col-12 col-lg-5 text-start">
            <span
              className="text-warning text-uppercase tracking-wider small fw-bold mb-2 d-inline-block"
              style={{ color: "#C68F00" }}
            >
              Connect with us
            </span>
            <h2
              className="fw-black display-5 text-dark mb-3"
              style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
            >
              {contactInfo.sectionTitle}
            </h2>
            <p
              className="text-secondary mb-4 lh-lg"
              style={{ fontSize: "1.05rem", maxWidth: "450px" }}
            >
              {contactInfo.subtitle}
            </p>

            {/* Structured Contact Info Cards */}
            <div className="d-flex flex-column gap-3 shadow-inner">
              {/* Phone Group Card */}
              <div
                className="d-flex align-items-start p-3 rounded-4 contact-info-card border"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#eaedf0",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 me-3 icon-box flex-shrink-0"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "rgba(255, 193, 7, 0.1)",
                    border: "1px solid rgba(255, 193, 7, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i
                    className="bi bi-telephone-fill"
                    style={{ color: "#D49B00", fontSize: "1.1rem" }}
                  ></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Phone</h6>
                  <div className="d-flex flex-column">
                    {contactInfo.phoneNumbers.map((phone) => (
                      <a
                        key={phone.id}
                        href={`tel:${phone.number.replace(/\s+/g, "")}`}
                        className="text-secondary text-decoration-none fw-medium hover-text-warning py-0.5"
                        style={{ fontSize: "0.95rem" }}
                      >
                        {phone.number}
                      </a>
                    ))}
                  </div>
                </div>
              </div>

              {/* Email Card */}
              <div
                className="d-flex align-items-start p-3 rounded-4 contact-info-card border"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#eaedf0",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 me-3 icon-box flex-shrink-0"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "rgba(255, 193, 7, 0.1)",
                    border: "1px solid rgba(255, 193, 7, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i
                    className="bi bi-envelope-fill"
                    style={{ color: "#D49B00", fontSize: "1.1rem" }}
                  ></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Email</h6>
                  <a
                    href={`mailto:${contactInfo.email}`}
                    className="text-secondary text-decoration-none fw-medium hover-text-warning"
                    style={{ fontSize: "0.95rem" }}
                  >
                    {contactInfo.email}
                  </a>
                </div>
              </div>

              {/* Address Card */}
              <div
                className="d-flex align-items-start p-3 rounded-4 contact-info-card border"
                style={{
                  backgroundColor: "#ffffff",
                  borderColor: "#eaedf0",
                  transition: "all 0.3s ease",
                }}
              >
                <div
                  className="d-flex align-items-center justify-content-center rounded-3 me-3 icon-box flex-shrink-0"
                  style={{
                    width: "45px",
                    height: "45px",
                    backgroundColor: "rgba(255, 193, 7, 0.1)",
                    border: "1px solid rgba(255, 193, 7, 0.25)",
                    transition: "all 0.3s ease",
                  }}
                >
                  <i
                    className="bi bi-geo-alt-fill"
                    style={{ color: "#D49B00", fontSize: "1.1rem" }}
                  ></i>
                </div>
                <div>
                  <h6 className="fw-bold mb-1 text-dark">Address</h6>
                  <p
                    className="text-secondary mb-0 fw-medium lh-base"
                    style={{ fontSize: "0.9rem" }}
                  >
                    {contactInfo.address}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Enquire Form Card */}
          <div className="col-12 col-lg-7">
            <div
              className="p-4 p-md-5 rounded-4 shadow-sm border"
              style={{
                backgroundColor: "#ffffff",
                borderColor: "#eaedf0",
              }}
            >
              <form onSubmit={handleSubmit}>
                <div className="row g-4">
                  <div className="col-12 col-md-6">
                    <div className="form-floating custom-form-group">
                      <input
                        type="text"
                        className="form-control rounded-3"
                        id="nameInput"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="nameInput" className="text-muted">
                        Full Name
                      </label>
                    </div>
                  </div>

                  <div className="col-12 col-md-6">
                    <div className="form-floating custom-form-group">
                      <input
                        type="tel"
                        className="form-control rounded-3"
                        id="phoneInput"
                        name="phone"
                        placeholder="Phone Number"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="phoneInput" className="text-muted">
                        Phone Number
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating custom-form-group">
                      <input
                        type="email"
                        className="form-control rounded-3"
                        id="emailInput"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        required
                      />
                      <label htmlFor="emailInput" className="text-muted">
                        Email Address
                      </label>
                    </div>
                  </div>

                  <div className="col-12">
                    <div className="form-floating custom-form-group">
                      <textarea
                        className="form-control rounded-3"
                        placeholder="Leave a message here"
                        id="messageTextarea"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        style={{ height: "130px" }}
                        required
                      ></textarea>
                      <label htmlFor="messageTextarea" className="text-muted">
                        Briefly tell us about your requirement...
                      </label>
                    </div>
                  </div>

                  <div className="col-12 text-end">
                    <button
                      type="submit"
                      className="btn py-3 px-5 rounded-3 fw-bold text-uppercase tracking-wider transition-all shadow-sm submit-btn w-100 w-md-auto"
                      style={{
                        backgroundColor: "#FFC107",
                        color: "#000000",
                        fontSize: "0.9rem",
                        border: "none",
                        transition: "all 0.3s cubic-bezier(0.16, 1, 0.3, 1)",
                      }}
                    >
                      Send Message <i className="bi bi-arrow-right ms-2"></i>
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
