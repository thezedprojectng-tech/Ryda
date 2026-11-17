"use client";

import React from "react";
import { motion } from "motion/react";
import { ScanLine, Zap, PackageCheck } from "lucide-react";

export function HowItWorksCards() {
  const steps = [
    {
      icon: ScanLine,
      title: "Scan",
      desc: "Locate any RYDA bike at an active campus dock and scan the QR code with your phone to unlock in seconds.",
    },
    {
      icon: Zap,
      title: "Ride",
      desc: "Glide smoothly across campus avenues, bypass slow walking queues, and arrive at lectures on time.",
    },
    {
      icon: PackageCheck,
      title: "Return",
      desc: "Park at any station near your hostel or faculty, engage the smart lock, and end your trip with one tap.",
    },
  ];

  return (
    <section
      id="how-it-works"
      className="w-full bg-[#F9F9FB] text-[#061B45] py-24 md:py-36 px-6 md:px-12 lg:px-16"
      aria-labelledby="process-title"
    >
      <div className="max-w-[1400px] mx-auto">

        {/* Top Header strictly matching reference layout: offset to right side */}
        <div className="grid grid-cols-1 md:grid-cols-12 mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="md:col-start-7 md:col-span-6 flex flex-col items-start"
          >
            {/* Electric Lime Process Badge */}
            <span className="inline-block px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] font-bold text-xs uppercase tracking-wider mb-5">
              Process
            </span>

            {/* Asymmetrical Editorial Heading matching reference */}
            <h2
              id="process-title"
              className="text-3xl sm:text-4xl lg:text-[46px] font-heading font-medium tracking-tight text-[#061B45] leading-[1.12]"
            >
              How 3 simple steps<br />
              make RYDA the only<br />
              transit you&apos;ll ever need.
            </h2>
          </motion.div>
        </div>

        {/* 3 Boxed Cards Grid strictly matching reference */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{
                  duration: 0.65,
                  delay: i * 0.12,
                  ease: [0.16, 1, 0.3, 1],
                }}
                whileHover={{ y: -4 }}
                className="bg-[#DFE3E8] text-[#061B45] rounded-[28px] p-8 md:p-10 flex flex-col justify-between min-h-[360px] md:min-h-[400px] transition-shadow hover:shadow-md"
              >
                {/* Top-Left Outline Icon */}
                <div>
                  <Icon
                    className="size-7 md:size-8 text-[#061B45]"
                    strokeWidth={1.8}
                  />
                </div>

                {/* Bottom Content: Title & Description */}
                <div>
                  <h3 className="text-2xl md:text-[28px] font-heading font-medium text-[#061B45] tracking-tight mb-2.5">
                    {step.title}
                  </h3>
                  <p className="text-sm md:text-[15px] text-[#061B45]/75 leading-relaxed font-sans max-w-[30ch]">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
