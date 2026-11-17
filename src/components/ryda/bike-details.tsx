"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function BikeDetails() {
  const specs = [
    { value: "₦[PRICE]", label: "Starting per ride" },
    { value: "28", label: "Active campus docks" },
    { value: "14 km/h", label: "Average cruise speed" },
    { value: "Lifetime", label: "Frame reliability" },
  ];

  return (
    <section
      id="details"
      className="w-full bg-white text-[#061B45] pt-24 pb-28 md:pt-32 md:pb-36 px-6 md:px-12 overflow-hidden"
      aria-labelledby="details-title"
    >
      <div className="max-w-[1300px] mx-auto text-center">

        {/* Centered Header strictly matching reference */}
        <motion.div
          className="max-w-2xl mx-auto mb-10 md:mb-14"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] font-bold text-xs uppercase tracking-wider mb-5 font-heading">
            Details
          </span>
          <h2
            id="details-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[68px] font-heading font-medium tracking-tight text-[#061B45] leading-[1.05]"
          >
            It&apos;s all about<br />
            details
          </h2>
        </motion.div>

        {/* Central Bicycle Graphic with soft bottom gradient fade strictly matching reference */}
        <motion.div
          className="relative w-full max-w-[1050px] mx-auto aspect-[16/9] mb-8 md:mb-12"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-40px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <Image
            src="/brand/layer1.png"
            alt="Ryda precision commuter bicycle side profile view"
            fill
            sizes="(max-width: 1024px) 100vw, 1050px"
            className="object-contain rounded"
          />
          {/* Bottom fade into white strictly matching reference */}
          <div className="absolute inset-x-0 bottom-0 h-36 md:h-48 bg-gradient-to-t from-white md:via-white/80 to-transparent pointer-events-none" />
        </motion.div>

        {/* 4-Column Metric / Spec Counters strictly matching reference (left-aligned per column, no border line) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12 max-w-[1050px] mx-auto">
          {specs.map((spec, i) => (
            <motion.div
              key={spec.label}
              className="flex flex-col items-start text-left"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.5,
                delay: i * 0.1,
                ease: [0.16, 1, 0.3, 1],
              }}
            >
              <span className="font-heading font-medium text-3xl sm:text-4xl md:text-[44px] text-[#061B45] tracking-tight mb-2">
                {spec.value}
              </span>
              <span className="text-xs sm:text-sm text-[#061B45]/60 font-medium font-sans">
                {spec.label}
              </span>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
