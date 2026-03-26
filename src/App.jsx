import Navbar from "../src/components/Navbar";
// import Cursor from "../src/components/Cursor";

import Hero from "../src/components/Hero";
import About from "../src/pages/About";
import Certificates from "../src/pages/Certificates";
import TimeLine from "../src/pages/Time-Line";
import Fullstack from "../src/pages/Fullstack";
import Work from "../src/pages/Work";
import Services from "../src/pages/Service";
import Contact from "../src/pages/Contact";
import Footer from "../src/components/Footer";
import FeaturedProject from "./pages/FeaturedProject";
import Stats from "./pages/Stats";

export default function App() {
  return (
    <div className="bg-white text-slate-800">
      
      {/* Cursor (optional) */}
      {/* <Cursor /> */}

      <Navbar />

      <main>
        <Hero />
        <About />
        <Work />
        <FeaturedProject />
        <Stats />
        <Fullstack />
        <Certificates />
        <TimeLine />
        <Services />
        <Contact />
      </main>

      <Footer />
    </div>
  );
}