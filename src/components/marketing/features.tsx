"use client";

import { motion } from "motion/react";
import React from "react";

// Icon 1: Bike Icon (Navy & Lime)
export function BikeFeatureIcon() {
  return (
    <div className="flex items-center justify-center size-20 rounded-full bg-navy/5 border border-navy/15 relative">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-navy"
        aria-hidden="true"
      >
        {/* Back Wheel */}
        <circle cx="12" cy="34" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="12" cy="34" r="2.5" fill="#7CFC00" />
        {/* Front Wheel */}
        <circle cx="36" cy="34" r="8" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="36" cy="34" r="2.5" fill="#7CFC00" />
        {/* Frame */}
        <path
          d="M12 34L20 20H32L36 34"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M20 20L24 34H12"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Seat */}
        <path d="M24 34L17 16" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" />
        <path d="M14 16H21" stroke="#7CFC00" strokeWidth="3" strokeLinecap="round" />
        {/* Handlebars */}
        <path
          d="M32 20L34 13H29"
          stroke="#7CFC00"
          strokeWidth="2.8"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {/* Accent dot */}
      <span className="absolute -top-1 -right-1 size-4 rounded-full bg-lime border-2 border-white shadow-xs"></span>
    </div>
  );
}

// Icon 2: Scan & Unlock Icon (Navy & Lime)
export function ScanFeatureIcon() {
  return (
    <div className="flex items-center justify-center size-20 rounded-full bg-navy/5 border border-navy/15 relative">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-navy"
        aria-hidden="true"
      >
        {/* Scan Reticle */}
        <path d="M10 18V12C10 10.8954 10.8954 10 12 10H18" stroke="#7CFC00" strokeWidth="3" strokeLinecap="round" />
        <path d="M30 10H36C37.1046 10 38 10.8954 38 12V18" stroke="#7CFC00" strokeWidth="3" strokeLinecap="round" />
        <path d="M38 30V36C38 37.1046 37.1046 38 36 38H30" stroke="#7CFC00" strokeWidth="3" strokeLinecap="round" />
        <path d="M18 38H12C10.8954 38 10 37.1046 10 36V30" stroke="#7CFC00" strokeWidth="3" strokeLinecap="round" />
        
        {/* Phone / Scanner Screen */}
        <rect x="17" y="15" width="14" height="18" rx="3" stroke="currentColor" strokeWidth="2" />
        <path d="M22 21H26" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        <circle cx="24" cy="27" r="1.5" fill="#7CFC00" />
      </svg>
      <span className="absolute -top-1 -right-1 size-4 rounded-full bg-lime border-2 border-white shadow-xs"></span>
    </div>
  );
}

// Icon 3: Graduation Cap Icon (Navy & Lime)
export function GraduationCapFeatureIcon() {
  return (
    <div className="flex items-center justify-center size-20 rounded-full bg-navy/5 border border-navy/15 relative">
      <svg
        width="48"
        height="48"
        viewBox="0 0 48 48"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="text-navy"
        aria-hidden="true"
      >
        {/* Cap Top Diamond */}
        <path
          d="M24 10L6 19L24 28L42 19L24 10Z"
          fill="#0A2D6B"
          stroke="#0A2D6B"
          strokeWidth="2"
          strokeLinejoin="round"
        />
        {/* Tassel in Electric Lime */}
        <path d="M37 21.5V31" stroke="#7CFC00" strokeWidth="2.5" strokeLinecap="round" />
        <circle cx="37" cy="32.5" r="2" fill="#7CFC00" />
        {/* Skull Cap underside */}
        <path
          d="M12 22.5V30C12 34 17.5 37 24 37C30.5 37 36 34 36 30V22.5"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
      </svg>
      <span className="absolute -top-1 -right-1 size-4 rounded-full bg-lime border-2 border-white shadow-xs"></span>
    </div>
  );
}

export function Features() {
  return (
    <section id="why-ryda" className="w-full bg-white px-4 py-20 md:px-8 md:py-24" aria-labelledby="why-ryda-heading">
      <div className="mx-auto flex max-w-6xl flex-col items-center">
        {/* Section Header */}
        <div className="text-center max-w-2xl flex flex-col items-center">
          <span className="text-xs uppercase tracking-widest font-semibold text-navy/60 mb-2">
            Why Ryda
          </span>
          <h2 id="why-ryda-heading" className="text-3xl leading-[1.05] tracking-tight text-navy font-bold md:text-5xl">
            Everything You Need For Seamless Campus Transit
          </h2>
          <p className="mt-4 text-base text-navy/70 leading-relaxed">
            Designed specifically around Nigerian university life — making everyday campus travel quick, reliable, and accessible to every student.
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="mt-14 grid w-full grid-cols-1 gap-6 md:grid-cols-3 md:gap-8">
          {/* Card 1: Easy campus transportation */}
          <article className="flex min-h-[440px] flex-col border border-navy/15 bg-white p-8 md:p-9 shadow-sm hover:border-navy/40 transition-colors">
            <div className="mb-6">
              <BikeFeatureIcon />
            </div>

            <h3 className="text-2xl lg:text-[2rem] font-bold leading-tight tracking-tight text-navy">
              Easy campus transportation
            </h3>
            
            <p className="mt-4 text-sm lg:text-[15px] leading-relaxed text-navy/80">
              Get from hostel to lecture hall in minutes. Avoid the exhaustion of trekking across vast campuses under the hot sun, beat morning lecture traffic, and move around freely at your own pace.
            </p>

            <div className="mt-auto pt-6 border-t border-navy/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-navy">Zero carbon, 100% active</span>
              <span className="text-xs font-bold text-navy bg-lime/40 px-2.5 py-1">Fast &amp; Healthy</span>
            </div>
          </article>

          {/* Card 2: Quick and convenient rides (Highlighted) */}
          <article className="flex min-h-[440px] flex-col border-2 border-navy bg-white p-8 md:p-9 shadow-md relative">
            <div className="absolute top-4 right-4 bg-navy text-lime text-[10px] font-bold px-2.5 py-1 tracking-wider uppercase">
              Anytime Mobility
            </div>

            <div className="mb-6">
              <ScanFeatureIcon />
            </div>

            <h3 className="text-2xl lg:text-[2rem] font-bold leading-tight tracking-tight text-navy">
              Quick and convenient rides
            </h3>
            
            <p className="mt-4 text-sm lg:text-[15px] leading-relaxed text-navy/80">
              Scan, ride and return at any station. With dedicated Ryda docking stations located across hostels, lecture complexes, gates, and libraries, smart mobility is always right where you need it.
            </p>

            <div className="mt-auto pt-6 border-t border-navy/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-navy">Unlock in 5 seconds</span>
              <span className="text-xs font-bold text-navy bg-lime/40 px-2.5 py-1">Scan &amp; Go</span>
            </div>
          </article>

          {/* Card 3: Built for student life */}
          <article className="flex min-h-[440px] flex-col border border-navy/15 bg-white p-8 md:p-9 shadow-sm hover:border-navy/40 transition-colors">
            <div className="mb-6">
              <GraduationCapFeatureIcon />
            </div>

            <h3 className="text-2xl lg:text-[2rem] font-bold leading-tight tracking-tight text-navy">
              Built for student life
            </h3>
            
            <p className="mt-4 text-sm lg:text-[15px] leading-relaxed text-navy/80">
              Student pricing, verified with your student ID. Enjoy highly subsidized per-ride rates and term passes designed around real student budgets — no hidden fees, no surge pricing, ever.
            </p>

            <div className="mt-auto pt-6 border-t border-navy/10 flex items-center justify-between">
              <span className="text-xs font-semibold text-navy">Verified with Student ID</span>
              <span className="text-xs font-bold text-navy bg-lime/40 px-2.5 py-1">Student Rates</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
