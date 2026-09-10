"use client";

import { motion } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const whatsappNumber = "60109872885";
  const defaultMessage = encodeURIComponent(
    "Hello Monitor & Manage! I am visiting your website and would like to learn more about your AI-powered security operations platform."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Ambient Background Glow — large, soft, breathing */}
        <motion.div
          className="absolute inset-0 rounded-full bg-[#25D366] blur-2xl pointer-events-none"
          style={{ transform: "scale(2.2)" }}
          animate={{ opacity: [0.2, 0.45, 0.2] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Pulsing Backlight Glows */}
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-40 blur-md animate-ping pointer-events-none" style={{ animationDuration: "2.5s" }} />
        <div className="absolute inset-0 rounded-full bg-[#25D366] opacity-25 blur-lg pointer-events-none" />

        {/* Main Floating Button — directly opens WhatsApp */}
        <motion.a
          href={whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="relative flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white shadow-xl shadow-green-500/20 transition-all hover:scale-105 active:scale-95 focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#25D366]/50 focus-visible:ring-offset-2 focus-visible:ring-offset-white"
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            type: "spring",
            stiffness: 260,
            damping: 20,
            delay: 0.5,
          }}
          whileHover={{
            y: -2,
            boxShadow: "0 20px 25px -5px rgba(34, 197, 94, 0.4), 0 8px 10px -6px rgba(34, 197, 94, 0.4)",
          }}
        >
          <FaWhatsapp className="w-8 h-8 sm:w-9 sm:h-9" />
        </motion.a>
      </div>
    </div>
  );
}
