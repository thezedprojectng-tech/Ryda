import { Navbar } from '@/components/ryda/navbar';
import { Hero } from '@/components/ryda/hero';
import { MissionThreeCol } from '@/components/ryda/mission-three-col';
import { FleetCarousel } from '@/components/ryda/fleet-carousel';
import { SplitBanner } from '@/components/ryda/split-banner';
import { HowItWorksCards } from '@/components/ryda/how-it-works-cards';
import { BikeDetails } from '@/components/ryda/bike-details';
import { MarqueeRibbon } from '@/components/ryda/marquee-ribbon';
import { EditorialQuote } from '@/components/ryda/editorial-quote';
import QualityMaintenance from '@/components/ryda/quality-maintenance';
import NetworkNewsletter from '@/components/ryda/network-newsletter';
import Footer from '@/components/ryda/footer';
import { ScrollToTop } from '@/components/ryda/scroll-to-top';

export default function Home() {
  return (
    <div className="min-h-screen w-full bg-[#061B45] text-white flex flex-col font-sans selection:bg-[#7CFC00] selection:text-[#0A2D6B]">
      {/* 1. Header Navigation */}
      <Navbar />

      {/* Main Content Layout */}
      <main className="w-full flex flex-col">
        {/* 2. Hero Section */}
        <Hero />

        {/* 3. Three-Column Mission & Philosophy */}
        <MissionThreeCol />

        {/* 4. Fleet Showcase Carousel */}
        <FleetCarousel />

        {/* 5. Split Statement Motion Banner */}
        <SplitBanner />

        {/* 6. Process / How It Works Cards */}
        <HowItWorksCards />

        {/* 7. Bike Specifications & Details */}
        <BikeDetails />

        {/* 8. Infinite Accent Marquee Ribbon */}
        <MarqueeRibbon />

        {/* 9. Editorial Student Review / Quote */}
        <EditorialQuote />

        {/* 10. Quality & Maintenance Dark Section */}
        <QualityMaintenance />

        {/* 11. Campus Expansion & Newsletter */}
        <NetworkNewsletter />
      </main>

      {/* 12. Footer */}
      <Footer />

      {/* 13. Floating Scroll To Top Button */}
      <ScrollToTop />
    </div>
  );
}
