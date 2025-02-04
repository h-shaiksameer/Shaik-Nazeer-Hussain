"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import { useInView } from "react-intersection-observer"
import type React from "react"

export default function Hero() {
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const images = ["https://i.postimg.cc/mrSy8hgb/hussaini-baba-1.jpg"]

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="relative text-center flex flex-col items-center px-6"
    >
      {/* Arabic Header */}
      <motion.div
        initial={{ scale: 0.5 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1, type: "spring" }}
        className="mb-12"
      >
        <h1 className="text-4xl md:text-6xl font-arabic text-emerald-400 animate-glow">
          بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ
        </h1>
      </motion.div>

      {/* Full Image */}
      <div className="relative mb-12 w-full flex justify-center">
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-full max-w-xs mx-auto"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={currentImageIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="w-full h-full"
            >
              <Image
                src={images[currentImageIndex] || "/placeholder.svg"}
                alt="Shaik Nazeer Hussain"
                width={300} // Full width for image display
                height={400}
                priority
                // Adjust height to maintain aspect ratio
                className="rounded-full object-cover border-4 border-emerald-400"
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Name & Purpose */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-8 relative"
      >
        <SparkleEffect>
          <h2 className="text-4xl md:text-6xl font-bold mb-4 text-navy-900 neon-border shiny-text animate-typewriter">
            Shaik Nazeer Hussain
          </h2>
        </SparkleEffect>
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1 }}>
          <p className="text-xl text-gray-300">Seeking a righteous and loving life partner for a blessed Nikah</p>
        </motion.div>
      </motion.div>
    </motion.section>
  )
}

function SparkleEffect({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-amber-500/10 to-transparent animate-shine" />
      {children}
    </div>
  )
}
