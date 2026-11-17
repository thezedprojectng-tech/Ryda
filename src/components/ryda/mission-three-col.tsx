"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";

export function MissionThreeCol() {
  return (
    <section
      id="overview"
      className="w-full bg-white text-[#061B45] py-28 md:py-36 px-6 md:px-12 lg:px-16"
      aria-labelledby="mission-title"
    >
      <div className="max-w-[1360px] mx-auto">

        {/* Centered Header strictly matching reference */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] font-bold text-xs uppercase tracking-wider mb-5 font-heading">
            About
          </span>
          <h2
            id="mission-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-heading font-medium tracking-tight text-[#061B45] leading-[1.08]"
          >
            We make campus transportation.<br />
            Nothing else.
          </h2>
        </motion.div>

        {/* 3-Column Editorial Composition strictly matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 md:gap-8 items-end max-w-[1240px] mx-auto pb-4 md:pb-8">

          {/* Left Column Text aligned to bottom third matching reference */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-end text-left md:pb-6"
            initial={{ opacity: 0, x: -35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm md:text-[15px] text-[#061B45]/70 leading-relaxed font-sans max-w-[28ch]">
              RYDA started on campus with a fleet of bikes and a simple belief: getting to class shouldn&apos;t take an exhausting trek under the sun. Today, our fleet is expanding, but that belief hasn&apos;t changed.
            </p>
          </motion.div>

          {/* Center Column: Tall Portrait Workshop Photo */}
          <motion.div
            className="md:col-span-4 flex justify-center"
            initial={{ opacity: 0, y: 30, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative w-full max-w-[370px] aspect-[3/4.3] rounded-[24px] overflow-hidden shadow-xl bg-slate-100 group">
              <Image
                src="/brand/ryda-designs2.png"
                alt="Precision RYDA bike assembly and maintenance workshop"
                fill
                sizes="(max-width: 768px) 100vw, 360px"
                className="object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </motion.div>

          {/* Right Column Text aligned to bottom third matching reference */}
          <motion.div
            className="md:col-span-4 flex flex-col justify-end text-left md:pb-6 md:pl-4"
            initial={{ opacity: 0, x: 35 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          >
            <p className="text-sm md:text-[15px] text-[#061B45]/70 leading-relaxed font-sans max-w-[28ch]">
              Every bike is built with durable steel — light enough for fast campus sprints, tough enough to last semesters. Hand-checked daily, because that&apos;s the only way to keep students moving right.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
