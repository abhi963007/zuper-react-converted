export const productsData = [
  {
    id: "dooh-led-displays",
    slug: "dooh-led-displays",
    name: "DOOH LED Displays",
    title: "Die-Cast Precision Built for Premium Outdoor Advertising",
    subtitle: "Built specifically for digital-out-of-home networks, highway billboards, and urban media plazas.",
    description: "Zuper DOOH Series is engineered for 24/7 continuous operation under intense direct sunlight. Featuring high-grade extruded aluminum cabinets, IP65/IP66 weather sealing, and ultra-high brightness ratings up to 10,000 nits with smart ambient auto-dimming.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/1-1.webp",
    subSeries: [
      {
        id: "gold-series",
        slug: "gold-series",
        name: "Gold Series DOOH LED",
        tagline: "High Reliability & Energy-Efficient Commercial Outdoor LED",
        brightness: "6,500 - 8,000 nits",
        refreshRate: "3,840 Hz",
        cabinet: "Die-cast Aluminum 960x960mm",
        viewingAngle: "160° H / 140° V",
        ipRating: "IP65 Front & Rear",
        powerSaving: "Up to 35% Common Cathode Energy Savings",
        pitches: [
          { pitch: "P2.5", moduleSize: "320x160mm", resolution: "128x64 dots", density: "160,000 dots/m²" },
          { pitch: "P3.07", moduleSize: "320x160mm", resolution: "104x52 dots", density: "105,625 dots/m²" },
          { pitch: "P4", moduleSize: "320x160mm", resolution: "80x40 dots", density: "62,500 dots/m²" },
          { pitch: "P5", moduleSize: "320x160mm", resolution: "64x32 dots", density: "40,000 dots/m²" },
          { pitch: "P6.67", moduleSize: "320x160mm", resolution: "48x24 dots", density: "22,500 dots/m²" },
          { pitch: "P8", moduleSize: "320x160mm", resolution: "40x20 dots", density: "15,625 dots/m²" },
          { pitch: "P10", moduleSize: "320x160mm", resolution: "32x16 dots", density: "10,000 dots/m²" }
        ],
        features: [
          "Ultra-high contrast black SMD LEDs with anti-reflective shaders",
          "Dual power supply redundancy for zero downtime broadcast",
          "Front and rear maintenance access for tight architectural spaces",
          "Intelligent temperature and brightness cloud monitoring sensors"
        ]
      },
      {
        id: "platinum-series",
        slug: "platinum-series",
        name: "Platinum Series DOOH LED",
        tagline: "Ultra-High Brightness 10,000+ Nits Highway & Stadium Grade",
        brightness: "8,500 - 10,500 nits",
        refreshRate: "7,680 Hz",
        cabinet: "Magnesium-Aluminum Alloy 1000x1000mm",
        viewingAngle: "160° H / 160° V",
        ipRating: "IP66 Hermetically Sealed",
        powerSaving: "Up to 45% Dynamic Energy Throttling",
        pitches: [
          { pitch: "P4.44", moduleSize: "320x160mm", resolution: "72x36 dots", density: "50,700 dots/m²" },
          { pitch: "P5.71", moduleSize: "320x160mm", resolution: "56x28 dots", density: "30,625 dots/m²" },
          { pitch: "P6.67", moduleSize: "320x160mm", resolution: "48x24 dots", density: "22,500 dots/m²" },
          { pitch: "P8", moduleSize: "320x160mm", resolution: "40x20 dots", density: "15,625 dots/m²" },
          { pitch: "P10", moduleSize: "320x160mm", resolution: "32x16 dots", density: "10,000 dots/m²" }
        ],
        features: [
          "Extreme sunlight visibility with custom gold-wire SMD packages",
          "Flame-retardant V0 aluminum cabinet construction",
          "Fanless silent cooling heat-dissipation architecture",
          "Cloud CMS remote cluster management with real-time fault alerts"
        ]
      }
    ]
  },
  {
    id: "indoor-led-displays",
    slug: "indoor-led-displays",
    name: "Indoor LED Displays",
    title: "Seamless High-Definition Visuals for Corporate & Retail",
    subtitle: "Engineered for boardrooms, retail flagships, auditoriums, broadcast sets, and control suites.",
    description: "Offering pixel-perfect uniformity, wide color gamuts (110% NTSC), and micro-pitch precision. Delivers seamless video walls without distracting bezel lines, providing breathtaking clarity even at arm's length viewing distances.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/2-1.webp",
    brightness: "600 - 1,200 nits (Configurable)",
    refreshRate: "3,840 Hz - 7,680 Hz",
    cabinet: "Precision CNC Aluminum 600x337.5mm (16:9 Golden Ratio)",
    viewingAngle: "170° H / 170° V",
    ipRating: "IP40 Dust-Resistant",
    pitches: [
      { pitch: "P1.25", resolution: "480x270 dots", density: "640,000 dots/m²", idealViewing: "1.2m - 5m" },
      { pitch: "P1.53", resolution: "392x220 dots", density: "426,800 dots/m²", idealViewing: "1.5m - 8m" },
      { pitch: "P1.86", resolution: "322x181 dots", density: "288,900 dots/m²", idealViewing: "1.8m - 12m" },
      { pitch: "P2.0", resolution: "300x168 dots", density: "250,000 dots/m²", idealViewing: "2.0m - 15m" },
      { pitch: "P2.5", resolution: "240x135 dots", density: "160,000 dots/m²", idealViewing: "2.5m - 20m" }
    ],
    features: [
      "Native 16:9 cabinet ratio easily matches standard Full HD, 4K, and 8K layouts",
      "Full front-serviceable magnetic modules with zero rear service space required",
      "HDR10 / HDR10+ processing with 16-bit grayscale fidelity",
      "Flicker-free performance under professional studio broadcast cameras"
    ]
  },
  {
    id: "outdoor-led-displays",
    slug: "outdoor-led-displays",
    name: "Outdoor LED Displays",
    title: "All-Weather Heavy Duty Outdoor Screens",
    subtitle: "Built to withstand monsoon rains, desert heat, and coastal corrosion.",
    description: "Designed for roadside unipoles, shopping mall facades, gas stations, and transit hubs. Equipped with IP65-rated silicon seals, conformal PCB coating, and industrial-grade power supplies.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/3-2.webp",
    brightness: "7,000 - 9,500 nits",
    refreshRate: "3,840 Hz",
    cabinet: "Standard Aluminum / Sheet Metal 960x960mm",
    viewingAngle: "140° H / 120° V",
    ipRating: "IP65 Weatherproof",
    pitches: [
      { pitch: "P3", resolution: "320x320 dots", density: "111,111 dots/m²", idealViewing: "3m - 25m" },
      { pitch: "P4", resolution: "240x240 dots", density: "62,500 dots/m²", idealViewing: "4m - 35m" },
      { pitch: "P5", resolution: "192x192 dots", density: "40,000 dots/m²", idealViewing: "5m - 50m" },
      { pitch: "P6", resolution: "160x160 dots", density: "27,777 dots/m²", idealViewing: "6m - 75m" },
      { pitch: "P8", resolution: "120x120 dots", density: "15,625 dots/m²", idealViewing: "8m - 100m" },
      { pitch: "P10", resolution: "96x96 dots", density: "10,000 dots/m²", idealViewing: "10m - 150m" }
    ],
    features: [
      "High UV-resistant mask prevents pixel fading over years of direct sun exposure",
      "Automated optical brightness sensors adjust screen intensity to ambient daylight",
      "Reinforced steel / aluminum frame engineered for high wind-load ratings",
      "Remote power on/off scheduling and cloud diagnostic telemetry"
    ]
  },
  {
    id: "rental-led-displays",
    slug: "rental-led-displays",
    name: "Rental LED Displays",
    title: "Lightweight & Fast-Assembly Rental LED Systems",
    subtitle: "Built for concerts, corporate conferences, product launches, exhibitions, and world tours.",
    description: "Engineered for speed, durability, and versatility. Die-cast magnesium cabinets equipped with fast-locking mechanisms, integrated safety handles, and corner protectors to withstand frequent transit and rapid assembly.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/1-1.webp",
    subSeries: [
      {
        id: "rental-500-series",
        slug: "rental-500-series",
        name: "Rental 500 Series",
        tagline: "500x500mm & 500x1000mm Modular Staging System",
        cabinetWeight: "7.5 kg / panel",
        curvingCapacity: "-10° to +10° Convex & Concave Curved Locks",
        brightness: "Indoor 1,000 nits / Outdoor 5,000 nits",
        refreshRate: "3,840 Hz - 7,680 Hz",
        pitches: [
          { pitch: "P2.6", environment: "Indoor", resolution: "192x192 dots" },
          { pitch: "P2.9", environment: "Indoor", resolution: "168x168 dots" },
          { pitch: "P3.91", environment: "Indoor / Outdoor", resolution: "128x128 dots" },
          { pitch: "P4.81", environment: "Outdoor", resolution: "104x104 dots" }
        ],
        features: [
          "One-man quick lock installation system (seconds per panel)",
          "Foldable ladder handle for quick technician maintenance",
          "Interchangeable 500x500mm and 500x1000mm cabinet sizes",
          "Heavy-duty flight cases with vibration dampeners included"
        ]
      },
      {
        id: "rental-576-series",
        slug: "rental-576-series",
        name: "Rental 576 Series",
        tagline: "576x576mm High-Speed Stage Production Panels",
        cabinetWeight: "8.0 kg / panel",
        curvingCapacity: "Straight & Stepped Rigging",
        brightness: "1,200 nits Indoor / 5,500 nits Outdoor",
        refreshRate: "3,840 Hz",
        pitches: [
          { pitch: "P3.0", environment: "Indoor", resolution: "192x192 dots" },
          { pitch: "P3.79", environment: "Indoor", resolution: "152x152 dots" },
          { pitch: "P4.8", environment: "Outdoor", resolution: "120x120 dots" },
          { pitch: "P6.0", environment: "Outdoor", resolution: "96x96 dots" }
        ],
        features: [
          "Enhanced die-cast aluminum frame with anti-drop latch",
          "Dual safety cable rigging system for hanging up to 20 panels high",
          "High refresh rate ensures scan-line-free live broadcast recording",
          "Quick magnetic swap modules for instantaneous field replacement"
        ]
      }
    ]
  },
  {
    id: "spl-indoor-led-displays",
    slug: "spl-indoor-led-displays",
    name: "Special Indoor (COB / GOB)",
    title: "Next-Gen Impact & Moisture Resistant Fine Pitch Displays",
    subtitle: "Chip-On-Board and Glue-On-Board packaging for high-touch public and critical environments.",
    description: "Standard SMD fine-pitch displays are vulnerable to collision, moisture, and dust. Zuper Special Indoor displays utilize advanced resin encapsulation (GOB) and flip-chip substrate bonding (COB) to provide complete physical protection and incredible black levels.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/2-1.webp",
    subSeries: [
      {
        id: "cob",
        slug: "cob",
        name: "COB LED Displays (Chip On Board)",
        tagline: "Direct-Die Surface Mounting for Ultimate Black Levels & Pitch < 1.0mm",
        protectionLevel: "Dustproof, Anti-Static, Moisture-Proof, Anti-Collision",
        contrastRatio: "10,000:1 True Black",
        viewingAngle: "178° H / 178° V Ultra-Wide",
        pitches: [
          { pitch: "P0.78", resolution: "768x432 dots", density: "1,640,000 dots/m²" },
          { pitch: "P0.93", resolution: "640x360 dots", density: "1,156,000 dots/m²" },
          { pitch: "P1.25", resolution: "480x270 dots", density: "640,000 dots/m²" },
          { pitch: "P1.56", resolution: "384x216 dots", density: "410,000 dots/m²" }
        ],
        features: [
          "Micro-LED chips bonded directly to PCB with optical epoxy encapsulation",
          "Surface cleans easily with standard damp cloth without damaging diodes",
          "Low surface heat emission and 40% reduced blue-light strain",
          "Eliminates moiré effect in television and conference camera feeds"
        ]
      },
      {
        id: "gob",
        slug: "gob",
        name: "GOB LED Displays (Glue On Board)",
        tagline: "Ultra-Protective Epoxy Encapsulated Surface for High-Traffic Public Spaces",
        protectionLevel: "Impact Resistant (5H Hardness), Waterproof, Scratch-Proof",
        contrastRatio: "6,000:1",
        viewingAngle: "160° H / 160° V",
        pitches: [
          { pitch: "P1.25", resolution: "256x128 dots", density: "640,000 dots/m²" },
          { pitch: "P1.53", resolution: "208x104 dots", density: "426,800 dots/m²" },
          { pitch: "P1.86", resolution: "172x86 dots", density: "288,900 dots/m²" },
          { pitch: "P2.0", resolution: "160x80 dots", density: "250,000 dots/m²" }
        ],
        features: [
          "High-transparency optical polyurethane shield cured over SMD LEDs",
          "Withstands accidental knocks from luggage, shopping carts, and crowds",
          "Ideal for shopping malls, train stations, museum touch zones, and bars",
          "Front magnetic tool allows effortless extraction of individual modules"
        ]
      }
    ]
  },
  {
    id: "transparent-led-display",
    slug: "transparent-led-display",
    name: "Transparent LED Display",
    title: "High-Transparency Glass Architectural Mesh Screens",
    subtitle: "Turn architectural glass walls and retail windows into dynamic media facades without blocking natural light.",
    description: "Offering up to 75% optical transparency, Zuper Transparent LED screens blend into modern building architecture. Daylight streams inside while passersby see vivid, floating digital advertisements and holograms from the exterior.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/3-2.webp",
    transparency: "65% - 80%",
    brightness: "4,500 - 6,000 nits (Sunlight readable)",
    cabinetWeight: "Lightweight Aluminum 7.5 kg/m²",
    ipRating: "IP43 Indoor Glass / IP65 Outdoor Facade",
    pitches: [
      { pitch: "P3.91 - P7.82", resolution: "128x64 dots", transparency: "70%" },
      { pitch: "P7.82 - P7.82", resolution: "64x64 dots", transparency: "78%" },
      { pitch: "P10.4 - P10.4", resolution: "48x48 dots", transparency: "82%" }
    ],
    features: [
      "Ultra-slim 10mm profile mounts directly behind glass without structural alteration",
      "Energy efficient side-emitting LED packaging consumes 40% less power than standard screens",
      "Natural interior illumination preserved with transparent hollow design",
      "Popular for luxury car showrooms, airport duty-free stores, and mall glass atriums"
    ]
  },
  {
    id: "zuper-sports-led-displays",
    slug: "zuper-sports-led-displays",
    name: "Zuper Sports LED Displays",
    title: "FIFA & BCCI Compliant Stadium Perimeter & Scoreboards",
    subtitle: "Built for live match action, player safety, and ultra-high-speed TV cameras.",
    description: "Specialized stadium perimeter video banners with soft rubber protective masks, foam top cushions to safeguard colliding athletes, and 7,680 Hz refresh rates ensuring smooth ultra-slow-motion television replays.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/1-1.webp",
    brightness: "6,500 - 8,500 nits",
    refreshRate: "7,680 Hz (Ultra-high broadcast standard)",
    cabinet: "Rotatable Die-cast Aluminum (75° to 90° Angle Adjustment)",
    viewingAngle: "160° H / 140° V",
    ipRating: "IP65 Waterproof & Shockproof",
    pitches: [
      { pitch: "P6", resolution: "160x160 dots", density: "27,777 dots/m²" },
      { pitch: "P8", resolution: "120x120 dots", density: "15,625 dots/m²" },
      { pitch: "P10", resolution: "96x96 dots", density: "10,000 dots/m²" }
    ],
    features: [
      "Impact-absorbing silicone rubber module face prevents injury upon athlete collision",
      "Adjustable rear support kickstand accommodates stadium boundary viewing angles",
      "Emergency exit door sections engineered into perimeter line for security personnel",
      "Dual backup signal loops guarantee uninterrupted live sponsor commercials"
    ]
  },
  {
    id: "zuper-datawall",
    slug: "zuper-datawall",
    name: "Zuper Datawall",
    title: "Mission-Critical 24/7 Command & Control Video Walls",
    subtitle: "Zero-latency, bezel-less monitoring displays for NOCs, power grids, smart cities, and traffic centers.",
    description: "Designed for mission-critical operations where display failure is not an option. Featuring 100,000-hour MTBF, dual redundant hot-swappable power supplies, and multi-source video windowing controllers capable of processing hundreds of camera feeds simultaneously.",
    heroImage: "/assets/images/2026/03/Product-Overview-Bg-001.webp",
    cardImage: "/assets/images/2026/08/2-1.webp",
    brightness: "500 - 800 nits (Optimized for extended operator eye comfort)",
    refreshRate: "3,840 Hz",
    cabinet: "CNC Machined Aluminum 16:9 600x337.5mm",
    reliability: "24/7/365 Continuous Operation Rating",
    pitches: [
      { pitch: "P0.9", resolution: "666x375 dots", idealViewing: "0.8m - 4m" },
      { pitch: "P1.25", resolution: "480x270 dots", idealViewing: "1.2m - 6m" },
      { pitch: "P1.53", resolution: "392x220 dots", idealViewing: "1.5m - 10m" },
      { pitch: "P1.86", resolution: "322x181 dots", idealViewing: "1.8m - 14m" }
    ],
    features: [
      "Complete hardware redundancy: dual power supplies, dual receiving cards",
      "Low eye-fatigue optical coating for 24-hour operator monitoring",
      "Compatible with all major SCADA, VMS, GIS, and video management matrix switches",
      "Certified 0.01mm seamless cabinet alignment for unbroken map grids and charts"
    ]
  }
];
