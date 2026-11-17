import React from "react";

export function About() {
  return (
    <section id="about" className="w-full bg-white px-4 py-20 md:px-8 md:py-24" aria-labelledby="about-heading">
      <div className="mx-auto max-w-4xl border border-navy/15 bg-white p-8 md:p-14 shadow-sm relative overflow-hidden">
        {/* Subtle decorative background bike watermark */}
        <div className="absolute -right-10 -bottom-10 opacity-5 pointer-events-none select-none text-navy" aria-hidden="true">
          <svg width="240" height="240" viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="2">
            <circle cx="12" cy="34" r="8" />
            <circle cx="36" cy="34" r="8" />
            <path d="M12 34L20 20H32L36 34" />
            <path d="M20 20L24 34H12" />
            <path d="M24 34L17 16H21" />
            <path d="M32 20L34 13H29" />
          </svg>
        </div>

        <div className="flex flex-col items-start gap-6 relative z-10">
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-lime"></span>
            <span className="text-xs uppercase tracking-widest font-semibold text-navy/70">
              Our Mission
            </span>
          </div>

          <h2 id="about-heading" className="text-3xl md:text-5xl font-bold tracking-tight text-navy leading-tight">
            Discover Campus Mobility with RYDA
          </h2>

          <p className="text-base md:text-xl text-navy/80 leading-relaxed max-w-3xl">
            We are dedicated to making campus transportation easier, faster, safer and more convenient through accessible bicycle mobility solutions designed around student life.
          </p>

          {/* Lime highlight line (Using Navy container with Electric Lime text following the contrast rule) */}
          <div className="mt-4 inline-flex items-center gap-3 bg-navy px-5 py-3 rounded-none border-l-4 border-lime shadow-xs">
            <span className="text-lime font-heading font-bold text-sm md:text-base tracking-wide">
              RYDA – Campus Transit, Unlocked.
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
