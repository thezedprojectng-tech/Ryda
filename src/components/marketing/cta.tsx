"use client";

import React from "react";
import { motion, type Variants } from "motion/react";

export const GooglePlayBadge = () => (
  <div className="flex min-h-[48px] items-center gap-3 bg-black border border-white/20 px-4 py-2 hover:border-lime transition-colors">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3.6 1.4L13.8 11.6L3.6 21.8C3.2 21.3 3 20.6 3 19.8V3.4C3 2.6 3.2 1.9 3.6 1.4Z" fill="#2196F3"/>
      <path d="M17.2 8.2L13.8 11.6L3.6 1.4C4.1 1.1 4.7 1 5.3 1.3L17.2 8.2Z" fill="#4CAF50"/>
      <path d="M17.2 15L5.3 21.9C4.7 22.2 4.1 22.1 3.6 21.8L13.8 11.6L17.2 15Z" fill="#F44336"/>
      <path d="M21 10L17.2 8.2L13.8 11.6L17.2 15L21 13.2C21.7 12.8 22 12.2 22 11.6C22 11 21.7 10.4 21 10Z" fill="#FFEB3B"/>
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[10px] uppercase tracking-wider text-white/70 leading-none">GET IT ON</span>
      <span className="text-sm font-semibold text-white leading-tight font-heading">Google Play</span>
    </div>
  </div>
);

export const AppStoreBadge = () => (
  <div className="flex min-h-[48px] items-center gap-3 bg-black border border-white/20 px-4 py-2 hover:border-lime transition-colors">
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M18.7 19.5C17.7 21 16.6 22.4 15 22.4C13.5 22.4 13 21.5 11.3 21.5C9.5 21.5 9 22.4 7.5 22.4C6 22.4 4.8 20.8 3.8 19.3C1.8 16.4 0.3 11.2 2.4 7.6C3.4 5.8 5.2 4.7 7.1 4.7C8.6 4.7 9.8 5.7 10.7 5.7C11.6 5.7 13.1 4.5 14.8 4.5C15.6 4.5 17.6 4.8 18.9 6.7C18.8 6.8 16.6 8 16.6 10.7C16.6 13.9 19.4 14.9 19.5 15C19.5 15.1 19.1 16.5 18.7 19.5ZM13.8 3C14.5 2.1 15 0.9 14.8 0C13.8 0.1 12.5 0.7 11.8 1.6C11.2 2.4 10.7 3.6 10.9 4.7C12.1 4.8 13.2 3.9 13.8 3Z" fill="#FFFFFF"/>
    </svg>
    <div className="flex flex-col text-left">
      <span className="text-[10px] uppercase tracking-wider text-white/70 leading-none">Download on the</span>
      <span className="text-sm font-semibold text-white leading-tight font-heading">App Store</span>
    </div>
  </div>
);

const ctaContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.08,
    },
  },
};

const ctaItemVariants: Variants = {
  hidden: {
    opacity: 0,
    filter: "blur(12px)",
    y: 18,
  },
  visible: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.24,
      duration: 1.25,
    },
  },
};

export function CTA() {
  return (
    <section id="cta" className="relative w-full flex flex-col items-center justify-center py-28 md:py-36 overflow-hidden" aria-labelledby="cta-heading">
      {/* Full-width University Navy gradient background */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[100vw] h-full z-[-1]"
        style={{
          background: "linear-gradient(180deg, #0A2D6B 0%, #0E3B8C 50%, #061D47 100%)",
        }}
        aria-hidden="true"
      />

      <motion.div
        className="mx-auto flex w-full max-w-4xl flex-col items-center justify-center px-4 md:px-8 z-10 text-center"
        variants={ctaContainerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.45 }}
      >
        <motion.span
          variants={ctaItemVariants}
          className="text-xs uppercase tracking-widest font-semibold text-lime mb-3"
        >
          Campus Transit, Unlocked
        </motion.span>

        <motion.h2
          id="cta-heading"
          className="text-center text-4xl font-bold tracking-tight text-white drop-shadow-sm md:text-6xl lg:text-7xl mb-6"
          variants={ctaItemVariants}
        >
          Ready to ride?
        </motion.h2>

        <motion.p
          variants={ctaItemVariants}
          className="text-base md:text-lg text-white/85 max-w-xl mb-10 leading-relaxed"
        >
          Download RYDA now, locate your nearest campus dock, and start moving around the easy way.
        </motion.p>

        <motion.div
          variants={ctaItemVariants}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
        >
          <a
            href="#"
            className="w-full sm:w-auto min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Download RYDA on the Apple App Store"
          >
            <AppStoreBadge />
          </a>
          <a
            href="#"
            className="w-full sm:w-auto min-h-[48px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
            aria-label="Download RYDA on the Google Play Store"
          >
            <GooglePlayBadge />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
}
