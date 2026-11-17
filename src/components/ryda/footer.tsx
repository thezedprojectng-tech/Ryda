'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="w-full bg-[#061B45] text-white pt-16 pb-16 px-6 md:px-12 lg:px-16 border-t border-white/10 font-sans">
      <div className="max-w-[1400px] mx-auto">

        {/* Brand Logo & Tagline with normal logo on dark background */}
        <div className="pb-16 border-b border-white/10">
          <Link href="#" className="inline-block mb-6 group" aria-label="RYDA Home">
            <div className="relative h-12 md:h-14 w-40 md:w-48 flex items-center">
              <Image
                src="/brand/logo icon.png"
                alt="RYDA logo"
                width={160}
                height={50}
                className="object-contain object-left h-10 md:h-12 w-auto"
              />
            </div>
          </Link>

          <p className="text-sm md:text-base text-white/75 max-w-md leading-relaxed">
            RYDA is Nigeria&apos;s premier campus bike-rental mobility system. Built for campus. Ridden for life.
          </p>
        </div>

        {/* Links & Information Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-b border-white/10 text-sm">
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7CFC00] mb-4 font-heading">
              Fleet & Routes
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <Link href="#fleet" className="hover:text-white transition-colors">
                  Campus Fleet
                </Link>
              </li>
              <li>
                <Link href="#how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="#details" className="hover:text-white transition-colors">
                  Bike Details
                </Link>
              </li>
              <li>
                <Link href="#network" className="hover:text-white transition-colors">
                  Dock Stations
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7CFC00] mb-4 font-heading">
              About RYDA
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <Link href="#overview" className="hover:text-white transition-colors">
                  Our Mission
                </Link>
              </li>
              <li>
                <Link href="#safety" className="hover:text-white transition-colors">
                  Safety & Maintenance
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Campus Partnerships
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Student Reps
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7CFC00] mb-4 font-heading">
              Legal & Support
            </h4>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Help Center
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="#" className="hover:text-white transition-colors">
                  Rider Code of Conduct
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#7CFC00] mb-4 font-heading">
              Contact
            </h4>
            <div className="space-y-2 text-white/70">
              <p>support@[EMAIL].ng</p>
              <p>+234 [PHONE]</p>
              <p className="text-xs text-white/50 pt-2">Lagos, Nigeria</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Tagline */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <p>© 2026 RYDA. All rights reserved.</p>
          <p className="text-white/40">Campus Transit, Unlocked · www.ryda.ng</p>
        </div>

      </div>
    </footer>
  );
}
