"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { CheckCircle2 } from "lucide-react";
import { FaGooglePlay, FaApple } from "react-icons/fa";
import Image from "next/image";

/* ─── All App Screenshots ───────────────────────────────────────────── */
const ALL_SCREENSHOTS = [
  { src: "/home-screen.png", alt: "Guards Clock In / Clock Out", w: 1208, h: 2208 },
  { src: "/map-screen.png", alt: "Guards Live Location", w: 1208, h: 2208 },
  { src: "/guards-live-patrolling.png", alt: "Guards Live Patrolling", w: 1094, h: 2208 },
  { src: "/patrolling-report.png", alt: "Patrolling Report", w: 1094, h: 2208 },
  { src: "/incident-report.png", alt: "Incident Report", w: 1094, h: 2208 },
  { src: "/replacement-temporary-guard.png", alt: "Replacement / Temporary Guard", w: 1094, h: 2208 },
  { src: "/security-guard.png", alt: "Security Guard", w: 1094, h: 2208 },
  { src: "/notification-missed-clockin.png", alt: "Notification If Guard Failed To Clock In On Time", w: 1094, h: 2208 },
];

/* ─── Main Component ────────────────────────────────────────────────── */
export default function MobileAppShowcase() {
  const doubled = [...ALL_SCREENSHOTS, ...ALL_SCREENSHOTS];

  return (
    <section
      id="mobile-app"
      className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-[#f8faff] via-[#edf2ff] to-[#e0e6ff] text-slate-900"
    >
      {/* Ambient soft glow orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-52 left-1/4 h-[500px] w-[500px] rounded-full bg-blue-300/20 blur-[150px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/3 h-[450px] w-[450px] rounded-full bg-indigo-300/15 blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[300px] w-[700px] rounded-full bg-violet-200/10 blur-[180px]"
      />

      {/* ── Section Header ─────────────────────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] mb-10 md:mb-16">
        <SectionHeader
          eyebrow="On-The-Field App"
          title={
            <>
              Mobile App <br />
              <span className="text-gradient">
                Powerful Tools In Their Pocket.
              </span>
            </>
          }
          description="Equip your guards with a native mobile app designed for speed and reliability. From GPS tracking to instant SOS alerts, it has everything they need and nothing they don't."
          dark={false}
          align="center"
        />
      </div>

      {/* ── Single Infinite Scrolling Marquee ──────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="mb-12 md:mb-20"
      >
        <div className="app-marquee-track relative overflow-hidden w-full">
          {/* Fade edges matching the light gradient bg */}
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 sm:w-24 md:w-40 bg-gradient-to-r from-[#f0f4ff] to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 sm:w-24 md:w-40 bg-gradient-to-l from-[#e4eaff] to-transparent" />

          <div
            className="flex gap-4 sm:gap-5 md:gap-6 animate-app-marquee"
            style={{ width: "max-content" }}
          >
            {doubled.map((shot, i) => (
              <div
                key={`${shot.src}-${i}`}
                className="group relative flex-shrink-0 w-[150px] sm:w-[180px] md:w-[210px] lg:w-[230px] rounded-2xl sm:rounded-3xl overflow-hidden transition-transform duration-500 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-blue-500/10"
                style={{ aspectRatio: `${shot.w} / ${shot.h}` }}
              >
                {/* Glowing border on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl ring-1 ring-slate-200/60 group-hover:ring-blue-400/50 transition-all duration-500 z-10 pointer-events-none" />

                {/* Subtle inner glow on hover */}
                <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-t from-blue-500/8 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-[5] pointer-events-none" />

                <Image
                  src={shot.src}
                  alt={shot.alt}
                  fill
                  sizes="(max-width: 640px) 150px, (max-width: 768px) 180px, (max-width: 1024px) 210px, 230px"
                  className="object-cover w-full h-full"
                  loading="lazy"
                />

                {/* Label overlay on hover */}
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-900/80 via-slate-900/40 to-transparent p-3 sm:p-4 opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-500 z-20">
                  <p className="text-white text-[10px] sm:text-xs font-medium leading-snug line-clamp-2">
                    {shot.alt}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </motion.div>

      {/* ── Feature Chips + Download CTAs ───────────────────────────── */}
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-col items-center"
        >
          {/* Capability chips */}
          <div className="flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              "Live GPS & Route Monitoring",
              "Instant QR Code Checkpoint Scans",
              "Photo & Text Incident Uploads",
              "Geofenced Attendance Check-ins",
              "One-Tap Emergency SOS Button",
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.06 }}
                className="flex items-center gap-2 bg-white/60 border border-slate-200/60 backdrop-blur-sm rounded-full px-4 py-2 sm:px-5 sm:py-2.5 hover:bg-white/90 hover:border-blue-300/50 hover:shadow-md hover:shadow-blue-500/5 transition-all duration-400"
              >
                <CheckCircle2 className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-500 flex-shrink-0" />
                <span className="text-xs sm:text-sm text-slate-700 font-medium whitespace-nowrap">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
