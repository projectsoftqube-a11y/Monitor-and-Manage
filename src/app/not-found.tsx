"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";
import { ArrowLeft, Home, HelpCircle, Phone, ArrowRight, ShieldAlert, Tag, Check } from "lucide-react";
import RadarCanvas from "../components/RadarCanvas";

// Stagger animation variants for entrance
const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 90,
      damping: 15,
    },
  },
};

export default function NotFound() {
  return (
    <div className="relative min-h-screen flex items-center justify-center bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#e2e8f0] text-slate-900 overflow-hidden py-16 lg:py-24 px-6 md:px-12 z-10">
      
      {/* 1. INFINITE ANIMATION: Slowly drifting background mesh orbs (Pure CSS) */}
      <div className="absolute top-1/4 left-1/4 w-[400px] h-[400px] bg-blue-100/30 blur-[100px] rounded-full pointer-events-none z-0 animate-orb-1" />
      <div className="absolute bottom-1/4 right-1/4 w-[450px] h-[450px] bg-indigo-100/20 blur-[110px] rounded-full pointer-events-none z-0 animate-orb-2" />
      
      {/* 2. INFINITE ANIMATION: Command center pulse circles radiating slowly (Pure CSS) */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
        <div className="absolute w-[500px] h-[500px] rounded-full border border-blue-200/40 animate-radar" />
        <div className="absolute w-[500px] h-[500px] rounded-full border border-indigo-200/35 animate-radar-delayed" />
      </div>

      {/* Subtle fine tech dot grid network */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,rgba(0,0,0,0.12)_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      {/* Main Wide Layout Container (max-w-[1280px] to occupy screen width perfectly) */}
      <div className="relative z-10 w-full max-w-[1280px] mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center"
        >
          
          {/* Left Column: Heading, Text & Call-to-action (Grid span 5) */}
          <div className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            {/* Warning badge */}
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-200/60 border border-slate-300/40 text-slate-600 font-semibold text-xs mb-6 tracking-wide shadow-sm"
            >
              <ShieldAlert className="w-3.5 h-3.5 text-slate-500 animate-pulse" />
              Page Not Found
            </motion.div>

            {/* 404 Floating Header Wrapper with out-of-the-box Interactive Radar Canvas */}
            <div className="relative w-full flex flex-col items-center lg:items-start justify-center lg:justify-start py-8 sm:py-10 select-none z-10">
              
              {/* High-Performance HTML5 Radar Canvas Background */}
              <div className="absolute top-1/2 left-1/2 lg:left-[35%] -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] sm:w-[460px] sm:h-[460px] md:w-[500px] md:h-[500px] pointer-events-auto z-0 overflow-visible">
                <RadarCanvas />
              </div>

              {/* Floating "Drag Us!" tooltip indicator */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: [0.65, 1, 0.65], y: [0, -3, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="relative z-20 mb-4 px-3 py-1 text-[9px] font-black uppercase tracking-widest bg-blue-600 text-white rounded-full shadow-[0_0_12px_rgba(37,99,235,0.4)] border border-blue-400/30 flex items-center gap-1.5 cursor-default"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping" />
                Interactive: Drag & Throw Us!
              </motion.div>

              {/* Throwable Glassmorphic Card Numbers Row */}
              <div className="relative z-10 flex items-center justify-center gap-3.5 sm:gap-5 w-full max-w-lg lg:justify-start py-4">
                
                {/* Vertical Laser Scan Line sweeping across the cards container */}
                <div className="absolute inset-x-0 w-full h-[3px] bg-gradient-to-r from-transparent via-blue-400 to-transparent opacity-60 pointer-events-none z-20 animate-laser" />

                {["4", "0", "4"].map((char, index) => (
                  <motion.div
                    key={index}
                    drag
                    dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
                    dragElastic={0.5}
                    dragTransition={{ bounceStiffness: 300, bounceDamping: 18 }}
                    whileHover={{ 
                      scale: 1.08, 
                      rotate: index === 0 ? -3 : index === 2 ? 3 : 1,
                      boxShadow: "0 20px 40px rgba(37,99,235,0.12)"
                    }}
                    whileDrag={{ 
                      scale: 1.18, 
                      zIndex: 50, 
                      cursor: "grabbing",
                      boxShadow: "0 30px 60px rgba(15,23,42,0.18)"
                    }}
                    variants={itemVariants}
                    className="relative flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 bg-white/75 backdrop-blur-md border border-slate-200/80 rounded-2xl shadow-[0_12px_30px_rgba(15,23,42,0.04)] select-none cursor-grab active:cursor-grabbing font-black text-5xl sm:text-6xl md:text-7xl text-slate-950 animate-float"
                    style={{ 
                      animationDelay: `${index * 0.4}s`,
                      transformStyle: "preserve-3d"
                    }}
                  >
                    {/* Glowing coordinate grid line decoration inside each card */}
                    <div className="pointer-events-none absolute inset-1.5 border border-slate-100/50 rounded-xl [background-image:radial-gradient(circle,rgba(0,0,0,0.05)_1px,transparent_1px)] [background-size:12px_12px] opacity-40" />
                    
                    {/* Tech corners inside card */}
                    <div className="absolute top-2 left-2 w-2 h-2 border-t border-l border-slate-300" />
                    <div className="absolute bottom-2 right-2 w-2 h-2 border-b border-r border-slate-300" />
                    
                    <span className="relative drop-shadow-[0_4px_8px_rgba(0,0,0,0.05)] select-none animate-hologram">
                      {char}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.h2
              variants={itemVariants}
              className="text-2xl sm:text-3xl font-bold text-slate-900 mb-4 tracking-tight"
            >
              Oops! We can&apos;t find that page
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-slate-500 text-sm sm:text-base leading-relaxed mb-8 max-w-md"
            >
              The link might be broken, or the page may have been moved. Don&apos;t worry, we&apos;ll help you get back on track.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="w-full sm:w-auto"
            >
              <Link
                href="/"
                className="group inline-flex items-center justify-center gap-2.5 w-full sm:w-auto bg-slate-950 hover:bg-slate-900 text-white px-7 py-4 rounded-2xl font-bold shadow-[0_8px_20px_rgba(15,23,42,0.12)] hover:shadow-[0_12px_28px_rgba(15,23,42,0.22)] text-sm transition-all duration-300 hover:-translate-y-0.5 cursor-pointer border border-transparent"
              >
                <ArrowLeft className="w-4 h-4 transition-transform duration-200 group-hover:-translate-x-1" />
                Go Back Home
              </Link>
            </motion.div>
          </div>

          {/* Right Column: Premium Quick Links Interactive Panel (Grid span 7) */}
          <div className="lg:col-span-7">
            <motion.div
              variants={itemVariants}
              className="bg-white/95 border border-slate-200/80 rounded-3xl p-6 sm:p-8 md:p-10 shadow-[0_25px_60px_rgba(15,23,42,0.04)]"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-6">
                <div>
                  <h3 className="text-xs font-extrabold uppercase tracking-widest text-slate-400">
                    Quick Links
                  </h3>
                  <p className="text-[10px] text-slate-500 font-semibold mt-0.5">Where would you like to go?</p>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider">Online</span>
                </div>
              </div>

              {/* 2x2 Grid of premium navigation cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  {
                    href: "/",
                    title: "Homepage",
                    desc: "Go back to home",
                    icon: Home,
                    colorClass: "bg-blue-50 text-blue-600 border border-blue-100",
                    hoverColor: "group-hover:text-blue-600",
                    hoverBorder: "hover:border-blue-200/60"
                  },
                  {
                    href: "/#pricing",
                    title: "Pricing Plans",
                    desc: "View pricing & features",
                    icon: Tag,
                    colorClass: "bg-indigo-50 text-indigo-600 border border-indigo-100",
                    hoverColor: "group-hover:text-indigo-600",
                    hoverBorder: "hover:border-indigo-200/60"
                  },
                  {
                    href: "/#faq",
                    title: "Help Center / FAQ",
                    desc: "Common questions & answers",
                    icon: HelpCircle,
                    colorClass: "bg-emerald-50 text-emerald-600 border border-emerald-100",
                    hoverColor: "group-hover:text-emerald-600",
                    hoverBorder: "hover:border-emerald-200/60"
                  },
                  {
                    href: "/#contact",
                    title: "Support & Contact",
                    desc: "Get in touch with us",
                    icon: Phone,
                    colorClass: "bg-rose-50 text-rose-600 border border-rose-100",
                    hoverColor: "group-hover:text-rose-600",
                    hoverBorder: "hover:border-rose-200/60"
                  }
                ].map((card, idx) => {
                  const Icon = card.icon;
                  return (
                    <motion.div
                      key={idx}
                      whileHover={{ y: -6, scale: 1.025, x: 2, boxShadow: "0 15px 35px rgba(37,99,235,0.06)" }}
                      transition={{ type: "spring", stiffness: 400, damping: 25 }}
                      className={`relative flex items-center justify-between p-4 bg-slate-50 hover:bg-white border border-slate-100 ${card.hoverBorder} rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group cursor-pointer pointer-events-auto`}
                    >
                      <Link href={card.href} className="absolute inset-0 z-10" />
                      <div className="flex items-center gap-3.5">
                        <div className={`w-9 h-9 rounded-xl ${card.colorClass} flex items-center justify-center flex-shrink-0 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12`}>
                          <Icon className="w-4.5 h-4.5" />
                        </div>
                        <div>
                          <h4 className={`text-sm font-bold text-slate-800 leading-tight transition-colors ${card.hoverColor}`}>
                            {card.title}
                          </h4>
                          <p className="text-[10px] text-slate-400 mt-1">{card.desc}</p>
                        </div>
                      </div>
                      <ArrowRight className="w-4 h-4 text-slate-400 group-hover:translate-x-0.5 transition-transform duration-300" />
                    </motion.div>
                  );
                })}
              </div>

              {/* Troubleshooting panel at the bottom of the card */}
              <div className="mt-6 pt-5 border-t border-slate-100">
                <h4 className="text-[10px] font-extrabold uppercase tracking-widest text-slate-400 mb-3">
                  Quick Help
                </h4>
                <ul className="space-y-2 text-xs font-semibold text-slate-500">
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Check your internet connection and reload the page.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Double-check the web address for any spelling mistakes.</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                    <span>Click the WhatsApp icon on the bottom-left to chat with us.</span>
                  </li>
                </ul>
              </div>

            </motion.div>
          </div>

        </motion.div>
      </div>
    </div>
  );
}
