/* ------------------------------------------------------------------ *
 *  SITE CONTENT — EDIT THIS FILE TO UPDATE THE WEBSITE
 * ------------------------------------------------------------------ *
 *  This is the single source of truth for most of the text on the
 *  site. You do not need to touch any other code to add a press
 *  release, an update, a project, or an event. Just edit the arrays
 *  below, save, and redeploy (or let Vercel auto-deploy from GitHub).
 *
 *  Each item uses simple fields. Keep the quotes and commas in place.
 * ------------------------------------------------------------------ */

export const site = {
  name: "Mayor Ryan Shirley",
  shortName: "Mayor Shirley",
  city: "Holly Springs, Georgia",
  domain: "www.mayorshirley.com",
  email: "rshirley@hollyspringsga.us",
  facebook: "https://www.facebook.com/profile.php?id=61565438793386",
  townCenterFacebook: "https://www.facebook.com/hollyspringstowncenter",
  townCenterWebsite: "https://hollyspringstowncenter.com",
  // Used by the contact form. See README -> "Contact form setup".
  formspreeEndpoint: "https://formspree.io/f/your-form-id",
};

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Updates", href: "/updates" },
  { label: "Press Releases", href: "/press" },
  { label: "Projects", href: "/projects" },
  { label: "Events", href: "/events" },
  { label: "Contact", href: "/contact" },
];

/* ---------------------------- HERO ------------------------------- */
export const hero = {
  eyebrow: "Office of the Mayor · Holly Springs, GA",
  headline: "Moving Holly Springs Forward",
  subhead:
    "Growth, transparency, and community — together. Stay informed on what's happening across our city and connect directly with your mayor.",
  primaryCta: { label: "See City Updates", href: "/updates" },
  secondaryCta: { label: "Contact the Mayor", href: "/contact" },
};

/* ----------------------- WELCOME MESSAGE ------------------------- */
export const welcome = {
  title: "A Message from Mayor Shirley",
  paragraphs: [
    "Holly Springs is one of the fastest-growing and most welcoming cities in Cherokee County — and that's no accident. It's the result of neighbors who care, businesses who invest here, and a local government committed to doing the work in the open.",
    "My promise to you is simple: keep our community informed, keep our city moving forward, and always keep the door open. This website is your hub for city updates, project progress, and a direct line to my office.",
  ],
  signature: "Ryan Shirley",
  signatureTitle: "Mayor, City of Holly Springs",
};

/* --------------------------- UPDATES ----------------------------- *
 *  Short, timely notes about what's happening in the city.
 *  category options (for the colored tag): "City" | "Roads" |
 *  "Parks" | "Public Safety" | "Community" | "Development"
 * ----------------------------------------------------------------- */
export type Update = {
  slug: string;
  title: string;
  date: string; // "June 18, 2026"
  category: string;
  summary: string;
  body: string[];
};

export const updates: Update[] = [
  {
    slug: "town-center-amphitheater",
    title: "New Town Center Amphitheater Taking Shape",
    date: "June 20, 2026",
    category: "Development",
    summary:
      "Construction is well underway on the Holly Springs Town Center Amphitheater — the centerpiece of our new entertainment district, set to host concerts and community events.",
    body: [
      "One of the most exciting projects in our city is rising fast: the Holly Springs Town Center Amphitheater. Following the groundbreaking, crews have been building out the stage, green room, dressing rooms, and public restrooms that will make this a true community venue.",
      "Located on the western side of the Town Center near the railroad tracks, the amphitheater will anchor a walkable, Main Street-inspired entertainment district — with restaurants, retail, a dog park, food trucks, and gathering spaces on either side, plus a parking deck offering more than 300 free public spaces.",
      "Once open, the amphitheater will host concerts and community favorites like the Holly Springs Harmonies summer series. This is what moving Holly Springs forward looks like — a place for neighbors to gather, celebrate, and enjoy our growing city together.",
    ],
  },
  {
    slug: "downtown-streetscape-progress",
    title: "Downtown Streetscape Improvements Underway",
    date: "June 18, 2026",
    category: "Development",
    summary:
      "Crews have begun sidewalk widening and new pedestrian lighting along Holly Springs Parkway to make downtown safer and more walkable.",
    body: [
      "Work is now underway on the first phase of our downtown streetscape program. Over the coming weeks, residents will see wider sidewalks, upgraded pedestrian lighting, and new street trees along Holly Springs Parkway.",
      "The goal is a downtown that's safer to walk, friendlier to local business, and ready for the events our community loves. We'll share lane-closure schedules in advance so you can plan your trips.",
      "Thank you for your patience during construction. The result will be a downtown we can all be proud of.",
    ],
  },
  {
    slug: "summer-water-system-maintenance",
    title: "Scheduled Summer Water System Maintenance",
    date: "June 10, 2026",
    category: "City",
    summary:
      "Routine hydrant flushing begins this month. You may notice temporary discoloration — it's safe and clears quickly.",
    body: [
      "Our public works team is performing routine hydrant flushing across the city this summer. This keeps water lines clean and ensures strong flow for fire protection.",
      "During flushing in your area, you may notice temporary water discoloration. It is not harmful — simply run cold water for a few minutes until it clears.",
      "Flushing schedules by neighborhood are posted to the city calendar and our Facebook page.",
    ],
  },
  {
    slug: "new-recreation-trail-connector",
    title: "New Recreation Trail Connector Opens",
    date: "May 30, 2026",
    category: "Parks",
    summary:
      "A new paved connector now links two of our most popular greenway segments — perfect for walking, running, and biking.",
    body: [
      "We're excited to open a new paved trail connector linking two of our most-used greenway segments. The connector adds safe, off-road access for walkers, runners, and cyclists.",
      "Investing in trails and parks is investing in the health and connectedness of our community. More greenway expansions are planned in the years ahead.",
    ],
  },
];

/* ------------------------ PRESS RELEASES ------------------------- */
export type PressRelease = {
  slug: string;
  title: string;
  date: string;
  location: string;
  summary: string;
  body: string[];
};

export const pressReleases: PressRelease[] = [
  {
    slug: "fy2027-budget-priorities",
    title: "City Announces FY2027 Budget Priorities",
    date: "June 16, 2026",
    location: "Holly Springs, GA",
    summary:
      "The City of Holly Springs outlines budget priorities focused on public safety, infrastructure, and parks — with no property tax rate increase proposed.",
    body: [
      "HOLLY SPRINGS, GA — Mayor Ryan Shirley today announced the City's budget priorities for Fiscal Year 2027, emphasizing investments in public safety, road and infrastructure maintenance, and parks and recreation.",
      "\"Our residents expect us to be responsible stewards of every dollar,\" said Mayor Shirley. \"This plan strengthens core services and invests in the projects that make Holly Springs a great place to live — without raising the property tax rate.\"",
      "The proposed budget includes funding for additional public safety personnel, a continued road resurfacing program, and the next phase of greenway expansion. Public input sessions will be scheduled before final adoption.",
      "Residents are encouraged to attend upcoming City Council meetings and share feedback. Meeting dates are posted to the city calendar.",
    ],
  },
  {
    slug: "small-business-spotlight-program",
    title: "Mayor Launches Small Business Spotlight Program",
    date: "May 22, 2026",
    location: "Holly Springs, GA",
    summary:
      "A new program highlights local entrepreneurs and encourages residents to shop, dine, and invest close to home.",
    body: [
      "HOLLY SPRINGS, GA — Mayor Ryan Shirley announced the launch of the Holly Springs Small Business Spotlight, a recurring program that features local businesses and the people behind them.",
      "\"Our small businesses are the heartbeat of this community,\" said Mayor Shirley. \"When they thrive, Holly Springs thrives. This program is about celebrating them and encouraging all of us to shop local.\"",
      "Featured businesses will be shared on the city website and the Mayor's Facebook page. Local owners interested in being featured can reach the Mayor's office directly.",
    ],
  },
];

/* --------------------- PROJECTS & PRIORITIES --------------------- *
 *  status options: "In Progress" | "Planned" | "Completed"
 * ----------------------------------------------------------------- */
export type Project = {
  title: string;
  status: "In Progress" | "Planned" | "Completed";
  category: string;
  summary: string;
  details: string;
};

export const projects: Project[] = [
  {
    title: "Town Center Amphitheater & Entertainment District",
    status: "In Progress",
    category: "Community & Economic Development",
    summary:
      "A new amphitheater and walkable entertainment district at Holly Springs Town Center — concerts, restaurants, retail, food trucks, and gathering spaces.",
    details:
      "The Holly Springs Town Center Amphitheater will host concerts and events like the Holly Springs Harmonies series, anchoring a Main Street-style district with dining, retail, a dog park, and 300+ free parking spaces. The broader Town Center is expected to be fully built out by 2027–2028.",
  },
  {
    title: "Downtown Revitalization",
    status: "In Progress",
    category: "Economic Development",
    summary:
      "Wider sidewalks, pedestrian lighting, and streetscaping to create a vibrant, walkable downtown core.",
    details:
      "A phased program to make downtown Holly Springs safer, more attractive, and more supportive of local business and community events.",
  },
  {
    title: "Road Resurfacing & Safety",
    status: "In Progress",
    category: "Infrastructure",
    summary:
      "A multi-year program to resurface key roads and improve intersection safety across the city.",
    details:
      "Prioritizing the roads residents use most, with a focus on smooth pavement, clear markings, and safer crossings for pedestrians.",
  },
  {
    title: "Greenway & Trail Expansion",
    status: "Planned",
    category: "Parks & Recreation",
    summary:
      "Connecting neighborhoods, parks, and downtown with safe, paved walking and biking trails.",
    details:
      "Expanding our greenway network to give every resident access to safe, off-road recreation and connectivity throughout the city.",
  },
  {
    title: "Public Safety Investment",
    status: "In Progress",
    category: "Public Safety",
    summary:
      "Supporting our first responders with staffing, training, and equipment to keep Holly Springs safe.",
    details:
      "Continued investment in the personnel and tools our public safety teams need to protect our growing community.",
  },
  {
    title: "Transparent City Communications",
    status: "Completed",
    category: "Governance",
    summary:
      "A modern communications hub — this website — so residents always know what's happening.",
    details:
      "Launching a central, mobile-friendly place for city updates, press releases, project tracking, and direct contact with the Mayor's office.",
  },
  {
    title: "Parks & Public Spaces",
    status: "Planned",
    category: "Quality of Life",
    summary:
      "Upgrading playgrounds, gathering spaces, and amenities that bring neighbors together.",
    details:
      "Investing in the parks and public spaces where our community gathers, plays, and celebrates together.",
  },
];

/* -------------------------- EVENTS ------------------------------- */
export type CommunityEvent = {
  title: string;
  date: string; // "July 4, 2026"
  time: string;
  location: string;
  description: string;
};

export const events: CommunityEvent[] = [
  {
    title: "Holly Springs Harmonies Concert Series",
    date: "Summer 2026",
    time: "Evenings · see schedule",
    location: "Holly Springs Town Center Amphitheater",
    description:
      "Live music returns with our popular Holly Springs Harmonies series — coming to the new Town Center Amphitheater. Bring the family for great music in the heart of our new entertainment district.",
  },
  {
    title: "Independence Day Celebration",
    date: "July 4, 2026",
    time: "6:00 PM – 10:00 PM",
    location: "Holly Springs City Park",
    description:
      "Join your neighbors for food trucks, live music, family activities, and a fireworks finale celebrating our nation and our city.",
  },
  {
    title: "City Council Meeting",
    date: "July 14, 2026",
    time: "6:00 PM",
    location: "Holly Springs City Hall",
    description:
      "City Council meetings are open to the public. Come learn about city business and share your input during public comment.",
  },
  {
    title: "Movies in the Park",
    date: "July 25, 2026",
    time: "8:00 PM",
    location: "Holly Springs City Park",
    description:
      "Bring a blanket and the whole family for a free outdoor movie night under the stars.",
  },
];

/* ------------------------- STATS / TRUST ------------------------- */
export const stats = [
  { value: "Open", label: "Government & Records" },
  { value: "6+", label: "Active City Projects" },
  { value: "1 City", label: "One Community, Moving Forward" },
];
