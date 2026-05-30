import { heroBanner } from "./content/content.json";

export default function Banner() {
  return (
    <div
      className="banner position-relative w-100 vh-100 d-flex align-items-center justify-content-center overflow-hidden text-center text-white"
      style={{ minHeight: "550px" }}
    >
      {/* 1. HTML5 Background Video Layer */}
      <video
        autoPlay
        loop
        muted
        playsInline
        poster={heroBanner.fallbackImageUrl}
        className="position-absolute top-50 start-50 w-100 h-100 object-fit-cover translate-middle z-0"
        style={{ pointerEvents: "none" }}
      >
        <source src={heroBanner.videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* 2. Premium Dark Ambient Overlay Tint Layer */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 z-1"
        style={{
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.65) 100%)",
        }}
      ></div>

      {/* 3. Structural Geometric Layout Grid Lines Accent */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-10 z-1"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
          backgroundSize: "45px 45px",
          pointerEvents: "none",
        }}
      ></div>

      {/* 4. Foreground Content Container */}
      <div className="container position-relative z-2 px-4 animate-hero-entrance">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-10 col-xl-9">
            {/* Main Premium Styled Heading */}
            <h1
              className="display-2 mb-3 tracking-tight"
              style={{
                fontWeight: "800",
                letterSpacing: "-0.03em",
                lineHeight: "1.1",
              }}
            >
              <span className="banner-text d-block text-white-50 fw-light fs-2 mb-2 text-uppercase tracking-widest font-monospace animate-item">
                {heroBanner.titleMain}
              </span>
              <span className="text-white position-relative d-inline-block">
                {heroBanner.brandName}
              </span>
            </h1>

            {/* Architectural Sub-tagline Statement */}
            <p
              className="banner-text fs-5 text-white-50 fw-medium mx-auto mb-5 border-start border-warning border-2 ps-3 text-start text-sm-center border-sm-none"
              style={{
                maxWidth: "580px",

                letterSpacing: "0.01em",
              }}
            >
              {heroBanner.tagline}
            </p>

            {/* 5. Modernized Interlocking Dual CTA Buttons */}
            <div className="d-flex flex-column flex-sm-row gap-3 justify-content-center align-items-center">
              {/* Secondary Outline Link Card */}
              <a
                href="#Projects"
                className="btn px-4 py-3 rounded-3 fw-bold text-uppercase tracking-wider transition-all hero-outline-btn w-100 w-sm-auto"
                style={{
                  color: "#ffffff",
                  borderColor: "rgba(255,255,255,0.3)",
                  borderWidth: "2px",
                  fontSize: "0.85rem",
                  backgroundColor: "rgba(255,255,255,0.03)",
                  backdropFilter: "blur(5px)",
                }}
              >
                View Projects
              </a>

              {/* Primary High-Contrast Accent Button */}
              <a
                href="#Contact"
                className="btn px-4 py-3 rounded-3 fw-bold text-uppercase tracking-wider transition-all hero-solid-btn w-100 w-sm-auto shadow-lg"
                style={{
                  backgroundColor: "#FFC107",
                  color: "#000000",
                  fontSize: "0.85rem",
                  border: "2px solid #FFC107",
                }}
              >
                Get A Free Quote{" "}
                <i className="bi bi-arrow-right ms-2 small"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
