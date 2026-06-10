"use client";

import React from "react";
import { motion } from "framer-motion";
import SectionHeader from "../SectionHeader";
import {
  Smartphone,
  Cloud,
  Radar,
  Route,
  ScanFace,
  ClipboardList,
  LayoutDashboard,
  Siren,
  Network,
  CheckCircle2,
  Database,
  MapPin,
  UserCheck,
  AlertCircle,
  Activity,
  Shield,
  Scan,
  Wrench,
  Settings,
  type LucideIcon,
} from "lucide-react";

/* ------------------------------------------------------------------ *
 *  Accent palette — full static class strings so Tailwind keeps them  *
 * ------------------------------------------------------------------ */
type Accent = {
  icon: string; // resting icon color
  wrap: string; // resting icon container gradient + border
  hoverWrap: string; // icon container on hover (solid accent)
  bar: string; // sliding top accent bar gradient
  badge: string; // floating micro-badge color
  num: string; // index watermark hover tint
  glow: string; // ambient corner glow
  spot: string; // cursor spotlight rgba
};

const ACCENTS: Record<string, Accent> = {
  emerald: {
    icon: "text-emerald-600",
    wrap: "from-emerald-50 to-emerald-100/40 border-emerald-100/70",
    hoverWrap:
      "group-hover:from-emerald-500 group-hover:to-teal-600 group-hover:border-emerald-400/30",
    bar: "from-emerald-500 via-teal-500 to-emerald-600",
    badge: "bg-emerald-500 border-emerald-300/40",
    num: "group-hover:text-emerald-500/[0.07]",
    glow: "bg-emerald-400/20",
    spot: "rgba(16,185,129,0.12)",
  },
  indigo: {
    icon: "text-indigo-600",
    wrap: "from-indigo-50 to-indigo-100/40 border-indigo-100/70",
    hoverWrap:
      "group-hover:from-indigo-500 group-hover:to-blue-600 group-hover:border-indigo-400/30",
    bar: "from-indigo-500 via-blue-500 to-indigo-600",
    badge: "bg-indigo-500 border-indigo-300/40",
    num: "group-hover:text-indigo-500/[0.07]",
    glow: "bg-indigo-400/20",
    spot: "rgba(99,102,241,0.12)",
  },
  rose: {
    icon: "text-rose-600",
    wrap: "from-rose-50 to-rose-100/40 border-rose-100/70",
    hoverWrap:
      "group-hover:from-rose-500 group-hover:to-pink-600 group-hover:border-rose-400/30",
    bar: "from-rose-500 via-pink-500 to-rose-600",
    badge: "bg-rose-500 border-rose-300/40",
    num: "group-hover:text-rose-500/[0.07]",
    glow: "bg-rose-400/20",
    spot: "rgba(244,63,94,0.12)",
  },
  blue: {
    icon: "text-blue-600",
    wrap: "from-blue-50 to-blue-100/40 border-blue-100/70",
    hoverWrap:
      "group-hover:from-blue-500 group-hover:to-indigo-600 group-hover:border-blue-400/30",
    bar: "from-blue-500 via-indigo-500 to-blue-600",
    badge: "bg-blue-500 border-blue-300/40",
    num: "group-hover:text-blue-500/[0.07]",
    glow: "bg-blue-400/20",
    spot: "rgba(37,99,235,0.12)",
  },
  violet: {
    icon: "text-violet-600",
    wrap: "from-violet-50 to-violet-100/40 border-violet-100/70",
    hoverWrap:
      "group-hover:from-violet-500 group-hover:to-purple-600 group-hover:border-violet-400/30",
    bar: "from-violet-500 via-purple-500 to-violet-600",
    badge: "bg-violet-500 border-violet-300/40",
    num: "group-hover:text-violet-500/[0.07]",
    glow: "bg-violet-400/20",
    spot: "rgba(139,92,246,0.12)",
  },
  amber: {
    icon: "text-amber-600",
    wrap: "from-amber-50 to-amber-100/40 border-amber-100/70",
    hoverWrap:
      "group-hover:from-amber-500 group-hover:to-orange-600 group-hover:border-amber-400/30",
    bar: "from-amber-500 via-orange-500 to-amber-600",
    badge: "bg-amber-500 border-amber-300/40",
    num: "group-hover:text-amber-500/[0.07]",
    glow: "bg-amber-400/20",
    spot: "rgba(245,158,11,0.12)",
  },
  teal: {
    icon: "text-teal-600",
    wrap: "from-teal-50 to-teal-100/40 border-teal-100/70",
    hoverWrap:
      "group-hover:from-teal-500 group-hover:to-cyan-600 group-hover:border-teal-400/30",
    bar: "from-teal-500 via-cyan-500 to-teal-600",
    badge: "bg-teal-500 border-teal-300/40",
    num: "group-hover:text-teal-500/[0.07]",
    glow: "bg-teal-400/20",
    spot: "rgba(20,184,166,0.12)",
  },
  red: {
    icon: "text-red-600",
    wrap: "from-red-50 to-red-100/40 border-red-100/70",
    hoverWrap:
      "group-hover:from-red-500 group-hover:to-rose-600 group-hover:border-red-400/30",
    bar: "from-red-500 via-rose-500 to-red-600",
    badge: "bg-red-500 border-red-300/40",
    num: "group-hover:text-red-500/[0.07]",
    glow: "bg-red-400/20",
    spot: "rgba(239,68,68,0.12)",
  },
  sky: {
    icon: "text-sky-600",
    wrap: "from-sky-50 to-sky-100/40 border-sky-100/70",
    hoverWrap:
      "group-hover:from-sky-500 group-hover:to-blue-600 group-hover:border-sky-400/30",
    bar: "from-sky-500 via-blue-500 to-sky-600",
    badge: "bg-sky-500 border-sky-300/40",
    num: "group-hover:text-sky-500/[0.07]",
    glow: "bg-sky-400/20",
    spot: "rgba(14,165,233,0.12)",
  },
};

/* ------------------------------------------------------------------ *
 *  Feature data — span drives the bento layout (6-col grid on lg)     *
 *  spans tile cleanly: 4+2 / 2+4 / 2+2+2 / 3+3                          *
 * ------------------------------------------------------------------ */
type Feature = {
  icon: LucideIcon;
  badge: LucideIcon;
  title: string;
  desc: string;
  accent: keyof typeof ACCENTS;
};

const FEATURES: Feature[] = [
  {
    icon: Smartphone,
    badge: CheckCircle2,
    title: "No Expensive Devices",
    desc: "Save costs by eliminating expensive patrol devices",
    accent: "emerald",
  },
  {
    icon: Wrench,
    badge: Settings,
    title: "Zero Maintenance Costs",
    desc: "No devices to service, repair, or replace.",
    accent: "indigo",
  },
  {
    icon: Radar,
    badge: MapPin,
    title: "Real-Time Tracking",
    desc: "Track guard movements in real time with precise GPS visibility.",
    accent: "rose",
  },
  {
    icon: Route,
    badge: Scan,
    title: "Patrolling",
    desc: "Automatically verify every checkpoint with QR and GPS validation.",
    accent: "blue",
  },
  {
    icon: ScanFace,
    badge: UserCheck,
    title: "Smart Attendance Tracking",
    desc: "Monitor attendance automatically with instant alerts for late or missed check-ins.",
    accent: "violet",
  },
  {
    icon: ClipboardList,
    badge: AlertCircle,
    title: "Incident Reporting",
    desc: "Capture and submit field reports with photos in real time.",
    accent: "amber",
  },
  {
    icon: LayoutDashboard,
    badge: Activity,
    title: "Live Dashboard",
    desc: "Monitor every site, team, and incident from one dashboard.",
    accent: "teal",
  },
  {
    icon: Siren,
    badge: Shield,
    title: "SOS Alerts",
    desc: "Instantly alert command center with a single tap during emergencies.",
    accent: "red",
  },
  {
    icon: Network,
    badge: MapPin,
    title: "Secure Centralized Management",
    desc: "Manage unlimited sites from one account while keeping data protected with AWS-powered enterprise security.",
    accent: "sky",
  },
];

/* ─── Premium Glassmorphic / Animated CSS Micro-Graphics ──────────────── */
const EmeraldGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-emerald-500/10 rounded-2xl blur-md group-hover:bg-emerald-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background Circle */}
      <circle cx="60" cy="60" r="52" fill="#F5F7FF" />

      {/* Smartphone */}
      <rect
        x="36"
        y="22"
        width="34"
        height="64"
        rx="8"
        stroke="#111827"
        strokeWidth="4"
      />
      <rect x="44" y="30" width="18" height="40" rx="3" fill="#E5E7EB" />
      <circle cx="53" cy="78" r="2.5" fill="#111827" />

      {/* Price Tag */}
      <path
        d="M75 42L96 42L104 50L104 70L84 70L75 61V42Z"
        fill="#EEF2FF"
        stroke="#111827"
        strokeWidth="4"
        strokeLinejoin="round"
      />

      <circle cx="90" cy="50" r="3" fill="#111827" />

      {/* Cross Line (No Expensive) */}
      <path
        d="M72 36L108 76"
        stroke="#EF4444"
        strokeWidth="5"
        strokeLinecap="round"
      />

      {/* Check Badge */}
      <circle cx="82" cy="84" r="14" fill="#22C55E" />
      <path
        d="M76 84L80 88L88 80"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const IndigoGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-indigo-500/10 rounded-2xl blur-md group-hover:bg-indigo-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="60" cy="60" r="52" fill="#F5F7FF" />

      {/* Settings Gear Background */}
      <path
        d="M60,34 L63,26 L69,28 L68,36 C71.5,37.5 74.5,39.5 77,42 L84,39 L88,44 L81,50 C82.5,53 83.5,56.5 83.9,60 L92,60 L92,66 L83.9,66 C83.5,69.5 82.5,73 81,76 L88,82 L84,87 L77,84 C74.5,86.5 71.5,88.5 68,90 L69,98 L63,100 L60,92 C56.5,92.5 53,92.5 50,92 L47,100 L41,98 L42,90 C38.5,88.5 35.5,86.5 33,84 L26,87 L22,82 L29,76 C27.5,73 26.5,69.5 26.1,66 L18,66 L18,60 L26.1,60 C26.5,56.5 27.5,53 29,50 L22,44 L26,39 L33,42 C35.5,39.5 38.5,37.5 42,36 L41,28 L47,26 L50,34 C53,33.5 56.5,33.5 60,34 Z"
        fill="#EEF2FF"
        stroke="#818cf8"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <circle
        cx="60"
        cy="60"
        r="12"
        fill="#F5F7FF"
        stroke="#818cf8"
        strokeWidth="2.5"
      />

      {/* Crossed Wrench and Screwdriver Group */}
      {/* 1. Screwdriver rotated 45 degrees around center */}
      <g transform="rotate(45 60 60)">
        {/* Metal Shaft */}
        <rect
          x="58"
          y="16"
          width="4"
          height="32"
          fill="#E2E8F0"
          stroke="#111827"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Flat Tip */}
        <line
          x1="55"
          y1="16"
          x2="65"
          y2="16"
          stroke="#111827"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Contoured Handle */}
        <path
          d="M 50,48 C 50,48 48,58 48,78 C 48,83.5 53.5,87 60,87 C 66.5,87 72,83.5 72,78 C 72,58 70,48 70,48 Z"
          fill="#3B82F6"
          stroke="#111827"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Handle Ribs */}
        <line
          x1="55"
          y1="56"
          x2="55"
          y2="76"
          stroke="#1D4ED8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="60"
          y1="54"
          x2="60"
          y2="78"
          stroke="#1D4ED8"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <line
          x1="65"
          y1="56"
          x2="65"
          y2="76"
          stroke="#1D4ED8"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </g>

      {/* 2. Wrench rotated -45 degrees around center */}
      <g transform="rotate(-45 60 60)">
        {/* Handle */}
        <rect
          x="54"
          y="30"
          width="12"
          height="44"
          rx="4"
          fill="#93C5FD"
          stroke="#111827"
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        {/* Bottom Head */}
        <circle
          cx="60"
          cy="74"
          r="9"
          fill="#93C5FD"
          stroke="#111827"
          strokeWidth="3.5"
        />
        <circle
          cx="60"
          cy="74"
          r="3.5"
          fill="#F5F7FF"
          stroke="#111827"
          strokeWidth="2"
        />
        {/* Top Head */}
        <circle
          cx="60"
          cy="26"
          r="15"
          fill="#93C5FD"
          stroke="#111827"
          strokeWidth="3.5"
        />
        {/* Jaw Cutout Mask */}
        <path
          d="M 50,14 L 60,24 L 70,14 L 65,8 L 60,12 L 55,8 Z"
          fill="#F5F7FF"
          stroke="#111827"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </svg>
  </div>
);

const RoseGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-rose-500/10 rounded-2xl blur-md group-hover:bg-rose-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="60" cy="60" r="52" fill="#F8FAFC" />

      {/* Radar Rings */}
      <circle cx="60" cy="60" r="14" stroke="#CBD5E1" strokeWidth="2" />
      <circle cx="60" cy="60" r="28" stroke="#CBD5E1" strokeWidth="2" />
      <circle cx="60" cy="60" r="42" stroke="#CBD5E1" strokeWidth="2" />

      {/* Crosshair */}
      <path d="M60 18V32" stroke="#94A3B8" strokeWidth="2" />
      <path d="M60 88V102" stroke="#94A3B8" strokeWidth="2" />
      <path d="M18 60H32" stroke="#94A3B8" strokeWidth="2" />
      <path d="M88 60H102" stroke="#94A3B8" strokeWidth="2" />

      {/* Radar Sweep */}
      <path
        d="M60 60L88 34"
        stroke="#2563EB"
        strokeWidth="4"
        strokeLinecap="round"
      />

      {/* Live Target */}
      <circle cx="80" cy="40" r="7" fill="#22C55E" />

      <circle
        cx="80"
        cy="40"
        r="12"
        stroke="#22C55E"
        strokeWidth="2"
        opacity="0.35"
      />
    </svg>
  </div>
);

const BlueGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-blue-500/10 rounded-2xl blur-md group-hover:bg-blue-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="60" cy="60" r="54" fill="#F8FAFC" />

      {/* QR Scanner Frame */}
      <path d="M22 22H34V26H26V34H22V22Z" fill="#2563EB" />
      <path d="M98 22H86V26H94V34H98V22Z" fill="#2563EB" />
      <path d="M22 98H34V94H26V86H22V98Z" fill="#2563EB" />
      <path d="M98 98H86V94H94V86H98V98Z" fill="#2563EB" />

      {/* QR Code */}
      <rect x="38" y="20" width="6" height="6" fill="#111827" />
      <rect x="48" y="20" width="6" height="6" fill="#111827" />
      <rect x="58" y="20" width="6" height="6" fill="#111827" />

      <rect x="38" y="30" width="6" height="6" fill="#111827" />
      <rect x="58" y="30" width="6" height="6" fill="#111827" />

      <rect x="38" y="40" width="6" height="6" fill="#111827" />
      <rect x="48" y="40" width="6" height="6" fill="#111827" />
      <rect x="58" y="40" width="6" height="6" fill="#111827" />

      {/* Route */}
      <path
        d="M28 66C40 56 50 72 62 62C72 54 82 58 92 48"
        stroke="#94A3B8"
        strokeWidth="4"
        strokeLinecap="round"
        strokeDasharray="5 5"
      />

      {/* Checkpoints */}
      <circle cx="28" cy="66" r="5" fill="#2563EB" />
      <circle cx="62" cy="62" r="5" fill="#2563EB" />
      <circle cx="92" cy="48" r="5" fill="#2563EB" />

      {/* Checkpoint Verified */}
      <circle cx="92" cy="48" r="12" fill="#22C55E" />

      <path
        d="M87 48L91 52L98 44"
        stroke="white"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Log Sheet */}
      <rect
        x="42"
        y="72"
        width="36"
        height="28"
        rx="4"
        fill="white"
        stroke="#111827"
        strokeWidth="2"
      />

      <path
        d="M50 80H70"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <path
        d="M50 87H66"
        stroke="#94A3B8"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Log Check */}
      <circle cx="78" cy="92" r="10" fill="#22C55E" />

      <path
        d="M74 92L77 95L83 88"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const VioletGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-violet-500/10 rounded-2xl blur-md group-hover:bg-violet-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="60" cy="60" r="54" fill="#F8FAFC" />

      {/* Phone */}
      <rect
        x="35"
        y="18"
        width="50"
        height="78"
        rx="10"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      {/* Face Scan Corners */}
      <path
        d="M45 34V28H51"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M75 28H69"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M75 28V34"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M45 58V64H51"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
      <path
        d="M75 58V64H69"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Employee */}
      <circle cx="60" cy="42" r="8" stroke="#0F172A" strokeWidth="2" />

      <path
        d="M50 58C53 52 67 52 70 58"
        stroke="#0F172A"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Verification Line */}
      <path
        d="M60 96V104"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Geofence */}
      <circle
        cx="60"
        cy="118"
        r="16"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeDasharray="4 4"
      />

      {/* GPS Pin */}
      <path
        d="M60 126C65 126 69 122 69 117C69 112 65 108 60 108C55 108 51 112 51 117C51 122 55 126 60 126Z"
        fill="#2563EB"
      />

      <circle cx="60" cy="117" r="2.5" fill="white" />

      {/* Clock Badge */}
      <circle cx="92" cy="42" r="14" fill="#22C55E" />

      <circle cx="92" cy="42" r="6" stroke="white" strokeWidth="2" />

      <path
        d="M92 42V38"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      <path
        d="M92 42L96 45"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const AmberGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-amber-500/10 rounded-2xl blur-md group-hover:bg-amber-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 120 120"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="60" cy="60" r="54" fill="#F8FAFC" />

      {/* Mobile Device */}
      <rect
        x="32"
        y="18"
        width="56"
        height="84"
        rx="10"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      {/* Photo Area */}
      <rect
        x="40"
        y="28"
        width="40"
        height="24"
        rx="4"
        stroke="#2563EB"
        strokeWidth="2"
      />

      <circle cx="51" cy="37" r="3" fill="#2563EB" />

      <path
        d="M44 48L54 40L62 46L76 34"
        stroke="#2563EB"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Report Lines */}
      <path
        d="M42 62H78"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M42 72H72"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M42 82H66"
        stroke="#94A3B8"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Send Badge */}
      <circle cx="92" cy="88" r="14" fill="#2563EB" />

      <path d="M86 88L98 83L94 94L91 90L86 88Z" fill="white" />

      {/* Success Badge */}
      <circle cx="92" cy="36" r="11" fill="#22C55E" />

      <path
        d="M87 36L91 40L97 32"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </div>
);

const TealGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-teal-500/10 rounded-2xl blur-md group-hover:bg-teal-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="70" cy="70" r="62" fill="#F8FAFC" />

      {/* Monitor */}
      <rect
        x="25"
        y="28"
        width="90"
        height="65"
        rx="8"
        fill="white"
        stroke="#0F172A"
        strokeWidth="3"
      />

      {/* Dashboard Header */}
      <rect x="35" y="38" width="70" height="6" rx="3" fill="#E2E8F0" />

      {/* Map Section */}
      <rect x="35" y="52" width="42" height="28" rx="4" fill="#EFF6FF" />

      <path
        d="M42 72L52 62L60 67L70 58"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <circle cx="52" cy="62" r="2.5" fill="#22C55E" />
      <circle cx="70" cy="58" r="2.5" fill="#22C55E" />

      {/* Analytics Cards */}
      <rect x="83" y="52" width="22" height="10" rx="2" fill="#2563EB" />

      <rect x="83" y="68" width="16" height="6" rx="2" fill="#CBD5E1" />

      {/* Live Status */}
      <circle cx="102" cy="100" r="14" fill="#22C55E" />

      <circle cx="102" cy="100" r="4" fill="white" />

      {/* Monitor Stand */}
      <path
        d="M60 93H80"
        stroke="#0F172A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M70 93V105"
        stroke="#0F172A"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M52 110H88"
        stroke="#0F172A"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const RedGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-red-500/10 rounded-2xl blur-md group-hover:bg-red-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="70" cy="70" r="62" fill="#F8FAFC" />

      {/* Panic Button */}
      <circle
        cx="70"
        cy="70"
        r="28"
        fill="white"
        stroke="#DC2626"
        strokeWidth="3"
      />

      <circle cx="70" cy="70" r="18" fill="#DC2626" />

      {/* Alert Waves */}
      <path
        d="M70 22C92 22 110 40 110 62"
        stroke="#F87171"
        strokeWidth="3"
        strokeLinecap="round"
      />

      <path
        d="M70 14C98 14 122 38 122 66"
        stroke="#FCA5A5"
        strokeWidth="3"
        strokeLinecap="round"
      />

      {/* Exclamation */}
      <path
        d="M70 60V74"
        stroke="white"
        strokeWidth="4"
        strokeLinecap="round"
      />

      <circle cx="70" cy="82" r="2.5" fill="white" />

      {/* Command Center */}
      <rect x="92" y="88" width="24" height="18" rx="4" fill="#2563EB" />

      <path
        d="M98 94H110"
        stroke="white"
        strokeWidth="2"
        strokeLinecap="round"
      />

      {/* Connection */}
      <path
        d="M88 86L96 92"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />
    </svg>
  </div>
);

const SkyGraphic = () => (
  <div className="relative w-16 h-16 flex items-center justify-center">
    <div className="absolute inset-0 bg-sky-500/10 rounded-2xl blur-md group-hover:bg-sky-500/20 transition-all duration-500" />
    <svg
      className="w-14 h-14 relative z-10 group-hover:scale-110 transition-transform duration-500"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Background */}
      <circle cx="70" cy="70" r="62" fill="#F8FAFC" />

      {/* Master Account */}
      <circle
        cx="70"
        cy="70"
        r="18"
        fill="white"
        stroke="#0F172A"
        strokeWidth="3"
      />

      <circle cx="70" cy="64" r="4" fill="#2563EB" />
      <path
        d="M63 77C65 72 75 72 77 77"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Top Property */}
      <rect
        x="58"
        y="16"
        width="24"
        height="24"
        rx="5"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      <path
        d="M63 30L70 24L77 30"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Left Property */}
      <rect
        x="14"
        y="58"
        width="24"
        height="24"
        rx="5"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      <path
        d="M19 72L26 66L33 72"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Right Property */}
      <rect
        x="102"
        y="58"
        width="24"
        height="24"
        rx="5"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      <path
        d="M107 72L114 66L121 72"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Bottom Property */}
      <rect
        x="58"
        y="100"
        width="24"
        height="24"
        rx="5"
        fill="white"
        stroke="#0F172A"
        strokeWidth="2.5"
      />

      <path
        d="M63 114L70 108L77 114"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      {/* Connections */}
      <path
        d="M70 40V52"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M38 70H52"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M88 70H102"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      <path
        d="M70 88V100"
        stroke="#2563EB"
        strokeWidth="2.5"
        strokeLinecap="round"
      />

      {/* Status Dots */}
      <circle cx="70" cy="52" r="3" fill="#22C55E" />
      <circle cx="52" cy="70" r="3" fill="#22C55E" />
      <circle cx="88" cy="70" r="3" fill="#22C55E" />
      <circle cx="70" cy="88" r="3" fill="#22C55E" />
    </svg>
  </div>
);

function FeatureVisual({ accent }: { accent: string }) {
  switch (accent) {
    case "emerald":
      return <EmeraldGraphic />;
    case "indigo":
      return <IndigoGraphic />;
    case "rose":
      return <RoseGraphic />;
    case "blue":
      return <BlueGraphic />;
    case "violet":
      return <VioletGraphic />;
    case "amber":
      return <AmberGraphic />;
    case "teal":
      return <TealGraphic />;
    case "red":
      return <RedGraphic />;
    case "sky":
      return <SkyGraphic />;
    default:
      return null;
  }
}

/* Cursor-following spotlight — updates CSS vars on the hovered card */
function handleSpotlight(e: React.MouseEvent<HTMLDivElement>) {
  const el = e.currentTarget;
  const rect = el.getBoundingClientRect();
  el.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  el.style.setProperty("--my", `${e.clientY - rect.top}px`);
}

function FeatureCard({ feature, index }: { feature: Feature; index: number }) {
  const a = ACCENTS[feature.accent];

  return (
    <motion.div
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.5,
        delay: (index % 3) * 0.07,
        ease: [0.215, 0.61, 0.355, 1],
      }}
      whileHover={{ y: -6 }}
      onMouseMove={handleSpotlight}
      style={{ "--spot": a.spot } as React.CSSProperties}
      className="group relative rounded-[26px] p-[1.5px] bg-gradient-to-b from-slate-200/70 via-slate-100/40 to-slate-200/30 transition-shadow duration-500 shadow-[0_8px_30px_rgba(15,23,42,0.04)] hover:shadow-[0_24px_60px_-12px_rgba(37,99,235,0.16)]"
    >
      {/* Animated gradient border on hover */}
      <span
        className={`pointer-events-none absolute inset-0 rounded-[26px] bg-gradient-to-br ${a.bar} opacity-0 group-hover:opacity-40 transition-opacity duration-500`}
      />

      {/* Card body */}
      <div className="relative h-full overflow-hidden rounded-[25px] bg-white/75 backdrop-blur-md transition-colors duration-500 group-hover:bg-white/95 flex flex-col">
        {/* Sliding top accent bar */}
        <span
          className={`absolute top-0 left-0 z-20 h-[3px] w-0 bg-gradient-to-r ${a.bar} transition-all duration-700 ease-out group-hover:w-full`}
        />

        {/* Cursor-following spotlight */}
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 [background:radial-gradient(420px_circle_at_var(--mx)_var(--my),var(--spot),transparent_55%)]" />

        {/* Ambient corner glow */}
        <div
          className={`pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full ${a.glow} opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100`}
        />

        {/* Faint dotted grid texture */}
        <div className="pointer-events-none absolute inset-0 opacity-[0.04] [background-image:radial-gradient(circle,rgba(15,23,42,0.5)_1px,transparent_1px)] [background-size:18px_18px]" />

        {/* Index watermark */}
        <div
          className={`pointer-events-none absolute right-5 bottom-2 select-none font-mono text-[5.5rem] font-black leading-none text-slate-900/[0.045] transition-all duration-700 ${a.num} group-hover:scale-105`}
        >
          {String(index + 1).padStart(2, "0")}
        </div>

        <div className="relative z-10 flex h-full p-7 md:p-8 gap-3">
          {/* Layered custom premium graphic */}
          <div className="mb-5">
            <div className="transition-transform duration-500 group-hover:-translate-y-1 group-hover:scale-105 w-max">
              <FeatureVisual accent={feature.accent} />
            </div>
          </div>

          {/* Copy */}
          <div>
            <h3 className="font-heading font-bold tracking-tight text-slate-900 mb-2.5 text-lg md:text-xl">
              {feature.title}
            </h3>
            <p className="leading-relaxed font-medium text-slate-600 text-sm md:text-[15px]">
              {feature.desc}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Features() {
  return (
    <section
      id="features"
      className="relative overflow-hidden py-16 md:py-28 bg-gradient-to-br from-[#f8faff] via-[#edf2ff] to-[#e0e6ff] text-slate-900"
    >
      {/* Technical blueprint background watermark */}
      <div
        aria-hidden
        className="absolute inset-0 bg-cover bg-center mix-blend-multiply opacity-[0.12] pointer-events-none"
        style={{ backgroundImage: "url('/features_bg.png')" }}
      />

      {/* Ambient glowing orbs */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-[480px] w-[480px] rounded-full bg-blue-300/20 blur-[140px]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-40 right-1/4 h-[480px] w-[480px] rounded-full bg-indigo-300/15 blur-[140px]"
      />

      <div className="container relative z-10 mx-auto px-4 sm:px-6 max-w-[1520px]">
        <SectionHeader
          eyebrow="Capabilities"
          title={
            <>
              Powerful Features. <br />{" "}
              <span className="text-gradient-animated">Simple Execution.</span>
            </>
          }
          description="Everything you need to run a modern, efficient, and accountable security operation — without the enterprise price tag."
          dark={false}
          align="center"
        />

        {/* Clean, premium symmetrical 3-column grid design */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {FEATURES.map((feature, i) => (
            <FeatureCard key={feature.title} feature={feature} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
