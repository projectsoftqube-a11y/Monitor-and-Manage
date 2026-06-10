"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import Image from "next/image";
import { CheckCircle2, Shield, Activity, Globe } from "lucide-react";

export default function Testimonials() {
  return (
    <section className="py-16 md:py-24 bg-[#0a0f1d] text-white overflow-hidden relative">
      {/* Dynamic Background Glowing Orbs for immersive tech feel */}
      <div className="absolute top-1/4 left-1/3 w-[500px] h-[500px] bg-blue-500/10 blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-indigo-500/10 blur-[130px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-10 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full capitalize"
          >
            <SectionHeader
              eyebrow="Unified Management"
              title={
                <>
                  If you are not monitoring, <br className="hidden sm:block" />{" "}
                  <span className="text-gradient">you are not managing.</span>
                </>
              }
              dark={true}
              align="left"
            />
            <p className="text-base sm:text-lg text-slate-300 mb-5 md:mb-6 leading-relaxed font-medium mt-[-20px]">
              Stop Managing Security Blindly. Monitor Every Guard Activity in
              Real Time. Most security operations still rely on physical patrol
              devices, manual report downloads, and WhatsApp incident
              reporting.{" "}
            </p>
            <p className="text-base sm:text-lg text-slate-300 mb-5 md:mb-6 leading-relaxed font-medium">
              When incidents occur, management is held accountable—not the
              device, not the system, and not the guard. Without proper
              evidence, delayed reporting, or incomplete records, companies face
              client complaints, disputes, and reputational risks.{" "}
            </p>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-medium">
              The system also enhances your company&apos;s professional image
              with modern technology that impresses both clients and management.
              Whether you manage a small team of 10 guards or a large force of
              over 10,000, M&M App scales effortlessly to meet your needs,
              making security operations faster, smarter, and far more
              transparent.
            </p>
          </motion.div>

          {/* Premium Highly Informative Product Collage (Real Screenshots of Dashboard, Phone, and Reports) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            {/* Glowing background highlights */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 blur-3xl rounded-full pointer-events-none" />

            {/* Aspect ratio bounding box for perfect proportional responsive scaling */}
            <div className="relative w-full aspect-[4.3/3] max-w-[560px] lg:max-w-none flex items-center justify-center select-none">
              {/* Telemetry line tracings with smooth self-contained flow animation */}
              <svg
                className="absolute inset-0 w-full h-full pointer-events-none z-0 overflow-visible opacity-30"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <style>{`
                    @keyframes svg-telemetry-flow {
                      to {
                        stroke-dashoffset: -26;
                      }
                    }
                    .telemetry-flow-path {
                      stroke-dasharray: 6 8;
                      stroke-dashoffset: 26;
                      animation: svg-telemetry-flow 1.8s linear infinite;
                    }
                  `}</style>
                </defs>
                <path
                  d="M 330,210 C 330,160 260,160 220,130"
                  stroke="#3b82f6"
                  strokeWidth="2.5"
                  fill="none"
                  className="telemetry-flow-path"
                />
              </svg>

              {/* 1. M&M Live GPS Tracking Dashboard Web Console (Center Left) */}
              <div className="absolute w-[86%] left-[0%] top-[4%] z-10 shadow-[0_25px_60px_rgba(0,0,0,0.5)] rounded-2xl overflow-hidden bg-slate-900 border border-slate-700/50 flex flex-col">
                {/* Browser Chrome Header */}
                <div className="h-7 md:h-9 bg-slate-950 border-b border-slate-800/80 flex items-center px-3 gap-1.5 flex-shrink-0">
                  <div className="w-2 h-2 rounded-full bg-red-500/70" />
                  <div className="w-2 h-2 rounded-full bg-amber-500/70" />
                  <div className="w-2 h-2 rounded-full bg-green-500/70" />
                  <div className="mx-auto flex items-center gap-1.5 bg-slate-800 rounded px-2.5 py-0.5">
                    <div className="w-1.5 h-1.5 rounded-full bg-green-500/60" />
                    <span className="text-[8px] md:text-[9px] text-slate-400 font-mono leading-none">
                      dashboard.monitormanage.com.my
                    </span>
                  </div>
                </div>
                {/* Screen content wrapper (Using high-res desktop screenshot for horizontal layout) */}
                <div className="relative w-full aspect-[2799/1636] bg-slate-900">
                  <Image
                    src="/web-dashboard.png"
                    alt="M&M Web Patrolling Dashboard Screen"
                    fill
                    unoptimized
                    className="object-cover object-top pointer-events-none"
                    priority
                  />
                  {/* Physical glare reflection */}
                  <div className="absolute inset-0 pointer-events-none z-15 bg-gradient-to-tr from-white/5 to-transparent" />
                </div>
              </div>

              {/* 2. Guard Patrol Mobile App Mockup (Overlapping Right, Floating Bobbing) */}
              <motion.div className="absolute w-[30%] right-[0%] bottom-[-2%] z-20 select-none">
                {/* Ultra-premium smartphone physical bezel wrapper */}
                <div className="relative w-full aspect-[1094/2208] overflow-hidden">
                  {/* Dynamic Island notch at the top */}
                  <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-[35%] h-[4.5%] bg-slate-950 rounded-full z-30" />

                  {/* Real-time map patrolling mobile app screenshot */}
                  <div className="relative w-full h-full aspect-[1094/2208]">
                    <Image
                      src="/map-screen.png"
                      alt="M&M Guard GPS Map Patrol App"
                      fill
                      unoptimized
                      className="object-cover pointer-events-none"
                      priority
                    />
                  </div>
                </div>
              </motion.div>

              {/* 3. Generated Patrolling PDF Audit Report (Highly Realistic HTML Corporate Document Card) */}
              <motion.div className="absolute w-[44%] sm:w-[38%] left-[-4%] bottom-[-8%] z-25 bg-white border border-slate-200/90 p-2 sm:p-4 rounded-xl sm:rounded-2xl shadow-[0_20px_45px_rgba(0,0,0,0.35)] select-none text-slate-800 flex flex-col font-sans">
                {/* Document Header */}
                <div className="flex items-center justify-between border-b border-slate-100 pb-1.5 sm:pb-2 mb-1.5 sm:mb-2">
                  <div>
                    <p className="text-[7.5px] sm:text-[9px] md:text-[11px] font-black text-slate-900 tracking-tight uppercase">
                      Patrol Audit Report
                    </p>
                    <p className="text-[5.5px] sm:text-[7px] md:text-[8px] text-slate-500 font-bold">
                      M&M App Patrolling System
                    </p>
                  </div>
                  <div className="bg-emerald-500/10 text-emerald-700 text-[5px] sm:text-[6px] md:text-[7px] font-black tracking-wider uppercase py-0.5 px-1.5 sm:px-2 rounded border border-emerald-200">
                    PASSED AUDIT
                  </div>
                </div>

                {/* Report Metadata */}
                <div className="grid grid-cols-2 gap-x-1 gap-y-0.5 text-[5px] sm:text-[6px] md:text-[7.5px] font-bold text-slate-600 mb-2 pb-1.5 sm:pb-2 border-b border-slate-100">
                  <div>
                    <span className="text-slate-400 font-semibold">SITE:</span>{" "}
                    Zone A Center
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">DATE:</span>{" "}
                    Jun 01, 2026
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">GUARD:</span>{" "}
                    Ahmad R.
                  </div>
                  <div>
                    <span className="text-slate-400 font-semibold">
                      STATUS:
                    </span>{" "}
                    100% Completed
                  </div>
                </div>

                {/* Audit Checklist Items */}
                <div className="space-y-1 flex-1">
                  {[
                    {
                      checkpoint: "Checkpoint 1 - Main Gate",
                      time: "08:32 AM",
                      status: "VERIFIED",
                    },
                    {
                      checkpoint: "Checkpoint 2 - Perimeter North",
                      time: "08:45 AM",
                      status: "VERIFIED",
                    },
                    {
                      checkpoint: "Checkpoint 3 - Warehouse East",
                      time: "09:12 AM",
                      status: "VERIFIED",
                    },
                  ].map((item, idx) => (
                    <div
                      key={idx}
                      className="flex items-center justify-between text-[5.5px] sm:text-[6.5px] md:text-[8px] bg-slate-50 p-1 sm:p-1.5 rounded border border-slate-100"
                    >
                      <div className="flex items-center gap-1 min-w-0">
                        <CheckCircle2 className="w-2 h-2 sm:w-2.5 sm:h-2.5 text-emerald-500 flex-shrink-0" />
                        <span className="font-semibold text-slate-700 truncate">
                          {item.checkpoint}
                        </span>
                      </div>
                      <span className="text-slate-500 font-mono flex-shrink-0">
                        {item.time}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Stamp/Signature block */}
                <div className="mt-2 sm:mt-3 pt-1.5 sm:pt-2 border-t border-slate-100 flex items-center justify-between text-[5px] sm:text-[6px] md:text-[7px]">
                  <div className="text-slate-400 font-bold leading-tight">
                    SYSTEM SECURITY VERIFIED
                    <br />
                    <span className="text-slate-600 font-extrabold uppercase text-[5.5px] sm:text-[6.5px]">
                      M&M AUTO-AUDIT SECURE
                    </span>
                  </div>
                  {/* Glowing Pulse PDF Badge */}
                  <div className="bg-blue-600 text-white text-[5.5px] sm:text-[6.5px] md:text-[7.5px] font-black tracking-wider uppercase py-0.5 px-1 sm:px-2 rounded shadow shadow-blue-500/20 whitespace-nowrap animate-pulse">
                    PDF AUDIT READY
                  </div>
                </div>
              </motion.div>

              {/* 4. FLOATING WIDGET A: Live GPS Sync Tracker (Top-Left of browser window) */}
              <motion.div
                animate={{ y: [0, -4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5,
                  ease: "easeInOut",
                  delay: 0.3,
                }}
                className="absolute w-[46%] max-w-[210px] top-[-8%] left-[-10%] z-30 hidden sm:flex items-center gap-3 py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-[0_12px_28px_rgba(0,0,0,0.4)] select-none"
              >
                <div className="w-8 h-8 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 flex-shrink-0">
                  <Activity className="w-4 h-4 animate-pulse" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[10px] font-bold text-slate-100 leading-tight">
                    GPS Telemetry
                  </h5>
                  <p className="text-[9px] text-slate-400 flex items-center gap-1 font-bold mt-0.5 whitespace-nowrap">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
                    99.9% Sync Active
                  </p>
                </div>
              </motion.div>

              {/* 5. FLOATING WIDGET B: Incident & Control Pulse (Mid-Right, near phone) */}
              <motion.div
                animate={{ y: [0, 4, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 5.5,
                  ease: "easeInOut",
                  delay: 0.9,
                }}
                className="absolute w-[36%] max-w-[160px] top-[40%] right-[-5%] z-30 hidden sm:flex items-center gap-2.5 py-1.5 px-3 rounded-xl bg-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-[0_8px_18px_rgba(0,0,0,0.3)] select-none"
              >
                <div className="w-6 h-6 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 flex-shrink-0">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[9px] font-bold text-slate-100 leading-none">
                    Security Status
                  </h5>
                  <span className="text-[8px] text-blue-400 font-extrabold mt-0.5 block whitespace-nowrap">
                    Geofence Verified
                  </span>
                </div>
              </motion.div>

              {/* 6. FLOATING WIDGET C: Site Security Level Indicator (Top-Right, over phone) */}
              <motion.div
                animate={{ y: [0, -6, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 6.5,
                  ease: "easeInOut",
                  delay: 1.4,
                }}
                className="absolute w-[40%] max-w-[180px] top-[-12%] right-[-2%] z-30 hidden sm:flex items-center gap-3 py-2 px-3 sm:py-2.5 sm:px-4 rounded-2xl bg-slate-900/90 backdrop-blur-md border border-slate-700/50 shadow-[0_15px_30px_rgba(0,0,0,0.4)] select-none"
              >
                <div className="w-8 h-8 rounded-full bg-indigo-500/10 flex items-center justify-center text-indigo-400 flex-shrink-0">
                  <Globe className="w-4.5 h-4.5" />
                </div>
                <div className="min-w-0">
                  <h5 className="text-[10px] font-bold text-slate-100 leading-tight">
                    Multi-Site Operations
                  </h5>
                  <p className="text-[9px] text-indigo-400 font-extrabold mt-0.5 whitespace-nowrap">
                    24/7 Command Control
                  </p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
