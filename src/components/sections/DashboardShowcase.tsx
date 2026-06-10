"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { 
  CheckCircle2, 
  LayoutDashboard, 
  Map, 
  ClipboardCheck 
} from "lucide-react";
import Image from "next/image";

const dashboardScreens = [
  {
    title: "Operations Command Center",
    shortTitle: "Overview Console",
    description: "Real-time command center showing overall guard activity, pending alerts, and critical security telemetry.",
    image: "/DASHBOARD-1.png",
    icon: LayoutDashboard,
    url: "dashboard.mandmsecurity.com/command-center",
  },
  {
    title: "Guard Patrol & Routing System",
    shortTitle: "Live Patrols",
    description: "Complete geo-tracking map showing live guard locations, checkpoint scans, and patrol routes.",
    image: "/DASHBOARD-2.png",
    icon: Map,
    url: "dashboard.mandmsecurity.com/patrolling",
  },
  {
    title: "Incident Reports & Log Management",
    shortTitle: "Incident Reports",
    description: "Detailed, automated digital incident logging with image capture, e-signatures, and shift schedules.",
    image: "/DASHBOARD-3.png",
    icon: ClipboardCheck,
    url: "dashboard.mandmsecurity.com/reports",
  },
];

export default function DashboardShowcase() {
  const [activeTab, setActiveTab] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTab((prev) => (prev + 1) % dashboardScreens.length);
    }, 2000);
    return () => clearInterval(timer);
  }, [activeTab]);

  return (
    <section id="dashboard" className="py-16 md:py-24 bg-foreground text-white overflow-hidden relative">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] md:w-[800px] h-[600px] md:h-[800px] bg-primary/20 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col xl:flex-row items-center gap-10 lg:gap-16">
          <div className="flex-1 w-full max-w-2xl">
            <SectionHeader
              eyebrow="Command Center"
              title={<>DASHBOARD (Web-Portal) <br /> <span className="text-gradient">Everything You Need In One Dashboard</span></>}
              description="Take complete control over your security operations. Our powerful web portal gives management real-time visibility and instant access to all essential reports."
              dark={true}
              align="left"
            />

            <motion.ul 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-3 sm:space-y-4 mb-8 md:mb-10"
            >
              {[
                "Guards / E- Profile",
                "Audit Patrolling Report",
                "Attendance Report",
                "Incident Reports with Image and Description",
                "Contract Details"
              ].map((item, i) => (
                <li key={i} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0">
                    <CheckCircle2 className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-slate-200 font-medium text-base sm:text-lg">{item}</span>
                </li>
              ))}
            </motion.ul>
          </div>

          <div className="flex-1 w-full flex flex-col gap-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative w-full rounded-2xl shadow-2xl overflow-hidden border border-white/10 ring-1 ring-black/10 z-20 bg-[#121625]"
            >
              {/* macOS Browser Title Bar & Dynamic URL */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between px-4 py-3 bg-[#0d101d] border-b border-white/5 gap-3">
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-1.5 flex-shrink-0">
                    <span className="w-3 h-3 rounded-full bg-[#ff5f57] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                    <span className="w-3 h-3 rounded-full bg-[#febc2e] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                    <span className="w-3 h-3 rounded-full bg-[#28c840] shadow-[inset_0_-1px_1px_rgba(0,0,0,0.2)]" />
                  </div>
                  <span className="text-xs text-slate-400 font-semibold hidden md:inline truncate max-w-[150px]">
                    {dashboardScreens[activeTab].title}
                  </span>
                </div>

                <div className="flex-1 max-w-md">
                  <div className="flex items-center gap-2 bg-[#080b14] rounded-md px-3 py-1 border border-white/5">
                    <svg className="w-3 h-3 text-emerald-400 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                    <span className="text-[11px] text-slate-400 font-mono truncate select-all">
                      {dashboardScreens[activeTab].url}
                    </span>
                  </div>
                </div>
              </div>

              {/* Tab Selector Inside Browser Frame (Premium UI design) */}
              <div className="flex bg-[#0a0d18] border-b border-white/5 overflow-x-auto scrollbar-none">
                {dashboardScreens.map((screen, idx) => {
                  const Icon = screen.icon;
                  const isActive = activeTab === idx;
                  return (
                    <button
                      key={idx}
                      onClick={() => setActiveTab(idx)}
                      className={`relative flex items-center gap-2 px-5 py-3 text-xs font-semibold tracking-wide border-r border-white/5 transition-all duration-300 outline-none flex-shrink-0 cursor-pointer ${
                        isActive ? "text-white bg-[#121625]" : "text-slate-400 hover:text-slate-200 bg-[#080b14]/50"
                      }`}
                    >
                      <Icon className={`w-3.5 h-3.5 ${isActive ? "text-blue-400" : "text-slate-500"}`} />
                      {screen.shortTitle}
                      {isActive && (
                        <motion.div
                          layoutId="activeTabUnderline"
                          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Main Image Display Area with smooth crossfade transitions */}
              <div className="relative w-full aspect-[16/10] bg-[#070913] overflow-hidden">
                {dashboardScreens.map((screen, idx) => {
                  const isActive = activeTab === idx;
                  return (
                    <motion.div
                      key={idx}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: isActive ? 1 : 0 }}
                      transition={{ duration: 0.6, ease: "easeInOut" }}
                      className="absolute inset-0 w-full h-full"
                      style={{ pointerEvents: isActive ? "auto" : "none" }}
                    >
                      <Image
                        src={screen.image}
                        alt={screen.title}
                        fill
                        unoptimized
                        className="object-contain"
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                      />
                    </motion.div>
                  );
                })}
                
                {/* Real-time reflection gloss */}
                <div 
                  className="absolute inset-0 pointer-events-none z-20"
                  style={{
                    background: "linear-gradient(135deg, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.01) 40%, transparent 60%)"
                  }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
