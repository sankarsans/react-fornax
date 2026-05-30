import { footerData, projects } from "./content/content.json";

export default function Footer() {
  // Pull only the first 6 projects to show in the Latest Work thumbnail gallery grid
  const latestWorkThumbnails = projects?.slice(0, 6) || [];

  return (
    <footer
      className="footer pt-5 pb-3 px-3 text-white-50"
      style={{ backgroundColor: "#111111", borderTop: "1px solid #1a1a1a" }}
    >
      <div className="container pt-4">
        <div className="row g-4 justify-content-between">
          {/* COLUMN 1: About Company & Direct Contacts */}
          <div className="col-12 col-md-6 col-lg-4 text-start">
            <h5
              className="text-white fw-bold mb-3 position-relative pb-2"
              style={{ letterSpacing: "0.02em" }}
            >
              About Us
              <span
                className="position-absolute bottom-0 start-0 rounded"
                style={{
                  width: "35px",
                  height: "3px",
                  backgroundColor: "#FFC107",
                }}
              ></span>
            </h5>
            <p
              className="small lh-lg mb-4 text-secondary text-link"
              style={{ color: "#a0a0a0", fontSize: "0.9rem" }}
            >
              {footerData.aboutText}
            </p>

            {/* Minimalist Contact Links */}
            <div className="d-flex flex-column gap-2 small">
              <a
                href={`tel:${footerData.phone.replace(/\s+/g, "")}`}
                className="text-link text-decoration-none text-secondary hover-gold d-flex align-items-center gap-2 transition-all"
              >
                <i className="bi bi-telephone text-warning"></i>{" "}
                {footerData.phone}
              </a>
              <a
                href={`mailto:${footerData.email}`}
                className="text-link text-decoration-none text-secondary hover-gold d-flex align-items-center gap-2 transition-all"
              >
                <i className="bi bi-envelope text-warning"></i>{" "}
                {footerData.email}
              </a>
            </div>
          </div>

          {/* COLUMN 2: Quick Links Directory Map */}
          <div className="col-12 col-md-6 col-lg-3 text-start ps-lg-5">
            <h5
              className="text-white fw-bold mb-3 position-relative pb-2"
              style={{ letterSpacing: "0.02em" }}
            >
              Quick Links
              <span
                className="position-absolute bottom-0 start-0 rounded"
                style={{
                  width: "35px",
                  height: "3px",
                  backgroundColor: "#FFC107",
                }}
              ></span>
            </h5>
            <ul className="list-unstyled d-flex flex-column gap-2.5 small pt-1">
              {[
                "Home",
                "Projects",
                "Videos",
                "Packages",
                "About Us",
                "Contact Us",
              ].map((link) => {
                // 1. Get the first word (e.g., "About Us" becomes "About", "Packages" stays "Packages")
                const firstWord = link.split(" ")[0];

                // 2. Map specific anomalies if needed so they perfectly align with your exact navbar IDs
                // (e.g., Making sure "Packages" matches your "#Package" ID if it's singular there)
                const targetId =
                  firstWord === "Packages" ? "Package" : firstWord;

                return (
                  <li key={link} className="py-1">
                    <a
                      // Generates clean targets like: #Home, #Projects, #Videos, #Package, #About, #Contact
                      href={`#${targetId}`}
                      className="text-decoration-none text-secondary footer-nav-link position-relative transition-all"
                    >
                      {link}
                    </a>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* COLUMN 3: Architectural Recent Projects Gallery Preview */}
          <div className="col-12 col-md-12 col-lg-4 text-start">
            <h5
              className="text-white fw-bold mb-3 position-relative pb-2"
              style={{ letterSpacing: "0.02em" }}
            >
              Latest Work
              <span
                className="position-absolute bottom-0 start-0 rounded"
                style={{
                  width: "35px",
                  height: "3px",
                  backgroundColor: "#FFC107",
                }}
              ></span>
            </h5>

            {/* Balanced 3-Column Thumb Matrix Grid */}
            <div className="row g-2 pt-1">
              {latestWorkThumbnails.map((project) => (
                <div className="col-4" key={project.id}>
                  <div className="ratio ratio-1x1 rounded overflow-hidden shadow-sm border border-secondary border-opacity-10 footer-img-wrapper bg-black">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="img-fluid object-fit-cover w-100 h-100 transition-all footer-gallery-img"
                      loading="lazy"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Separator Accent Divider */}
        <hr
          className="mt-5 mb-4 opacity-10"
          style={{ backgroundColor: "#ffffff" }}
        />

        {/* BOTTOM SOCKET ROW: Branding, Terms and Conditions, Social Links */}
        <div className="row g-3 align-items-center justify-content-between text-center text-md-start small">
          {/* Logo & Copyright Node */}
          <div className="col-12 col-md-5 d-flex align-items-center justify-content-center justify-content-md-start gap-3 flex-wrap">
            <div
              className="text-white fw-black tracking-tight"
              style={{ fontWeight: "900", fontSize: "1.1rem" }}
            >
              FORNAX <span className="text-warning">HOME DEVELOPERS</span>
            </div>
            <div className="border-start ps-3 border-secondary border-opacity-20 d-none d-sm-block">
              {footerData.copyright}
            </div>
          </div>

          {/* Legal Document Navigation Nodes (Terms and Conditions Section) */}
          {/* <div
            className="col-12 col-md-4 d-flex justify-content-center gap-4 text-secondary font-monospace"
            style={{ fontSize: "0.8rem" }}
          >
            <a
              href="#terms"
              className="text-decoration-none text-muted hover-gold transition-all"
            >
              Terms & Conditions
            </a>
            <a
              href="#privacy"
              className="text-decoration-none text-muted hover-gold transition-all"
            >
              Privacy Policy
            </a>
          </div> */}

          {/* Architectural Social Platform Floating Media Rings */}
          <div className="col-12 col-md-3 d-flex justify-content-center justify-content-md-end gap-2">
            {[
              {
                icon: "bi-facebook",
                href: "https://www.facebook.com/ashokravi.20/",
              },
              {
                icon: "bi-instagram",
                href: "https://www.instagram.com/fornax_home_developers/",
              },
              {
                icon: "bi-pinterest",
                href: "https://in.pinterest.com/erashokhs/_saved/",
              },
              { icon: "bi-youtube", href: "https://youtube.com" },
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-border d-flex align-items-center justify-content-center rounded-circle text-secondary border footer-social-ring"
                style={{
                  width: "36px",
                  height: "36px",
                  paddingTop: "2px",
                  backgroundColor: "rgba(255,255,255,0.02)",
                  borderColor: "rgba(255,255,255,0.08)",
                  transition: "all 0.3s ease",
                }}
              >
                <i
                  className={`bi ${social.icon}`}
                  style={{ fontSize: "0.95rem" }}
                ></i>
              </a>
            ))}
          </div>

          {/* Small Sub-branding Attribution Element */}
          <div
            className="col-12 text-center text-sm-start d-block d-sm-none text-muted mt-2"
            style={{ fontSize: "0.75rem" }}
          >
            {footerData.copyright}
          </div>
          <div
            className="col-12 text-center text-md-start text-muted mt-1"
            style={{ fontSize: "0.75rem", opacity: 0.5 }}
          >
            {footerData.builtBy}
          </div>
        </div>
      </div>
    </footer>
  );
}
