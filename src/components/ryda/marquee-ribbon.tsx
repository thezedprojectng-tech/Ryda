"use client";

import React from "react";
import { motion } from "motion/react";

export function MarqueeRibbon() {
  const phrase = "Built for campus · Ridden for life · ";
  const repeated = Array(12).fill(phrase).join("");

  return (
    <div className="w-full overflow-hidden bg-[#7CFC00] text-[#061B45] py-3.5 md:py-4 select-none relative z-20">
      <motion.div
        className="flex w-max items-center whitespace-nowrap text-lg sm:text-xl md:text-2xl font-heading font-normal tracking-tight"
        animate={{ x: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 25,
        }}
      >
        <span className="pr-2">{repeated}</span>
        <span className="pr-2">{repeated}</span>
      </motion.div>
    </div>
  );
}
