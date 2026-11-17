const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function generateAllReferencePhotos() {
  const imagesDir = path.join(__dirname, "../public/images");

  // 1. Hero Full-Bleed Outdoor Panoramic Landscape with Cyclist
  // Similar to the top hero in the reference image (cyclist overlooking scenic mountains/campus ridge)
  const heroLandscapeSvg = `
  <svg width="1920" height="1080" viewBox="0 0 1920 1080" fill="none" xmlns="http://www.w3.org/2000/svg">
    <defs>
      <linearGradient id="sky" x1="960" y1="0" x2="960" y2="700" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#4B779A" />
        <stop offset="40%" stop-color="#8BB0C9" />
        <stop offset="70%" stop-color="#CBDCE6" />
        <stop offset="100%" stop-color="#EAF1F5" />
      </linearGradient>
      <linearGradient id="snowMount" x1="1400" y1="120" x2="1400" y2="500" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="60%" stop-color="#D7E3EC" />
        <stop offset="100%" stop-color="#6F8898" />
      </linearGradient>
      <linearGradient id="hills" x1="960" y1="400" x2="960" y2="850" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#2D4D3A" />
        <stop offset="50%" stop-color="#1F3628" />
        <stop offset="100%" stop-color="#0E1D15" />
      </linearGradient>
      <linearGradient id="cliff" x1="300" y1="200" x2="300" y2="900" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#4A453E" />
        <stop offset="40%" stop-color="#322E29" />
        <stop offset="100%" stop-color="#181512" />
      </linearGradient>
      <linearGradient id="darkOverlay" x1="0" y1="0" x2="0" y2="1080" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#061B45" stop-opacity="0.4" />
        <stop offset="70%" stop-color="#061B45" stop-opacity="0.2" />
        <stop offset="100%" stop-color="#061B45" stop-opacity="0.85" />
      </linearGradient>
    </defs>

    <!-- Sky -->
    <rect width="1920" height="1080" fill="url(#sky)" />

    <!-- Distant Snow Mountain -->
    <path d="M900 480 Q1300 120 1480 150 Q1620 320 1920 450 L1920 700 L900 700 Z" fill="url(#snowMount)" />
    <!-- Snow peak texture -->
    <path d="M1300 240 L1400 140 L1480 150 L1560 260 L1490 280 L1440 220 L1390 290 Z" fill="#FFFFFF" opacity="0.9" />

    <!-- Green Campus Hills & Valley -->
    <path d="M600 550 Q1100 380 1920 480 L1920 1080 L600 1080 Z" fill="url(#hills)" />
    <path d="M750 620 Q1350 480 1920 580 L1920 1080 L750 1080 Z" fill="#182E22" />

    <!-- Dramatic Rocky Ridge / Overlook (Left Foreground) -->
    <path d="M0 260 Q280 230 450 250 Q480 290 490 380 Q430 460 460 580 Q420 720 480 900 L490 1080 L0 1080 Z" fill="url(#cliff)" />
    <!-- Rock ledge texture -->
    <path d="M220 250 L280 340 L380 350 L460 250 Z" fill="#3B3630" />
    <path d="M310 380 L390 490 L450 460 Z" fill="#25221E" />

    <!-- Cyclist on the Ridge -->
    <g transform="translate(260, 60)">
      <!-- Bicycle -->
      <!-- Wheels -->
      <circle cx="60" cy="160" r="38" stroke="#111" stroke-width="7" />
      <circle cx="170" cy="160" r="38" stroke="#111" stroke-width="7" />
      <!-- Frame -->
      <path d="M60 160 L105 160 L145 105 L95 105 Z" fill="none" stroke="#111" stroke-width="8" stroke-linejoin="round" />
      <path d="M105 160 L90 85" stroke="#111" stroke-width="8" stroke-linecap="round" />
      <path d="M170 160 L140 80" stroke="#111" stroke-width="8" stroke-linecap="round" />
      <!-- Handlebar -->
      <path d="M140 80 L135 65 H155" stroke="#111" stroke-width="7" stroke-linecap="round" />
      <!-- Saddle -->
      <path d="M75 80 H105" stroke="#111" stroke-width="8" stroke-linecap="round" />

      <!-- Rider Silhouette -->
      <!-- Legs -->
      <path d="M92 85 L115 125 L105 160" stroke="#1F2937" stroke-width="12" stroke-linecap="round" stroke-linejoin="round" fill="none" />
      <!-- Torso -->
      <path d="M92 85 L115 45" stroke="#1F2937" stroke-width="16" stroke-linecap="round" />
      <!-- Arms -->
      <path d="M112 50 L138 75" stroke="#1F2937" stroke-width="10" stroke-linecap="round" />
      <!-- Head with Helmet -->
      <ellipse cx="124" cy="30" rx="14" ry="12" fill="#1F2937" />
      <path d="M112 28 Q125 15 142 26 Z" fill="#7CFC00" />
    </g>

    <!-- Deep Navy Cinematic Overlay for contrast & RYDA mood -->
    <rect width="1920" height="1080" fill="url(#darkOverlay)" />
  </svg>
  `;

  // 2. Workshop / Assembly Photo (Section 3 center vertical photo)
  const workshopSvg = `
  <svg width="800" height="1100" viewBox="0 0 800 1100" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="1100" fill="#1E293B" />
    <defs>
      <linearGradient id="warmLight" x1="400" y1="0" x2="400" y2="1100" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#475569" />
        <stop offset="50%" stop-color="#334155" />
        <stop offset="100%" stop-color="#0F172A" />
      </linearGradient>
    </defs>
    <rect width="800" height="1100" fill="url(#warmLight)" />

    <!-- Hanging Bike Frames in Workshop Ceiling -->
    <g opacity="0.6" stroke="#0A2D6B" stroke-width="8" fill="none">
      <path d="M100 100 L250 100 L320 220 L180 220 Z" />
      <path d="M400 80 L550 80 L620 200 L480 200 Z" />
      <path d="M600 120 L750 120 L820 240 L680 240 Z" />
    </g>

    <!-- Workshop Lamp Glowing -->
    <circle cx="400" cy="240" r="160" fill="#FEF08A" opacity="0.15" />
    <circle cx="400" cy="240" r="70" fill="#FEF08A" opacity="0.3" />
    <rect x="370" y="0" width="60" height="180" fill="#0F172A" />
    <path d="M340 180 L460 180 L490 220 L310 220 Z" fill="#334155" />

    <!-- Mechanic Working at Stand -->
    <g transform="translate(180, 360)">
      <!-- Bike on Stand -->
      <rect x="220" y="100" width="18" height="400" fill="#64748B" />
      <rect x="180" y="480" width="100" height="20" fill="#334155" />
      
      <!-- Precision Navy Bike Frame -->
      <path d="M80 220 L240 220 L380 90 L200 90 Z" fill="none" stroke="#0A2D6B" stroke-width="22" stroke-linejoin="round" />
      <path d="M240 220 L180 30" stroke="#0A2D6B" stroke-width="22" stroke-linecap="round" />
      <path d="M380 90 L420 220" stroke="#0A2D6B" stroke-width="22" stroke-linecap="round" />
      <!-- Electric Lime branding stripe -->
      <line x1="220" y1="90" x2="360" y2="90" stroke="#7CFC00" stroke-width="8" stroke-linecap="round" />

      <!-- Bike Wheels -->
      <circle cx="80" cy="220" r="85" stroke="#0F172A" stroke-width="14" fill="#0A2D6B" fill-opacity="0.1" />
      <circle cx="420" cy="220" r="85" stroke="#0F172A" stroke-width="14" fill="#0A2D6B" fill-opacity="0.1" />

      <!-- Technician Figure Inspecting Alignment -->
      <path d="M280 260 Q340 160 380 180 L400 360 L260 360 Z" fill="#061B45" />
      <ellipse cx="370" cy="140" rx="30" ry="38" fill="#8D5524" />
      <!-- Tool in hand -->
      <path d="M320 220 L360 210" stroke="#94A3B8" stroke-width="8" stroke-linecap="round" />
    </g>

    <!-- Warm atmospheric gradient on ground -->
    <rect y="900" width="800" height="200" fill="#020617" opacity="0.7" />
  </svg>
  `;

  // 3. Bike Model Card 1: Precision Track / Road Bike Closeup
  const bikeModel1Svg = `
  <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="900" fill="#0A1832" />
    <defs>
      <linearGradient id="cardGrad1" x1="0" y1="0" x2="900" y2="900" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#122B55" />
        <stop offset="100%" stop-color="#061B45" />
      </linearGradient>
    </defs>
    <rect width="900" height="900" fill="url(#cardGrad1)" />

    <!-- Bicycle Frame Dramatic Studio Angle -->
    <g transform="translate(100, 160)">
      <!-- Wheels with Deep Aero Rims -->
      <circle cx="160" cy="460" r="210" stroke="#050C1A" stroke-width="36" fill="#061B45" fill-opacity="0.2" />
      <circle cx="160" cy="460" r="185" stroke="#7CFC00" stroke-width="4" stroke-dasharray="14 10" />
      <circle cx="680" cy="460" r="210" stroke="#050C1A" stroke-width="36" fill="#061B45" fill-opacity="0.2" />
      <circle cx="680" cy="460" r="185" stroke="#7CFC00" stroke-width="4" stroke-dasharray="14 10" />

      <!-- Minimalist Aerodynamic Navy Frame -->
      <path d="M160 460 L380 460 L620 220 L270 220 Z" fill="none" stroke="#0A2D6B" stroke-width="34" stroke-linejoin="round" />
      <path d="M380 460 L270 120" stroke="#0A2D6B" stroke-width="34" stroke-linecap="round" />
      <path d="M680 460 L610 120" stroke="#0A2D6B" stroke-width="34" stroke-linecap="round" />

      <!-- Drop Handlebars -->
      <path d="M610 120 L640 80 L670 140 Q675 180 650 190" fill="none" stroke="#0F172A" stroke-width="22" stroke-linecap="round" stroke-linejoin="round" />
      
      <!-- Lime Brand Decal -->
      <path d="M300 220 L580 220" stroke="#7CFC00" stroke-width="12" stroke-linecap="round" />
      <text x="440" y="210" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="900" font-size="28" fill="#FFFFFF">RYDA SPRINT</text>

      <!-- Saddle -->
      <path d="M210 110 Q280 85 340 110 Q290 140 240 140 Z" fill="#050C1A" stroke="#7CFC00" stroke-width="4" />
    </g>

    <!-- Studio Floor Reflection -->
    <rect y="780" width="900" height="120" fill="#040D1E" opacity="0.9" />
  </svg>
  `;

  // 4. Bike Model Card 2: Urban Campus Cruiser Closeup
  const bikeModel2Svg = `
  <svg width="900" height="900" viewBox="0 0 900 900" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="900" height="900" fill="#08142A" />
    <defs>
      <linearGradient id="cardGrad2" x1="900" y1="0" x2="0" y2="900" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#0E244C" />
        <stop offset="100%" stop-color="#061B45" />
      </linearGradient>
    </defs>
    <rect width="900" height="900" fill="url(#cardGrad2)" />

    <!-- Bicycle Front / 3/4 Perspective -->
    <g transform="translate(180, 100)">
      <!-- Front Wheel Big in view -->
      <ellipse cx="260" cy="480" rx="190" ry="240" stroke="#050C1A" stroke-width="36" fill="#0A2D6B" fill-opacity="0.1" />
      <ellipse cx="260" cy="480" rx="168" ry="215" stroke="#7CFC00" stroke-width="4" stroke-dasharray="14 10" />

      <!-- Fork and Headtube -->
      <path d="M260 480 L290 180" stroke="#0A2D6B" stroke-width="38" stroke-linecap="round" />
      <path d="M290 180 L320 80" stroke="#0A2D6B" stroke-width="42" stroke-linecap="round" />

      <!-- Swept-back Urban Cruiser Handlebars with grips -->
      <path d="M320 80 L180 50 Q130 50 140 100" fill="none" stroke="#64748B" stroke-width="24" stroke-linecap="round" />
      <path d="M320 80 L460 50 Q510 50 500 100" fill="none" stroke="#64748B" stroke-width="24" stroke-linecap="round" />
      <!-- Grips -->
      <rect x="125" y="85" width="26" height="60" rx="12" fill="#7CFC00" />
      <rect x="488" y="85" width="26" height="60" rx="12" fill="#7CFC00" />

      <!-- Front Smart LED Headlamp -->
      <circle cx="295" cy="190" r="34" fill="#0A2D6B" stroke="#7CFC00" stroke-width="4" />
      <circle cx="295" cy="190" r="20" fill="#FFFFFF" />

      <!-- Downtube heading away -->
      <path d="M290 180 L480 340" stroke="#0A2D6B" stroke-width="36" stroke-linecap="round" />
      <text x="410" y="250" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="900" font-size="24" fill="#FFFFFF" transform="rotate(35 410 250)">RYDA CRUISE</text>
    </g>

    <rect y="780" width="900" height="120" fill="#040D1E" opacity="0.9" />
  </svg>
  `;

  // 5. Horizontal Strip Image: 30 Seconds to Unlock (Split Banner Background)
  const stripSvg = `
  <svg width="1600" height="500" viewBox="0 0 1600 500" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="1600" height="500" fill="#040D1E" />
    <!-- Bokeh and bike wheels in high motion blur -->
    <circle cx="300" cy="250" r="220" stroke="#0A2D6B" stroke-width="30" stroke-dasharray="20 15" opacity="0.4" />
    <circle cx="1300" cy="250" r="220" stroke="#0A2D6B" stroke-width="30" stroke-dasharray="20 15" opacity="0.4" />
    <!-- Dynamic horizontal speed streaks in Electric Lime and Navy -->
    <line x1="0" y1="120" x2="1600" y2="120" stroke="#7CFC00" stroke-width="4" opacity="0.3" stroke-dasharray="60 30" />
    <line x1="0" y1="260" x2="1600" y2="260" stroke="#0A2D6B" stroke-width="8" opacity="0.5" />
    <line x1="0" y1="380" x2="1600" y2="380" stroke="#7CFC00" stroke-width="4" opacity="0.3" stroke-dasharray="80 40" />

    <!-- Bicycle Frame centered in motion -->
    <g transform="translate(520, 40)">
      <path d="M80 320 L280 320 L480 140 L230 140 Z" fill="none" stroke="#0A2D6B" stroke-width="28" stroke-linejoin="round" />
      <path d="M280 320 L210 60" stroke="#0A2D6B" stroke-width="28" stroke-linecap="round" />
      <path d="M480 140 L520 320" stroke="#0A2D6B" stroke-width="28" stroke-linecap="round" />
      <path d="M250 140 L450 140" stroke="#7CFC00" stroke-width="10" stroke-linecap="round" />
    </g>
  </svg>
  `;

  // 6. Transparent / Isolated Center Profile Bicycle for the "It's all about details" section
  const detailBikeSvg = `
  <svg width="1200" height="700" viewBox="0 0 1200 700" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Clean Minimalist Studio Background with Soft Gradient Glow -->
    <rect width="1200" height="700" fill="#FFFFFF" />
    <ellipse cx="600" cy="560" rx="480" ry="40" fill="#0A2D6B" opacity="0.08" filter="blur(16px)" />

    <g transform="translate(180, 80)">
      <!-- Back Wheel -->
      <circle cx="160" cy="380" r="160" stroke="#0A2D6B" stroke-width="26" fill="#F8FAFC" />
      <circle cx="160" cy="380" r="140" stroke="#7CFC00" stroke-width="4" stroke-dasharray="14 10" />
      <circle cx="160" cy="380" r="28" fill="#7CFC00" />
      <line x1="160" y1="240" x2="160" y2="520" stroke="#94A3B8" stroke-width="2.5" />
      <line x1="20" y1="380" x2="300" y2="380" stroke="#94A3B8" stroke-width="2.5" />

      <!-- Front Wheel -->
      <circle cx="720" cy="380" r="160" stroke="#0A2D6B" stroke-width="26" fill="#F8FAFC" />
      <circle cx="720" cy="380" r="140" stroke="#7CFC00" stroke-width="4" stroke-dasharray="14 10" />
      <circle cx="720" cy="380" r="28" fill="#7CFC00" />
      <line x1="720" y1="240" x2="720" y2="520" stroke="#94A3B8" stroke-width="2.5" />
      <line x1="580" y1="380" x2="860" y2="380" stroke="#94A3B8" stroke-width="2.5" />

      <!-- Aerodynamic Frame -->
      <path d="M160 380 L380 380 L620 160 L320 160 Z" fill="none" stroke="#0A2D6B" stroke-width="30" stroke-linejoin="round" />
      <path d="M380 380 L300 80" stroke="#0A2D6B" stroke-width="30" stroke-linecap="round" />
      <path d="M720 380 L630 80" stroke="#0A2D6B" stroke-width="30" stroke-linecap="round" />

      <!-- Lime Highlight on Toptube -->
      <path d="M350 160 L590 160" stroke="#7CFC00" stroke-width="10" stroke-linecap="round" />
      <text x="470" y="150" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="900" font-size="22" fill="#0A2D6B">RYDA ONE</text>

      <!-- Ergonomic Saddle -->
      <path d="M240 75 Q310 50 370 75 Q320 105 270 105 Z" fill="#061B45" stroke="#7CFC00" stroke-width="3.5" />

      <!-- Bullhorn / Flat Handlebars -->
      <path d="M630 80 L605 45 L675 45" fill="none" stroke="#334155" stroke-width="18" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Lime Grips -->
      <rect x="650" y="40" width="30" height="10" rx="5" fill="#7CFC00" />

      <!-- Crankset & Pedals -->
      <circle cx="380" cy="380" r="42" fill="#061B45" stroke="#7CFC00" stroke-width="5" />
      <circle cx="380" cy="380" r="14" fill="#7CFC00" />
      <line x1="380" y1="380" x2="430" y2="430" stroke="#64748B" stroke-width="12" stroke-linecap="round" />
      <rect x="420" y="425" width="24" height="10" rx="3" fill="#061B45" />
    </g>
  </svg>
  `;

  // 7. Mechanic / Small Fleet Maintenance Photo (Section 9)
  const mechanicSvg = `
  <svg width="800" height="950" viewBox="0 0 800 950" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="800" height="950" fill="#061B45" />
    <defs>
      <linearGradient id="mechGrad" x1="400" y1="0" x2="400" y2="950" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#0E244C" />
        <stop offset="60%" stop-color="#0A1C3C" />
        <stop offset="100%" stop-color="#040D1E" />
      </linearGradient>
    </defs>
    <rect width="800" height="950" fill="url(#mechGrad)" />

    <!-- Tuned Bike in Stand -->
    <g transform="translate(100, 200)">
      <!-- Frame inverted on repair stand -->
      <rect x="300" y="180" width="20" height="360" fill="#334155" />
      <path d="M120 220 L300 220 L480 80 L260 80 Z" fill="none" stroke="#7CFC00" stroke-width="26" stroke-linejoin="round" />
      
      <!-- Tech Hands Working on Cassette / Derailleur with Precision Allen Wrench -->
      <circle cx="120" cy="220" r="110" stroke="#1E293B" stroke-width="18" />
      <!-- Cog teeth -->
      <circle cx="120" cy="220" r="45" fill="#64748B" stroke="#94A3B8" stroke-width="6" stroke-dasharray="10 5" />
      
      <!-- Technician Torso & Hands -->
      <path d="M260 280 L380 200 L460 360 L320 420 Z" fill="#0A2D6B" />
      <ellipse cx="410" cy="140" rx="45" ry="55" fill="#8D5524" />
      <!-- Cap -->
      <path d="M370 120 Q420 80 470 120 Z" fill="#040D1E" />
      <path d="M440 125 L500 135" stroke="#7CFC00" stroke-width="6" stroke-linecap="round" />
      
      <!-- Precision Tool -->
      <line x1="210" y1="210" x2="310" y2="250" stroke="#F8FAFC" stroke-width="10" stroke-linecap="round" />
      <line x1="210" y1="210" x2="200" y2="240" stroke="#F8FAFC" stroke-width="10" stroke-linecap="round" />
    </g>

    <!-- Lime glow accent on bottom -->
    <rect y="840" width="800" height="110" fill="#040D1E" opacity="0.95" />
  </svg>
  `;

  // Write all generated files using sharp to high quality JPGs
  await sharp(Buffer.from(heroLandscapeSvg))
    .jpeg({ quality: 94 })
    .toFile(path.join(imagesDir, "hero-landscape.jpg"));

  await sharp(Buffer.from(workshopSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(imagesDir, "workshop.jpg"));

  await sharp(Buffer.from(bikeModel1Svg))
    .jpeg({ quality: 92 })
    .toFile(path.join(imagesDir, "bike-sprint.jpg"));

  await sharp(Buffer.from(bikeModel2Svg))
    .jpeg({ quality: 92 })
    .toFile(path.join(imagesDir, "bike-cruise.jpg"));

  await sharp(Buffer.from(stripSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(imagesDir, "strip-banner.jpg"));

  await sharp(Buffer.from(detailBikeSvg))
    .jpeg({ quality: 94 })
    .toFile(path.join(imagesDir, "detail-bike.jpg"));

  await sharp(Buffer.from(mechanicSvg))
    .jpeg({ quality: 92 })
    .toFile(path.join(imagesDir, "mechanic.jpg"));

  console.log("All reference design photos created successfully!");
}

generateAllReferencePhotos().catch(err => {
  console.error("Error creating reference photos:", err);
  process.exit(1);
});
