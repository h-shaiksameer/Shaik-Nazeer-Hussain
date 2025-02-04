"use client"

import { motion } from "framer-motion"

export default function FamilyDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Family Details</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Parents</h3>
          <ul>
            <li>
              <strong>Father:</strong> Late Shaik Maqbool Hussain
            </li>
            <li>
              <strong>Mother:</strong> Late Ameena Begum
            </li>
          </ul>
        </motion.div>
        <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-bold mb-2">Sisters (All Married)</h3>
          <ul>
            <li>Elder Sister</li>
            <li>Second Sister</li>
            <li>Youngest Sister</li>
          </ul>
        </motion.div>
      </div>
      <motion.div whileHover={{ scale: 1.05 }} className="mt-4 bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold mb-2">Brothers</h3>
        <ul>
          <li>
            <strong>Shaik Ibrahim Hussain</strong> – Salesman
          </li>
          <li>
            <strong>Shaik Qadeer Hussain</strong> – Supervisor in HMR Group
          </li>
        </ul>
      </motion.div>
    </motion.section>
  )
}

