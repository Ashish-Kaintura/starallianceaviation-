// src/App.jsx
import { Routes, Route } from "react-router-dom";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Navbar from "./components/Navbar";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Test from "./page/Test";
import AboutUs from "./page/AboutUs";
import PilotTraining from "./page/PilotTraining";
import CPLGroundClasses from "./page/PilotTraning/CPLGroundClasses";
import ATPLGroundClasses from "./page/PilotTraning/ATPLGroundClasses";
import ATPLOralViva from "./page/PilotTraning/ATPLOralViva";
import RTRRadioTelephonyRestricted from "./page/PilotTraning/RTRRadioTelephonyRestricted";
import CadetPilotProgram from "./page/PilotTraning/CadetPilotProgram";
import AirlinesPreparationCourse from "./page/PilotTraning/AirlinesPreparationCourse";
import FLCRecencyFlying from "./page/PilotTraning/FLCRecencyFlying";
import ClassMedical from "./page/PilotTraning/ClassMedical";
import CabinCrew from "./page/CabinCrew";
import TRIncludingEndorsement from "./page/PilotTraning/TRIncludingEndorsement";
import FAQSection from "./components/FAQSection";
import CounsellingReappearance from "./page/cabincrewtraning/CounsellingReappearance";
import JobOrientedCC from "./page/cabincrewtraning/JobOrientedCC";
import ServicesAndExpertise from "./page/ServicesAndExpertise";
import ServiceDetail from "./page/ServiceDetail";
import SocialMedia from "./components/SocialMedia";
// Dummy pages (you can create real ones later)

const Contact = () => <div className="pt-[150px] p-6">Contact Page</div>;

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pilot-training" element={<PilotTraining />} />
        <Route path="/cpl-ground-classes" element={<CPLGroundClasses />} />
        <Route path="/atpl-ground-classes" element={<ATPLGroundClasses />} />
        <Route path="/atpl-oral-viva" element={<ATPLOralViva />} />
        <Route
          path="/rtr-radio-telephony-restricted"
          element={<RTRRadioTelephonyRestricted />}
        />
        <Route path="/cadet-pilot-program" element={<CadetPilotProgram />} />
        <Route
          path="/airlines-preparation-course"
          element={<AirlinesPreparationCourse />}
        />
        <Route path="/flc-recency-flying" element={<FLCRecencyFlying />} />
        <Route
          path="/tr-including-endorsement"
          element={<TRIncludingEndorsement />}
        />
        <Route path="/class-12-medical" element={<ClassMedical />} />

        <Route path="/cabin-crew-training" element={<CabinCrew />} />
        <Route
          path="/counselling-for-reappearance"
          element={<CounsellingReappearance />}
        />
        <Route path="/job-oriented-cc-training" element={<JobOrientedCC />} />
        <Route path="/services-expertise" element={<ServicesAndExpertise />} />
        <Route path="/:slug" element={<ServiceDetail />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/test" element={<Test />} />
      </Routes>
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;
