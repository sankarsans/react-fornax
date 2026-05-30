import { videos } from "./content/content.json";

export default function Video() {
  return (
    <div className="videos bg-white text-dark py-5 px-3">
      <div className="container my-4">
        {/* Section Header */}
        <div className="text-center mb-5 position-relative">
          <h2
            className="fw-black display-5 text-dark mb-2"
            style={{ fontWeight: "800", letterSpacing: "-0.02em" }}
          >
            Watch Videos
          </h2>
          {/* Minimalist modern gold accent line underneath */}
          <div
            className="mx-auto rounded"
            style={{ width: "60px", height: "4px", backgroundColor: "#FFC107" }}
          ></div>
        </div>

        {/* 2-Column Grid */}
        <div className="row g-4 justify-content-center">
          {videos.map((video) => (
            <div className="col-12 col-md-6" key={video.id}>
              {/* Card Container with Modern Light Framing */}
              <div
                className="video-card bg-white rounded-4 overflow-hidden shadow-sm border"
                style={{
                  borderColor: "#e0e0e0",
                  backgroundColor: "#ffffff",
                  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                }}
              >
                {/* 16:9 Aspect Ratio Responsive Video Embed */}
                <div className="ratio ratio-16x9 bg-black position-relative embed-container">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}?rel=0&modestbranding=1`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-100 h-100 border-0"
                    loading="lazy"
                  ></iframe>
                </div>

                {/* Video Info Panel Below Content */}
                <div
                  className="p-4 border-top"
                  style={{ borderColor: "#f0f0f0" }}
                >
                  <span
                    className="text-warning text-uppercase tracking-wider fw-bold mb-1 d-block"
                    style={{ fontSize: "0.75rem", color: "#D49B00" }}
                  >
                    {video.subtitle}
                  </span>
                  <h5
                    className="text-dark fw-bold mb-0 text-truncate"
                    style={{ fontSize: "1.1rem", fontWeight: "700" }}
                  >
                    {video.title}
                  </h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
