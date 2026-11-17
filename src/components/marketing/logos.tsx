"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

const campusItems = [
  { code: "UNILAG", name: "[UNIVERSITY NAME] • Lagos", status: "Active Stations" },
  { code: "UI", name: "[UNIVERSITY NAME] • Ibadan", status: "Active Stations" },
  { code: "OAU", name: "[UNIVERSITY NAME] • Ile-Ife", status: "Active Stations" },
  { code: "UNN", name: "[UNIVERSITY NAME] • Nsukka", status: "Active Stations" },
  { code: "ABU", name: "[UNIVERSITY NAME] • Zaria", status: "Active Stations" },
  { code: "FUTA", name: "[UNIVERSITY NAME] • Akure", status: "Active Stations" },
];

const sectionVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
      delayChildren: 0.08,
    },
  },
};

const fadeUpVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(8px)",
    y: 12,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1,
    },
  },
};

const dividerVariants: Variants = {
  hidden: {
    opacity: 0,
    scaleX: 0.96,
  },
  visible: {
    opacity: 1,
    scaleX: 1,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function Logos() {
  return (
    <motion.section
      className="w-full bg-transparent flex flex-col items-center pt-20 pb-16 z-20 relative"
      variants={sectionVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      aria-label="Campuses"
    >
      <motion.div className="flex flex-col items-center gap-2 mb-10 px-4" variants={fadeUpVariants}>
        <span className="text-xs uppercase tracking-widest font-semibold text-navy/60">
          Campus Network
        </span>
        <h2 className="text-center text-lg md:text-xl font-semibold text-navy tracking-tight">
          Available on campuses across Nigeria
        </h2>
      </motion.div>

      <div className="w-full flex flex-col">
        {/* Top Dashed Divider */}
        <motion.div
          className="w-full h-6 border-t border-navy/15 relative overflow-hidden origin-center"
          variants={dividerVariants}
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-navy"></div>
        </motion.div>

        {/* Campuses Container */}
        <div className="w-full border-y border-navy/15 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 divide-x divide-y lg:divide-y-0 divide-navy/15 bg-white/70 backdrop-blur-sm">
          {campusItems.map((campus, index) => (
            <motion.div
              key={index}
              className="flex min-h-[96px] flex-col items-center justify-center p-4 text-center transition-colors hover:bg-navy/5"
              variants={fadeUpVariants}
            >
              <span className="font-heading font-bold text-base md:text-lg text-navy tracking-tight">
                {campus.code}
              </span>
              <span className="mt-1 text-xs font-medium text-navy/70 line-clamp-1">
                {campus.name}
              </span>
              <span className="mt-1.5 inline-flex items-center gap-1.5 text-[10px] font-semibold text-navy bg-lime/30 px-2 py-0.5 rounded-full">
                <span className="size-1.5 rounded-full bg-navy"></span>
                {campus.status}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Bottom Dashed Divider */}
        <motion.div
          className="w-full h-6 border-b border-navy/15 relative overflow-hidden origin-center"
          variants={dividerVariants}
          aria-hidden="true"
        >
          <div className="absolute inset-0 opacity-10 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] text-navy"></div>
        </motion.div>
      </div>
    </motion.section>
  );
}
