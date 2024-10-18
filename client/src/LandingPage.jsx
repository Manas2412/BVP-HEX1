import React from "react";

import Navbar from "./components/Navbar";

import { motion } from "framer-motion";
import "./landingPage.css";

const boxContents = [
  {
    emoji: "✔",
    heading: "Role-Based Access Control",
    content:
      "The system allows registration and management of different stakeholders.",
  },
  {
    emoji: "🔗",
    heading: "End-to-End Supply Chain Tracking",
    content:
      "Users can monitor and update the status of medicines at any stage in the supply chain.",
  },
  {
    emoji: "🔒",
    heading: "Blockchain-Powered Transparency",
    content:
      "By leveraging blockchain, transparency is ensured across all supply chain transactions.",
  },
];

export default function LandingPage() {
  return (
    <div style={{ fontFamily: "Geist", zIndex: "1" }}>
      <div
        style={{
          background: "radial-gradient(circle, black, #020c1b, black)",
          backgroundSize: "cover",
        }}
      >
        {/* /////////////////////////////////////////////////////////////////////////// */}

        <Navbar />

        {/* /////////////////////////////////////////////////////////////////////////// */}

        <section
          style={{
            padding: "145px 0 300px 0",
          }}
          className="text-white text-center py-20"
        >
          <div className="max-w-4xl mx-auto">
            <motion.h1
              id="heroHeading"
              variants={{
                start: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="start"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.5 }}
              className="text-4xl font-bold p-5 text-white"
              style={{
                fontSize: "70px",
                fontFamily: "Geist",
                fontWeight: "300",
              }}
            >
              PharmaLogiX
            </motion.h1>
            <motion.p
              variants={{
                start: { opacity: 0, y: 50 },
                animate: { opacity: 1, y: 0 },
              }}
              initial="start"
              animate="animate"
              transition={{ duration: 0.3, delay: 0.8 }}
              className="text-lg"
              style={{ fontSize: "25px", color: "rgb(255 255 255 / 70%)" }}
            >
              Our Drug Inventory and Supply Chain Tracking System leverages
              Blockchain tech to ensure transparency and security in supply
              chains, designed for the pharmaceutical industry.
            </motion.p>
          </div>
        </section>

        {/* /////////////////////////////////////////////////////////////////////////// */}

        <section className="py-12 text-gray-700">
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
            {boxContents.map((boxContent, index) => (
              <motion.div
                variants={{
                  start: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0 },
                }}
                initial="start"
                whileInView="animate"
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.4 * index }}
                className="feature-item text-center p-6 bg-white shadow-lg rounded-lg"
                key={index}
              >
                <div className="text-4xl text-gray-900 mb-4">
                  {boxContent.emoji}
                </div>
                <h3 className="text-xl font-bold mb-2">{boxContent.heading}</h3>
                <p className="text-gray-600">{boxContent.content}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* /////////////////////////////////////////////////////////////////////////// */}

        <section className="py-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">
              Blockchain-Powered Pharmaceutical Traceability
            </h2>
            <p className="text-lg text-gray-700 mb-8">
              Create a secure, transparent record of medicine journeys from
              suppliers to consumers. This system allows auditing of all
              transactions for traceability in the pharmaceutical supply chain.
            </p>
            <div className="w-full h-64 bg-gray-200 flex justify-center items-center rounded-lg">
              <span className="text-gray-500">Image Placeholder</span>
            </div>
          </div>
        </section>

        {/* /////////////////////////////////////////////////////////////////////////// */}

        <footer className="py-4 text-white text-center">
          <p>© 2022 Your Company. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
}
