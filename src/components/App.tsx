import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Home";
import ContructionPackage from "./ConstructionPackage";
import DesignPackage from "./DesignPackage";
import Header from "./Header";
import FloatingContact from "./FloatingContact";
import Footer from "./Footer";
import { useEffect, useState } from "react";
import ContactBanner from "./ContactBanner";
import ScrollToTop from "./ScrollToTop";

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Start timer on initial page load
    const timer = setTimeout(() => {
      setIsModalOpen(true);
    }, 5000); // 5000ms = 5 seconds

    // Clear timeout if the component unmounts before 5s
    return () => clearTimeout(timer);
  }, []);

  return (
    <BrowserRouter>
      <Header />
      <ScrollToTop />
      <ContactBanner
        isOpen={isModalOpen}
        selectedPackage=""
        onClose={() => setIsModalOpen(false)}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/ContructionPackage" element={<ContructionPackage />} />
        <Route path="/DesignPackage" element={<DesignPackage />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Routes>
      <Footer />
      <FloatingContact />
    </BrowserRouter>
  );
}
