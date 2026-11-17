"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function SplitBanner() {
  return (
    <section className="w-full bg-navy-deep pb-24 px-6 md:px-12">
      <div className="max-w-[1400px] mx-auto">
        <div className="relative w-full min-h-[160px] md:min-h-[200px] rounded-[28px] overflow-hidden border border-white/10 flex items-center justify-between px-8 md:px-16 py-8 shadow-2xl bg-[#040D1E]">

          {/* Background strip */}
          <div className="absolute inset-0 z-0 opacity-40">
            <Image
              src="/images/strip-banner.jpg"
              alt="Ryda bike speed and precision motion frame"
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-navy-deep/60 backdrop-blur-[2px]" />
          </div>

          {/* Left text — slides in from left */}
          <motion.div
            className="relative z-10 text-left"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-heading font-black text-2xl md:text-4xl lg:text-5xl text-white tracking-tight">
              30 seconds to unlock.
            </span>
          </motion.div>

          {/* Right text — slides in from right */}
          <motion.div
            className="relative z-10 text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          >
            <span className="font-heading font-black text-2xl md:text-4xl lg:text-5xl text-white tracking-tight">
              Yours for the semester.
            </span>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
