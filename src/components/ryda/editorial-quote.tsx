"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

export function EditorialQuote() {
  const [activeIndex, setActiveIndex] = useState(0);

  const testimonials = [
    {
      quote: "“Riding with RYDA cut my\n25-minute hostel trek down\nto 4 minutes. Not even close.”",
      name: "James Okafor",
      location: "UNILAG, Lagos",
    },
    {
      quote: "“Sold my old campus bike\nafter two weeks with RYDA.\nNot even close.”",
      name: "Chidinma O.",
      location: "Faculty of Engineering",
    },
    {
      quote: "“Unlocking a dock at the gate\nand arriving before roll call\nis pure magic every morning.”",
      name: "Tunde Bakare",
      location: "Main Campus",
    },
  ];

  return (
    <section className="w-full bg-white text-[#061B45] py-28 md:py-36 px-6 md:px-12 text-center overflow-hidden">
      <div className="max-w-[1000px] mx-auto flex flex-col items-center">

        {/* Lime Pill Badge strictly matching reference ("RIDERS") */}
        <motion.span
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-block px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] font-bold text-xs uppercase tracking-wider mb-8 font-heading"
        >
          Riders
        </motion.span>

        {/* Editorial Headline Quote strictly matching reference typography */}
        <div className="min-h-[160px] md:min-h-[220px] flex items-center justify-center mb-8">
          <AnimatePresence mode="wait">
            <motion.blockquote
              key={activeIndex}
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="font-heading font-medium text-2xl sm:text-4xl md:text-5xl lg:text-[56px] text-[#061B45] leading-[1.15] tracking-tight max-w-[24ch] whitespace-pre-line"
            >
              {testimonials[activeIndex].quote}
            </motion.blockquote>
          </AnimatePresence>
        </div>

        {/* Author Name & Location strictly matching reference layout */}
        <div className="mb-10">
          <p className="text-sm sm:text-base font-semibold text-[#061B45] tracking-normal mb-0.5 font-sans">
            {testimonials[activeIndex].name}
          </p>
          <p className="text-xs sm:text-sm text-[#061B45]/60 font-sans">
            {testimonials[activeIndex].location}
          </p>
        </div>

        {/* Three Interactive Pagination Dots matching reference */}
        <div className="flex items-center justify-center gap-2" role="tablist" aria-label="Testimonials">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setActiveIndex(idx)}
              className={`size-2 rounded-full transition-all duration-200 focus:outline-none ${
                activeIndex === idx
                  ? "bg-[#061B45] scale-110"
                  : "bg-[#CBD5E1] hover:bg-[#94A3B8]"
              }`}
              aria-label={`Slide ${idx + 1}`}
              aria-selected={activeIndex === idx}
              role="tab"
            />
          ))}
        </div>

      </div>
    </section>
  );
}
