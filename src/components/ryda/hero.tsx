"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";

export function Hero() {
  return (
    <section className="relative w-full min-h-screen flex flex-col justify-end pb-16 md:pb-24 px-6 md:px-12 lg:px-16 overflow-hidden bg-[#061B45] text-white">
      {/* Background Photographic Layer matching Image 1 */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ scale: 1.08, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image
            src="/brand/Layer2.png"
            alt="Scenic campus ridge with cyclist overlooking landscape"
            fill
            priority
            sizes="100vw"
            className="object-cover  md:object-center object-left"
          />
          {/* Subtle atmospheric tint for legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#061B45]/90 via-[#061B45]/50 to-[#061B45]/40" />
        </motion.div>
      </div>

      {/* Main Hero Content Composition strictly matching Image 1 */}
      <div className="relative z-10 max-w-[1400px] mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-end">
          
          {/* Left Column: Bold Display Headline & Meta */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <motion.h1
              initial={{ opacity: 0, y: 35 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
              className="font-heading font-bold text-white tracking-tight text-5xl md:text-6xl lg:text-7xl leading-[0.98] drop-shadow-md mb-8 md:mb-12"
            >
              Built for campus.<br />
              Ridden for life.
            </motion.h1>

            {/* Meta location / year matching Image 1  */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-xs md:text-sm tracking-widest text-white/70 font-mono uppercase"
            >
              LAGOS, NIGERIA
            </motion.div>
          </div>

          {/* Right Column: Subtext & Pill Button matching Image 1 */}
          <div className="lg:col-span-5 flex flex-col items-start lg:items-end text-left lg:text-right pb-1">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              className="flex flex-col items-start lg:items-end gap-6 max-w-[42ch]"
            >
              <p className="text-base md:text-lg text-white/90 leading-relaxed font-sans drop-shadow-sm">
                Steel frames built for campus grounds. Say goodbye to long walks and stressful transit. With RYDA, getting around is easier, faster, and accessible.
              </p>

              {/* White Pill Button matching Image 1 */}
              <Link
                href="#fleet"
                className="min-h-[46px] px-8 py-3 rounded-full bg-white text-[#0A2D6B] hover:bg-[#7CFC00] hover:text-[#0A2D6B] font-semibold text-sm transition-all duration-200 shadow-lg active:scale-95 inline-flex items-center justify-center"
              >
                Explore the lineup
              </Link>
            </motion.div>
          </div>

        </div>

        
      </div>
    </section>
  );
}
