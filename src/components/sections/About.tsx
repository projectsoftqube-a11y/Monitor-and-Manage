"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import Image from "next/image";

export default function About() {
  const scrollToFeatures = () => {
    const element = document.querySelector("#features");
    if (element) {
      // @ts-ignore
      if (window.lenis) {
        // @ts-ignore
        window.lenis.scrollTo(element, { offset: -80, duration: 1.2 });
      } else {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <section id="about" className="py-16 md:py-24 bg-secondary/30 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
        <div className="flex flex-col xl:flex-row items-center gap-10 lg:gap-16">

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 w-full"
          >
            <SectionHeader
              eyebrow="The Solution"
              title={<>Complete Visibility, <br /> <span className="text-gradient">Accountability & Control.</span></>}
              align="left"
            />
            
            <p className="text-base sm:text-lg text-slate-700 font-semibold mb-6 mt-[-15px]">
              Guard Monitor & Manage provides complete visibility, accountability, and operational control through:
            </p>

            {/* Premium feature grid with check icons and micro-animations */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { title: "Real-Time Guard Monitoring", desc: "Track guard movements and status in real-time." },
                { title: "Verified Patrol Proof", desc: "Patrol scans with precise timestamp, GPS, and photo verification." },
                { title: "Instant Incident Reporting", desc: "Log and report incidents directly from the field with media." },
                { title: "Automated Report Generation", desc: "Convert patrol logs into instantly downloadable PDF documents." },
                { title: "Reduced Operations Cost", desc: "Go device-free and eliminate expensive hardware maintenance." },
                { title: "Built-In SOS Logging", desc: "Emergency alerts automatically logged with real-time sync." }
              ].map((item, idx) => (
                <motion.div 
                  key={idx}
                  whileHover={{ x: 4 }}
                  transition={{ duration: 0.2 }}
                  className="flex items-start gap-3 p-3 rounded-xl bg-white border border-slate-100 shadow-sm hover:shadow-md transition-all"
                >
                  <div className="w-5 h-5 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-600 flex-shrink-0 mt-0.5">
                    <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-base font-bold text-slate-800 leading-tight">{item.title}</h4>
                    <p className="text-sm text-slate-500 mt-1 leading-snug">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Premium result callout box */}
            <div className="p-4 sm:p-5 rounded-2xl bg-gradient-to-r from-blue-50/70 to-indigo-50/50 border border-blue-100/70 mb-8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500 text-white flex items-center justify-center flex-shrink-0 shadow-[0_4px_12px_rgba(59,130,246,0.2)]">
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <p className="text-sm sm:text-base font-medium text-slate-700 leading-relaxed">
                <strong className="text-slate-900 block mb-1">The Result:</strong>
                Greater transparency, improved service quality, stronger client confidence, and better protection for security companies during disputes, investigations, and service-related claims.
              </p>
            </div>

            <div>
              <button
                onClick={scrollToFeatures}
                className="w-full sm:w-auto bg-foreground hover:bg-slate-800 text-white px-7 py-3.5 rounded-xl font-bold shadow-lg transition-all hover:-translate-y-0.5 cursor-pointer"
              >
                Learn More About Features
              </button>
            </div>
          </motion.div>

          {/* Code-built System Architecture Visualization */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative w-full"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-accent/10 rounded-full blur-3xl" />
            <div className="relative w-full bg-white rounded-2xl md:rounded-[2rem] overflow-hidden shadow-2xl border border-border p-5 sm:p-6 md:p-8">
              
              {/* Logo + Title */}
              <div className="flex items-center gap-3 mb-6 md:mb-8">
                <div className="relative w-10 h-10 md:w-12 md:h-12">
                  <Image src="/logo.svg" alt="M&M Logo" fill className="object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-foreground text-sm md:text-base">M&M App Ecosystem</h3>
                  <p className="text-xs text-muted-foreground">All-in-one Guard Management</p>
                </div>
              </div>

              {/* Real product — web portal + mobile app */}
              <div className="relative pb-6 pl-6">
                {/* Web portal */}
                <div className="rounded-xl overflow-hidden border border-border shadow-md">
                  <Image
                    src="/web-dashboard.png"
                    alt="M&M web management portal — guard list"
                    width={700}
                    height={409}
                    className="w-full h-auto"
                    style={{ imageRendering: "-webkit-optimize-contrast" }}
                  />
                </div>
                {/* Floating mobile app */}
                <div className="absolute bottom-0 left-0 w-[26%] max-w-[110px] rounded-[1.1rem] overflow-hidden shadow-2xl border-2 border-white">
                  <Image
                    src="/home-screen.png"
                    alt="M&M guard mobile app — patrolling schedule"
                    width={1208}
                    height={2328}
                    className="w-full h-auto"
                  />
                </div>
              </div>

              {/* Footer stats */}
              <div className="mt-5 md:mt-6 pt-4 border-t border-border flex justify-between text-center gap-2">
                {[
                  { val: "Always On", label: "99.9% Reliable" },
                  { val: "Instant", label: "Live Updates" },
                  { val: "AWS ICloud", label: "Bank-Grade Security" },
                ].map((s, i) => (
                  <div key={i} className="flex-1 px-1">
                    <p className="text-sm md:text-base font-bold text-foreground">{s.val}</p>
                    <p className="text-[10px] md:text-xs text-muted-foreground mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
