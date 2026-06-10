"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../SectionHeader";

type Step = {
  num: string;
  title: string;
  desc: string;
  image: string;
  alt: string;
  width: number;
  height: number;
};

const STEPS: Step[] = [
  {
    num: "01",
    title: "Download the App",
    desc: "Download the M&M app from Google Play or the App Store.",
    image: "/home-screen.png",
    alt: "M&M mobile app home screen on a smartphone",
    width: 1208,
    height: 2328,
  },
  {
    num: "02",
    title: "Manage Guards & Patrols",
    desc: "Set up routes, checkpoints, and schedules from the central web dashboard.",
    image: "/web-dashboard.png",
    alt: "M&M web dashboard for managing guards, routes and checkpoints",
    width: 2799,
    height: 1636,
  },
  {
    num: "03",
    title: "Monitor in Real-Time",
    desc: "Watch your operation run smoothly with live GPS tracking and instant reporting.",
    image: "/map-screen.png",
    alt: "M&M app live GPS map screen tracking guards in real time",
    width: 1094,
    height: 2208,
  },
];

export default function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-16 md:py-20 bg-gradient-to-b from-white to-secondary/60">
      <div className="container relative mx-auto px-6 max-w-[1280px]">
        <SectionHeader
          eyebrow="Workflow"
          title="How It Works"
          description="Deploy your modern security operation in three simple steps."
          align="center"
        />

        <div className="grid gap-6 md:grid-cols-3">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.num}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              whileHover={{ y: -6 }}
              className="group relative flex flex-col overflow-hidden rounded-2xl border border-border bg-white shadow-sm transition-shadow duration-300 hover:shadow-premium"
            >
              {/* Media preview */}
              <div className="relative flex h-44 items-center justify-center overflow-hidden bg-gradient-to-br from-secondary to-primary/5 px-6 pt-6">
                {/* Step number badge */}
                <span className="absolute left-4 top-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-white text-sm font-bold font-heading text-gradient shadow-md ring-1 ring-border">
                  {step.num}
                </span>
                <Image
                  src={step.image}
                  alt={step.alt}
                  width={step.width}
                  height={step.height}
                  className="max-h-full w-auto translate-y-2 rounded-t-lg object-contain shadow-xl ring-1 ring-black/5 transition-transform duration-300 group-hover:-translate-y-0 group-hover:scale-[1.03]"
                  style={{ imageRendering: "-webkit-optimize-contrast" }}
                />
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-5 md:p-6">
                <h3 className="mb-2 text-xl font-bold font-heading text-foreground">
                  {step.title}
                </h3>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {step.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
