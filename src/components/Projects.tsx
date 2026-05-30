import { useState } from "react";
import { projects } from "./content/content.json";

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState("All");

  // State for active image preview inside lightbox modal
  // const [selectedProject, setSelectedProject] = useState(null);
  const [selectedProject, setSelectedProject] = useState<any | null>(null);

  // Filter categorization handler logic
  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((item) => item.category === activeFilter);

  // Array containing unique dynamic filters
  const filterTags = ["All", "Elevations", "Interior", "Working Projects"];

  return (
    <div
      className="projects bg-dark text-white py-5 px-3"
      style={{ backgroundColor: "#121212", minHeight: "100vh" }}
    >
      <div className="container my-4">
        {/* Header Block */}
        <div className="text-center mb-5">
          <span className="text-warning text-uppercase tracking-wider small fw-bold mb-2 d-inline-block">
            Our Work Showcase
          </span>
          <h2
            className="fw-black display-5 text-white"
            style={{ fontWeight: "800", letterSpacing: "-0.03em" }}
          >
            Our Projects
          </h2>
        </div>

        {/* Dynamic Category Navigation Tags */}
        <div className="d-flex flex-wrap justify-content-center gap-2 mb-5">
          {filterTags.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className="btn px-4 py-2 text-capitalize transition-all border-0 rounded-3 text-sm"
              style={{
                backgroundColor:
                  activeFilter === tag
                    ? "#FFC107"
                    : "rgba(255, 255, 255, 0.05)",
                color: activeFilter === tag ? "#000000" : "#b3b3b3",
                fontWeight: "600",
                fontSize: "0.9rem",
                transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
              }}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Main Grid System */}
        <div className="row g-4">
          {filteredProjects.map((project: any) => (
            <div className="col-12 col-md-6 col-lg-4" key={project.id}>
              {/* Image Item Card Container */}
              <div
                onClick={() => setSelectedProject(project)}
                className="position-relative overflow-hidden rounded-4 project-card bg-black ratio ratio-4x3 shadow"
                style={{ cursor: "pointer" }}
              >
                {/* Image Component layer */}
                <img
                  src={project.image}
                  alt={project.title}
                  className="img-fluid object-fit-cover w-100 h-100 project-img"
                  style={{
                    transition: "transform 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                />

                {/* Modern Hover Overlay Information Layer */}
                <div
                  className="position-absolute bottom-0 start-0 w-100 p-4 project-overlay d-flex flex-column justify-content-end"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(0,0,0,0.95) 0%, rgba(0,0,0,0.4) 60%, transparent 100%)",
                    opacity: 0,
                    transform: "translateY(10px)",
                    transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                  }}
                >
                  <span
                    className="text-warning text-uppercase tracking-widest fw-bold mb-1"
                    style={{ fontSize: "0.75rem" }}
                  >
                    {project.category}
                  </span>
                  <h5 className="text-white fw-bold mb-0">{project.title}</h5>
                  <div className="mt-2 text-warning d-flex align-items-center gap-1 small">
                    <span>View Project</span>
                    <i className="bi bi-arrow-right small"></i>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modern Lightbox Modal Element */}
      {selectedProject && (
        <div
          className="position-fixed top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center z-3 px-3 animate-fade-in"
          style={{
            backgroundColor: "rgba(10, 10, 10, 0.9)",
            backdropFilter: "blur(8px)",
          }}
          onClick={() => setSelectedProject(null)} // Dismiss modal when clicking background overlay
        >
          {/* Close Floating Button */}
          <button
            className="position-absolute top-0 end-0 m-4 btn text-white border-0 bg-dark bg-opacity-50 rounded-circle d-flex align-items-center justify-content-center"
            style={{ width: "45px", height: "45px" }}
            onClick={() => setSelectedProject(null)}
          >
            <i className="bi bi-x-lg fs-5"></i>
          </button>

          {/* Modal Container Structure */}
          <div
            className="bg-dark rounded-4 overflow-hidden shadow-2xl p-2 animate-scale-up border"
            style={{
              maxWidth: "850px",
              width: "100%",
              backgroundColor: "#1a1a1a",
              borderColor: "#2d2d2d",
            }}
            onClick={(e) => e.stopPropagation()} // Prevents click inside container from closing modal
          >
            <img
              src={selectedProject?.image}
              alt={selectedProject?.title}
              className="w-100 h-auto rounded-3 shadow-inner object-fit-contain"
              style={{ maxHeight: "75vh" }}
            />
            <div className="p-3 text-start bg-dark">
              <span className="badge bg-warning text-dark mb-1 rounded-1">
                {selectedProject?.category}
              </span>
              <h4 className="text-white fw-bold mb-1">
                {selectedProject?.title}
              </h4>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
