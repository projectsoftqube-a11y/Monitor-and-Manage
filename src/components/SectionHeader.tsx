"use client";

import { motion, Variants } from "framer-motion";
import { ReactNode } from "react";

interface SectionHeaderProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  align?: "center" | "left" | "split";
  dark?: boolean;
  className?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  description,
  align = "center",
  dark = false,
  className = "",
}: SectionHeaderProps) {
  // Motion container and item animation variants
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.215, 0.61, 0.355, 1] as const },
    },
  };

  // Subheading (Eyebrow Badge) Styling
  const badgeClasses = dark
    ? "border border-white/15 bg-white/5 text-white/80 shadow-[0_4px_20px_rgba(255,255,255,0.02)]"
    : "border border-blue-500/15 bg-blue-500/5 text-blue-600 shadow-[0_4px_20px_rgba(37,99,235,0.04)]";

  const dotClasses = dark
    ? "bg-emerald-400 shadow-[0_0_8px_#34d399]"
    : "bg-blue-500 shadow-[0_0_8px_#3b82f6]";

  const dotPingClasses = dark ? "bg-emerald-400" : "bg-blue-500";

  // Heading Styling
  const titleClasses = `text-3xl sm:text-4xl md:text-5xl font-bold font-heading tracking-tight leading-[1.15] ${
    dark ? "text-white" : "text-slate-900"
  }`;

  // Description Styling
  const descClasses = `text-base sm:text-lg leading-relaxed font-medium ${
    dark ? "text-white/60" : "text-slate-600/90"
  }`;

  if (align === "split") {
    return (
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className="w-full mb-8 md:mb-12 flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6"
      >
        <div className="max-w-2xl flex flex-col items-start text-left">
          {/* Eyebrow Badge */}
          <motion.div
            variants={itemVariants}
            className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 ${badgeClasses}`}
          >
            <span className="relative flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotPingClasses}`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${dotClasses}`} />
            </span>
            {eyebrow}
          </motion.div>

          {/* Heading */}
          <motion.h2 variants={itemVariants} className={titleClasses}>
            {title}
          </motion.h2>
        </div>

        {description && (
          <motion.div
            variants={itemVariants}
            className="max-w-xl lg:text-right shrink-0 lg:ml-8"
          >
            <p className={descClasses}>{description}</p>
          </motion.div>
        )}
      </motion.div>
    );
  }

  const isCenter = align === "center";

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      className={`w-full mb-10 flex flex-col ${
        isCenter ? "items-center text-center mx-auto max-w-4xl" : "items-start text-left"
      } ${className}`}
    >
      {/* Eyebrow Badge */}
      <motion.div
        variants={itemVariants}
        className={`inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest backdrop-blur-md mb-4 sm:mb-5 ${badgeClasses}`}
      >
        <span className="relative flex h-2 w-2">
          <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${dotPingClasses}`} />
          <span className={`relative inline-flex rounded-full h-2 w-2 ${dotClasses}`} />
        </span>
        {eyebrow}
      </motion.div>

      {/* Heading */}
      <motion.h2 variants={itemVariants} className={`${titleClasses} mb-4 md:mb-5`}>
        {title}
      </motion.h2>

      {/* Description */}
      {description && (
        <motion.p variants={itemVariants} className={`${descClasses} max-w-2xl`}>
          {description}
        </motion.p>
      )}
    </motion.div>
  );
}
