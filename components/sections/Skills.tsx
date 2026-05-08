"use client";

import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { SkillBadge } from "@/components/ui/SkillBadge";

interface SkillCategory {
  title: string;
  emoji: string;
  description: string;
  skills: { name: string; level: "expert" | "advanced" | "intermediate" }[];
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Frontend",
    emoji: "🎨",
    description: "Building beautiful, responsive user interfaces",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "advanced" },
      { name: "Redux Toolkit", level: "advanced" },
      { name: "React Query", level: "advanced" },
      { name: "Storybook", level: "intermediate" },
    ],
  },
  {
    title: "Backend",
    emoji: "⚙️",
    description: "Scalable APIs and server-side architecture",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "PostgreSQL", level: "expert" },
      { name: "Prisma ORM", level: "advanced" },
      { name: "REST APIs", level: "expert" },
      { name: "GraphQL", level: "advanced" },
      { name: "Redis", level: "advanced" },
      { name: "MongoDB", level: "advanced" },
      { name: "Go", level: "intermediate" },
    ],
  },
  {
    title: "DevOps & Tools",
    emoji: "🛠️",
    description: "Shipping and maintaining production systems",
    skills: [
      { name: "Git & GitHub", level: "expert" },
      { name: "Docker", level: "advanced" },
      { name: "Vercel", level: "expert" },
      { name: "AWS", level: "advanced" },
      { name: "CI/CD", level: "advanced" },
      { name: "Linux", level: "advanced" },
      { name: "Figma", level: "intermediate" },
      { name: "Vitest", level: "advanced" },
    ],
  },
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const badgeVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 10 },
  visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

const legendItems = [
  {
    label: "Expert",
    lightClass: "bg-indigo-100 text-indigo-600 border-indigo-200",
    darkClass: "dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30",
  },
  {
    label: "Advanced",
    lightClass: "bg-violet-100 text-violet-600 border-violet-200",
    darkClass: "dark:bg-violet-500/20 dark:text-violet-300 dark:border-violet-500/30",
  },
  {
    label: "Intermediate",
    lightClass: "bg-sky-100 text-sky-600 border-sky-200",
    darkClass: "dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/30",
  },
];

export function Skills() {
  return (
    <section
      id="skills"
      className="py-24 lg:py-32 bg-slate-50 dark:bg-slate-950 relative overflow-hidden"
    >
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-violet-100 dark:bg-violet-950/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-3 block">
            Tech Stack
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Skills &amp;{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Technologies
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A curated set of tools and technologies I use to bring ideas to life —
            from pixel-perfect UIs to robust backend systems.
          </p>
        </ScrollReveal>

        <ScrollReveal className="flex flex-wrap justify-center gap-4 mb-12">
          {legendItems.map(({ label, lightClass, darkClass }) => (
            <span
              key={label}
              className={["px-3 py-1 text-xs font-medium rounded-lg border", lightClass, darkClass].join(" ")}
            >
              {label}
            </span>
          ))}
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <ScrollReveal key={category.title} delay={catIndex * 0.1} direction="up">
              <div className="h-full p-6 lg:p-8 rounded-2xl bg-white dark:bg-slate-900/60 backdrop-blur-sm border border-slate-200 dark:border-slate-700/60 shadow-sm hover:shadow-md transition-shadow duration-300">
                <div className="flex items-center gap-3 mb-2">
                  <span className="text-2xl">{category.emoji}</span>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                    {category.title}
                  </h3>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-500 mb-6">
                  {category.description}
                </p>
                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  className="flex flex-wrap gap-2"
                >
                  {category.skills.map((skill) => (
                    <motion.div key={skill.name} variants={badgeVariants}>
                      <SkillBadge name={skill.name} level={skill.level} />
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
