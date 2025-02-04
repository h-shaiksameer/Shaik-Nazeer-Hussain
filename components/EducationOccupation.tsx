"use client"

import { motion } from "framer-motion"

export default function EducationOccupation() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Education & Occupation</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Education</h3>
          <p>SSC (English Medium)</p>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Occupation</h3>
          <ul className="list-disc list-inside">
            <li>Heavy Vehicle Business</li>
            <li>Gas Welding</li>
            <li>Tipper Dealer</li>
          </ul>
        </motion.div>
      </div>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="mt-4 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center"
      >
        <h3 className="text-xl font-bold mb-2">Income</h3>
        <p className="text-2xl text-gold">₹40,000 - ₹45,000 per month</p>
      </motion.div>
    </motion.section>
  )
}

