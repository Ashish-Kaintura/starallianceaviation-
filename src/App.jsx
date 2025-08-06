// src/App.jsx
import { Routes, Route } from "react-router-dom";
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
// Dummy pages (you can create real ones later)

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
