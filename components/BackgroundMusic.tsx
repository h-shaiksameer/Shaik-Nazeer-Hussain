"use client"

import { useState, useRef, useEffect } from "react"
import { motion } from "framer-motion"
import { Music, Pause } from "lucide-react"

export default function BackgroundMusic() {
  const [isPlaying, setIsPlaying] = useState(false)
  const audio = useRef<HTMLAudioElement | null>(null) // Explicitly type the ref as HTMLAudioElement
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) // Set isClient to true once the component mounts on the client side
  }, [])

  const toggleMusic = () => {
    if (isPlaying && audio.current) {
      audio.current.pause() // Pause if already playing
      audio.current.currentTime = 0; // Reset audio to the start
    } else if (audio.current) {
      audio.current.play() // Play the audio when clicked
    }
    setIsPlaying(!isPlaying)
  }

  if (!isClient) {
    return null // Avoid rendering the component during SSR
  }

  return (
    <motion.button
      onClick={toggleMusic}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-4 right-4 bg-gold text-blue-900 p-3 rounded-full shadow-lg"
    >
      {isPlaying ? <Pause size={24} /> : <Music size={24} />}
      <audio ref={audio} src="/click.wav" />
    </motion.button>
  )
}
