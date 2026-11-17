"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#overview" },
  { label: "Fleet", href: "#fleet" },
  { label: "How It Works", href: "#how-it-works" },
  { label: "Details", href: "#details" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Navbar: Transparent at top, Dark Island when scrolled to show normal logo clearly */}
      <motion.header
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "pt-3 md:pt-4 px-4 md:px-8 pointer-events-none"
            : "pt-6 md:pt-8 px-6 md:px-12 bg-transparent"
        }`}
      >
        <div
          className={`transition-all duration-300 flex items-center justify-between ${
            scrolled
              ? "pointer-events-auto max-w-[1380px] mx-auto bg-[#061B45]/95 backdrop-blur-xl shadow-2xl border border-white/15 rounded-full py-3 px-6 md:px-10"
              : "max-w-[1400px] mx-auto py-0 px-0"
          }`}
        >
          {/* Logo Area using normal logo icon with clear visibility */}
          <Link href="#" className="flex items-center shrink-0 group" aria-label="RYDA Home">
            <div className="relative h-9 md:h-10 w-28 md:w-32 flex items-center">
              <Image
                src="/brand/logo icon.png"
                alt="RYDA logo"
                width={120}
                height={38}
                priority
                className="object-contain object-left h-8 md:h-9 w-auto"
              />
            </div>
          </Link>

          {/* Center Navigation Links */}
          <nav
            className="hidden md:flex items-center gap-8 lg:gap-10"
            aria-label="Main Navigation"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.label}
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + i * 0.05, duration: 0.4 }}
              >
                <Link
                  href={link.href}
                  className="text-sm font-medium transition-colors duration-200 text-white/90 hover:text-white"
                >
                  {link.label}
                </Link>
              </motion.div>
            ))}
          </nav>

          {/* Right Action Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5, duration: 0.4 }}
            className="hidden md:flex items-center shrink-0"
          >
            <Link
              href="#network"
              className="min-h-[42px] px-6 py-2.5 rounded-full font-medium text-sm transition-all duration-200 shadow-sm flex items-center justify-center bg-white text-[#061B45] hover:bg-[#7CFC00] hover:text-[#061B45]"
            >
              Get the app
            </Link>
          </motion.div>

          {/* Mobile Menu Toggle Button */}
          <button
            type="button"
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden min-h-[44px] min-w-[44px] flex items-center justify-center rounded-full border border-white/20 bg-white/10 text-white transition-colors"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="size-6" /> : <Menu className="size-6" />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Drawer with dark background */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-40 bg-[#061B45]/98 backdrop-blur-2xl flex flex-col justify-between p-8 pt-24 md:hidden"
          >

            <nav className="flex flex-col gap-6" aria-label="Mobile Navigation">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.05, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-2xl font-heading font-bold text-white hover:text-[#7CFC00] transition-colors flex items-center justify-between border-b border-white/10 pb-4"
                  >
                    <span>{link.label}</span>
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="pt-6 border-t border-white/10 flex flex-col gap-3">
              <Link
                href="#network"
                onClick={() => setMobileOpen(false)}
                className="w-full min-h-[50px] rounded-full bg-white text-[#061B45] font-bold text-base flex items-center justify-center shadow-lg hover:bg-[#7CFC00] transition-colors"
              >
                Get the app
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
