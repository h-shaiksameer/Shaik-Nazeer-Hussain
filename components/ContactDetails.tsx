"use client"

import { motion } from "framer-motion"
import { Phone, MessageCircle } from "lucide-react"

export default function ContactDetails() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="mb-16"
    >
      <h2 className="text-3xl font-bold mb-4 text-center">Contact Details</h2>
      <motion.div whileHover={{ scale: 1.05 }} className="bg-white bg-opacity-10 p-6 rounded-lg shadow-lg">
        <div className="mb-4">
          <h3 className="text-xl font-bold mb-2">Residential Address</h3>
          <p>Hashamabad, Dastagir Nagar, Chandrayangutta, Hyderabad</p>
          {/* <p>House Number: 18-13-6/88/8/20</p> */}
        </div>
        <div>
          <h3 className="text-xl font-bold mb-2">Contact Numbers</h3>
          <div className="flex flex-col space-y-2">
            <motion.a
              href="tel:7095443459"
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-full"
            >
              <Phone size={20} />
              <span>7095443459</span>
            </motion.a>
            <motion.a
              href="tel:9182689635"
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 bg-green-500 text-white py-2 px-4 rounded-full"
            >
              <Phone size={20} />
              <span>9182689635</span>
            </motion.a>
            <motion.a
              href="https://wa.me/917095443459"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1 }}
              className="flex items-center space-x-2 bg-green-600 text-white py-2 px-4 rounded-full"
            >
              <MessageCircle size={20} />
              <span>WhatsApp Chat</span>
            </motion.a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  )
}

