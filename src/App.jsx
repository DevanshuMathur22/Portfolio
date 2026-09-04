import { Navigate, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import FloatingDock from "./components/FloatingDock";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import AboutPage from "./pages/AboutPage";
import WorkPage from "./pages/WorkPage";
import ServicesPage from "./pages/ServicesPage";
import PackagesPage from "./pages/PackagesPage";
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
        <Route path="/packages" element={<PackagesPage />} />
        <Route path="/contact" element={<ContactPage />} />

        <Route path="/project" element={<Navigate to="/work" replace />} />
        <Route path="/projects" element={<Navigate to="/work" replace />} />
      </Routes>
      <FloatingDock />
      <Footer />
    </div>
  );
}
