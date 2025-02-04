"use client"

import { motion } from "framer-motion"
import { Phone } from "lucide-react"
import { useEffect, useState } from "react"

export default function ExpressInterest() {
  const [isHovered, setIsHovered] = useState(false)

  useEffect(() => {
    const audio = new Audio("click.mp3") // Add a subtle click sound
    audio.preload = "auto"
    return () => audio.remove()
  }, [])

  const handleClick = () => {
    window.location.href = "tel:+917095443459"
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16 text-center relative"
    >
      <h2 className="text-3xl font-bold mb-8">Express Interest</h2>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(10)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/30 rounded-full"
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              scale: [1, 0],
              opacity: [1, 0],
            }}
            transition={{
              duration: 2,
              repeat: Number.POSITIVE_INFINITY,
              delay: i * 0.2,
            }}
          />
        ))}
      </div>

      <motion.button
        onClick={handleClick}
        onHoverStart={() => setIsHovered(true)}
        onHoverEnd={() => setIsHovered(false)}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="relative inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-amber-500 to-amber-600 rounded-full text-xl font-bold text-white shadow-lg"
      >
        {/* Ripple effect */}
        {isHovered && (
          <motion.div
            layoutId="ripple"
            className="absolute inset-0 rounded-full bg-white/20"
            animate={{
              scale: [1, 2],
              opacity: [0.5, 0],
            }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
            }}
          />
        )}

        <Phone className="w-6 h-6" />
        <span>Express Interest</span>
      </motion.button>
    </motion.section>
  )
}

