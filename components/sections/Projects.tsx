"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ScrollReveal } from "@/components/ui/ScrollReveal";
import { ProjectCard } from "@/components/ui/ProjectCard";
import { PROJECTS } from "@/lib/projects";

const FILTERS = ["All", "Featured"] as const;
type Filter = (typeof FILTERS)[number];

export function Projects() {
  const [filter, setFilter] = useState<Filter>("All");

  const filtered =
    filter === "Featured" ? PROJECTS.filter((p) => p.featured) : PROJECTS;

  return (
    <section
      id="projects"
      className="py-24 lg:py-32 bg-white dark:bg-slate-900 relative overflow-hidden"
    >
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-px bg-gradient-to-r from-transparent via-indigo-300 dark:via-indigo-700 to-transparent" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <ScrollReveal className="text-center mb-12">
          <span className="text-sm font-semibold tracking-widest uppercase text-indigo-500 dark:text-indigo-400 mb-3 block">
            Portfolio
          </span>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 dark:text-white mb-4">
            Featured{" "}
            <span className="bg-gradient-to-r from-indigo-500 to-violet-500 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            A selection of projects I&apos;ve built — from SaaS platforms to developer tools.
            Each one crafted with care for performance and user experience.
          </p>
        </ScrollReveal>

        {/* Filter tabs */}
        <ScrollReveal className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-slate-100 dark:bg-slate-800 border border-slate-200 dark:border-slate-700">
            {FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="relative px-5 py-2 text-sm font-medium rounded-lg transition-colors duration-200"
              >
                {filter === f && (
                  <motion.span
                    layoutId="filter-pill"
                    className="absolute inset-0 bg-white dark:bg-slate-700 rounded-lg shadow-sm"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <span
                  className={[
                    "relative",
                    filter === f
                      ? "text-slate-900 dark:text-white"
                      : "text-slate-500 dark:text-slate-400",
                  ].join(" ")}
                >
                  {f}
                </span>
              </button>
            ))}
          </div>
        </ScrollReveal>

        {/* Projects grid */}
        <motion.div
          layout
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filtered.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </motion.div>

        {/* CTA */}
        <ScrollReveal className="text-center mt-14">
          <p className="text-slate-500 dark:text-slate-400 mb-4">
            Want to see more? Check out my GitHub for all projects.
          </p>
          <motion.a
            href="https://github.com/alexmorgan"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm
              bg-slate-900 dark:bg-white text-white dark:text-slate-900
              hover:bg-slate-700 dark:hover:bg-slate-100 transition-colors"
          >
            View All on GitHub
          </motion.a>
        </ScrollReveal>
      </div>
    </section>
  );
}
