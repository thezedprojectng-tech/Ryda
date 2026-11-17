import Link from "next/link";
import Image from "next/image";

const footerBrandLinks = [
  { name: "About", href: "#about" },
  { name: "Stations", href: "#why-ryda" },
  { name: "Pricing", href: "#pricing" },
];

const footerSupportLinks = [
  { name: "Help", href: "#" },
  { name: "Contact", href: "#footer" },
  { name: "FAQs", href: "#" },
  { name: "T&S", href: "#" },
  { name: "Privacy", href: "#" },
];

export function Footer() {
  return (
    <footer id="footer" className="w-full bg-white px-6 pb-20 pt-16 md:px-12 lg:px-24 lg:pb-32 lg:pt-20 border-t border-navy/15" aria-label="Site Footer">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,1fr)] lg:gap-20">
          {/* Left Column: Brand, Newsletter, Contact Placeholders */}
          <div className="flex flex-col justify-between gap-10">
            <div>
              <Link href="/" className="inline-block mb-6 min-h-[44px] flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy" aria-label="Ryda Home">
                <Image
                  src="/brand/ryda-logo.svg"
                  alt="Ryda Logo"
                  width={130}
                  height={34}
                  className="h-8 w-auto"
                />
              </Link>

              <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-navy">
                Get campus updates
              </h2>
              <p className="mt-2 text-sm text-navy/70 max-w-md leading-relaxed">
                Stay updated on new campus station openings, semester pass deals, and student rewards.
              </p>

              <form className="mt-6 flex flex-col sm:flex-row max-w-[440px] items-stretch gap-2.5">
                <label className="sr-only" htmlFor="footer-email">
                  Get campus updates email address
                </label>
                <input
                  id="footer-email"
                  type="email"
                  required
                  placeholder="Enter your student email"
                  className="min-h-[44px] flex-1 border border-navy/30 bg-white px-4 text-base text-navy outline-none placeholder:text-navy/40 focus:border-navy focus:ring-1 focus:ring-navy"
                />
                <button
                  type="submit"
                  className="min-h-[44px] bg-navy px-6 text-sm font-bold text-white transition-colors hover:bg-navy-light focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-lime"
                >
                  Subscribe
                </button>
              </form>
            </div>

            {/* Contact Placeholders */}
            <div className="border-t border-navy/10 pt-6 flex flex-col sm:flex-row gap-4 sm:gap-8 text-sm text-navy/80">
              <div className="flex items-center gap-2">
                <span className="font-semibold text-navy">Email:</span>
                <span className="text-navy/70">support@[EMAIL].ng</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-semibold text-navy">Phone:</span>
                <span className="text-navy/70">+234 [PHONE]</span>
              </div>
            </div>

            {/* Copyright */}
            <div>
              <p className="text-sm font-normal text-navy/60">
                © 2026 RYDA. All rights reserved.
              </p>
            </div>
          </div>

          {/* Right Column: Navigation Links */}
          <nav className="grid grid-cols-2 gap-10 lg:gap-14" aria-label="Footer Navigation">
            {/* Brand Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-navy mb-5">
                Brand
              </h3>
              <ul className="space-y-3">
                {footerBrandLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="min-h-[44px] inline-flex items-center text-base md:text-lg font-medium text-navy/70 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Support Links */}
            <div>
              <h3 className="text-xl md:text-2xl font-bold tracking-tight text-navy mb-5">
                Support
              </h3>
              <ul className="space-y-3">
                {footerSupportLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="min-h-[44px] inline-flex items-center text-base md:text-lg font-medium text-navy/70 transition-colors hover:text-navy focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
        </div>
      </div>
    </footer>
  );
}
