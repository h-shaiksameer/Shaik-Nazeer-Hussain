"use client"

import { useEffect } from "react"
import Hero from "../components/Hero"
import PersonalDetails from "../components/PersonalDetails"
import EducationOccupation from "../components/EducationOccupation"
import FamilyDetails from "../components/FamilyDetails"
import ContactDetails from "../components/ContactDetails"
import Location from "../components/Location"
import NikahPreferences from "../components/NikahPreferences"
import ExpressInterest from "../components/ExpressInterest"
import BackgroundMusic from "../components/BackgroundMusic"
import ParticleBackground from "../components/ParticleBackground"
import QuranVerses from "../components/QuranVerses"

export default function Home() {
  useEffect(() => {
    const cursor = document.createElement("div")
    cursor.className = "custom-cursor"
    document.body.appendChild(cursor)

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = `${e.clientX}px`
      cursor.style.top = `${e.clientY}px`
    }

    window.addEventListener("mousemove", moveCursor)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      document.body.removeChild(cursor)
    }
  }, [])

  return (
    <main className="min-h-screen bg-gradient-to-b from-gray-900 via-gray-800 to-gray-900 text-white">
      <ParticleBackground />
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/10 via-transparent to-emerald-500/10 pointer-events-none" />
        <div className="max-w-4xl mx-auto px-4 py-8 space-y-16">
          <Hero />
          <QuranVerses />
          <PersonalDetails />
          <EducationOccupation />
          <FamilyDetails />
          <ContactDetails />
          <Location />
          <NikahPreferences />
          <ExpressInterest />
        </div>
      </div>
      <BackgroundMusic />
    </main>
  )
}

