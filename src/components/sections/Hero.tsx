"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play, CheckCircle2, Shield, Activity } from "lucide-react";
import Image from "next/image";

// Text animation variants
const lineVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.08, delayChildren: 0.15 },
  },
};

const wordVariants = {
  hidden: { opacity: 0, y: "0.5em", filter: "blur(8px)" },
  visible: {
    opacity: 1,
    y: "0em",
    filter: "blur(0px)",
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as const },
  },
};

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen lg:min-h-[800px] overflow-hidden flex flex-col bg-gradient-to-br from-[#f8fafc] via-[#f1f5f9] to-[#e4e8ff]"
    >
      {/* 1. Sleek High-Definition Sharp Security Operations Background Image in Widescreen Landscape */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-40 z-0">
        <Image
          src="/security_sharp_bg.png"
          alt="Security Operations Control Room Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* 2. Soft Gradient Overlays for Perfect Edge Blending */}
      {/* Vertical fade: blends with header and trust stats sections */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#f8fafc]/90 via-transparent to-[#e4e8ff] z-0" />
      {/* Horizontal fade: ensures left-hand text is perfectly readable while background stays visible */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#f8fafc]/95 via-[#f8fafc]/40 to-transparent z-0" />

      {/* 3. Glowing Ambient Mesh Light behind the mockups */}
      <div className="absolute right-[-10%] top-[20%] w-[450px] md:w-[700px] h-[450px] md:h-[600px] bg-blue-300/10 blur-[130px] rounded-full pointer-events-none z-0" />
      <div className="absolute right-[20%] bottom-[10%] w-[350px] md:w-[600px] h-[350px] md:h-[500px] bg-indigo-300/10 blur-[120px] rounded-full pointer-events-none z-0" />

      {/* 4. Fine Dot Grid Network for Tech Texture */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px] z-0" />

      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10 w-full flex-1 flex flex-col">
        <div className="flex flex-col lg:flex-row items-stretch justify-between gap-16 lg:gap-8 flex-1">
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-6/12 flex flex-col items-start text-left justify-center pt-32 lg:pt-36 pb-12 lg:pb-24"
          >
            <motion.span
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 font-semibold text-xs sm:text-sm mb-6 border border-blue-100/80 overflow-hidden"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{
                  repeat: Infinity,
                  duration: 2,
                  ease: "easeInOut",
                }}
                className="inline-block w-2 h-2 rounded-full bg-blue-500"
              />
              Next-Gen Security Operations
            </motion.span>

            <h1 className="text-4xl md:text-5xl 2xl:text-6xl font-bold font-heading leading-[1.1] mb-6 tracking-tight capitalize">
              <motion.span
                aria-hidden
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block text-slate-900"
              >
                {"Monitor Every Guard.".split(" ").map((word, i) => (
                  <motion.span
                    key={`l1-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] last:mr-0"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <motion.span
                aria-hidden
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block text-slate-900"
              >
                {"Manage Every Site.".split(" ").map((word, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] last:mr-0 leading-[120%]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <span className="sr-only">
                Monitor Every Guard. Manage Every Site.
              </span>
            </h1>

            {/* Animated accent underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
              className="mb-6 h-1 w-24 sm:w-32 origin-left rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600"
            />

            <p className="text-base sm:text-lg  text-slate-600/95 mb-2 max-w-xl leading-relaxed font-medium">
              Guard Monitor & Manage is a Malaysian-Developed Mobile-based Guard
              Patrolling and Monitoring System that replaces physical patrol
              devices and manual reporting processes.
            </p>
            <p className="text-base sm:text-lg  text-slate-600/95 mb-8 max-w-xl leading-relaxed font-medium">
              Every guard activity is recorded in real time and transformed into
              instant, document-ready reports with timestamp, location, and
              photo verification—making security operations smarter, faster, and
              more cost-effective.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const element = document.querySelector("#pricing");
                  if (element) {
                    // @ts-ignore
                    if (window.lenis) {
                      // @ts-ignore
                      window.lenis.scrollTo(element, {
                        offset: -80,
                        duration: 1.2,
                      });
                    } else {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="group w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-[0_4px_20px_rgba(37,99,235,0.25)] hover:shadow-[0_4px_35px_rgba(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="relative flex items-center gap-2">
                  Start Free Trial <ArrowRight className="w-5 h-5" />
                </span>
              </button>
              {/* <button 
                onClick={() => {
                  const element = document.querySelector("#contact");
                  if (element) {
                    // @ts-ignore
                    if (window.lenis) {
                      // @ts-ignore
                      window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
                    } else {
                      element.scrollIntoView({ behavior: "smooth" });
                    }
                  }
                }}
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-bold shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
              >
                <Play className="w-5 h-5 text-slate-500 fill-slate-500" /> Watch Demo
              </button> */}
            </div>
          </motion.div>

          {/* Right Column: Mobile App Showcase */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-6/12 relative z-10 select-none h-[50vh] lg:h-auto"
          >
            {/* Decorative glowing circle behind the phones */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-[70%] lg:w-[80%] aspect-square rounded-full bg-gradient-to-br from-blue-100/50 to-indigo-100/40 blur-3xl" />
            </div>

            {/* Mobile Screens — Main Hero Image */}
            <div className="absolute inset-0 w-full h-full flex items-center justify-center">
              <Image
                src="/horo-banner-mobile.png"
                alt="M&M Guard Monitoring Mobile Apps"
                fill
                unoptimized
                priority
                className="object-cover object-top drop-shadow-[0_20px_50px_rgba(15,23,42,0.15)]"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
