"use client";

import { motion } from "framer-motion";
import { Users, Radar, Wrench, Building2, FileCheck } from "lucide-react";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

const STATS = [
  { icon: Users, kicker: "Workforce", label: "Guards Supported", value: "10K+", image: "/stat-guards.png", color: "from-blue-600 to-blue-400" },
  { icon: Radar, kicker: "Tracking", label: "Live Monitoring", value: "Real-Time", image: "/stat-tracking.png", color: "from-emerald-600 to-emerald-400" },
  { icon: Wrench, kicker: "Infrastructure", label: "Hardware Maintenance", value: "Zero", image: "/stat-devices.png", color: "from-violet-600 to-violet-400" },
  { icon: Building2, kicker: "Coverage", label: "Site Management", value: "Multi-Site", image: "/stat-sites.png", color: "from-amber-600 to-amber-400" },
  { icon: FileCheck, kicker: "Reporting", label: "Field Audit Reports", value: "Instant", image: "/stat-reports.png", color: "from-rose-600 to-rose-400" },
];

function StatCard({ stat, index }: { stat: (typeof STATS)[number]; index: number }) {
  const Icon = stat.icon;
  return (
    <article className="group relative w-[270px] md:w-[310px] h-[260px] md:h-[290px] flex-shrink-0 mr-4 md:mr-5 rounded-[22px] overflow-hidden cursor-default">

      {/* Full-bleed background image */}
      <Image
        src={stat.image}
        alt={stat.label}
        fill
        sizes="310px"
        className="object-cover transition-transform duration-[2500ms] ease-out group-hover:scale-[1.15]"
      />

      {/* Dark gradient overlay — stronger at bottom for text */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-black/10 transition-all duration-700 group-hover:from-black/90 group-hover:via-black/40" />

      {/* Top Row — Icon + Index */}
      <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
        {/* Icon circle with colored ring */}
        <div className={`flex items-center justify-center w-10 h-10 rounded-full bg-gradient-to-br ${stat.color} shadow-lg shadow-black/20 ring-2 ring-white/20 group-hover:ring-white/40 group-hover:scale-110 transition-all duration-500`}>
          <Icon className="w-[18px] h-[18px] text-white" strokeWidth={2.2} />
        </div>

        {/* Kicker pill */}
        <span className="text-[10px] font-semibold uppercase tracking-[0.15em] text-white/70 bg-white/10 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 group-hover:bg-white/15 group-hover:text-white/90 transition-all duration-500">
          {stat.kicker}
        </span>
      </div>

      {/* Bottom Content — stacked over the gradient */}
      <div className="absolute bottom-0 left-0 right-0 p-5 md:p-6 z-10">
        {/* Big stat value */}
        <div className="text-[32px] md:text-[38px] font-black font-heading text-white leading-none tracking-tight mb-1 group-hover:translate-x-1 transition-transform duration-500">
          {stat.value}
        </div>

        {/* Divider line with gradient */}
        <div className="h-[2px] w-10 group-hover:w-16 rounded-full bg-gradient-to-r mb-2 transition-all duration-700 ease-out" style={{ backgroundImage: `linear-gradient(to right, var(--tw-gradient-stops))` }}>
          <div className={`h-full w-full rounded-full bg-gradient-to-r ${stat.color}`} />
        </div>

        {/* Label */}
        <div className="text-xs sm:text-[13px] font-semibold text-white/70 uppercase tracking-[0.12em] group-hover:text-white/90 transition-colors duration-500">
          {stat.label}
        </div>
      </div>
    </article>
  );
}

export default function TrustStats() {
  // Duplicated once so the -50% translate loops seamlessly
  const loop = [...STATS, ...STATS];

  return (
    <section className="relative overflow-hidden bg-[#ffffff] py-10 md:py-14">
      {/* Fine dot-grid texture - subtle and elegant */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] [background-size:24px_24px]" />
      <div className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[200px] bg-blue-400/[0.05] blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-slate-200/50" />

      <div className="relative z-10">
        {/* Compact header — unified SectionHeader */}
        <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]  capitalize">
          <SectionHeader
            eyebrow="Trusted at scale"
            title="Built for security operational teams of every size."
            align="center"
          />
        </div>

        {/* Marquee */}
        <div className="marquee-track relative">
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-r from-white to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 z-20 bg-gradient-to-l from-white to-transparent" />

          <div className="flex w-max animate-marquee">
            {loop.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i % STATS.length} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
