"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import {
  Check,
  Sparkles,
  ShieldCheck,
  Zap,
  Info,
  Settings,
  GraduationCap,
  Headset,
  Calendar,
  CalendarDays,
  Crown,
  Gift,
  PhoneCall,
} from "lucide-react";
import Image from "next/image";

interface Plan {
  id: string;
  name: string;
  badge: string;
  description: string;
  basePrice: number;
  features: string[];
  highlighted?: boolean;
}

const PLANS: Plan[] = [
  {
    id: "gate-guard",
    name: "Gate Guard",
    badge: "Top Choice",
    description:
      "Essential attendance, incident, and location logging for gate/static guard points.",
    basePrice: 30,
    features: [
      "Audited Attendance Report",
      "Audited Incident Report",
      "Live Location Tracking",
      "Request for Advance",
      "Request for Leave",
      "SOS Panic Button & Alerting",
    ],
  },
  {
    id: "patrolling-guard",
    name: "Patrolling Guard",
    badge: "Most Popular",
    description:
      "Comprehensive active patrolling tracking. Choose between software-only or hardware inclusion.",
    basePrice: 80,
    features: [
      "Includes all Gate Guard features",
      "Audited Patrolling Report",
      "QR Patrol Checkpoint Scanning",
      "Geofenced Route Verification",
    ],
    highlighted: true,
  },
];

export default function Pricing() {
  const [packageTier] = useState<"3" | "6" | "12">("3");
  const [patrolWithDevice, setPatrolWithDevice] = useState<boolean>(false);

  // Discount calculation
  const getDiscountMultiplier = () => {
    if (packageTier === "6") return 0.95; // 5% discount
    if (packageTier === "12") return 0.9; // 10% discount
    return 1.0;
  };

  const getMonthlyPrice = (plan: Plan) => {
    let price = plan.basePrice;
    if (plan.id === "patrolling-guard") {
      price = patrolWithDevice ? 150 : 80;
    }
    return price * getDiscountMultiplier();
  };

  const getTotalPriceForTier = (plan: Plan) => {
    const monthlyPrice = getMonthlyPrice(plan);
    const months = parseInt(packageTier, 10);
    return monthlyPrice * months;
  };

  const scrollToContact = (e: React.MouseEvent) => {
    e.preventDefault();
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
  };

  return (
    <section
      id="pricing"
      className="py-24 bg-gradient-to-b from-[#f8fafc] via-[#f1f5f9] to-[#f8fafc] relative overflow-hidden border-y border-slate-200/60"
    >
      {/* Decorative ambient background visual nodes */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-100/30 blur-[120px] rounded-full pointer-events-none" />

      {/* Fine Dot grid pattern overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:28px_28px] z-0" />

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        <div className="flex flex-col xl:flex-row gap-10 md:gap-16 xl:gap-20 items-center xl:items-stretch">
          {/* ── Left Column: Header & Billing Toggle ── */}
          <div className="w-full xl:w-5/12 pt-8 flex flex-col">
            {/* Custom Header specifically for Pricing Page */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-50px" }}
              variants={{
                hidden: {},
                visible: {
                  transition: { staggerChildren: 0.1 },
                },
              }}
              className="w-full mb-10 flex flex-col items-center xl:items-start text-center xl:text-left"
            >
              {/* Eyebrow Badge */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 sm:mb-5 border border-blue-500/15 bg-blue-500/5 text-blue-600 shadow-[0_4px_20px_rgba(37,99,235,0.04)]"
              >
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-blue-500" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500 shadow-[0_0_8px_#3b82f6]" />
                </span>
                Pricing Plans
              </motion.div>

              {/* Heading */}
              <motion.h2
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-[1.15] text-slate-900 mb-4 md:mb-5"
              >
                One System. Everything Runs Automatically.
              </motion.h2>

              {/* Description */}
              <motion.div
                variants={{
                  hidden: { opacity: 0, y: 15 },
                  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
                }}
                className="text-base sm:text-lg leading-relaxed font-medium text-slate-600/90 max-w-2xl"
              >
                <span className="flex flex-col xl:items-start items-center justify-center gap-4 mt-2">
                  <span className="block text-center xl:text-left text-slate-600 text-lg max-w-md">
                    Build the perfect package for your agency with flexible
                    billing and a customizable team.
                  </span>
                </span>
              </motion.div>
            </motion.div>

            {/* Free Included Perks */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-2xl p-6 border border-emerald-100 shadow-[0_4px_20px_rgba(16,185,129,0.05)] relative overflow-hidden mx-auto xl:mx-0 flex-1 flex flex-col"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[50px] rounded-full pointer-events-none" />
              <h4 className="text-xl font-black text-emerald-600 mb-5 uppercase tracking-widest relative z-10 flex items-center gap-2">
                <Gift className="w-6 h-6" strokeWidth={2.5} />
                Always Included For Free
              </h4>
              <div className="grid grid-cols-1 gap-y-4 gap-x-6 relative z-10">
                {[
                  "No Setup Fees",
                  "Free Training for Guards & Admins",
                  "Free Consultation & Onboarding",
                  "No Hidden Charges",
                  "Free System Updates & Support",
                ].map((perk, i) => (
                  <div key={i} className="flex items-start gap-3">
                    <div className="mt-0.5 w-5 h-5 rounded-full border-2 border-emerald-400 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-emerald-600" strokeWidth={4} />
                    </div>
                    <span className="text-[15px] font-bold text-slate-800 leading-snug">
                      {perk}
                    </span>
                  </div>
                ))}
              </div>

              {/* Trust Badge filling empty space */}
              <div className="mt-auto pt-10 relative z-10">
                <div className="bg-gradient-to-br from-emerald-50 to-teal-50/30 rounded-[1.25rem] p-5 border border-emerald-100/60 shadow-[0_2px_10px_rgba(16,185,129,0.03)] flex flex-col sm:flex-row items-start sm:items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center flex-shrink-0 shadow-sm border border-emerald-100">
                    <ShieldCheck className="w-6 h-6 text-emerald-500" strokeWidth={2} />
                  </div>
                  <div>
                    <h5 className="text-[15px] font-black text-slate-800 mb-0.5 tracking-wide">Our 100% Guarantee</h5>
                    <p className="text-[13px] font-medium text-slate-600 leading-relaxed">
                      We're committed to providing the best platform. No hidden fees, just reliable software that works.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          {/* ── Right Column: Pricing Cards Grid ── */}
          <div className="w-full xl:w-7/12 relative">
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-blue-500/[0.04] to-indigo-500/[0.04] blur-[100px] rounded-full pointer-events-none select-none z-0" />

            {/* Billing Plans — Compact Light Banner */}
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="mb-8 w-full relative z-10"
            >
              <h4 className="text-sm font-black mb-4 uppercase tracking-widest flex items-center justify-center xl:justify-start gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2.5}
                    d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                  />
                </svg>
                Package Plan
              </h4>
              <div className="relative bg-white rounded-2xl border border-slate-200/70 shadow-[0_4px_24px_rgba(0,0,0,0.04)] overflow-hidden">
                <div className="grid grid-cols-3 divide-x divide-slate-100">
                  {/* ── Quarterly ── */}
                  <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-2">
                    <Calendar className="w-6 h-6 text-slate-400 mb-1" />
                    <span className="text-xs lg:text-sm xl:text-lg font-extrabold text-slate-800">
                      Quarterly
                    </span>
                    <span className="text-[12px] lg:text-[14px] xl:text-[16px] font-bold text-slate-800 uppercase tracking-widest">
                      3 Months
                    </span>
                  </div>

                  {/* ── Half-Yearly ── */}
                  <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-2 bg-emerald-50/40">
                    <CalendarDays className="w-6 h-6 text-emerald-500 mb-1" />
                    <span className="text-xs lg:text-sm xl:text-lg font-extrabold text-slate-800">
                      Half-Yearly
                    </span>
                    <span className="text-[10px] lg:text-[12px] xl:text-[16px] font-bold text-emerald-600 uppercase tracking-widest">
                      6 Months
                    </span>
                    <span className="text-sm sm:text-base xl:text-[18px] font-black bg-gradient-to-r from-emerald-600 to-teal-500 bg-clip-text text-transparent leading-none">
                      SAVE 5%
                    </span>
                  </div>

                  {/* ── Annual ── */}
                  <div className="flex flex-col items-center justify-center gap-1.5 py-5 px-2 bg-blue-50/40">
                    <Crown className="w-6 h-6 text-blue-500 mb-1" />
                    <span className="text-xs lg:text-sm xl:text-lg font-extrabold text-slate-800">
                      Annual
                    </span>
                    <span className="text-[10px] lg:text-[12px] xl:text-[16px] font-bold text-blue-600/70 uppercase tracking-widest">
                      12 Months
                    </span>
                    <span className="text-sm sm:text-base xl:text-[18px] font-black bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-none">
                      SAVE 10%
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 items-stretch w-full relative z-10">
              {PLANS.map((plan, planIdx) => {
                const monthlyPrice = getMonthlyPrice(plan);

                return (
                  <motion.div
                    key={plan.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: planIdx * 0.08 }}
                    className="relative group flex flex-col h-full"
                  >
                    <div
                      className={`relative flex-1 bg-white rounded-[2rem] p-6 sm:p-8 border flex flex-col justify-between transition-all duration-300 shadow-[0_15px_45px_rgba(0,0,0,0.015)] hover:shadow-[0_25px_65px_rgba(37,99,235,0.08)] hover:-translate-y-1 ${
                        plan.highlighted
                          ? "border-blue-500/40 ring-1 ring-blue-500/25"
                          : "border-slate-200/80 hover:border-blue-500/20"
                      }`}
                    >
                      <div>
                        {/* Role Badge */}
                        <div className="mb-5">
                          <span
                            className={`text-xs font-extrabold uppercase tracking-wider px-3 py-1 rounded-full border ${
                              plan.highlighted
                                ? "bg-blue-50 text-blue-600 border-blue-100"
                                : "bg-slate-50 text-slate-500 border-slate-100"
                            }`}
                          >
                            {plan.badge}
                          </span>
                        </div>

                        <h3 className="text-xl font-black text-slate-900 mb-6">
                          {plan.name}
                        </h3>

                        {/* Pricing Display Console */}
                        <div className="bg-slate-50 border border-slate-100 p-5 rounded-2xl mb-6 relative overflow-hidden">
                          <div className="absolute inset-0 opacity-[0.01] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:12px_12px]" />

                          {plan.id === "patrolling-guard" && (
                            <div className="mb-4 relative z-10">
                              <label className="text-xs uppercase font-bold text-slate-500 block mb-1.5 tracking-wider">
                                Choose Option
                              </label>
                              <div className="grid grid-cols-2 gap-1 bg-slate-200/60 border border-slate-200/35 p-1 rounded-md text-xs font-black relative">
                                <button
                                  type="button"
                                  onClick={() => setPatrolWithDevice(false)}
                                  className={`relative px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                                    !patrolWithDevice
                                      ? "text-slate-800"
                                      : "text-slate-500 hover:text-slate-700"
                                  }`}
                                >
                                  {!patrolWithDevice && (
                                    <motion.div
                                      layoutId="patrolDeviceActive"
                                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                                      transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 25,
                                      }}
                                    />
                                  )}
                                  <span className="relative z-20">
                                    Without Device
                                  </span>
                                </button>
                                <button
                                  type="button"
                                  onClick={() => setPatrolWithDevice(true)}
                                  className={`relative px-4 py-1.5 text-xs font-bold rounded-md transition-all ${
                                    patrolWithDevice
                                      ? "text-slate-800"
                                      : "text-slate-500 hover:text-slate-700"
                                  }`}
                                >
                                  {patrolWithDevice && (
                                    <motion.div
                                      layoutId="patrolDeviceActive"
                                      className="absolute inset-0 bg-white rounded-md shadow-sm"
                                      transition={{
                                        type: "spring",
                                        stiffness: 350,
                                        damping: 25,
                                      }}
                                    />
                                  )}
                                  <span className="relative z-20">
                                    With Device
                                  </span>
                                </button>
                              </div>
                            </div>
                          )}

                          <div className="flex items-baseline gap-1 relative z-10">
                            <span className="text-slate-500 font-bold text-sm">
                              Only{" "}
                              <span className="text-lg text-slate-800">RM</span>
                            </span>
                            <span className="text-4xl font-black text-slate-950 tracking-tight leading-none transition-all duration-300">
                              {monthlyPrice.toLocaleString("en-US", {
                                minimumFractionDigits: 0,
                                maximumFractionDigits: 2,
                              })}
                            </span>
                            <span className="text-xs text-slate-500 font-medium ml-1">
                              {plan.id === "gate-guard"
                                ? "Per Guard / Month"
                                : "/ Month"}
                            </span>
                          </div>
                        </div>

                        <div className="h-px bg-slate-100 mb-6" />

                        {/* Features checklist */}
                        <ul className="space-y-3.5 mb-8">
                          {plan.features.map((feature, fIdx) => (
                            <li key={fIdx} className="flex items-start gap-3">
                              <div className="w-5 h-5 rounded-full bg-blue-50 border border-blue-100 flex items-center justify-center flex-shrink-0 mt-0.5 shadow-sm">
                                <Check
                                  className="w-2.5 h-2.5 text-blue-600"
                                  strokeWidth={3}
                                />
                              </div>
                              <span className="text-sm text-slate-600 font-bold leading-relaxed">
                                {feature}
                              </span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Button */}
                      <div>
                        <button
                          onClick={scrollToContact}
                          className={`w-full py-4 rounded-xl font-black text-sm sm:text-base cursor-pointer transition-all duration-300 hover:-translate-y-0.5 ${
                            plan.highlighted
                              ? "bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-indigo-500 hover:to-blue-500 text-white shadow-[0_5px_20px_rgba(59,130,246,0.15)] hover:shadow-[0_8px_30px_rgba(59,130,246,0.3)] border border-blue-500/20"
                              : "bg-slate-900 hover:bg-slate-800 text-white shadow-sm"
                          }`}
                        >
                          Choose {plan.name}
                        </button>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Custom Plan CTA */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="mt-8 flex flex-col md:flex-row items-center justify-between gap-6 py-5 px-8 rounded-[1.25rem] border border-slate-200/80 bg-[#ffffff] w-full relative z-10"
        >
          {/* Left Side */}
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left w-full md:w-auto shrink-0">
            <div className="w-14 h-14 rounded-full bg-[#e8f0fe] text-blue-600 flex items-center justify-center flex-shrink-0">
              <Headset className="w-7 h-7" strokeWidth={2} />
            </div>
            <div>
              <h4 className="text-lg font-bold text-slate-900 mb-0.5">Need help choosing the right plan?</h4>
              <p className="text-[15px] font-medium text-slate-600">Our team is ready to help you find the perfect fit.</p>
            </div>
          </div>
          
          {/* Middle Features - Fills Empty Space on Large Screens */}
          <div className="hidden xl:flex items-center gap-8 px-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-tight">Secure</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Data Privacy</span>
              </div>
            </div>
            
            <div className="w-px h-8 bg-slate-200/60"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100">
                <Zap className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-tight">Fast</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">Quick Setup</span>
              </div>
            </div>

            <div className="w-px h-8 bg-slate-200/60"></div>

            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center border border-purple-100">
                <Sparkles className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold text-slate-900 leading-tight">Reliable</span>
                <span className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Side Button */}
          <button
            onClick={scrollToContact}
            className="shrink-0 flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full border-2 border-slate-300 hover:border-blue-600 text-blue-800 font-bold bg-white hover:bg-blue-50 transition-all duration-300 shadow-sm w-full md:w-auto"
          >
            <PhoneCall className="w-[18px] h-[18px]" strokeWidth={2.5} />
            Contact Us Today
          </button>
        </motion.div>
      </div>
    </section>
  );
}
