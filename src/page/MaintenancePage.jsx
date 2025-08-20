import React from "react";
import { motion } from "framer-motion";
import { Wrench, Clock } from "lucide-react";

const MaintenancePage = () => {
  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-gray-800 to-black text-white px-4">
      <motion.div
        className="text-center max-w-lg"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="flex justify-center mb-6">
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
            className="p-4 bg-gray-800 rounded-full shadow-lg"
          >
            <Wrench size={50} className="text-yellow-400" />
          </motion.div>
        </div>

        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          We’ll Be Back Soon!
        </h1>

        <p className="text-gray-300 mb-6">
          Our website is currently undergoing scheduled maintenance to improve
          your experience.
          <br />
          Thank you for your patience.
        </p>

        <div className="flex items-center justify-center gap-2 text-gray-400 text-sm">
          <Clock size={18} />
          <span>Estimated downtime: a few hours</span>
        </div>

        {/* <footer className="mt-8 text-gray-500 text-xs">
          &copy; {new Date().getFullYear()} AI Risezonic. All rights reserved.
        </footer> */}
      </motion.div>
    </div>
  );
};

export default MaintenancePage;
