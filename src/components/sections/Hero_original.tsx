"use client";

import { motion } from "framer-motion";
import { ArrowRight, Play } from "lucide-react";
import Image from "next/image";

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
    <section id="home" className="relative min-h-screen pt-28 sm:pt-36 lg:pt-40 pb-16 md:pb-20 overflow-hidden flex items-center bg-gradient-to-br from-[#f3f6ff] to-[#e4e8ff]">
      
      {/* Background Image asset related to website */}
      <div className="absolute inset-0 pointer-events-none select-none opacity-[0.12]">
        <Image
          src="/security_hero_bg.png"
          alt="Security Operations Control Room Background"
          fill
          priority
          className="object-cover object-center"
        />
      </div>

      {/* Background glow effects */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[600px] h-[300px] md:h-[500px] bg-blue-400/10 blur-[100px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[250px] md:w-[500px] h-[250px] md:h-[400px] bg-indigo-400/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-8">
          
          {/* Left Column: Text & CTAs */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full lg:w-6/12 flex flex-col items-start text-left"
          >
            <motion.span
              initial={{ opacity: 0, y: -10, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-blue-50/80 backdrop-blur-sm text-blue-700 font-semibold text-xs sm:text-sm mb-6 border border-blue-100/80 overflow-hidden"
            >
              <motion.span
                animate={{ scale: [1, 1.4, 1], opacity: [1, 0.4, 1] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
                className="inline-block w-2 h-2 rounded-full bg-blue-500"
              />
              Next-Gen Security Operations
            </motion.span>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7.5xl font-bold font-heading leading-[1.1] mb-6 tracking-tight">
              <motion.span
                aria-hidden
                variants={lineVariants}
                initial="hidden"
                animate="visible"
                className="block text-slate-900"
              >
                {"If you are not monitoring,".split(" ").map((word, i) => (
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
                {"you are not managing.".split(" ").map((word, i) => (
                  <motion.span
                    key={`l2-${i}`}
                    variants={wordVariants}
                    className="inline-block mr-[0.2em] last:mr-0 leading-[120%]"
                  >
                    {word}
                  </motion.span>
                ))}
              </motion.span>
              <span className="sr-only">Monitor Every Guard. Manage Every Site.</span>
            </h1>

            {/* Animated accent underline */}
            <motion.div
              initial={{ scaleX: 0, opacity: 0 }}
              animate={{ scaleX: 1, opacity: 1 }}
              transition={{ duration: 0.9, delay: 1, ease: "easeOut" }}
              className="mb-6 h-1 w-24 sm:w-32 origin-left rounded-full bg-gradient-to-r from-blue-400 via-indigo-500 to-indigo-600"
            />
            
            <p className="text-base sm:text-lg md:text-xl text-slate-600/95 mb-8 max-w-xl leading-relaxed font-medium">
              M&M App is a mobile-based guard patrolling & monitoring system that replaces physical patrol devices and manual processes. Every guard activity is recorded in real time and turned into instant, document-ready reports &mdash; making security operations smarter, faster, and more cost-effective.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-start gap-4 w-full sm:w-auto">
              <button
                onClick={() => {
                  const element = document.querySelector("#pricing");
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
                className="group w-full sm:w-auto relative overflow-hidden bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium shadow-[0_4px_20px_rgba(37,99,235,0.25)] transition-all hover:shadow-[0_4px_35px_rgba(37,99,235,0.4)] hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
              >
                <span className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/15 to-transparent" />
                <span className="relative flex items-center gap-2">Start Free Trial <ArrowRight className="w-5 h-5" /></span>
              </button>
              <button 
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
                className="w-full sm:w-auto bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 hover:border-slate-300 px-6 sm:px-8 py-3.5 sm:py-4 rounded-full font-medium shadow-sm transition-all hover:-translate-y-1 flex items-center justify-center gap-2 text-base sm:text-lg cursor-pointer"
              >
                <Play className="w-5 h-5 text-slate-500 fill-slate-500" /> Watch Demo
              </button>
            </div>
          </motion.div>

          {/* Right Column: Premium High-Fi Graphics Showcase with Laptop & Phone Mockups */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="w-full lg:w-6/12 flex justify-center items-center relative py-8 px-2 md:px-4"
          >
            <div className="relative w-full max-w-[480px] sm:max-w-[520px] lg:max-w-none">
              
              {/* Laptop Screen Mockup */}
              <div className="relative w-full aspect-[700/409] rounded-t-2xl border-t-[8px] border-x-[8px] border-b-[14px] md:border-t-[10px] md:border-x-[10px] md:border-b-[18px] border-slate-900 bg-slate-950 shadow-2xl overflow-hidden z-10">
                <div className="absolute inset-0 bg-white">
                  <Image
                    src="/web-dashboard.png"
                    alt="M&M Web Dashboard Setup"
                    fill
                    className="object-cover object-top"
                    quality={100}
                    priority
                  />
                </div>
              </div>
              
              {/* Laptop Keyboard/Base Mockup with Realistic 3D Perspective */}
              <div className="relative w-[110%] -ml-[5%] h-3.5 md:h-4.5 bg-gradient-to-b from-slate-700 via-slate-800 to-slate-900 rounded-b-2xl shadow-xl z-10 origin-top [transform:perspective(800px)_rotateX(20deg)]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-16 md:w-24 h-1 bg-slate-950/40 rounded-b-md" />
              </div>
              
              {/* Phone Mockup (overlapping right side of laptop) - Rendered directly since it has pre-rendered bezel */}
              <motion.div
                whileHover={{ y: -8, scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="absolute -right-4 sm:-right-8 md:-right-10 -bottom-6 sm:-bottom-8 md:-bottom-10 w-[120px] sm:w-[155px] md:w-[185px] z-20"
              >
                <Image
                  src="/home-screen.png"
                  alt="M&M Guard App Home Screen"
                  width={1208}
                  height={2328}
                  className="w-full h-auto drop-shadow-[0_25px_50px_rgba(0,0,0,0.35)]"
                  priority
                />
              </motion.div>

            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
