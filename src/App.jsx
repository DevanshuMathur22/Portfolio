import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Project from "./pages/projects";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import ContactPage from "./pages/ContactPage";

export default function App() {
  return (
    <div className="site-shell">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/work" element={<WorkPage />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/project" element={<Project />} />
      </Routes>
      <Footer />
    </div>
  );
}
