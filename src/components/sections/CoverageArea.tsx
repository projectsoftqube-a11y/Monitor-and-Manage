"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import {
  Warehouse,
  Palmtree,
  Home,
  Store,
  Building,
  Building2,
  GraduationCap,
  Container,
  Cog,
  Pickaxe,
  Fuel,
  Construction,
  ShoppingBag,
  Dumbbell,
  HeartPulse,
  Boxes,
} from "lucide-react";

// Columns structure where each column contains 3-4 staggered items vertically
const COLUMNS = [
  {
    colOffset: "translate-y-[-10px]",
    items: [
      {
        label: "Petrol station",
        icon: Fuel,
        bgClass: "bg-indigo-500 border-indigo-400/40 text-white",
        glowColor: "rgba(99,102,241,0.55)",
        xClass: "translate-x-2 sm:translate-x-4",
      },
      {
        label: "Mining sites",
        icon: Pickaxe,
        bgClass: "bg-neutral-900 border-neutral-700/60 text-white",
        glowColor: "rgba(38,38,38,0.55)",
        xClass: "-translate-x-6 sm:-translate-x-8",
      },
      {
        label: "Construction sites",
        icon: Construction,
        bgClass: "bg-indigo-600 border-indigo-400/40 text-white",
        glowColor: "rgba(79,70,229,0.55)",
        xClass: "translate-x-4 sm:translate-x-6",
      },
    ],
  },
  {
    colOffset: "translate-y-[20px]",
    items: [
      {
        label: "Warehouse",
        icon: Warehouse,
        bgClass: "bg-blue-600 border-blue-400/40 text-white",
        glowColor: "rgba(37,99,235,0.55)",
        xClass: "-translate-x-2",
      },
      {
        label: "Health center",
        icon: HeartPulse,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(239,68,68,0.25)",
        xClass: "translate-x-6 sm:translate-x-10",
      },
      {
        label: "Wholesale Store",
        icon: Boxes,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(255,255,255,0.35)",
        xClass: "-translate-x-4",
      },
    ],
  },
  {
    colOffset: "translate-y-[-30px]",
    items: [
      {
        label: "Landed Residential",
        icon: Home,
        bgClass: "bg-neutral-900 border-neutral-700/60 text-white",
        glowColor: "rgba(38,38,38,0.55)",
        xClass: "-translate-x-4 sm:-translate-x-6",
      },
      {
        label: "Resorts",
        icon: Palmtree,
        bgClass: "bg-cyan-500 border-cyan-300/40 text-white",
        glowColor: "rgba(6,182,212,0.55)",
        xClass: "translate-x-8 sm:translate-x-12",
      },
      {
        label: "Retail Store",
        icon: Store,
        bgClass: "bg-emerald-800 border-emerald-600/40 text-white",
        glowColor: "rgba(6,95,70,0.55)",
        xClass: "translate-x-2",
      },
    ],
  },
  {
    colOffset: "translate-y-[10px]",
    items: [
      {
        label: "Indoor sports",
        icon: Dumbbell,
        bgClass: "bg-red-500 border-red-400/40 text-white",
        glowColor: "rgba(239,68,68,0.55)",
        xClass: "-translate-x-2",
      },
      {
        label: "Manufacturing companies",
        icon: Cog,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(255,255,255,0.35)",
        xClass: "translate-x-6 sm:translate-x-8",
      },
      {
        label: "Educational Institution",
        icon: GraduationCap,
        bgClass: "bg-blue-800 border-blue-600/40 text-white",
        glowColor: "rgba(30,58,138,0.55)",
        xClass: "-translate-x-4 sm:-translate-x-6",
      },
      {
        label: "Industrial companies",
        icon: Container,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(255,255,255,0.35)",
        xClass: "translate-x-4 sm:translate-x-6",
      },
    ],
  },
  {
    colOffset: "translate-y-[-15px]",
    items: [
      {
        label: "High Rise Residential",
        icon: Building2,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(255,255,255,0.35)",
        xClass: "translate-x-4",
      },
      {
        label: "Office premises",
        icon: Building,
        bgClass: "bg-slate-500 border-slate-400/40 text-white",
        glowColor: "rgba(100,116,139,0.55)",
        xClass: "-translate-x-4 sm:-translate-x-6",
      },
      {
        label: "Shopping Malls",
        icon: ShoppingBag,
        bgClass: "bg-purple-600 border-purple-400/40 text-white",
        glowColor: "rgba(147,51,234,0.55)",
        xClass: "translate-x-2 sm:translate-x-4",
      },
    ],
  },
  {
    colOffset: "translate-y-[25px]",
    items: [
      {
        label: "Warehouse",
        icon: Warehouse,
        bgClass: "bg-blue-600 border-blue-400/40 text-white",
        glowColor: "rgba(37,99,235,0.55)",
        xClass: "translate-x-4 sm:translate-x-6",
      },
      {
        label: "Landed Residential",
        icon: Home,
        bgClass: "bg-neutral-900 border-neutral-700/60 text-white",
        glowColor: "rgba(38,38,38,0.55)",
        xClass: "-translate-x-6 sm:-translate-x-8",
      },
      {
        label: "Retail Store",
        icon: Store,
        bgClass: "bg-emerald-800 border-emerald-600/40 text-white",
        glowColor: "rgba(6,95,70,0.55)",
        xClass: "translate-x-2",
      },
    ],
  },
  {
    colOffset: "translate-y-[-20px]",
    items: [
      {
        label: "Resorts",
        icon: Palmtree,
        bgClass: "bg-cyan-500 border-cyan-300/40 text-white",
        glowColor: "rgba(6,182,212,0.55)",
        xClass: "-translate-x-2 sm:-translate-x-4",
      },
      {
        label: "Health center",
        icon: HeartPulse,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(239,68,68,0.25)",
        xClass: "translate-x-8 sm:translate-x-12",
      },
      {
        label: "Construction sites",
        icon: Construction,
        bgClass: "bg-indigo-600 border-indigo-400/40 text-white",
        glowColor: "rgba(79,70,229,0.55)",
        xClass: "-translate-x-4",
      },
    ],
  },
  {
    colOffset: "translate-y-[15px]",
    items: [
      {
        label: "Indoor sports",
        icon: Dumbbell,
        bgClass: "bg-red-500 border-red-400/40 text-white",
        glowColor: "rgba(239,68,68,0.55)",
        xClass: "translate-x-4",
      },
      {
        label: "Educational Institution",
        icon: GraduationCap,
        bgClass: "bg-blue-800 border-blue-600/40 text-white",
        glowColor: "rgba(30,58,138,0.55)",
        xClass: "-translate-x-4 sm:-translate-x-8",
      },
      {
        label: "Office premises",
        icon: Building,
        bgClass: "bg-slate-500 border-slate-400/40 text-white",
        glowColor: "rgba(100,116,139,0.55)",
        xClass: "translate-x-6",
      },
      {
        label: "Industrial companies",
        icon: Container,
        bgClass: "bg-white border-slate-200/40 text-slate-800",
        glowColor: "rgba(255,255,255,0.35)",
        xClass: "-translate-x-2 sm:-translate-x-4",
      },
    ],
  },
];

export default function CoverageArea() {
  // Duplicate column list once to achieve infinite seamless scrolling
  const doubleColumns = [...COLUMNS, ...COLUMNS];

  return (
    <section
      id="coverage"
      className="relative overflow-hidden py-20 md:py-28 bg-gradient-to-br from-[#f3f6ff] to-[#e4e8ff]"
    >
      {/* Background cyber grid and neon glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-[0.06] [background-image:radial-gradient(circle,rgba(0,0,0,0.3)_1px,transparent_1px)] [background-size:24px_24px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-[500px] w-[500px] rounded-full bg-cyan-400/[0.05] blur-[130px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 left-1/4 h-[500px] w-[500px] rounded-full bg-indigo-400/[0.05] blur-[130px]"
      />

      <div className="relative z-10">
        {/* Section Header */}
        <div className="container mx-auto px-4 sm:px-6 max-w-[1520px]">
          <SectionHeader
            eyebrow="Global Compatibilities"
            title={<>Coverage <span className="text-gradient-animated">Area.</span></>}
            description="M&M App is built to adapt and scale flawlessly across any business, security workforce, or structural environment."
            align="center"
          />
        </div>

        {/* High-density Organic Scattered Marquee */}
        <div className="relative h-[620px] sm:h-[720px] md:h-[800px] overflow-hidden flex items-center select-none">
          {/* Lateral fading masks to hide borders seamlessly */}
          <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-20 sm:w-48 z-20 bg-gradient-to-r from-[#f3f6ff] via-[#e4e8ff]/50 to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-20 sm:w-48 z-20 bg-gradient-to-l from-[#e4e8ff] via-[#f3f6ff]/50 to-transparent" />

          {/* Scrolling conveyor belt containing columns of stacked badges */}
          <div className="flex w-max animate-marquee gap-14 sm:gap-24 md:gap-28 items-center">
            {doubleColumns.map((column, colIdx) => (
              <div
                key={colIdx}
                className={`flex flex-col gap-10 sm:gap-14 md:gap-16 items-center shrink-0 ${column.colOffset}`}
              >
                {column.items.map((item, itemIdx) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={itemIdx}
                      className={`flex flex-col items-center group cursor-pointer transition-all duration-300 ease-out hover:scale-105 ${item.xClass}`}
                      style={
                        {
                          "--glow-shadow": item.glowColor,
                        } as React.CSSProperties
                      }
                    >
                      {/* Badge Circle container */}
                      <div
                        className={`relative w-[76px] h-[76px] sm:w-[92px] sm:h-[92px] rounded-full flex items-center justify-center border shadow-lg transition-all duration-300 group-hover:shadow-[0_0_35px_var(--glow-shadow)] ${item.bgClass}`}
                      >
                        <Icon className="w-8 h-8 sm:w-10 sm:h-10 transition-transform duration-300 group-hover:scale-110" />
                      </div>

                      {/* Label Text */}
                      <span className="mt-3 sm:mt-4 text-[10px] sm:text-xs font-mono uppercase tracking-[0.16em] text-slate-600 group-hover:text-blue-600 transition-colors duration-300 font-bold text-center whitespace-nowrap">
                        {item.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
