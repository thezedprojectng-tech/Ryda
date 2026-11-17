'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Check } from 'lucide-react';

export default function NetworkNewsletter() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <section
      id="network"
      className="relative w-full bg-[#F9F9FB] text-[#061B45] pt-28 pb-16 md:pt-36 md:pb-24 px-6 md:px-12 overflow-hidden"
    >
      <div className="max-w-5xl mx-auto text-center">

        {/* Lime Pill Badge strictly matching reference ("JOIN THE CLUB") */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="inline-flex items-center px-3.5 py-1 rounded-full bg-[#7CFC00] text-[#061B45] text-xs font-bold tracking-wider uppercase mb-6 font-heading"
        >
          Join The Club
        </motion.div>

        {/* Headline strictly matching reference typography & line breaks */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[52px] font-heading font-medium tracking-tight text-[#061B45] max-w-3xl mx-auto leading-[1.12] mb-12 md:mb-16"
        >
          New docks, student passes, campus updates.<br />
          Nothing else.
        </motion.h2>

        {/* Row with Flanking Tilted Photos and Central Pill Input strictly matching reference */}
        <div className="flex items-center justify-center gap-4 sm:gap-8 md:gap-12">

          {/* Left Tilted Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: -10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: -6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="hidden sm:block relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-xl shrink-0 bg-slate-200"
          >
            <Image
              src="/brand/Layer1.png"
              alt="RYDA student commuter"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-cover"
            />
          </motion.div>

          {/* Center Newsletter Form matching reference (#DFE3E8 pill + dark Subscribe button) */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.6 }}
            className="w-full max-w-md relative flex items-center bg-[#DFE3E8] rounded-full p-1.5 pl-6 shadow-sm transition-all focus-within:ring-2 focus-within:ring-[#061B45]/20"
          >
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              required
              className="w-full bg-transparent text-[#061B45] placeholder-[#061B45]/50 text-sm md:text-base outline-none font-sans pr-3"
            />
            <button
              type="submit"
              className="shrink-0 inline-flex items-center justify-center px-6 py-2.5 md:py-3 rounded-full bg-[#061B45] text-white hover:bg-[#7CFC00] hover:text-[#061B45] active:scale-95 transition-all text-xs sm:text-sm font-medium font-sans shadow-sm"
            >
              {submitted ? (
                <span className="flex items-center gap-1.5">
                  <Check className="size-4" />
                  <span>Subscribed</span>
                </span>
              ) : (
                <span>Subscribe</span>
              )}
            </button>
          </motion.form>

          {/* Right Tilted Photo Card */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85, rotate: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotate: 6 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            whileHover={{ rotate: 0, scale: 1.05 }}
            className="hidden sm:block relative w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden shadow-xl shrink-0 bg-slate-200"
          >
            <Image
              src="/brand/Layer2.png"
              alt="RYDA campus smart dock kiosk"
              fill
              sizes="(max-width: 768px) 112px, 128px"
              className="object-cover "
            />
          </motion.div>

        </div>

      </div>
    </section>
  );
}
