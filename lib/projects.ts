export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured: boolean;
}

export const PROJECTS: Project[] = [
  {
    id: 1,
    title: "Nexus Dashboard",
    description:
      "A real-time analytics dashboard for SaaS businesses. Features live data streaming, customizable widgets, role-based access control, and beautiful data visualizations built with Recharts.",
    image: "/images/saas-analytics-dashboard-dark.jpg",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Recharts"],
    liveUrl: "https://nexus-dashboard.demo",
    githubUrl: "https://github.com/alexmorgan/nexus-dashboard",
    featured: true,
  },
  {
    id: 2,
    title: "Orbit — Project Management",
    description:
      "A Kanban-style project management tool with drag-and-drop boards, real-time collaboration via WebSockets, team workspaces, and Slack integration.",
    image: "/images/kanban-project-management-app.jpg",
    tags: ["React", "Node.js", "Socket.io", "MongoDB", "Tailwind CSS"],
    liveUrl: "https://orbit-pm.demo",
    githubUrl: "https://github.com/alexmorgan/orbit",
    featured: true,
  },
  {
    id: 3,
    title: "Luminary E-Commerce",
    description:
      "A full-featured e-commerce platform with Stripe payments, inventory management, product search with Algolia, and an admin panel for order fulfillment.",
    image: "/images/modern-ecommerce-storefront.jpg",
    tags: ["Next.js", "Stripe", "Algolia", "Sanity CMS", "Vercel"],
    liveUrl: "https://luminary-shop.demo",
    githubUrl: "https://github.com/alexmorgan/luminary",
    featured: true,
  },
  {
    id: 4,
    title: "Pulse — Health Tracker",
    description:
      "A mobile-first health and fitness tracking app with workout logging, nutrition tracking, progress charts, and Apple Health integration.",
    image: "/images/health-fitness-tracker-app.jpg",
    tags: ["React Native", "Expo", "GraphQL", "Supabase", "TypeScript"],
    liveUrl: "https://pulse-health.demo",
    githubUrl: "https://github.com/alexmorgan/pulse",
    featured: false,
  },
  {
    id: 5,
    title: "Scribe — AI Writing Assistant",
    description:
      "An AI-powered writing assistant that helps users draft, edit, and improve content using OpenAI GPT-4. Includes tone adjustment, grammar correction, and style suggestions.",
    image: "/images/ai-writing-assistant-interface.jpg",
    tags: ["Next.js", "OpenAI API", "Vercel AI SDK", "Tailwind CSS", "Redis"],
    liveUrl: "https://scribe-ai.demo",
    githubUrl: "https://github.com/alexmorgan/scribe",
    featured: false,
  },
  {
    id: 6,
    title: "Beacon — Link Shortener",
    description:
      "A high-performance URL shortener with click analytics, QR code generation, custom slugs, and a public API. Handles millions of redirects per day.",
    image: "/images/url-shortener-analytics-tool.jpg",
    tags: ["Go", "Redis", "PostgreSQL", "Next.js", "Docker"],
    liveUrl: "https://beacon.link",
    githubUrl: "https://github.com/alexmorgan/beacon",
    featured: false,
  },
];
