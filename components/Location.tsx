"use client"

import { motion } from "framer-motion"

export default function Location() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Location</h2>
      <motion.div whileHover={{ scale: 1.05 }} className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0448736030307!2d78.4885!3d17.3615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb98f7f39b8b67%3A0x3a4b6a7c4b5b9b1f!2sChandrayangutta%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1625000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div>
    </motion.section>
  )
}

