"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const verses = [
  {
    arabic: "وَمِنْ آيَاتِهِ أَنْ خَلَقَ لَكُم مِّنْ أَنفُسِكُمْ أَزْوَاجًا لِّتَسْكُنُوا إِلَيْهَا",
    translation: "And among His Signs is that He created for you wives from among yourselves",
    reference: "Ar-Rum 30:21",
  },
  {
    arabic: "هُنَّ لِبَاسٌ لَّكُمْ وَأَنتُمْ لِبَاسٌ لَّهُنَّ",
    translation: "They are clothing for you and you are clothing for them",
    reference: "Al-Baqarah 2:187",
  },
  {
    arabic: "رَبَّنَا هَبْ لَنَا مِنْ أَزْوَاجِنَا وَذُرِّيَّاتِنَا قُرَّةَ أَعْيُنٍ",
    translation: "Our Lord, grant us from among our wives and offspring comfort to our eyes",
    reference: "Al-Furqan 25:74",
  },
]

export default function QuranVerses() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % verses.length)
    }, 3000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative h-48 overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0 flex flex-col items-center justify-center text-center"
        >
          <p className="text-4xl md:text-5xl mb-4 font-arabic text-emerald-400">{verses[currentIndex].arabic}</p>
          <p className="text-lg md:text-xl text-gray-300 mb-2">{verses[currentIndex].translation}</p>
          <p className="text-sm text-gray-500">{verses[currentIndex].reference}</p>
        </motion.div>
      </AnimatePresence>
    </div>
  )
}
