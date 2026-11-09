// Site copy, taken from "Portfolio Website Copy.md". Edit here to update the page.

export const contact = {
  // TODO: replace with your real contact details
  email: "ajadimayowa879@gmail.com",
  linkedin: "https://www.linkedin.com/in/dev-ajadi-mayowa/",
  github: "https://github.com/ajadimayowa",
  booking: "",
};

export const trust = [
  { value: "6+", label: "Years shipping production software" },
  { value: "5+", label: "Products taken from concept to launch" },
  { value: "ISO 42001", label: "Lead Implementer" },
];

export const services = [
  {
    title: "Product engineering, end to end",
    promise: "I take products from whiteboard to production.",
    points: [
      "Full-stack delivery in C#/.NET, Node.js and React",
      "API and data design across PostgreSQL and MongoDB",
      "MVPs that are built to scale, not rebuilt later",
    ],
  },
  {
    title: "Cloud architecture and DevOps",
    promise: "Infrastructure that's reliable, observable and cost-aware.",
    points: [
      "AWS architecture, Docker containerisation, CI/CD pipelines",
      "Redis caching and performance tuning",
      "Monitoring, alerting and incident playbooks from day one",
    ],
  },
  {
    title: "Technical leadership",
    promise: "Teams that deliver predictably and grow while doing it.",
    points: [
      "Roadmap planning and estimation with product owners",
      "Code review culture, mentoring and engineering standards",
      "Clear communication with non-technical stakeholders",
    ],
  },
  {
    title: "Responsible AI and governance",
    promise: "AI adoption with guardrails your customers and regulators trust.",
    points: [
      "ISO/IEC 42001 AI Management System implementation",
      "AI risk assessment, policies and impact reviews",
      "Bridging compliance requirements into engineering workflows",
    ],
  },
];

export const caseStudies = [
  {
    name: "Ogasela",
    title: "Building a trusted, AI-assisted marketplace for a nation of 36 states",
    meta: "Consumer marketplace · Nigeria",
    url: "https://ogasela.com",
    challenge:
      "Online classifieds in Nigeria are held back by trust. Ogasela needed a marketplace that felt as familiar as the local market square, but safer.",
    highlights: [
      "Seller verification with ID checks, face matching and proof of address",
      "Real-time chat with push notifications and safety prompts",
      "Escrow-style Office Pickup with staff inspection before release",
      "AI listing helper for descriptions, pricing and photo clean-up",
    ],
  },
  {
    name: "FSDH Elevate",
    title: "Delivering a secure digital platform for a leading financial services group",
    meta: "Financial services · FSDH Group",
    url: "https://elevate.fsdhgroup.com",
    challenge:
      "Enterprise delivery inside a regulated bank group, where security, audit trails and stakeholder alignment matter as much as features.",
    highlights: [
      "Requirements shaped with business, compliance and IT stakeholders",
      "Architecture and data model with security and audit built in",
      "Containerised delivery with monitoring and alerting",
      "Go-live, onboarding and post-launch improvements",
    ],
  },
  {
    name: "BCKash Cooperative",
    title: "Digitising savings, loans and investments for a Lagos cooperative",
    meta: "Cooperative finance · Lagos",
    url: "https://www.bckashcoop.com",
    challenge:
      "Members and whole market associations need contributions, loans and investments that are accurate, transparent and easy to access.",
    highlights: [
      "Savings, loan and investment workflows mapped into a clear scope",
      "Ledger-style data model so every naira is traceable",
      "Member portal, admin dashboard and loan approval flow",
      "Role-based access, secure auth and payment integration",
    ],
  },
];

export const projects = [
  {
    name: "FSDH Policy Portal",
    copy: "A secure portal giving FSDH Group one trusted source of truth for policy documents.",
    tags: ["Enterprise", "Financial services", "Compliance"],
    url: "https://policy-portal.fsdhgroup.com",
  },
  {
    name: "Rent a Chef",
    copy: "An on-demand platform for booking vetted professional chefs for homes and events.",
    tags: ["Marketplace", "Two-sided platform", "Bookings and payments"],
    url: "https://www.rentachefapp.com",
  },
];

export const stages = [
  { name: "Discover", copy: "I start with the business problem. Together we define users, goals and the metrics that will prove success." },
  { name: "Design", copy: "I map the architecture, data model and risks, then turn them into a realistic delivery plan." },
  { name: "Build", copy: "Small, frequent increments with code review and automated tests, so progress is visible every week." },
  { name: "Ship", copy: "Containerised releases through CI/CD on AWS, staged and reversible, so launches are calm, not risky." },
  { name: "Monitor and serve", copy: "Dashboards, alerts and clear incident response keep customers happy and problems small.", highlight: true },
  { name: "Improve", copy: "Real usage data and feedback feed the next cycle, so the product keeps getting better." },
];

export const stack = [
  { area: "Backend", tech: "C#, .NET, Node.js, REST APIs", value: "Robust services that handle real traffic" },
  { area: "Frontend", tech: "React, Next.js", value: "Fast, accessible interfaces users enjoy" },
  { area: "Data", tech: "PostgreSQL, MongoDB, Redis", value: "The right store for each job, tuned for speed" },
  { area: "Cloud and DevOps", tech: "AWS, Docker, CI/CD", value: "Repeatable releases and resilient infrastructure" },
  { area: "Governance", tech: "ISO/IEC 42001, AI risk management", value: "AI that is auditable and accountable" },
  { area: "Leadership", tech: "Agile/Scrum, mentoring, stakeholders", value: "Predictable delivery and a stronger team" },
];

export const credentials = [
  {
    badge: "ISO/IEC 42001",
    title: "Lead Implementer",
    copy: "Certified to plan and implement AI Management Systems under the international standard for responsible AI governance. I help organisations meet customer and regulatory expectations while still shipping fast.",
  },
  {
    badge: "BTech",
    title: "Computer Engineering",
    copy: "A hardware-to-software foundation in systems design, networks and computing that shapes how I architect reliable systems.",
  },
];
