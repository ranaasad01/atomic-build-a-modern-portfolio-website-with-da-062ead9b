"use client";

import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Coffee } from 'lucide-react';
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { Button } from "@/components/ui/Button";
import { SITE_CONFIG } from "@/lib/constants";

const highlights = [
  { icon: Briefcase, label: "Experience", value: "5+ Years" },
  { icon: Calendar, label: "Projects Shipped", value: "40+" },
  { icon: MapPin, label: "Location", value: SITE_CONFIG.location },
  { icon: Coffee, label: "Coffee / Day", value: "3 Cups" },
];

export function About() {
  return (
    <section
      id="about"
      className="py-24 lg:py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      {/* Subtle background accent */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-indigo-50 dark:bg-indigo-950/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <ScrollReveal className="text-center mb-16">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-3 block">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white">
            Crafting Digital{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Experiences
            </span>
          </h2>
        </ScrollReveal>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Image */}
          <ScrollReveal direction="left">
            <div className="relative">
              <div className="relative rounded-3xl overflow-hidden aspect-square max-w-md mx-auto lg:mx-0
                shadow-2xl shadow-indigo-500/10 dark:shadow-indigo-500/20">
                <img
                  src="/images/developer-portrait-professional.jpg"
                  alt="Alex Morgan — Full-Stack Developer"
                  className="w-full h-full object-cover"
                />
                {/* Overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-tr from-indigo-600/20 to-transparent" />
              </div>
              {/* Floating badge */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
                className="absolute -bottom-4 -right-4 sm:bottom-6 sm:right-6
                  bg-white dark:bg-slate-800 rounded-2xl px-5 py-3
                  shadow-xl border border-slate-100 dark:border-slate-700"
              >
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-sm font-semibold text-slate-700 dark:text-slate-200">
                    Available for hire
                  </span>
                </div>
              </motion.div>
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border-2 border-dashed border-indigo-200 dark:border-indigo-800/50 -z-10" />
            </div>
          </ScrollReveal>

          {/* Content */}
          <div className="space-y-6">
            <ScrollReveal direction="right" delay={0.1}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                I&apos;m a passionate full-stack developer with over 5 years of experience
                building web applications that are fast, accessible, and delightful to use.
                I specialize in the JavaScript ecosystem — from React and Next.js on the
                frontend to Node.js and PostgreSQL on the backend.
              </p>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.2}>
              <p className="text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me contributing to open source,
                writing technical blog posts, or exploring the latest in AI and developer
                tooling. I believe great software is built at the intersection of clean
                engineering and thoughtful design.
              </p>
            </ScrollReveal>

            {/* Highlights grid */}
            <ScrollReveal direction="right" delay={0.3}>
              <div className="grid grid-cols-2 gap-4 pt-4">
                {highlights.map(({ icon: Icon, label, value }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 p-4 rounded-xl
                      bg-slate-50 dark:bg-slate-800/60
                      border border-slate-100 dark:border-slate-700/60"
                  >
                    <div className="w-9 h-9 flex items-center justify-center rounded-lg
                      bg-indigo-100 dark:bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 flex-shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-xs text-slate-500 dark:text-slate-500">{label}</p>
                      <p className="text-sm font-semibold text-slate-800 dark:text-slate-200">{value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal direction="right" delay={0.4}>
              <div className="flex gap-4 pt-2">
                <Button
                  href="#contact"
                  onClick={(e) => {
                    if (e && typeof e.preventDefault === "function") e.preventDefault();
                    const el = document.getElementById("contact");
                    if (el) el.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  Let&apos;s Talk
                </Button>
                <Button
                  href="/resume.pdf"
                  variant="secondary"
                  external
                >
                  Download CV
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
}
