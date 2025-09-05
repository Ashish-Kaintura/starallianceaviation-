// src/App.jsx
import { Routes, Route } from "react-router-dom";
import React, { useState, useEffect, lazy, Suspense } from "react";
import Loader from "./components/Loader"; // Initial loader
import AOS from "aos";
import "aos/dist/aos.css";

// Static components (always needed, don't lazy-load these)
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FAQSection from "./components/FAQSection";
import SocialMedia from "./components/SocialMedia";
import WhatsAppSticky from "./components/WhatsAppSticky";
import { Toaster } from "react-hot-toast";

// ✅ Lazy-loaded pages
const Home = lazy(() => import("./page/Home"));
const AboutUs = lazy(() => import("./page/AboutUs"));
const PilotTraining = lazy(() => import("./page/PilotTraining"));
const CPLGroundClasses = lazy(() =>
  import("./page/PilotTraning/CPLGroundClasses")
);
const ATPLGroundClasses = lazy(() =>
  import("./page/PilotTraning/ATPLGroundClasses")
);
const ATPLOralViva = lazy(() => import("./page/PilotTraning/ATPLOralViva"));
const RTRRadioTelephonyRestricted = lazy(() =>
  import("./page/PilotTraning/RTRRadioTelephonyRestricted")
);
const CadetPilotProgram = lazy(() =>
  import("./page/PilotTraning/CadetPilotProgram")
);
const AirlinesPreparationCourse = lazy(() =>
  import("./page/PilotTraning/AirlinesPreparationCourse")
);
const FLCRecencyFlying = lazy(() =>
  import("./page/PilotTraning/FLCRecencyFlying")
);
const ClassMedical = lazy(() => import("./page/PilotTraning/ClassMedical"));
const TRIncludingEndorsement = lazy(() =>
  import("./page/PilotTraning/TRIncludingEndorsement")
);

const CabinCrew = lazy(() => import("./page/CabinCrew"));
const CounsellingReappearance = lazy(() =>
  import("./page/cabincrewtraning/CounsellingReappearance")
);
const JobOrientedCC = lazy(() =>
  import("./page/cabincrewtraning/JobOrientedCC")
);

const ServicesAndExpertise = lazy(() => import("./page/ServicesAndExpertise"));
const ServiceDetail = lazy(() => import("./page/ServiceDetail"));

const Blogs = lazy(() => import("./page/Blogs"));
const PostDetail = lazy(() => import("./page/PostDetail"));

const MakeAppointment = lazy(() => import("./page/MakeAppointment"));
const Contact = lazy(() => import("./page/Contact"));
const PrivacyPolicy = lazy(() => import("./page/PrivacyPolicy"));
const TermsAndConditions = lazy(() => import("./page/TermsAndConditions"));
const NotFoundPage = lazy(() => import("./page/404Page"));
const MaintenancePage = lazy(() => import("./page/MaintenancePage")); // unused, but keep

const App = () => {
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  useEffect(() => {
    // Simulate loading time (1s)
    const timer = setTimeout(() => {
      // setLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  // // 🔹 Show Loader on first load
  // if (loading) {
  //   return <Loader />;
  // }

  return (
    <>
      <Navbar />
      <Toaster position="top-center" reverseOrder={false} />

      {/* Wrap routes in Suspense for lazy loading */}
      <Suspense fallback={<Loader />}>
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

          <Route
            path="/services-expertise"
            element={<ServicesAndExpertise />}
          />
          <Route path="/:slug" element={<ServiceDetail />} />

          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<PostDetail />} />

          <Route path="/contact-us" element={<Contact />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-condition" element={<TermsAndConditions />} />
          <Route path="/make-appointment" element={<MakeAppointment />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>

      {/* Static components */}
      <SocialMedia />
      <WhatsAppSticky />
      <FAQSection />
      <Footer />
    </>
  );
};

export default App;
