'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';

export default function QualityMaintenance() {
  return (
    <section
      id="safety"
      className="relative w-full bg-[#061B45] text-white py-28 md:py-36 px-6 md:px-12 overflow-hidden"
      aria-labelledby="maintenance-title"
    >
      <div className="max-w-[1360px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8 items-center">

          {/* Left Column: Heading strictly matching reference layout */}
          <motion.div
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4"
          >
            <h2
              id="maintenance-title"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-[54px] font-heading font-medium tracking-tight text-white leading-[1.08]"
            >
              Small fleet.<br />
              No shortcuts.
            </h2>
          </motion.div>

          {/* Center Column: Portrait Maintenance Photo */}
          <motion.div
            initial={{ opacity: 0, y: 35, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 flex justify-center"
          >
            <div className="relative w-full max-w-[380px] aspect-[3/3.9] rounded-[24px] overflow-hidden shadow-2xl bg-[#040D1E] group">
              <Image
                src="/brand/ryda-designs3.png"
                alt="RYDA campus mechanic tuning bike brakes and inspecting frame"
                fill
                sizes="(max-width: 768px) 100vw, 380px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column: Editorial Body strictly matching reference typography */}
          <motion.div
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-span-4 md:pl-6"
          >
            <div className="text-white/75 text-sm md:text-base leading-relaxed font-sans max-w-[34ch] space-y-4">
              <p>
                RYDA is dedicated campus mobility for Nigerian universities. Every bicycle is hand-inspected every morning. We check brakes, tires, and solar-charging smart locks before your first class.
              </p>
              <p className="text-white font-medium">
                No compromises.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
