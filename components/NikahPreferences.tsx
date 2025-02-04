"use client"

import { motion } from "framer-motion"

export default function NikahPreferences() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Nikah & Marriage Preferences</h2>
      <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        <p className="mb-4">Looking for a righteous and understanding partner from a respected Sunni Muslim family.</p>
        <h3 className="text-xl font-bold mb-2">Values</h3>
        <ul className="list-disc list-inside mb-4">
          <li>Faith</li>
          <li>Family</li>
          <li>Honesty</li>
          <li>Love for Islamic Traditions</li>
        </ul>
        <p className="mb-4">
          <strong>Preferred Location:</strong> Open to discussions based on mutual understanding.
        </p>
        <blockquote className="italic text-lg">
          "They are clothing for you, and you are clothing for them."
          <span className="block mt-2 text-sm">- Surah Al-Baqarah 2:187</span>
        </blockquote>
      </motion.div>
    </motion.section>
  )
}

