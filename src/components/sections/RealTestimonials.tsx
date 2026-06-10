"use client";

import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import { Star, Quote, ShieldCheck } from "lucide-react";

const reviews = [
  // --- New Reviews ---
  {
    name: "Mr Fauzi",
    role: "Property Manager",
    company: "Cyberview Resort & Spa",
    logo: "/logo-6.jpg",
    initials: "MF",
    rating: 5,
    text: "M&M App has completely transformed our patrol audits. We slashed manual reporting times down to absolute zero. Our clients are wowed by the automated, professional GPS-verified PDF reports they receive instantly.",
    color: "from-blue-500 to-indigo-500",
    badge: "Enterprise Partner",
  },
  {
    name: "Mr Dass",
    role: "Security Manager",
    company: "Country Heights Kajang",
    logo: "/logo-7.jpg",
    initials: "MD",
    rating: 5,
    text: "Getting rid of expensive physical patrol sticks was the best decision we made. Every checkpoint scan is geofence-validated on the guard's phone, giving our management team absolute transparency and zero hardware maintenance costs.",
    color: "from-emerald-500 to-teal-500",
    badge: "Verified Client",
  },
  {
    name: "Colonel Zainuddin",
    role: "Facility Manager",
    company: "UTAR Sg Long",
    logo: "/logo-8.jpg",
    initials: "CZ",
    rating: 5,
    text: "The real-time tracking and instant SOS cellular alerts give our command center complete operational control. This is the most reliable, comprehensive patrol app we have ever deployed.",
    color: "from-violet-500 to-purple-500",
    badge: "Security Admin",
  },
  {
    name: "Mr Firdaus",
    role: "Manager",
    company: "Toyota",
    logo: "/logo-9.jpg",
    initials: "MF",
    rating: 5,
    text: "Since switching to M&M, our entire patrol scheduling and incident reporting workflow has become seamless. The dashboard gives us full visibility across all our client sites, and the automated audit trails have saved us countless hours every week.",
    color: "from-orange-500 to-red-500",
    badge: "Trusted Partner",
  },
  
  // --- Original Reviews ---
  {
    name: "Mr John",
    role: "Operations Manager",
    company: "Shelter Security Sdn Bhd",
    logo: "/logo-1.jpg",
    initials: "MJ",
    rating: 5,
    text: "M&M App has completely transformed our patrol audits. We slashed manual reporting times down to absolute zero. Our clients are wowed by the automated, professional GPS-verified PDF reports they receive instantly.",
    color: "from-blue-500 to-indigo-500",
    badge: "Enterprise Partner",
  },
  {
    name: "Mr Sundra",
    role: "Senior Manager",
    company: "Prima Platinum Sdn Bhd",
    logo: "/logo-2.png",
    initials: "MS",
    rating: 5,
    text: "Getting rid of expensive physical patrol sticks was the best decision we made. Every checkpoint scan is geofence-validated on the guard's phone, giving our management team absolute transparency and zero hardware maintenance costs.",
    color: "from-emerald-500 to-teal-500",
    badge: "Verified Client",
  },
  {
    name: "Ms Meera",
    role: "Manager",
    company: "Gemini Force Sdn Bhd",
    logo: "/logo-3.png",
    initials: "MM",
    rating: 5,
    text: "The real-time tracking and instant SOS cellular alerts give our command center complete operational control. This is the most reliable, comprehensive patrol app we have ever deployed.",
    color: "from-violet-500 to-purple-500",
    badge: "Security Admin",
  },
  {
    name: "Mr Ragu",
    role: "Manager",
    company: "Erawan Security Services Sdn Bhd",
    logo: "/logo-4.png",
    initials: "MR",
    rating: 5,
    text: "Since switching to M&M, our entire patrol scheduling and incident reporting workflow has become seamless. The dashboard gives us full visibility across all our client sites, and the automated audit trails have saved us countless hours every week.",
    color: "from-orange-500 to-red-500",
    badge: "Trusted Partner",
  },
  {
    name: "Ms Liza",
    role: "Operations Director",
    company: "Fask Security Sdn Bhd",
    logo: "/logo-5.png",
    initials: "ML",
    rating: 5,
    text: "M&M App gave us the ability to monitor every guard in real-time with GPS precision. Our clients love the professional PDF reports, and we have dramatically reduced response times for on-ground incidents. A truly game-changing platform.",
    color: "from-cyan-500 to-blue-500",
    badge: "Verified Client",
  },
];

export default function RealTestimonials() {
  return (
    <section id="reviews" className="py-24 md:py-32 bg-gradient-to-b from-white via-slate-50 to-white text-slate-900 relative overflow-hidden">
      {/* Hand-crafted light glowing meshes */}
      <div className="absolute top-[20%] left-[-10%] w-[500px] h-[500px] bg-blue-100/40 blur-[130px] rounded-full pointer-events-none" />
      <div className="absolute bottom-[10%] right-[-10%] w-[600px] h-[600px] bg-indigo-100/40 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Premium Tech Grid Accent */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03] [background-image:radial-gradient(circle,rgba(0,0,0,0.15)_1px,transparent_1px)] [background-size:24px_24px]" />
 
      <div className="container mx-auto px-4 sm:px-10 2xl:px-6 max-w-[1520px] relative z-10">
        <SectionHeader
          eyebrow="Proven Success"
          title={<>What Our Clients Say <br /> <span className="text-gradient">Trusted by Leading Security Forces</span></>}
          dark={false}
          align="center"
        />

        <style>{`
          @keyframes infinite-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-infinite-scroll {
            animation: infinite-scroll 45s linear infinite;
          }
          .animate-infinite-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
 
        <div className="relative overflow-hidden w-full mt-16 sm:mt-20">
          {/* Gradients on edges to fade out smoothly */}
          <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-slate-50 to-transparent z-20 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-slate-50 to-transparent z-20 pointer-events-none" />
          
          <div className="flex w-max animate-infinite-scroll">
            {[0, 1].map((set) => (
              <div key={set} className="flex gap-6 sm:gap-8 px-3 sm:px-4">
                {reviews.map((review, idx) => (
                  <div
                    key={idx}
                    className="w-[320px] sm:w-[400px] shrink-0 relative p-8 sm:p-9 rounded-3xl bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.02)] hover:shadow-[0_24px_60px_rgba(59,130,246,0.06)] transition-all duration-500 flex flex-col justify-between group overflow-hidden"
                  >
                    {/* Premium Top Border Accent on Hover */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      
                    <div>
                      {/* Header elements (Star ratings & verified tag pill) */}
                      <div className="flex items-center justify-between mb-8 gap-2">
                        <div className="flex gap-1 flex-shrink-0">
                          {[...Array(review.rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 sm:w-5 sm:h-5 fill-amber-400 text-amber-400" />
                          ))}
                        </div>
                        <span className="inline-flex items-center gap-1 py-1 px-3 rounded-full bg-blue-50/80 border border-blue-100/60 text-blue-700 font-bold text-[10px] sm:text-[11px] tracking-wider uppercase whitespace-nowrap">
                          <ShieldCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-600 flex-shrink-0" />
                          {review.badge}
                        </span>
                      </div>
      
                      {/* Decorative Giant Quote Watermark in Background */}
                      <Quote className="absolute right-6 top-16 w-20 h-20 text-slate-100/70 pointer-events-none group-hover:text-blue-50/60 transition-colors duration-500" />
      
                      {/* Review Text */}
                      <p className="text-slate-650 leading-relaxed font-medium text-[15px] sm:text-[17px] mb-8 relative z-10 italic">
                        &ldquo;{review.text}&rdquo;
                      </p>
                    </div>
      
                    {/* Reviewer details block */}
                    <div className="border-t border-slate-100 pt-6 mt-auto flex items-center gap-4 relative z-10">
                      {review.logo ? (
                        <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl border border-slate-100/60 overflow-hidden bg-white flex items-center justify-center flex-shrink-0 shadow-sm p-1.5">
                          <img 
                            src={review.logo} 
                            alt={`${review.company} logo`} 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      ) : (
                        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${review.color} flex items-center justify-center font-black text-white text-base shadow-md shadow-blue-500/10 flex-shrink-0`}>
                          {review.initials}
                        </div>
                      )}
                      <div className="min-w-0">
                        <p className="font-bold text-slate-900 text-base sm:text-lg truncate">{review.name}</p>
                        <p className="text-xs sm:text-sm text-slate-500 font-semibold truncate mt-0.5">{review.role}</p>
                        <p className="text-[10px] sm:text-[11px] text-blue-600 font-bold uppercase tracking-widest mt-1">{review.company}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
