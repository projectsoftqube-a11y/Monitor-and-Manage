"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { HelpCircle, ChevronDown, MessageSquare, Mail, PhoneCall } from "lucide-react";

const faqData = [
  {
    question: "How does the geofencing and GPS verification work?",
    answer: "Every checkpoint scan and clock-in is verified using the smartphone's high-accuracy hardware GPS. The app validates the guard's coordinates against your pre-defined geofenced site radius, preventing remote clock-ins or false patrols."
  },
  {
    question: "Can we export custom reports for our corporate clients?",
    answer: "Yes! The M&M Web Portal generates document-ready, professional PDF audit reports with a single click. These reports include checkpoint scan percentages, GPS timestamps, logged incidents with photos, and digital officer signatures."
  },
  {
    question: "Does this replace physical guard tour patrol devices?",
    answer: "Absolutely. M&M App replaces expensive hardware patrol sticks, docking stations, and specialized keyfobs with standard QR codes or NFC tags and a smartphone app, saving thousands in maintenance and replacement costs."
  },
  {
    question: "How long does it take to set up a new client site?",
    answer: "Setting up a new site takes less than 10 minutes. Simply register the site on the web portal, define your checkpoints, print the generated QR codes, place them on-site, and assign your guards. They can begin patrolling instantly."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="py-24 md:py-32 bg-gradient-to-b from-[#f8fafc] via-white to-[#f8fafc] text-slate-900 relative overflow-hidden">
      {/* Exquisite Light Ambient Glowing Mesh */}
      <div className="absolute top-1/3 left-[-5%] w-[450px] h-[450px] bg-blue-150/30 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[5%] right-[-5%] w-[550px] h-[550px] bg-indigo-150/30 blur-[150px] rounded-full pointer-events-none" />

      {/* Subtle Dot Grid Accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,rgba(0,0,0,0.1)_1px,transparent_1px)] [background-size:24px_24px]" />

      <div className="container mx-auto px-10 sm:px-20 2xl:px-6 max-w-[1520px] relative z-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16">
          
          {/* Left Column: Title Block & Premium Support Card */}
          <div className="w-full lg:w-5/12 flex flex-col justify-between">
            <div>
              <SectionHeader
                eyebrow="Questions & Answers"
                title={<>Frequently Asked <br /> <span className="text-gradient">Questions</span></>}
                description="Everything you need to know about setting up and running your security operations using M&M App."
                dark={false}
                align="left"
              />
            </div>

            {/* Quick Contact Desk Card (Genuinely custom card design) */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-8 p-8 rounded-3xl bg-blue-50/50 border border-blue-100/60 shadow-[0_10px_35px_rgba(59,130,246,0.02)] relative overflow-hidden group backdrop-blur-sm"
            >
              {/* Internal abstract visual circles */}
              <div className="absolute -top-12 -right-12 w-32 h-32 bg-blue-100/30 rounded-full blur-2xl group-hover:scale-125 transition-transform duration-500 pointer-events-none" />

              <div className="flex items-center gap-3.5 mb-4">
                <div className="w-10 h-10 rounded-xl bg-blue-600 text-white flex items-center justify-center shadow-lg shadow-blue-500/10">
                  <MessageSquare className="w-5 h-5" />
                </div>
                <h3 className="font-extrabold text-xl text-slate-900">Still have questions?</h3>
              </div>
              <p className="text-slate-500 text-base leading-relaxed mb-6 font-medium">
                Cannot find the answer you are looking for? Get in touch with our operations desk, available 24/7.
              </p>

              <div className="space-y-4">
                <a
                  href="mailto:admin@monitormanage.com.my"
                  className="flex items-center gap-3 text-base font-bold text-slate-650 hover:text-blue-600 transition-colors group/link"
                >
                  <Mail className="w-4.5 h-4.5 text-blue-500 group-hover/link:scale-110 transition-transform" />
                  admin@monitormanage.com.my
                </a>
                <a
                  href="tel:0109872885"
                  className="flex items-center gap-3 text-base font-bold text-slate-650 hover:text-emerald-600 transition-colors group/link"
                >
                  <PhoneCall className="w-4.5 h-4.5 text-emerald-500 group-hover/link:scale-110 transition-transform" />
                  010-987 2885
                </a>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Premium Accordion Stack */}
          <div className="w-full lg:w-7/12 space-y-4">
            {faqData.map((item, idx) => {
              const isOpen = openIndex === idx;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className={`rounded-2xl border transition-all duration-300 overflow-hidden relative ${
                    isOpen 
                      ? "bg-white border-blue-200 shadow-[0_15px_40px_rgba(59,130,246,0.04)]" 
                      : "bg-white border-slate-100 hover:border-slate-200 shadow-[0_4px_20px_rgba(0,0,0,0.01)]"
                  }`}
                >
                  {/* Left edge colored border indicator when active */}
                  {isOpen && (
                    <div className="absolute left-0 top-0 bottom-0 w-[4px] bg-gradient-to-b from-blue-500 to-indigo-500" />
                  )}

                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-6 py-5.5 flex items-center justify-between text-left cursor-pointer outline-none select-none relative z-10"
                  >
                    <div className="flex items-center gap-4 pr-4">
                      <HelpCircle className={`w-5.5 h-5.5 flex-shrink-0 transition-colors ${
                        isOpen ? "text-blue-500" : "text-slate-400"
                      }`} />
                      <span className={`font-bold text-base sm:text-lg transition-colors leading-snug ${
                        isOpen ? "text-slate-900" : "text-slate-700"
                      }`}>
                        {item.question}
                      </span>
                    </div>
                    
                    <motion.div
                      animate={{ rotate: isOpen ? 180 : 0 }}
                      transition={{ duration: 0.3, ease: "easeInOut" }}
                      className={`w-8 h-8 rounded-full flex items-center justify-center border flex-shrink-0 transition-colors ${
                        isOpen ? "bg-blue-50 text-blue-600 border-blue-100" : "bg-slate-50 text-slate-400 border-slate-100"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </motion.div>
                  </button>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                      >
                        <div className="px-6 pb-6 pt-1 text-slate-600 text-sm sm:text-base leading-relaxed pl-13 border-t border-slate-50 bg-slate-50/30">
                          {item.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
}
