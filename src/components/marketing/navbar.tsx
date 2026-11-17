"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="flex w-full items-center justify-between py-5 px-4 md:px-8 border-b border-white/20 relative z-40">
      {/* Brand Logo */}
      <Link href="/" className="flex items-center gap-3 min-h-[44px] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime" aria-label="Ryda Home">
        <Image
          src="/brand/ryda-logo-white.svg"
          alt="Ryda Logo"
          width={130}
          height={34}
          priority
          className="h-8 w-auto"
        />
      </Link>

      {/* Desktop Navigation Links */}
      <nav className="hidden md:flex items-center gap-6 lg:gap-8 text-sm lg:text-base font-medium text-white" aria-label="Primary Navigation">
        <Link href="#" className="min-h-[44px] flex items-center hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">
          Home
        </Link>
        <Link href="#how-it-works" className="min-h-[44px] flex items-center hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">
          How it works
        </Link>
        <Link href="#why-ryda" className="min-h-[44px] flex items-center hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">
          Why Ryda
        </Link>
        <Link href="#pricing" className="min-h-[44px] flex items-center hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">
          Pricing
        </Link>
        <Link href="#about" className="min-h-[44px] flex items-center hover:text-lime transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime">
          About
        </Link>
      </nav>

      {/* Action Buttons */}
      <div className="hidden sm:flex items-center gap-3">
        <Link
          href="#footer"
          className="min-h-[44px] px-4 py-2.5 flex items-center justify-center border border-white/60 text-white text-sm font-medium hover:bg-white/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label="Contact RYDA support"
        >
          Contact
        </Link>
        <Link
          href="#cta"
          className="min-h-[44px] px-5 py-2.5 flex items-center justify-center bg-lime text-navy text-sm font-semibold hover:bg-lime-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white"
          aria-label="Get the Ryda app"
        >
          Get the app
        </Link>
      </div>

      {/* Mobile Menu Button */}
      <div className="flex sm:hidden items-center gap-2">
        <Link
          href="#cta"
          className="min-h-[44px] px-3.5 py-2 flex items-center justify-center bg-lime text-navy text-xs font-bold hover:bg-lime-hover transition-colors"
        >
          Get the app
        </Link>
        <button
          type="button"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="min-h-[44px] min-w-[44px] flex items-center justify-center text-white border border-white/30 p-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
          aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileMenuOpen}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {mobileMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Dropdown */}
      {mobileMenuOpen && (
        <div className="absolute top-full left-0 right-0 bg-navy-dark border-b border-white/20 p-6 flex flex-col gap-4 shadow-xl md:hidden z-50">
          <Link
            href="#"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center text-white hover:text-lime font-medium text-base"
          >
            Home
          </Link>
          <Link
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center text-white hover:text-lime font-medium text-base"
          >
            How it works
          </Link>
          <Link
            href="#why-ryda"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center text-white hover:text-lime font-medium text-base"
          >
            Why Ryda
          </Link>
          <Link
            href="#pricing"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center text-white hover:text-lime font-medium text-base"
          >
            Pricing
          </Link>
          <Link
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="min-h-[44px] flex items-center text-white hover:text-lime font-medium text-base"
          >
            About
          </Link>
          <div className="pt-2 flex flex-col gap-2 border-t border-white/10">
            <Link
              href="#footer"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center justify-center border border-white/40 text-white font-medium"
            >
              Contact
            </Link>
            <Link
              href="#cta"
              onClick={() => setMobileMenuOpen(false)}
              className="min-h-[44px] flex items-center justify-center bg-lime text-navy font-bold"
            >
              Get the app
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
