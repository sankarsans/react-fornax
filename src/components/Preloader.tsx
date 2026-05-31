import { useEffect, useState } from "react";
// 1. Import your actual project logo asset
import logoImg from "../assets/logo-white-2.png";

export default function ArchitecturalPreloader() {
  const [isVisible, setIsVisible] = useState(true);
  const [isRendered, setIsRendered] = useState(true);

  useEffect(() => {
    // Elegant, cinematic duration to show off the custom logo construction
    const fadeTimeout = setTimeout(() => {
      setIsVisible(false);
    }, 3400);

    const removeTimeout = setTimeout(() => {
      setIsRendered(false);
    }, 4000);

    return () => {
      clearTimeout(fadeTimeout);
      clearTimeout(removeTimeout);
    };
  }, []);

  if (!isRendered) return null;

  return (
    <div
      className={`position-fixed top-0 start-0 w-100 h-100 d-flex flex-column align-items-center justify-content-center preloader-wrapper ${
        !isVisible ? "fade-out-active" : ""
      }`}
      style={{
        backgroundColor: "#05070a", // Deep obsidian dark void
        transition: "all 0.6s cubic-bezier(0.76, 0, 0.24, 1)",
      }}
    >
      {/* Subtle background radar grid pattern */}
      <div
        className="position-absolute top-0 start-0 w-100 h-100 opacity-5"
        style={{
          backgroundImage:
            "radial-gradient(rgba(198, 143, 0, 0.15) 1px, transparent 0)",
          backgroundSize: "24px 24px",
        }}
      ></div>

      {/* Advanced Animated Logo Construction Frame */}
      <div
        className="position-relative d-flex align-items-center justify-content-center mb-5"
        style={{ width: "140px", height: "140px", perspective: "1000px" }}
      >
        {/* Layer 1: Holographic Target Crosshairs rotating in background */}
        <div className="position-absolute w-100 h-100 target-crosshairs"></div>

        {/* Layer 2: Orbiting Architectural Radar Ring */}
        <div className="position-absolute rounded-circle radar-ring"></div>

        {/* Layer 3: Your Actual Project Logo with Cinematic 3D Materialization */}
        <div className="position-relative logo-container">
          <img
            src={logoImg}
            alt="Shantha Ventures Core"
            style={{
              height: "75px",
              width: "auto",
              objectFit: "contain",
              filter: "drop-shadow(0 0 25px rgba(198, 143, 0, 0.45))",
            }}
            className="brand-logo-fluid"
          />
          {/* Vertical light sweep cutting specifically through the logo frame */}
          <div className="position-absolute top-0 start-0 w-100 h-100 logo-laser-wipe"></div>
        </div>
      </div>

      {/* Premium Typography Suite */}
      <div className="text-center position-relative px-4 overflow-hidden py-2">
        <h1
          className="m-0 text-uppercase brand-text-fluid"
          style={{
            fontWeight: "900",
            letterSpacing: "18px",
            fontSize: "1.45rem",
            textIndent: "18px",
            color: "#ffffff",
          }}
        >
          FORNAX <span className="gold-shimmer">HOME DEVELOPERS</span>
        </h1>

        {/* Laser Sweep crossing the text */}
        <div className="position-absolute top-0 start-0 w-100 h-100 pointer-events-none laser-scanner"></div>

        <p
          className="m-0 font-monospace text-uppercase mt-3 shifting-subtitle"
          style={{
            fontSize: "0.6rem",
            letterSpacing: "6px",
            color: "rgba(255,255,255,0.3)",
          }}
        >
          Forging Spaces • Shaping Futures
        </p>
      </div>

      {/* Embedded Custom Architectural Animation Script Rules */}
      <style>{`
        .preloader-wrapper {
          z-index: 99999999 !important;
        }
        
        .fade-out-active {
          opacity: 0 !important;
          transform: scale(1.03);
          filter: blur(10px);
        }

        /* 1. Logo 3D Materializing, Scaling & Floating Animation */
        .brand-logo-fluid {
          animation: logoManifest 3.4s cubic-bezier(0.25, 1, 0.5, 1) infinite alternate;
          transform-style: preserve-3d;
        }

        @keyframes logoManifest {
          0% {
            transform: rotateY(-90deg) scale(0.6);
            opacity: 0;
            filter: drop-shadow(0 0 5px rgba(255,255,255,0.8)) brightness(3);
          }
          35% {
            transform: rotateY(15deg) scale(1.05);
            opacity: 0.9;
            filter: drop-shadow(0 0 30px rgba(198,143,0,0.6)) brightness(1.2);
          }
          70%, 100% {
            transform: rotateY(0deg) scale(1) translateY(-4px);
            opacity: 1;
          }
        }

        /* 2. Vertical Light Blade wiping down the Logo face */
        .logo-laser-wipe {
          background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.8), #C68F00, transparent);
          height: 40px;
          width: 100%;
          transform: translateY(-160%);
          animation: laserDrop 2.2s cubic-bezier(0.4, 0, 0.2, 1) infinite;
          mix-blend-mode: color-dodge;
        }

        @keyframes laserDrop {
          0% { transform: translateY(-160%); }
          50%, 100% { transform: translateY(160%); }
        }

        /* 3. Orbiting Laser Ring Component */
        .radar-ring {
          border: 1px solid rgba(198, 143, 0, 0.25);
          border-top: 2px solid #C68F00;
          border-bottom: 2px solid rgba(255, 255, 255, 0.4);
          width: 120px;
          height: 120px;
          animation: spinRadar 2.8s linear infinite;
        }

        @keyframes spinRadar {
          to { transform: rotate(360deg); }
        }

        /* 4. Crosshair Targeting Box lines behind the logo */
        .target-crosshairs {
          border: 1px dashed rgba(255, 255, 255, 0.05);
          animation: rotateTarget 20s linear infinite;
        }
        .target-crosshairs::before, .target-crosshairs::after {
          content: '';
          position: absolute;
          background: rgba(198, 143, 0, 0.2);
          width: 10px;
          height: 10px;
        }
        .target-crosshairs::before { top: 0; left: 0; border-top: 2px solid #C68F00; border-left: 2px solid #C68F00; }
        .target-crosshairs::after { bottom: 0; right: 0; border-bottom: 2px solid #C68F00; border-right: 2px solid #C68F00; }

        @keyframes rotateTarget {
          to { transform: rotate(-360deg); }
        }

        /* 5. Liquid Typography Shimmer Gradient Flow */
        .gold-shimmer {
          color: #C68F00;
          background: linear-gradient(90deg, #C68F00 0%, #ffffff 50%, #C68F00 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmerFlow 3s linear infinite;
        }

        @keyframes shimmerFlow {
          to { background-position: 200% center; }
        }

        /* 6. Horizontal Text Laser Scanner */
        .laser-scanner {
          background: linear-gradient(90deg, transparent, rgba(198, 143, 0, 0.4), #ffffff, rgba(198, 143, 0, 0.4), transparent);
          height: 100%;
          width: 30px;
          transform: translateX(-150%) skewX(-30deg);
          mix-blend-mode: overlay;
          animation: scanThrough 2.4s cubic-bezier(0.77, 0, 0.175, 1) infinite;
        }

        @keyframes scanThrough {
          0% { transform: translateX(-150%) skewX(-30deg); }
          40%, 100% { transform: translateX(400%) skewX(-30deg); }
        }

        /* 7. Subtitle Character Tracking Expansion */
        .shifting-subtitle {
          animation: trackOut 2.5s cubic-bezier(0.25, 1, 0.5, 1) forwards;
        }
        @keyframes trackOut {
          from { letter-spacing: 2px; opacity: 0; }
          to { letter-spacing: 6px; opacity: 1; }
        }
      `}</style>
    </div>
  );
}
