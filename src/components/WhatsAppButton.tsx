"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { FaWhatsapp, FaTimes } from "react-icons/fa";

const AUTO_OPEN_DELAY_MS = 4000;
const AUTO_CLOSE_AFTER_MS = 8000;

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const whatsappNumber = "60109872885";
  const defaultMessage = encodeURIComponent(
    "Hello Monitor & Manage! I am visiting your website and would like to learn more about your AI-powered security operations platform."
  );
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${defaultMessage}`;

  useEffect(() => {
    const openTimer = setTimeout(() => setIsOpen(true), AUTO_OPEN_DELAY_MS);
    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!isOpen) return;
    const closeTimer = setTimeout(() => setIsOpen(false), AUTO_CLOSE_AFTER_MS);
    return () => clearTimeout(closeTimer);
  }, [isOpen]);

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative flex flex-col items-end">
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: 16, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.95 }}
              transition={{ type: "spring", stiffness: 300, damping: 25 }}
              className="mb-3 w-72 sm:w-80 rounded-2xl bg-white shadow-2xl ring-1 ring-black/5 overflow-hidden"
            >
              {/* Header */}
              <div className="flex items-center justify-between bg-[#25D366] px-4 py-3">
                <div className="flex items-center gap-2.5">
                  <div className="flex items-center justify-center w-9 h-9 rounded-full bg-white/20">
                    <FaWhatsapp className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-white leading-tight">Monitor &amp; Manage</p>
                    <p className="text-xs text-white/80 flex items-center gap-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-lime-300" />
                      Typically replies instantly
                    </p>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() => setIsOpen(false)}
                  aria-label="Close chat preview"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <FaTimes className="w-4 h-4" />
                </button>
              </div>

              {/* Fake conversation */}
              <div className="flex flex-col gap-2 px-3 py-4 bg-[#e5ddd5]/40">
                <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
                  Hi there! 👋
                </div>
                <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
                  Welcome to Monitor &amp; Manage — how can we help secure your operations today?
                </div>
                <div className="max-w-[85%] self-end rounded-lg rounded-tr-sm bg-[#dcf8c6] px-3 py-2 text-sm text-gray-800 shadow-sm">
                  Hi! I&apos;d like to learn more 🙂
                </div>
                <div className="max-w-[85%] rounded-lg rounded-tl-sm bg-white px-3 py-2 text-sm text-gray-800 shadow-sm">
                  Great — our team is online now. Tap below to chat with us directly!
                </div>
              </div>

              {/* CTA */}
              <div className="px-3 pb-3 pt-1 bg-[#e5ddd5]/40">
                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full rounded-full bg-[#25D366] hover:bg-[#20ba59] text-white text-sm font-semibold py-2.5 transition-colors"
                >
                  <FaWhatsapp className="w-4 h-4" />
                  Talk to us on WhatsApp
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

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

          {/* Main Floating Button — toggles preview / opens WhatsApp */}
          <motion.button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            aria-label={isOpen ? "Close chat preview" : "Chat on WhatsApp"}
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
          </motion.button>
        </div>
      </div>
    </div>
  );
}
