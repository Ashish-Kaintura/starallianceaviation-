// src/App.jsx
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Test from "./page/Test";
import AboutUs from "./page/AboutUs";
// Dummy pages (you can create real ones later)

const PilotTraining = () => (
  <div className="pt-[150px] p-6">Pilot Training Page</div>
);
const CabinCrew = () => (
  <div className="pt-[150px] p-6">Cabin Crew Training Page</div>
);
const Services = () => (
  <div className="pt-[150px] p-6">Services & Expertise Page</div>
);
const Contact = () => <div className="pt-[150px] p-6">Contact Page</div>;

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pilot-training" element={<PilotTraining />} />
        <Route path="/cabin-crew-training" element={<CabinCrew />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
