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
      {/* Education & Occupation Section */}
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
      <div className="mt-12 flex flex-col items-center">
        {/* Title */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-4xl md:text-6xl font-extrabold text-white mb-6 uppercase"
        >
          Khans Motors
        </motion.h2>

        {/* Business Card Image */}
        <motion.div
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.5 }}
          className="relative w-full max-w-screen-xl h-[75vh] flex justify-center items-center overflow-hidden shadow-2xl border-4 border-yellow-500 rounded-lg bg-black"
        >
          <Image
            src="/Business Card.jpeg"
            alt="Business Card"
            layout="intrinsic"
            width={1200}
            height={600}
            className="rounded-lg"
          />
        </motion.div>
      </div>
    </motion.section>
  )
}
