import About from "./About";
import Contact from "./Contact";
import Experts from "./Experts";
import Features from "./Features";
import Package from "./Package";
import Projects from "./Projects";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import Video from "./Video";
import Whatwedo from "./Whatwedo";
import Location from "./Location";
import Cta from "./Cta";
import Banner from "./Banner";
import WhyFornax from "./WhyFornax";
import { Instagram } from "./Instagram";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function Home() {
  const location = useLocation();

  useEffect(() => {
    // Check if coming with a state or a URL hash (e.g., #About)
    const targetId = location.state?.scrollTo || location.hash.replace("#", "");

    if (targetId) {
      // Small timeout ensures the DOM has rendered completely
      const timer = setTimeout(() => {
        const element = document.getElementById(targetId);
        if (element) {
          const navbarOffset = 72;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - navbarOffset;

          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [location]);

  return (
    <div>
      {/* <ArchitecturalPreloader /> */}

      <div id="home">
        <Banner />
      </div>

      <div id="Features">
        <Features />
      </div>

      <div id="About">
        <About />
      </div>

      <Whatwedo />
      <Testimonial />
      {/* <Projects /> */}
      <div id="Projects">
        <Projects />
      </div>
      <div id="Videos">
        <Video />
      </div>
      <div id="Package">
        <Package />
      </div>
      <Stats />
      {/* <Instagram /> */}
      <WhyFornax />
      <Experts />
      <Location />
      <div id="Contact">
        <Contact />
      </div>
      <Cta />
    </div>
  );
}
