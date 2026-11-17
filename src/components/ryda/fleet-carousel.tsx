"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export function FleetCarousel() {
  const [startIndex, setStartIndex] = useState(0);

  const fleet = [
    {
      id: "sprint",
      tag: "ROAD",
      name: "Criterium",
      desc: "Fast geometry. Thin tubes. For students who sprint across campus.",
      price: "₦[PRICE] / ride",
      image: "/images/bike-sprint.jpg",
    },
    {
      id: "cruise",
      tag: "ALL-ROAD",
      name: "Dispatch",
      desc: "Rack mounts, fender clearance, and enough steel to carry everything.",
      price: "₦[PRICE] / ride",
      image: "/images/bike-cruise.jpg",
    },
    {
      id: "one",
      tag: "COMMUTE",
      name: "RYDA One",
      desc: "Puncture-proof solid-core tires, solar smart lock, and weather-sealed hub.",
      price: "₦[PRICE] / ride",
      image: "/images/bike-sprint.jpg",
    },
    {
      id: "cargo",
      tag: "UTILITY",
      name: "Carrier",
      desc: "Reinforced front tray, heavy-duty kickstand, and dual cargo straps.",
      price: "₦[PRICE] / ride",
      image: "/images/bike-cruise.jpg",
    },
  ];

  const handlePrev = () => {
    setStartIndex((prev) => (prev === 0 ? fleet.length - 2 : prev - 1));
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev >= fleet.length - 2 ? 0 : prev + 1));
  };

  const visibleFleet = [
    fleet[startIndex % fleet.length],
    fleet[(startIndex + 1) % fleet.length],
  ];

  return (
    <section
      id="fleet"
      className="w-full bg-[#061B45] text-white pt-28 pb-20 px-6 md:px-12 lg:px-16 overflow-hidden"
      aria-labelledby="fleet-title"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Centered Top Badge & Heading strictly matching reference */}
        <motion.div
          className="text-center max-w-2xl mx-auto mb-16 md:mb-20"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="inline-block px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] font-bold text-xs uppercase tracking-wider mb-5 font-heading">
            Frames
          </span>
          <h2
            id="fleet-title"
            className="text-4xl sm:text-5xl md:text-6xl lg:text-[62px] font-heading font-medium tracking-tight text-white leading-[1.08]"
          >
            Three frames.<br />
            Pick your ride.
          </h2>
        </motion.div>

        {/* Cards Carousel Grid strictly matching reference layout */}
        <div className="relative mb-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <AnimatePresence mode="popLayout">
              {visibleFleet.map((item, idx) => (
                <motion.div
                  key={`${item.id}-${startIndex}-${idx}`}
                  layout
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/3.4] rounded-[28px] overflow-hidden bg-gradient-to-b from-[#222834] to-[#111724] border border-white/10 group shadow-2xl"
                >
                  {/* High-Contrast Bike Frame Photo */}
                  <Image
                    src={item.image}
                    alt={item.name}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center transition-transform duration-700 ease-out group-hover:scale-105"
                  />

                  {/* Subtle bottom vignette to ensure typography legibility */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061B45]/90 via-transparent to-transparent pointer-events-none" />

                  {/* Top-Left Electric Lime Pill Tag */}
                  <div className="absolute top-6 left-6 z-10">
                    <span className="px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] text-[11px] font-bold uppercase tracking-wider font-heading">
                      {item.tag}
                    </span>
                  </div>

                  {/* Bottom-Left Information strictly matching reference typography */}
                  <div className="absolute bottom-6 left-6 right-6 z-10 text-left">
                    <h3 className="text-2xl sm:text-3xl font-heading font-medium text-white tracking-tight mb-1.5">
                      {item.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-white/80 max-w-[38ch] leading-relaxed font-sans mb-1">
                      {item.desc}
                    </p>
                    <p className="text-xs text-white/60 font-medium font-sans">
                      {item.price}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Carousel Arrow Navigation Buttons at Bottom-Left strictly matching reference */}
        <div className="flex items-center gap-3">
          <button
            type="button"
            onClick={handlePrev}
            className="size-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFC00]"
            aria-label="Previous frame"
          >
            <ChevronLeft className="size-5" />
          </button>
          <button
            type="button"
            onClick={handleNext}
            className="size-11 rounded-full bg-white/10 hover:bg-white/20 active:scale-95 border border-white/15 text-white flex items-center justify-center transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#7CFC00]"
            aria-label="Next frame"
          >
            <ChevronRight className="size-5" />
          </button>
        </div>

      </div>
    </section>
  );
}
