import { aboutUs } from "./content/content.json";

export default function About() {
  return (
    <section className="py-5 bg-light-premium text-dark overflow-hidden position-relative">
      {/* Background Accent Grid */}
      <div className="position-absolute dot-grid-light top-0 start-0 z-0"></div>

      <div className="container position-relative z-1 my-5">
        {/* Modern Section Header */}
        <div className="text-center ">
          <span
            className="fw-bold text-uppercase tracking-wider small d-block mb-1 text-secondary"
            style={{ letterSpacing: "3px", fontSize: "0.8rem" }}
          >
            Who We Are
          </span>
          <h2
            className="fw-black display-5 text-dark"
            style={{ fontWeight: "800", letterSpacing: "-0.03em" }}
          >
            About us
          </h2>
        </div>

        <div className="row align-items-center g-5">
          {/* Left Column: Image in Premium White Frame */}
          <div className="col-12 col-lg-6">
            <div
              className="mx-auto position-relative"
              style={{ maxWidth: "500px" }}
            >
              {/* Decorative side accent block */}
              <div
                className="position-absolute rounded-3 z-0"
                style={{
                  width: "100px",
                  height: "100px",
                  backgroundColor: "#e9ecef",
                  top: "-15px",
                  left: "-15px",
                }}
              ></div>

              <div className="p-3 bg-white shadow-premium rounded-4 position-relative z-1">
                <img
                  src={aboutUs.image}
                  alt={aboutUs.title}
                  className="img-fluid rounded-3 w-100"
                  style={{ objectFit: "cover", minHeight: "340px" }}
                />
              </div>
            </div>
          </div>

          {/* Right Column: Text Content in Light Semi-Translucent Glass Panel */}
          <div className="col-12 col-lg-6">
            <div className="p-4 p-md-5 glass-panel-light text-center text-lg-start h-100 d-flex flex-column justify-content-center">
              {/* Modern Tag Badge */}
              <div className="d-flex justify-content-center justify-content-lg-start align-items-center mb-3">
                <span
                  className="badge px-3 py-2 fw-bold text-uppercase text-white"
                  style={{
                    fontSize: "0.75rem",
                    letterSpacing: "2px",
                    backgroundColor: "#d4a373",
                  }}
                >
                  {aboutUs.subTitle}
                </span>
              </div>

              {/* Refined Title */}
              <h3 className="fw-bold fs-1 text-dark mb-2">{aboutUs.title}</h3>

              {/* Minimal Divider Line */}
              <div className="mb-4 d-flex justify-content-center justify-content-lg-start">
                <div
                  style={{
                    width: "50px",
                    height: "3px",
                    backgroundColor: "#d4a373",
                  }}
                ></div>
              </div>

              {/* Premium Light Body Typography */}
              <p
                className="mt-2 text-secondary"
                style={{
                  fontSize: "0.975rem",
                  color: "#4a5568",
                  lineHeight: "1.8",
                  textAlign: "justify",
                }}
              >
                {aboutUs.description}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
