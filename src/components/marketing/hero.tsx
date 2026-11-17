import React from "react";
import type { Variants } from "motion/react";
import Link from "next/link";

import { AnimatedGroup } from "./animated-group";
import TriplePhoneHero from "./triple-phone";

const transitionVariants: { item: Variants } = {
  item: {
    hidden: {
      opacity: 0,
      filter: "blur(12px)",
      y: 12,
    },
    visible: {
      opacity: 1,
      filter: "blur(0px)",
      y: 0,
      transition: {
        type: "spring",
        bounce: 0.3,
        duration: 1.5,
      },
    },
  },
};

const heroContainerVariants: Variants = {
  visible: {
    transition: {
      staggerChildren: 0.14,
      delayChildren: 0.12,
    },
  },
};

export function Hero() {
  return (
    <section className="relative w-full pt-8 md:pt-12 flex flex-col items-center overflow-hidden">
      <AnimatedGroup
        className="flex w-full flex-col items-center"
        variants={{
          container: heroContainerVariants,
          item: transitionVariants.item,
        }}
      >
        {/* Announcement Badge */}
        <div className="flex w-fit items-center gap-2 border border-white/20 bg-navy-dark/60 backdrop-blur-sm p-1.5 text-xs md:text-sm font-medium transition-colors hover:border-lime/50">
          <span className="bg-lime text-navy px-3 py-1 text-[10px] md:text-xs font-bold uppercase tracking-wider">
            RYDA
          </span>
          <span className="text-white/90 pr-2">Bike rental built for students</span>
        </div>

        {/* Headline */}
        <h1 className="mt-6 max-w-4xl px-4 text-center text-4xl font-bold leading-[1.12] tracking-tight text-white drop-shadow-sm md:text-6xl lg:text-7xl">
          Move Around Campus.<br />
          <span className="text-lime">The Easy Way!</span>
        </h1>

        {/* Subtext */}
        <p className="mt-5 max-w-2xl px-4 text-center text-base text-white/90 md:text-lg leading-relaxed">
          Say goodbye to long walks and stressful campus movement. With RYDA, getting around campus is easier, faster and more convenient.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 flex w-full flex-col items-center justify-center gap-4 px-4 sm:w-auto sm:flex-row">
          <Link
            href="#cta"
            className="w-full sm:w-auto min-h-[44px] px-8 py-3 bg-lime text-navy font-bold text-base hover:bg-lime-hover transition-colors flex items-center justify-center shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          >
            Get the app
          </Link>
          <Link
            href="#how-it-works"
            className="w-full sm:w-auto min-h-[44px] px-8 py-3 border border-white/80 text-white font-medium text-base hover:bg-white/10 transition-colors flex items-center justify-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          >
            See how it works
          </Link>
        </div>
      </AnimatedGroup>

      {/* Dashed Divider */}
      <div className="w-full h-10 border-y border-white/20 opacity-30 bg-[repeating-linear-gradient(315deg,currentColor_0,currentColor_1px,transparent_0,transparent_50%)] bg-size-[10px_10px] my-6 text-white" aria-hidden="true"></div>

      {/* Triple Phone Mockup for Ryda App */}
      <div className="w-full flex justify-center -mt-4 relative z-10 -mb-4">
        <TriplePhoneHero
          imageLeftSrc="/images/app-screen-1.png"
          imageLeftAlt="Ryda Campus Map with live stations and available bikes"
          imageCenterSrc="/images/app-screen-2.png"
          imageCenterAlt="Ryda Scan to Unlock smartphone QR scanner screen"
          imageRightSrc="/images/app-screen-3.png"
          imageRightAlt="Ryda active campus ride timer and dashboard"
        />
      </div>

      {/* Bottom fade into white content */}
      <div className="absolute bottom-0 left-0 right-0 h-44 bg-linear-to-t from-white to-transparent z-20 pointer-events-none" aria-hidden="true"></div>
    </section>
  );
}
