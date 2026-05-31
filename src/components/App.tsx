import About from "./About";
import Contact from "./Contact";
import Experts from "./Experts";
import Features from "./Features";
import Header from "./Header";
import Package from "./Package";
import Projects from "./Projects";
import Stats from "./Stats";
import Testimonial from "./Testimonial";
import Video from "./Video";
import Whatwedo from "./Whatwedo";
import Location from "./Location";
import Cta from "./Cta";
import Footer from "./Footer";
import Banner from "./Banner";
import ArchitecturalPreloader from "./Preloader";

export default function App() {
  return (
    <div>
      <ArchitecturalPreloader />
      <Header />

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
      <Experts />
      <Location />
      <div id="Contact">
        <Contact />
      </div>
      <Cta />
      <Footer />
    </div>
  );
}
