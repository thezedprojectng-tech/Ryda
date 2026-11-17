const fs = require("fs");
const path = require("path");
const sharp = require("sharp");

async function generateAssets() {
  // 1. Hero Image: Docked navy Ryda bikes beside the Scan to Unlock kiosk
  const heroSvg = `
  <svg width="1200" height="800" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Sky / Campus Background -->
    <rect width="1200" height="800" fill="#0A2D6B" />
    <defs>
      <linearGradient id="bgGrad" x1="600" y1="0" x2="600" y2="800" gradientUnits="userSpaceOnUse">
        <stop offset="0%" stop-color="#082252" />
        <stop offset="60%" stop-color="#0A2D6B" />
        <stop offset="100%" stop-color="#061D47" />
      </linearGradient>
      <linearGradient id="limeGrad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stop-color="#7CFC00" />
        <stop offset="100%" stop-color="#60D400" />
      </linearGradient>
      <linearGradient id="kioskGrad" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stop-color="#FFFFFF" />
        <stop offset="100%" stop-color="#E2E8F0" />
      </linearGradient>
    </defs>
    <rect width="1200" height="800" fill="url(#bgGrad)" />

    <!-- Campus Pavement Grid / Dock Station -->
    <path d="M0 550 L1200 550 L1200 800 L0 800 Z" fill="#061738" />
    <line x1="0" y1="550" x2="1200" y2="550" stroke="#7CFC00" stroke-opacity="0.3" stroke-width="3" />
    <line x1="100" y1="550" x2="50" y2="800" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="2" />
    <line x1="300" y1="550" x2="250" y2="800" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="2" />
    <line x1="500" y1="550" x2="450" y2="800" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="2" />
    <line x1="700" y1="550" x2="650" y2="800" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="2" />
    <line x1="900" y1="550" x2="850" y2="800" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="2" />
    <line x1="1100" y1="550" x2="1050" y2="800" stroke="#FFFFFF" stroke-opacity="0.05" stroke-width="2" />

    <!-- Docking Rack Rails -->
    <rect x="80" y="520" width="1040" height="24" rx="6" fill="#0E3B8C" stroke="#7CFC00" stroke-width="1.5" />
    <circle cx="250" cy="532" r="6" fill="#7CFC00" />
    <circle cx="500" cy="532" r="6" fill="#7CFC00" />
    <circle cx="750" cy="532" r="6" fill="#7CFC00" />
    <circle cx="1000" cy="532" r="6" fill="#7CFC00" />

    <!-- Scan to Unlock Kiosk on Left -->
    <g transform="translate(140, 160)">
      <!-- Kiosk Column -->
      <rect x="0" y="0" width="160" height="380" rx="16" fill="url(#kioskGrad)" filter="drop-shadow(0 20px 30px rgba(0,0,0,0.5))" />
      <!-- Kiosk Header -->
      <rect x="10" y="12" width="140" height="50" rx="8" fill="#0A2D6B" />
      <text x="80" y="38" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">Ryda</text>
      <circle cx="115" cy="30" r="3" fill="#7CFC00" />
      <text x="80" y="54" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="9" fill="#7CFC00" letter-spacing="1">STATION #04</text>

      <!-- Digital Screen on Kiosk -->
      <rect x="15" y="75" width="130" height="200" rx="10" fill="#0A2D6B" />
      <text x="80" y="105" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="600" font-size="13" fill="#FFFFFF">SCAN TO</text>
      <text x="80" y="124" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="15" fill="#7CFC00">UNLOCK</text>

      <!-- QR Code Mockup -->
      <rect x="35" y="135" width="90" height="90" rx="6" fill="#FFFFFF" />
      <!-- QR pattern elements -->
      <rect x="42" y="142" width="24" height="24" fill="#0A2D6B" />
      <rect x="46" y="146" width="16" height="16" fill="#FFFFFF" />
      <rect x="50" y="150" width="8" height="8" fill="#0A2D6B" />
      
      <rect x="94" y="142" width="24" height="24" fill="#0A2D6B" />
      <rect x="98" y="146" width="16" height="16" fill="#FFFFFF" />
      <rect x="102" y="150" width="8" height="8" fill="#0A2D6B" />
      
      <rect x="42" y="194" width="24" height="24" fill="#0A2D6B" />
      <rect x="46" y="198" width="16" height="16" fill="#FFFFFF" />
      <rect x="50" y="202" width="8" height="8" fill="#0A2D6B" />

      <circle cx="80" cy="180" r="8" fill="#7CFC00" />
      <path d="M78 178 L80 183 L83 177" stroke="#0A2D6B" stroke-width="2" stroke-linecap="round" />

      <!-- Instruction pill -->
      <rect x="25" y="235" width="110" height="26" rx="13" fill="#7CFC00" />
      <text x="80" y="252" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="10" fill="#0A2D6B">USE RYDA APP</text>

      <!-- Base of Kiosk -->
      <path d="M-15 380 L175 380 L195 400 L-35 400 Z" fill="#334155" />
    </g>

    <!-- Docked Navy Ryda Bikes (Bike 1, Bike 2, Bike 3) -->
    <!-- Helper macro for Navy Ryda Bike -->
    <!-- Bike 1 at x=440 -->
    <g transform="translate(400, 290)">
      <!-- Rear Wheel -->
      <circle cx="80" cy="220" r="70" stroke="#1E293B" stroke-width="12" />
      <circle cx="80" cy="220" r="64" stroke="#7CFC00" stroke-width="2" stroke-dasharray="8 6" />
      <circle cx="80" cy="220" r="14" fill="#7CFC00" />
      <!-- Spokes -->
      <line x1="80" y1="156" x2="80" y2="284" stroke="#94A3B8" stroke-width="1.5" />
      <line x1="16" y1="220" x2="144" y2="220" stroke="#94A3B8" stroke-width="1.5" />

      <!-- Front Wheel (Locked into dock) -->
      <circle cx="340" cy="220" r="70" stroke="#1E293B" stroke-width="12" />
      <circle cx="340" cy="220" r="64" stroke="#7CFC00" stroke-width="2" stroke-dasharray="8 6" />
      <circle cx="340" cy="220" r="14" fill="#7CFC00" />
      <!-- Spokes -->
      <line x1="340" y1="156" x2="340" y2="284" stroke="#94A3B8" stroke-width="1.5" />
      <line x1="276" y1="220" x2="404" y2="220" stroke="#94A3B8" stroke-width="1.5" />

      <!-- Docking post mechanism -->
      <rect x="330" y="180" width="20" height="90" rx="4" fill="#7CFC00" opacity="0.9" />
      <text x="340" y="240" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="8" fill="#0A2D6B" transform="rotate(-90 340 240)">LOCKED</text>

      <!-- Bike Main Frame - University Navy -->
      <path d="M80 220 L180 220 L300 110 L150 110 Z" fill="none" stroke="#0A2D6B" stroke-width="16" stroke-linejoin="round" />
      <path d="M180 220 L140 70" stroke="#0A2D6B" stroke-width="16" stroke-linecap="round" />
      <path d="M340 220 L295 65" stroke="#0A2D6B" stroke-width="16" stroke-linecap="round" />
      <!-- Lime Brand Accent on Frame -->
      <path d="M170 110 L280 110" stroke="#7CFC00" stroke-width="6" stroke-linecap="round" />
      <text x="225" y="106" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">RYDA</text>

      <!-- Seat -->
      <path d="M115 65 Q140 55 170 65 Q150 78 125 78 Z" fill="#1E293B" stroke="#7CFC00" stroke-width="2" />

      <!-- Handlebars & Front Basket with Ryda Shield -->
      <path d="M295 65 L285 45 L320 45" fill="none" stroke="#64748B" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <!-- Basket -->
      <rect x="305" y="55" width="45" height="35" rx="6" fill="#082252" stroke="#7CFC00" stroke-width="2" />
      <circle cx="327" cy="72" r="8" fill="#7CFC00" />
      <text x="327" y="75" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="8" fill="#0A2D6B">R</text>

      <!-- Chain Guard / Pedals -->
      <circle cx="180" cy="220" r="22" fill="#1E293B" stroke="#7CFC00" stroke-width="3" />
      <circle cx="180" cy="220" r="8" fill="#7CFC00" />
    </g>

    <!-- Bike 2 docked behind/adjacent at x=750 -->
    <g transform="translate(710, 290)">
      <!-- Rear Wheel -->
      <circle cx="80" cy="220" r="70" stroke="#1E293B" stroke-width="12" />
      <circle cx="80" cy="220" r="64" stroke="#7CFC00" stroke-width="2" stroke-dasharray="8 6" />
      <circle cx="80" cy="220" r="14" fill="#7CFC00" />
      <!-- Spokes -->
      <line x1="80" y1="156" x2="80" y2="284" stroke="#94A3B8" stroke-width="1.5" />
      <line x1="16" y1="220" x2="144" y2="220" stroke="#94A3B8" stroke-width="1.5" />

      <!-- Front Wheel -->
      <circle cx="340" cy="220" r="70" stroke="#1E293B" stroke-width="12" />
      <circle cx="340" cy="220" r="64" stroke="#7CFC00" stroke-width="2" stroke-dasharray="8 6" />
      <circle cx="340" cy="220" r="14" fill="#7CFC00" />

      <!-- Docking post -->
      <rect x="330" y="180" width="20" height="90" rx="4" fill="#7CFC00" opacity="0.9" />

      <!-- Frame -->
      <path d="M80 220 L180 220 L300 110 L150 110 Z" fill="none" stroke="#0A2D6B" stroke-width="16" stroke-linejoin="round" />
      <path d="M180 220 L140 70" stroke="#0A2D6B" stroke-width="16" stroke-linecap="round" />
      <path d="M340 220 L295 65" stroke="#0A2D6B" stroke-width="16" stroke-linecap="round" />
      <path d="M170 110 L280 110" stroke="#7CFC00" stroke-width="6" stroke-linecap="round" />
      <text x="225" y="106" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="12" fill="#FFFFFF">RYDA</text>

      <!-- Seat -->
      <path d="M115 65 Q140 55 170 65 Q150 78 125 78 Z" fill="#1E293B" stroke="#7CFC00" stroke-width="2" />

      <!-- Handlebars & Basket -->
      <path d="M295 65 L285 45 L320 45" fill="none" stroke="#64748B" stroke-width="10" stroke-linecap="round" stroke-linejoin="round" />
      <rect x="305" y="55" width="45" height="35" rx="6" fill="#082252" stroke="#7CFC00" stroke-width="2" />
      <circle cx="327" cy="72" r="8" fill="#7CFC00" />
      <text x="327" y="75" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="8" fill="#0A2D6B">R</text>

      <circle cx="180" cy="220" r="22" fill="#1E293B" stroke="#7CFC00" stroke-width="3" />
    </g>

    <!-- Overlay Badge: Docked Navy Ryda Bikes Beside Scan to Unlock Kiosk -->
    <rect x="380" y="700" width="440" height="54" rx="27" fill="#0A2D6B" stroke="#7CFC00" stroke-width="2" />
    <circle cx="412" cy="727" r="14" fill="#7CFC00" />
    <path d="M407 727 L411 731 L418 723" stroke="#0A2D6B" stroke-width="2.5" stroke-linecap="round" />
    <text x="438" y="733" font-family="'Poppins', sans-serif" font-weight="600" font-size="15" fill="#FFFFFF">Ryda Campus Docking Station #04</text>
  </svg>
  `;

  // 2. App Mockup 1: Campus Map & Stations (Left Phone)
  const appLeftSvg = `
  <svg width="433" height="882" viewBox="0 0 433 882" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Screen background -->
    <rect width="433" height="882" fill="#061A3D" />
    
    <!-- Top status bar -->
    <rect x="0" y="0" width="433" height="50" fill="#0A2D6B" />
    <text x="40" y="32" font-family="'Inter', sans-serif" font-weight="600" font-size="14" fill="#FFFFFF">9:41</text>
    <path d="M375 22 H395 V32 H375 Z M397 25 H399 V29 H397 Z" fill="#7CFC00" />
    
    <!-- App Header -->
    <rect x="0" y="50" width="433" height="70" fill="#0A2D6B" />
    <text x="24" y="92" font-family="'Poppins', sans-serif" font-weight="700" font-size="22" fill="#FFFFFF">Campus Map</text>
    <rect x="290" y="70" width="120" height="32" rx="16" fill="#7CFC00" />
    <text x="350" y="91" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#0A2D6B">18 BIKES NEAR</text>

    <!-- Map Canvas Elements -->
    <path d="M0 120 L433 120 L433 660 L0 660 Z" fill="#082252" />
    <!-- Campus Roads -->
    <path d="M-20 280 Q180 320 450 240" stroke="#0E3B8C" stroke-width="36" fill="none" />
    <path d="M220 120 Q240 400 210 660" stroke="#0E3B8C" stroke-width="40" fill="none" />
    <path d="M50 480 Q220 470 450 510" stroke="#0E3B8C" stroke-width="32" fill="none" />

    <!-- Campus Building Polygons -->
    <rect x="40" y="160" width="130" height="80" rx="8" fill="#0A2D6B" stroke="#0E3B8C" stroke-width="2" />
    <text x="105" y="205" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="11" fill="#FFFFFF">Faculty of Science</text>

    <rect x="270" y="150" width="120" height="100" rx="8" fill="#0A2D6B" stroke="#0E3B8C" stroke-width="2" />
    <text x="330" y="205" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="11" fill="#FFFFFF">Main Library</text>

    <rect x="30" y="360" width="140" height="90" rx="8" fill="#0A2D6B" stroke="#0E3B8C" stroke-width="2" />
    <text x="100" y="410" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="11" fill="#FFFFFF">Hostel Block B</text>

    <rect x="260" y="380" width="140" height="80" rx="8" fill="#0A2D6B" stroke="#0E3B8C" stroke-width="2" />
    <text x="330" y="425" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="11" fill="#FFFFFF">Senate Building</text>

    <!-- Station Pins (Lime pulsing) -->
    <!-- Station 1: Quad -->
    <circle cx="215" cy="310" r="26" fill="#7CFC00" fill-opacity="0.25" />
    <circle cx="215" cy="310" r="16" fill="#7CFC00" />
    <circle cx="215" cy="310" r="7" fill="#0A2D6B" />
    <!-- Pin Label -->
    <rect x="155" y="245" width="120" height="32" rx="16" fill="#FFFFFF" filter="drop-shadow(0 4px 6px rgba(0,0,0,0.3))" />
    <text x="215" y="266" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="12" fill="#0A2D6B">Quad Dock • 8 🚲</text>

    <!-- Station 2: Hostel -->
    <circle cx="110" cy="480" r="18" fill="#7CFC00" fill-opacity="0.3" />
    <circle cx="110" cy="480" r="12" fill="#7CFC00" />
    <circle cx="110" cy="480" r="5" fill="#0A2D6B" />

    <!-- Station 3: Senate -->
    <circle cx="340" cy="490" r="18" fill="#7CFC00" fill-opacity="0.3" />
    <circle cx="340" cy="490" r="12" fill="#7CFC00" />
    <circle cx="340" cy="490" r="5" fill="#0A2D6B" />

    <!-- Bottom Station Drawer Card -->
    <rect x="16" y="660" width="401" height="195" rx="24" fill="#0A2D6B" stroke="#7CFC00" stroke-width="1.5" />
    <text x="40" y="700" font-family="'Poppins', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF">Central Quad Station</text>
    <text x="40" y="722" font-family="'Inter', sans-serif" font-weight="500" font-size="12" fill="#7CFC00">8 bikes available • 4 docks free</text>
    <text x="40" y="744" font-family="'Inter', sans-serif" font-weight="400" font-size="12" fill="#FFFFFF" opacity="0.8">2 mins walk from Faculty of Science</text>
    
    <rect x="40" y="770" width="353" height="48" rx="24" fill="#7CFC00" />
    <text x="216" y="800" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="15" fill="#0A2D6B">Reserve a Bike</text>
  </svg>
  `;

  // 3. App Mockup 2: Scan to Unlock (Center Phone)
  const appCenterSvg = `
  <svg width="433" height="882" viewBox="0 0 433 882" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Camera Viewfinder Background -->
    <rect width="433" height="882" fill="#051633" />
    
    <!-- Top status bar -->
    <rect x="0" y="0" width="433" height="50" fill="#0A2D6B" />
    <text x="40" y="32" font-family="'Inter', sans-serif" font-weight="600" font-size="14" fill="#FFFFFF">9:41</text>
    <path d="M375 22 H395 V32 H375 Z" fill="#7CFC00" />

    <!-- Header -->
    <text x="216" y="90" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">Scan to Unlock</text>
    <text x="216" y="115" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="500" font-size="13" fill="#FFFFFF" opacity="0.75">Align QR code on bike handlebar or dock</text>

    <!-- Viewfinder Reticle -->
    <g transform="translate(76, 170)">
      <!-- Outer Box -->
      <rect x="0" y="0" width="280" height="280" rx="20" fill="#0A2D6B" fill-opacity="0.4" stroke="#FFFFFF" stroke-opacity="0.15" stroke-width="2" />
      
      <!-- Corner Guides in Electric Lime -->
      <path d="M0 40 L0 10 Q0 0 10 0 L40 0" stroke="#7CFC00" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M240 0 L270 0 Q280 0 280 10 L280 40" stroke="#7CFC00" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M280 240 L280 270 Q280 280 270 280 L240 280" stroke="#7CFC00" stroke-width="6" fill="none" stroke-linecap="round" />
      <path d="M40 280 L10 280 Q0 280 0 270 L0 240" stroke="#7CFC00" stroke-width="6" fill="none" stroke-linecap="round" />

      <!-- QR Code In Viewfinder -->
      <rect x="50" y="50" width="180" height="180" rx="12" fill="#FFFFFF" />
      <!-- QR Blocks -->
      <rect x="65" y="65" width="45" height="45" fill="#0A2D6B" />
      <rect x="73" y="73" width="29" height="29" fill="#FFFFFF" />
      <rect x="80" y="80" width="15" height="15" fill="#0A2D6B" />
      
      <rect x="170" y="65" width="45" height="45" fill="#0A2D6B" />
      <rect x="178" y="73" width="29" height="29" fill="#FFFFFF" />
      <rect x="185" y="80" width="15" height="15" fill="#0A2D6B" />
      
      <rect x="65" y="170" width="45" height="45" fill="#0A2D6B" />
      <rect x="73" y="178" width="29" height="29" fill="#FFFFFF" />
      <rect x="80" y="185" width="15" height="15" fill="#0A2D6B" />

      <!-- Center Logo / Bike Symbol -->
      <circle cx="140" cy="140" r="18" fill="#7CFC00" />
      <text x="140" y="146" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="14" fill="#0A2D6B">R</text>

      <!-- Laser Scanner Beam -->
      <line x1="10" y1="140" x2="270" y2="140" stroke="#7CFC00" stroke-width="3" filter="drop-shadow(0 0 8px #7CFC00)" />
    </g>

    <!-- Detected Bike Details Box -->
    <rect x="36" y="490" width="361" height="140" rx="18" fill="#0A2D6B" stroke="#7CFC00" stroke-width="2" />
    <circle cx="76" cy="540" r="24" fill="#7CFC00" />
    <path d="M68 540 L74 546 L85 534" stroke="#0A2D6B" stroke-width="3.5" stroke-linecap="round" />
    
    <text x="114" y="534" font-family="'Poppins', sans-serif" font-weight="700" font-size="18" fill="#FFFFFF">Ryda Bike #042</text>
    <text x="114" y="555" font-family="'Inter', sans-serif" font-weight="500" font-size="12" fill="#7CFC00">Ready to ride • Smart Lock Active</text>
    
    <line x1="56" y1="575" x2="377" y2="575" stroke="#FFFFFF" stroke-opacity="0.15" />
    <text x="56" y="605" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#FFFFFF">Rate: ₦[PRICE] / ride</text>
    <text x="377" y="605" text-anchor="end" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#7CFC00">Pass: Active</text>

    <!-- Action Buttons -->
    <rect x="36" y="660" width="361" height="54" rx="27" fill="#7CFC00" />
    <text x="216" y="694" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="17" fill="#0A2D6B">Unlock Bike</text>

    <rect x="36" y="730" width="361" height="50" rx="25" fill="#0A2D6B" stroke="#FFFFFF" stroke-opacity="0.3" />
    <text x="216" y="761" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="14" fill="#FFFFFF">Enter Bike ID Manually</text>

    <!-- Flashlight & Help Icons -->
    <circle cx="160" cy="820" r="22" fill="#0A2D6B" />
    <path d="M156 812 L164 812 L161 822 L165 822 L157 828 L159 822 L155 822 Z" fill="#7CFC00" />
    
    <circle cx="270" cy="820" r="22" fill="#0A2D6B" />
    <text x="270" y="826" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="700" font-size="16" fill="#FFFFFF">?</text>
  </svg>
  `;

  // 4. App Mockup 3: Active Ride Screen (Right Phone)
  const appRightSvg = `
  <svg width="433" height="882" viewBox="0 0 433 882" fill="none" xmlns="http://www.w3.org/2000/svg">
    <!-- Active Ride Screen Background -->
    <rect width="433" height="882" fill="#082252" />
    
    <!-- Top status bar -->
    <rect x="0" y="0" width="433" height="50" fill="#0A2D6B" />
    <text x="40" y="32" font-family="'Inter', sans-serif" font-weight="600" font-size="14" fill="#FFFFFF">9:41</text>
    <path d="M375 22 H395 V32 H375 Z" fill="#7CFC00" />

    <!-- Header: Active Trip -->
    <rect x="0" y="50" width="433" height="70" fill="#0A2D6B" />
    <circle cx="45" cy="85" r="8" fill="#7CFC00" />
    <text x="65" y="92" font-family="'Poppins', sans-serif" font-weight="700" font-size="20" fill="#FFFFFF">Ride in Progress</text>
    <text x="390" y="92" text-anchor="end" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#7CFC00">RYDA #042</text>

    <!-- Live Timer Card -->
    <g transform="translate(24, 140)">
      <rect x="0" y="0" width="385" height="160" rx="24" fill="#0A2D6B" stroke="#7CFC00" stroke-width="2" />
      <text x="192" y="45" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="13" fill="#FFFFFF" opacity="0.8" letter-spacing="1">TRIP DURATION</text>
      <text x="192" y="105" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="48" fill="#7CFC00">08:42</text>
      <text x="192" y="135" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="500" font-size="12" fill="#FFFFFF" opacity="0.9">Hostel Quad → Lecture Theatre 1</text>
    </g>

    <!-- Metrics Grid -->
    <g transform="translate(24, 320)">
      <!-- Metric 1: Distance -->
      <rect x="0" y="0" width="180" height="110" rx="18" fill="#0A2D6B" />
      <text x="24" y="35" font-family="'Inter', sans-serif" font-weight="500" font-size="12" fill="#FFFFFF" opacity="0.7">DISTANCE</text>
      <text x="24" y="75" font-family="'Poppins', sans-serif" font-weight="700" font-size="28" fill="#FFFFFF">1.4 <tspan font-size="16" font-weight="500">km</tspan></text>
      <text x="24" y="95" font-family="'Inter', sans-serif" font-weight="500" font-size="11" fill="#7CFC00">Saved ~15 mins walk</text>

      <!-- Metric 2: Speed -->
      <rect x="205" y="0" width="180" height="110" rx="18" fill="#0A2D6B" />
      <text x="229" y="35" font-family="'Inter', sans-serif" font-weight="500" font-size="12" fill="#FFFFFF" opacity="0.7">CURRENT SPEED</text>
      <text x="229" y="75" font-family="'Poppins', sans-serif" font-weight="700" font-size="28" fill="#FFFFFF">14 <tspan font-size="16" font-weight="500">km/h</tspan></text>
      <text x="229" y="95" font-family="'Inter', sans-serif" font-weight="500" font-size="11" fill="#7CFC00">Cruising smoothly</text>
    </g>

    <!-- Route Map snippet -->
    <g transform="translate(24, 450)">
      <rect x="0" y="0" width="385" height="180" rx="20" fill="#061738" stroke="#0E3B8C" stroke-width="2" />
      <!-- mini road -->
      <path d="M30 140 Q160 40 350 70" stroke="#0E3B8C" stroke-width="24" fill="none" />
      <!-- Traveled path (Lime) -->
      <path d="M30 140 Q160 40 260 52" stroke="#7CFC00" stroke-width="6" fill="none" stroke-linecap="round" />
      <!-- Bike Pin (Current location) -->
      <circle cx="260" cy="52" r="14" fill="#7CFC00" />
      <circle cx="260" cy="52" r="6" fill="#0A2D6B" />
      <!-- Destination Pin -->
      <circle cx="350" cy="70" r="10" fill="#FFFFFF" />
      <text x="350" y="105" text-anchor="middle" font-family="'Inter', sans-serif" font-weight="600" font-size="10" fill="#FFFFFF">LT 1 Station</text>
      <text x="20" y="165" font-family="'Inter', sans-serif" font-weight="500" font-size="11" fill="#FFFFFF" opacity="0.8">Drop-off dock: 300m ahead (5 free slots)</text>
    </g>

    <!-- Pause & Lock Buttons -->
    <rect x="24" y="650" width="385" height="54" rx="27" fill="#0A2D6B" stroke="#7CFC00" stroke-width="2" />
    <text x="216" y="683" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="600" font-size="15" fill="#7CFC00">Pause Ride (Lock Between Lectures)</text>

    <!-- End Ride Button (Lime) -->
    <rect x="24" y="720" width="385" height="60" rx="30" fill="#7CFC00" />
    <text x="216" y="757" text-anchor="middle" font-family="'Poppins', sans-serif" font-weight="700" font-size="17" fill="#0A2D6B">End Ride &amp; Return</text>
  </svg>
  `;

  // Write SVGs
  fs.writeFileSync(path.join(__dirname, "../public/images/hero.svg"), heroSvg);
  fs.writeFileSync(path.join(__dirname, "../public/images/app-screen-1.svg"), appLeftSvg);
  fs.writeFileSync(path.join(__dirname, "../public/images/app-screen-2.svg"), appCenterSvg);
  fs.writeFileSync(path.join(__dirname, "../public/images/app-screen-3.svg"), appRightSvg);

  // Convert to JPG / PNG using sharp
  await sharp(Buffer.from(heroSvg))
    .jpeg({ quality: 90 })
    .toFile(path.join(__dirname, "../public/images/hero.jpg"));

  await sharp(Buffer.from(appLeftSvg))
    .png()
    .toFile(path.join(__dirname, "../public/images/app-screen-1.png"));

  await sharp(Buffer.from(appCenterSvg))
    .png()
    .toFile(path.join(__dirname, "../public/images/app-screen-2.png"));

  await sharp(Buffer.from(appRightSvg))
    .png()
    .toFile(path.join(__dirname, "../public/images/app-screen-3.png"));

  console.log("All hero and app screen assets generated successfully!");
}

generateAssets().catch(err => {
  console.error("Error generating assets:", err);
  process.exit(1);
});
