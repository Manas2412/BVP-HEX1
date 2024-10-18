import React from "react";
import { Link } from "react-router-dom";
import Typography from "@mui/joy/Typography";

import { motion } from "framer-motion";

export default function Navbar() {
  return (
    <header className="flex justify-between items-center p-16 text-white">
      <motion.div
        variants={{
          start: { opacity: 0, x: -20 },
          animate: { opacity: 1, x: 0 },
        }}
        initial="start"
        animate="animate"
        transition={{ duration: 0.3, delay: 0.2 }}
        className="text-lg font-bold"
        style={{ fontSize: "30px" }}
      >
        PharmaLogiX
      </motion.div>
      <Link to={"/home"}>
        <motion.button
          variants={{
            start: { opacity: 0, x: 20 },
            animate: { opacity: 1, x: 0 },
          }}
          initial="start"
          animate="animate"
          transition={{ duration: 0.3, delay: 0.2 }}
          className="bg-white text-gray-900 px-4 py-2 rounded-full hover:bg-gray-200"
        >
          Start
        </motion.button>
      </Link>
    </header>
  );
}
