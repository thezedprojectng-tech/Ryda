"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

const steps = [
  {
    number: "01",
    title: "Scan",
    description: "Find any Ryda bike at a campus station and scan the QR code to unlock.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h.01M17 7h.01M7 17h.01M17 17h.01" strokeWidth="3" />
        <path d="M7 12h10M12 7v10" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Ride",
    description: "Cruise comfortably across campus and reach your lectures or hostel in minutes.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="5.5" cy="17.5" r="3.5" />
        <circle cx="18.5" cy="17.5" r="3.5" />
        <path d="M15 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm-3 11.5L9 11l3-3 3 4h4" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Return",
    description: "Park at any designated Ryda campus station and lock up to end your trip.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
  },
];

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 16 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 0.9,
    },
  },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="w-full bg-white pb-20 pt-8" aria-labelledby="how-it-works-title">
      {/* Top Divider */}
      <div className="w-full h-8 border-y border-navy/15 relative overflow-hidden mb-16" aria-hidden="true">
        <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-navy"></div>
      </div>

      <div className="mx-auto max-w-6xl px-4 md:px-8">
        <div className="text-center max-w-xl mx-auto mb-14">
          <span className="text-xs uppercase tracking-widest font-semibold text-navy/60 mb-2 block">
            Three Simple Steps
          </span>
          <h2 id="how-it-works-title" className="text-3xl md:text-5xl font-bold tracking-tight text-navy">
            How It Works
          </h2>
          <p className="mt-4 text-base text-navy/80 leading-relaxed">
            Unlocking campus freedom takes seconds. Just scan, ride, and return.
          </p>
        </div>

        <motion.ol
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {steps.map((step) => (
            <motion.li
              key={step.number}
              variants={itemVariants}
              className="flex flex-col border border-navy/15 p-8 bg-white relative transition-shadow hover:shadow-md"
            >
              <div className="flex items-center justify-between mb-8">
                <span className="font-heading text-4xl font-extrabold text-navy/20">
                  {step.number}
                </span>
                <div className="size-12 rounded-full bg-navy text-lime flex items-center justify-center">
                  {step.icon}
                </div>
              </div>

              <h3 className="text-2xl font-bold text-navy mb-3 tracking-tight">
                {step.title}
              </h3>
              
              <p className="text-base text-navy/80 leading-relaxed">
                {step.description}
              </p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
