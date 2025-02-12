"use client"

import { motion } from "framer-motion"
import Image from "next/image"

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
            <li>Tipper Dealer</li>
          </ul>
        </motion.div>
      </div>

      {/* Business Card Section */}
      <motion.div
        whileHover={{ scale: 1.1 }}
        className="mt-6 mx-auto w-full max-w-xs p-1 rounded-lg relative overflow-hidden"
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 opacity-50 animate-pulse rounded-lg"
        ></motion.div>
        <motion.div
          whileHover={{ scale: 1.15 }}
          transition={{ duration: 0.5 }}
          className="relative bg-black p-2 rounded-lg shadow-lg"
        >
          <Image
            src="/Business Card.jpeg"
            alt="Business Card"
            width={400}
            height={250}
            className="rounded-lg object-cover"
          />
        </motion.div>
      </motion.div>
    </motion.section>
  )
}
