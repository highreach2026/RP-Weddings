export interface StorySlide {
  type: "image" | "cta";
  url?: string;
  caption?: string;
  heading?: string;
  subheading?: string;
  ctaText?: string;
  ctaLink?: string;
}

export interface HighlightItem {
  id: string;
  label: string;
  cover?: string;
  iconUrl?: string;
  iconText?: string;
  iconColor?: string;
  bgColor: string;
  gradient: string;
  isBudgetTrigger?: boolean;
  items: StorySlide[];
}

export interface WeddingPost {
  id: string;
  location: string;
  subtitle: string;
  heading: string;
  caption: string;
  aspectRatio?: "4 / 5" | "1 / 1" | "9 / 16";
  images: {
    url: string;
    alt: string;
    caption?: string;
  }[];
  tags: string[];
  enquiryLabel?: string;
}

export interface TestimonialSlide {
  id: string;
  couple: string;
  origin: string;
  venue: string;
  quote: string;
  image: string;
}

export interface JourneySlide {
  step: string;
  eyebrow: string;
  title: string;
  description: string;
  image: string;
  highlight?: string;
}

export interface DifferenceSlide {
  eyebrow: string;
  title: string;
  body: string;
  image: string;
  isFinalCta?: boolean;
}

export interface FaqItem {
  q: string;
  a: string;
}

export interface BlogArticle {
  slug: string;
  category: string;
  readTime: string;
  date: string;
  title: string;
  excerpt: string;
  cover: string;
  sections: {
    heading: string;
    body: string;
  }[];
}

export const BRAND = {
  name: "Weddings by Rubina Patel",
  shortName: "RP Weddings",
  monogram: "RP",
  handle: "WeddingsByRubinaPatel",
  tagline: "Luxury Destination Wedding Planners",
  logo: "/logo.svg",
  since: "Since 2003",
  email: "concierge@rpweddings.in",
  phoneDisplay: "+91 98290 00000",
  phoneHref: "tel:+919829000000",
  whatsappNumber: "919829000000",
  address: "Heritage Courtyard Studio, Fateh Sagar Road, Udaipur, Rajasthan 313001",
};

export const HIGHLIGHTS: HighlightItem[] = [
  {
    id: "about-us",
    label: "About Us",
    iconUrl: "/logo.svg",
    iconText: "RP\nWeddings",
    iconColor: "oklch(0.45 0.09 70)",
    bgColor: "#f8f0e3",
    gradient: "from-amber-400 to-rose-500",
    items: [
      {
        type: "cta",
        heading: "Luxury Boutique Destination Weddings Since 2003",
        subheading:
          "RP Weddings crafts timeless, deeply personal celebrations across India's most storied palaces, forts, and coastal sanctuaries.\n\n✦ 20+ Years of Editorial Craftsmanship\n✦ 500+ Celebrations Across India & Overseas Families\n✦ Udaipur · Jaipur · Goa · Kerala\n✦ Limited Curated Weddings Per Season",
        ctaText: "Start Planning Your Wedding",
        ctaLink: "/contact",
      },
    ],
  },
  {
    id: "our-couples",
    label: "Our Couples",
    iconUrl: "/images/jaipur-couple.jpg",
    bgColor: "#fdf0f3",
    gradient: "from-pink-400 to-red-400",
    items: [
      {
        type: "image",
        url: "/images/jaipur-couple.jpg",
        caption: "A royal sandstone corridor at golden hour — Jaipur",
      },
      {
        type: "image",
        url: "/images/udaipur-mandap.jpg",
        caption: "Sunset pheras overlooking Lake Pichola — Udaipur",
      },
      {
        type: "image",
        url: "/images/reception-gala.jpg",
        caption: "Candlelit black-tie dinner under ancient palace arches",
      },
    ],
  },
  {
    id: "budget",
    label: "Budget",
    iconText: "₹\nBudget",
    iconColor: "oklch(0.42 0.1 155)",
    bgColor: "#edf7f3",
    gradient: "from-emerald-400 to-teal-500",
    isBudgetTrigger: true,
    items: [],
  },
  {
    id: "udaipur",
    label: "Udaipur",
    iconUrl: "/images/udaipur-mandap.jpg",
    bgColor: "#fdf0ed",
    gradient: "from-rose-400 to-orange-400",
    items: [
      {
        type: "image",
        url: "/images/udaipur-mandap.jpg",
        caption: "Lakeside marigold mandap facing heritage palaces in Udaipur",
      },
      {
        type: "image",
        url: "/images/haldi-courtyard.jpg",
        caption: "Sun-drenched sandstone haveli courtyard for Haldi & Mehendi",
      },
    ],
  },
  {
    id: "jaipur",
    label: "Jaipur",
    iconUrl: "/images/jaipur-sangeet.jpg",
    bgColor: "#faf2e8",
    gradient: "from-amber-400 to-orange-500",
    items: [
      {
        type: "image",
        url: "/images/jaipur-sangeet.jpg",
        caption: "Chandeliers, fairy lights & courtyard grandeur in the Pink City",
      },
      {
        type: "image",
        url: "/images/reception-gala.jpg",
        caption: "Royal palace lawn reception in Jaipur",
      },
    ],
  },
  {
    id: "goa",
    label: "Goa",
    iconUrl: "/images/goa-beach.jpg",
    bgColor: "#eef6fa",
    gradient: "from-sky-400 to-amber-300",
    items: [
      {
        type: "image",
        url: "/images/goa-beach.jpg",
        caption: "Champagne coastal pheras as the Arabian Sea turns gold",
      },
    ],
  },
  {
    id: "philosophy",
    label: "Philosophy",
    iconUrl: "/images/reception-gala.jpg",
    bgColor: "#f6f1ea",
    gradient: "from-amber-500 to-yellow-600",
    items: [
      {
        type: "cta",
        heading: "Personal Attention, Zero Surprises",
        subheading:
          "We intentionally limit our calendar each year so our founding directors personally lead every venue negotiation, design walkthrough, and wedding weekend.",
        ctaText: "Book a Private Consultation",
        ctaLink: "/contact",
      },
    ],
  },
];

export const HERO_STATS = [
  { value: "500+", label: "Celebrations" },
  { value: "20+", label: "Years" },
  { value: "4", label: "Destinations" },
  { value: "8", label: "Weddings/Year" },
];

export const TESTIMONIAL_SLIDES: TestimonialSlide[] = [
  {
    id: "t1",
    couple: "Ananya & Rohan",
    origin: "London, UK",
    venue: "Lake Pichola Palace, Udaipur",
    quote:
      "Planning from London felt effortless. RP Weddings handled every hotel negotiation, guest arrival, and sunset mandap detail with extraordinary calm.",
    image: "/images/udaipur-mandap.jpg",
  },
  {
    id: "t2",
    couple: "Meera & Dev",
    origin: "New York, USA",
    venue: "Heritage Fort Courtyard, Jaipur",
    quote:
      "Our guests are still talking about the candlelit Sangeet courtyard. Not once did we feel stressed — every timeline ran like clockwork.",
    image: "/images/jaipur-sangeet.jpg",
  },
  {
    id: "t3",
    couple: "Tara & Kabir",
    origin: "Singapore",
    venue: "South Goa Coastal Resort",
    quote:
      "From the breezy linen beach vows to the farewell brunch, RP Weddings translated our vision into pure magic while staying completely transparent on budget.",
    image: "/images/goa-beach.jpg",
  },
];

export const FEED_POSTS: WeddingPost[] = [
  {
    id: "udaipur-lakeside-vows",
    location: "Udaipur, Rajasthan",
    subtitle: "Lakeside Heritage Palace",
    heading: "AARAV & KIARA · LAKE PICHOLA",
    caption:
      "Three days of sunlit heritage celebrations overlooking Lake Pichola.\n\nWe transformed a centuries-old lakeside promenade into an intimate sanctuary of ivory roses, brass urlis, and hand-strung marigolds as boats glided across the golden water at dusk.",
    aspectRatio: "4 / 5",
    tags: ["Udaipur", "Palace Wedding", "200 Guests"],
    images: [
      {
        url: "/images/udaipur-mandap.jpg",
        alt: "Sunset lakeside mandap in Udaipur",
        caption: "Sunset Pheras by Lake Pichola",
      },
      {
        url: "/images/haldi-courtyard.jpg",
        alt: "Haldi courtyard in Udaipur",
        caption: "Morning Marigold Haldi Courtyard",
      },
    ],
  },
  {
    id: "jaipur-royal-sangeet",
    location: "Jaipur, Rajasthan",
    subtitle: "Pink City Heritage Fort",
    heading: "SIDDHARTH & RHEA · JAIPUR COURTYARD",
    caption:
      "Under a canopy of warm crystal chandeliers and cascading blush florals, 240 guests gathered from Mumbai, London, and Toronto for an unforgettable Rajasthani Sangeet night.\n\nComplete palace buyout, custom stage acoustics, and curated heritage hospitality from airport tarmac to midnight after-party.",
    aspectRatio: "4 / 5",
    tags: ["Jaipur", "Sangeet", "Royal Fort"],
    images: [
      {
        url: "/images/jaipur-sangeet.jpg",
        alt: "Royal Jaipur courtyard Sangeet night",
        caption: "Starlit Courtyard Sangeet",
      },
      {
        url: "/images/jaipur-couple.jpg",
        alt: "Bride and groom in Jaipur palace corridor",
        caption: "Golden Hour Portraits in Sandstone Arches",
      },
      {
        url: "/images/reception-gala.jpg",
        alt: "Candlelit reception dinner",
        caption: "Black-Tie Palace Garden Reception",
      },
    ],
  },
  {
    id: "goa-coastal-serenade",
    location: "South Goa",
    subtitle: "Arabian Sea Sanctuary",
    heading: "VIKRAM & ISHA · SUNSET BY THE SEA",
    caption:
      "Soft ocean breeze, sculpted champagne florals, and barefoot elegance.\n\nDesigned for couples seeking an unhurried three-day coastal escape where architecture, music, and twilight tides set the rhythm of every ceremony.",
    aspectRatio: "4 / 5",
    tags: ["Goa", "Beach Wedding", "120 Guests"],
    images: [
      {
        url: "/images/goa-beach.jpg",
        alt: "Goa sunset beach wedding mandap",
        caption: "Twilight Mandap Overlooking the Arabian Sea",
      },
      {
        url: "/images/reception-gala.jpg",
        alt: "Evening candlelit banquet",
        caption: "Lantern-Lit Lawn Gala",
      },
    ],
  },
  {
    id: "udaipur-haldi-heritage",
    location: "Udaipur, Rajasthan",
    subtitle: "Carved Haveli Courtyard",
    heading: "NEHA & ARJUN · MARIGOLD MORNINGS",
    caption:
      "Vibrant marigold cascades, hand-beaten brass bowls filled with rose petals, and folk melodies echoing against carved sandstone jharokhas.\n\nEvery morning ritual is choreographed with comfort in mind — shaded seating, chilled botanical infusions, and effortless transitions into evening festivities.",
    aspectRatio: "4 / 5",
    tags: ["Haldi", "Mehendi", "Haveli"],
    images: [
      {
        url: "/images/haldi-courtyard.jpg",
        alt: "Sunlit Haldi and Mehendi courtyard",
        caption: "Haveli Courtyard Haldi & Mehendi",
      },
      {
        url: "/images/udaipur-mandap.jpg",
        alt: "Evening mandap transition",
        caption: "Dusk Pheras Transition",
      },
    ],
  },
];

export const JOURNEY_SLIDES: JourneySlide[] = [
  {
    step: "01",
    eyebrow: "Discovery & Vision",
    title: "One Conversation That Maps Everything",
    description:
      "We begin by listening to your guest count, dates, aesthetic sensibilities, and family traditions — then match you with 3 vetted heritage properties that truly fit.",
    image: "/images/jaipur-couple.jpg",
    highlight: "Months 12–15 Before",
  },
  {
    step: "02",
    eyebrow: "Venue & Contract Mastery",
    title: "Transparent Room Blocks & Zero Hidden Clauses",
    description:
      "Our long-standing relationships with palace hotels in Udaipur, Jaipur, and Goa secure preferred buyout terms, corkage flexibility, and crystal-clear budgets.",
    image: "/images/udaipur-mandap.jpg",
    highlight: "100% Open-Book Pricing",
  },
  {
    step: "03",
    eyebrow: "Design & Curation",
    title: "Bespoke Moodboards, Florals & Culinary Craft",
    description:
      "From architectural mandap sketches to regional tasting menus and lighting cues, every celebration feels tailored rather than templated.",
    image: "/images/jaipur-sangeet.jpg",
    highlight: "Custom 3D & Floral Direction",
  },
  {
    step: "04",
    eyebrow: "On-Site Command",
    title: "Seamless Hospitality For Every Single Guest",
    description:
      "Dedicated airport concierge, WhatsApp guest desks, artist logistics, and minute-by-minute run sheets so your families simply soak in the joy.",
    image: "/images/reception-gala.jpg",
    highlight: "Dedicated 12+ Member Ground Team",
  },
];

export const DIFFERENCE_SLIDES: DifferenceSlide[] = [
  {
    eyebrow: "The RP Weddings Standard",
    title: "Only 8 Weddings a Year",
    body: "We never overbook our calendar. Every couple works directly with our senior planners from day one through the final farewell brunch.",
    image: "/images/jaipur-couple.jpg",
  },
  {
    eyebrow: "Financial Clarity",
    title: "Zero Vendor Commissions Hidden From You",
    body: "Line-by-line itemized budgets, direct vendor transparency, and clear milestone schedules built especially for NRI & overseas families.",
    image: "/images/haldi-courtyard.jpg",
  },
  {
    eyebrow: "Built For Overseas Families",
    title: "Time-Zone Synced Planning",
    body: "Whether you are in London, New York, Dubai, or Singapore, we align call hours and digital previews to your schedule.",
    image: "/images/goa-beach.jpg",
  },
  {
    eyebrow: "Begin Your Celebration",
    title: "Let's Design Your Wedding Weekend",
    body: "Check venue availability for the 2026–2027 wedding season and receive a personalized destination brief.",
    image: "/images/reception-gala.jpg",
    isFinalCta: true,
  },
];

export const FAQ_ITEMS: FaqItem[] = [
  {
    q: "How much does a destination wedding in Udaipur or Jaipur typically cost?",
    a: "Most boutique heritage palace weddings for 100–150 guests over 2 nights range between ₹85 Lakh and ₹2.2 Crore, depending on venue tier and décor scale. Full luxury palace buyouts at iconic lakeside properties can range from ₹3 Crore to ₹5.5 Crore. Room inventory and F&B usually represent 45–55% of the total investment.",
  },
  {
    q: "How far in advance should we book RP Weddings and our venue?",
    a: "For peak season dates (November to February), we recommend beginning 14–18 months ahead so we can lock prime heritage palaces in Udaipur and Jaipur. Spring and monsoon-coastal weddings in Goa or Kerala can often be crafted comfortably in 8–10 months.",
  },
  {
    q: "Do you work with NRI and international couples planning from abroad?",
    a: "Yes — the majority of our celebrations are planned for families based in the UK, USA, Canada, UAE, and Singapore. We coordinate across your time zone, conduct live video venue walkthroughs, and manage every ground detail in India.",
  },
  {
    q: "Which destination suits us best — Udaipur, Jaipur, Goa, or Kerala?",
    a: "Udaipur is unmatched for intimate lakeside palaces and romantic views (80–200 guests). Jaipur excels for royal fort grandeur and larger guest lists (150–350+ guests). Goa is ideal for relaxed sunset beach vows, while Kerala offers lush backwater serenity.",
  },
  {
    q: "What is included in RP Weddings' full-service planning?",
    a: "Our end-to-end scope covers destination & venue curation, hotel contract negotiation, complete décor & production direction, vendor sourcing (photography, MUA, entertainment, hospitality), RSVP & guest travel logistics, and full on-site execution.",
  },
];

export const BLOG_ARTICLES: BlogArticle[] = [
  {
    slug: "cost-of-destination-wedding-in-udaipur",
    category: "Budget & Planning",
    readTime: "6 min read",
    date: "Season 2026–27 Guide",
    title: "The Real Cost of a Destination Wedding in Udaipur",
    excerpt:
      "A transparent breakdown of palace buyouts, décor production, hospitality, and smart ways to allocate your wedding investment.",
    cover: "/images/udaipur-mandap.jpg",
    sections: [
      {
        heading: "1. Venue Buyout & Hospitality (45–55%)",
        body: "At most Udaipur heritage hotels and lakeside palaces, accommodation and curated multi-event catering make up roughly half of the overall budget. Booking 12–15 months ahead often secures stronger shoulder-date room blocks.",
      },
      {
        heading: "2. Floral Architecture, Lighting & Production (20–25%)",
        body: "Udaipur palaces already possess dramatic sandstone backdrops. Strategic architectural lighting, candle clusters, and seasonal botanical installations create editorial impact without unnecessary overbuilding.",
      },
      {
        heading: "3. Photography, Entertainment & Guest Logistics (20–30%)",
        body: "From folk musicians welcoming guests at Maharana Pratap Airport to multi-camera cinema crews and live acoustic sunset bands, allocating thoughtfully to guest experience makes the weekend unforgettable.",
      },
    ],
  },
  {
    slug: "udaipur-vs-jaipur-vs-goa-choosing-your-venue",
    category: "Destinations",
    readTime: "5 min read",
    date: "Curated Comparison",
    title: "Udaipur vs. Jaipur vs. Goa: Choosing Your Ideal Setting",
    excerpt:
      "Compare palace capacities, airport connectivity, weather windows, and celebratory mood across India's top three luxury wedding destinations.",
    cover: "/images/jaipur-sangeet.jpg",
    sections: [
      {
        heading: "Udaipur — Romantic Lakeside Serenity",
        body: "Best for 80–200 guests who dream of boat processions, Aravalli views, and sunset mandaps reflected on Lake Pichola.",
      },
      {
        heading: "Jaipur — Royal Forts & Grandeur",
        body: "Unrivaled international flight connectivity via Delhi/Jaipur and expansive historic courtyards capable of hosting grand Sangeets and 250+ guest lists.",
      },
      {
        heading: "Goa — Effortless Coastal Luxury",
        body: "Perfect for couples craving sundowner pool parties, ocean-facing vows, and boutique resort comfort from November through March.",
      },
    ],
  },
];
