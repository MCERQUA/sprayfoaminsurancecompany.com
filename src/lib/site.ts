// Centralized site data — used across nav, footer, schema, CTAs
// Spray Foam Insurance Company — direct spray foam contractor insurance

export const SITE = {
  name: "Spray Foam Insurance Company",
  legalName: "Spray Foam Insurance Company (by Contractors Choice Agency)",
  domain: "sprayfoaminsurancecompany.com",
  url: "https://sprayfoaminsurancecompany.com",
  tagline: "The Insurance Company Built for Spray Foam",
  description:
    "Direct spray foam insurance — GL, off-ratio coverage, contractor pollution liability, workers' comp, commercial auto, tools and equipment, umbrella, and bonds. Same-day certificates. A-rated. All 50 states.",
  phone: "844-967-5247",
  phoneAlt: "855-336-7189",
  phoneHref: "tel:+18449675247",
  phoneAltHref: "tel:+18553367189",
  email: "josh@contractorschoiceagency.com",
  founded: 2005,
  npn: "8608479",
  address: {
    street: "12220 E Riggs Road, Suite #105",
    city: "Chandler",
    state: "AZ",
    zip: "85249",
    country: "US",
  },
  hours: "Mon–Fri 8am–5pm (MST)",
  claimsSla: "2-hour claims response",
  quoteSla: "15-minute quote turnaround",
  statesLicensed: "All 50 states",
} as const;

export const BRAND = {
  brandShort: "Spray Foam",
  brandSub: "Insurance Company",
  nicheShort: "spray foam contractor",
  nicheShortCap: "Spray Foam Contractor",
  nichePlural: "spray foam contractors",
  nichePluralCap: "Spray Foam Contractors",
  operator: "spray foam applicator",
  operatorCap: "Spray Foam Applicator",
  industry: "spray foam contracting",
  industryCap: "Spray Foam Contracting",
  audience: "spray foam contractors",
  audienceCap: "Spray Foam Contractors",
  ownerTitle: "spray foam contractor",
  regionPill: "Texas · Southeast · National",
  serviceSuffix: "Spray Foam Contractors",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Coverage", href: "/coverage" },
  { label: "About", href: "/about" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "general-liability",
    title: "General Liability",
    short: "The foundational policy every applicator needs",
    description:
      "Core protection for spray foam contractors — covers third-party bodily injury, property damage, and completed-operations claims. Required by most GCs and building owners. Built for the unique risk profile of spray polyurethane foam work.",
    icon: "ShieldCheck",
    keywords: ["spray foam general liability insurance", "spray foam GL policy", "spray foam contractor liability", "spray polyurethane foam insurance"],
  },
  {
    slug: "off-ratio-coverage",
    title: "Off-Ratio Coverage",
    short: "The most common claim in spray foam — covered",
    description:
      "Off-ratio foam is the industry's most frequent and costly claim. When your A and B components mix incorrectly, the resulting foam can off-gas, fail structurally, and trigger expensive remediation. We write policies that cover it — most carriers exclude it.",
    icon: "Gauge",
    keywords: ["off-ratio spray foam insurance", "off-ratio foam coverage", "spray foam off-ratio claims", "improper mix ratio coverage"],
  },
  {
    slug: "contractor-pollution-liability",
    title: "Contractor Pollution Liability",
    short: "Chemical exposure and off-gassing claims covered",
    description:
      "Spray foam chemicals — MDI, polyols, blowing agents — are regulated pollutants under most standard GL policies. CPL covers bodily injury from chemical exposure, property damage from off-gassing, and the cleanup costs that follow a chemical incident on a jobsite.",
    icon: "Droplets",
    keywords: ["spray foam pollution liability", "contractor pollution liability spray foam", "MDI exposure insurance", "spray foam chemical liability"],
  },
  {
    slug: "workers-compensation",
    title: "Workers' Compensation",
    short: "For spray foam crews and applicators",
    description:
      "Spray foam work involves respiratory hazards, chemical exposures, and elevated work. We write workers' comp with the correct class codes for spray foam applicators — not a generic painting or insulation code — so your premiums are accurate and your crew is covered.",
    icon: "HardHat",
    keywords: ["spray foam workers compensation", "spray foam workers comp", "spray foam crew insurance", "spray polyurethane foam workers comp"],
  },
  {
    slug: "commercial-auto",
    title: "Commercial Auto",
    short: "Spray rigs, vans, and crew vehicles",
    description:
      "Covers the vehicles you use to move your equipment and crew — spray rigs, cargo vans, pickup trucks, and trailers. Hired and non-owned auto for employees using personal vehicles on company jobs. Fleet and single-vehicle programs available.",
    icon: "Truck",
    keywords: ["spray foam contractor commercial auto", "spray rig insurance", "spray foam vehicle coverage", "contractor van insurance"],
  },
  {
    slug: "tools-equipment",
    title: "Tools & Equipment",
    short: "Proportioners, guns, hoses, and gear",
    description:
      "Covers your spray foam equipment — proportioners, heated hoses, spray guns, generators, and support equipment — against theft, damage, and breakdown on and off the jobsite. Equipment-intensive businesses like spray foam need this coverage.",
    icon: "Wrench",
    keywords: ["spray foam equipment insurance", "proportioner insurance", "spray foam tools coverage", "spray equipment coverage"],
  },
  {
    slug: "umbrella",
    title: "Commercial Umbrella",
    short: "Excess liability above your primary limits",
    description:
      "A commercial umbrella policy sits above your GL and commercial auto to provide additional limits when a claim exceeds your primary policy. Essential for spray foam contractors working on large commercial or multi-family projects where GCs require higher limits.",
    icon: "Umbrella",
    keywords: ["spray foam umbrella insurance", "contractor umbrella policy", "excess liability spray foam", "spray foam high limits"],
  },
  {
    slug: "bonds",
    title: "Contractor Bonds",
    short: "License, performance, and payment bonds",
    description:
      "License bonds, performance bonds, and payment bonds for spray foam contractors. Required for state licensing in most states and often required by property owners and general contractors. Fast approval, competitive rates.",
    icon: "FileCheck",
    keywords: ["spray foam contractor bond", "spray foam license bond", "performance bond spray foam", "contractor surety bond spray foam"],
  },
] as const;

export const LOCATIONS = [
  { slug: "texas-southwest", name: "Texas & Southwest", region: "TX · NM · AZ · OK", blurb: "The largest and fastest-growing spray foam market in the country. High demand for open-cell and closed-cell in new construction, retrofits, and commercial projects. We write spray foam programs for Texas contractors from the Panhandle to the Gulf Coast." },
  { slug: "southeast", name: "Southeast", region: "FL · GA · SC · NC · TN", blurb: "Year-round spray foam work driven by humidity control, energy codes, and hurricane resilience. Florida and the Southeast are high-volume markets with significant moisture-barrier and remediation exposure. We have the markets for it." },
  { slug: "midwest", name: "Midwest", region: "IL · OH · MI · IN · MO", blurb: "Cold-climate markets where closed-cell spray foam dominates for energy efficiency in residential and commercial construction. Midwest contractors need proper class codes and off-ratio coverage built for winter application conditions." },
  { slug: "northeast", name: "Northeast", region: "NY · PA · NJ · CT · MA", blurb: "Dense urban and suburban markets with high-value residential and commercial projects. Northeastern GCs often require elevated GL limits and umbrella coverage. We write programs that satisfy the certificate requirements of the Northeast's biggest GCs." },
  { slug: "california", name: "California", region: "CA · NV · OR", blurb: "California spray foam contractors face the strictest VOC and chemical regulations in the country. Our pollution liability programs are built for California's regulatory environment — including Prop 65 and CARB compliance exposures." },
  { slug: "mountain-states", name: "Mountain States", region: "CO · UT · ID · WY · MT", blurb: "High-altitude, high-demand spray foam markets in Colorado and Utah, where energy codes and new construction drive volume. Mountain states contractors need proper coverage for both residential subdivision work and commercial projects." },
  { slug: "mid-atlantic", name: "Mid-Atlantic", region: "VA · MD · DC · DE · WV", blurb: "The Mid-Atlantic corridor includes significant government, military, and commercial construction. Spray foam contractors in Virginia, Maryland, and DC often need elevated limits and fast certificates for federal projects." },
  { slug: "pacific-northwest", name: "Pacific Northwest", region: "WA · OR · AK", blurb: "Wet-climate spray foam markets where moisture control and vapor barriers are primary drivers. Washington and Oregon have strong residential and commercial spray foam demand, with Alaska presenting unique cold-spray and remote-jobsite considerations." },
] as const;

export const CREDENTIALS = [
  { label: "Licensed in all 50 states", icon: "MapPin" },
  { label: "Founded 2005 — 20+ years", icon: "CalendarCheck" },
  { label: "Spray foam specialists", icon: "HardHat" },
  { label: "15-minute quote turnaround", icon: "Timer" },
  { label: "Same-day certificates", icon: "Zap" },
  { label: "A.M. Best A-rated carriers", icon: "Award" },
] as const;

export const STATS = [
  { value: 500, suffix: "+", label: "Spray foam contractors insured nationwide", prefix: "" },
  { value: 20, suffix: "+", label: "Years insuring contractors", prefix: "" },
  { value: 15, suffix: " min", label: "Average quote turnaround", prefix: "" },
  { value: 50, suffix: "", label: "States licensed & writing", prefix: "" },
] as const;

export const TESTIMONIALS = [
  { quote: "A GC pulled our certificate because our old policy excluded off-ratio claims. Spray Foam Insurance Company placed us with a policy that covers it — same-day certificate. We were back on the job the next morning.", name: "Derek M.", role: "Spray Foam Applicator", location: "Texas" },
  { quote: "Our previous carrier dropped us after a remediation claim. These guys found us an A-rated program with off-ratio and CPL coverage. The process took less than a day. Should have called them years ago.", name: "Renee A.", role: "Owner", location: "Florida" },
  { quote: "I've been doing spray foam for 18 years. These are the first people who actually understood what off-ratio means and why standard GL doesn't cover it. Straightforward, fast, and they know the trade.", name: "Bill S.", role: "Spray Foam Contractor", location: "Ohio" },
] as const;
