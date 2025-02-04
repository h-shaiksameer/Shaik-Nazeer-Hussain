"use client"

import { motion } from "framer-motion"

export default function PersonalDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Personal Details</h2>
      <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg border border-gold"
      >
        <ul className="space-y-2">
          <li>
            <strong>Name:</strong> Shaik Nazeer Hussain
          </li>
          <li>
            <strong>Age:</strong> 29 Years
          </li>
          <li>
            <strong>Birthplace:</strong> Hyderabad
          </li>
          <li>
            <strong>Height:</strong> 5 feet 4 inch
          </li>
          <li>
            <strong>Complexion:</strong> Wheatish
          </li>
          <li>
            <strong>Madhab:</strong> Sunni Muslim
          </li>
        </ul>
      </motion.div>
    </motion.section>
  )
}

