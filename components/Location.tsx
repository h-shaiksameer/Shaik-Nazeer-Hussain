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

      {/* Address Section */}
      <motion.div
        whileHover={{ scale: 1.02 }}
        transition={{ duration: 0.5 }}
        className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg text-center max-w-md mx-auto"
      >
        <p className="text-lg font-semibold text-white">
          Hashamabad, Dastagir Nagar, Chandrayangutta, Hyderabad, Telangana  
        </p>
        <p className="text-xl font-bold text-yellow-400">Pincode: 500005</p>
      </motion.div>

      {/* Google Maps Iframe (Commented) */}
      {/* <motion.div whileHover={{ scale: 1.05 }} className="aspect-w-16 aspect-h-9">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.8664527379483!2d78.46779747493312!3d17.32199148355407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcbbd5de573d34d%3A0xa85b1db8282c2821!2sMASJID-E-ALI%20SHEKHA!5e0!3m2!1sen!2sin!4v1738820794106!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div> */}
    </motion.section>
  )
}
