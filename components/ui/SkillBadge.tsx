"use client";

import { motion } from "framer-motion";

interface SkillBadgeProps {
  name: string;
  level?: "expert" | "advanced" | "intermediate";
}

export function SkillBadge({ name, level = "advanced" }: SkillBadgeProps) {
  const levelClass = {
    expert:
      "bg-indigo-100 text-indigo-700 border-indigo-200 dark:bg-indigo-500/20 dark:text-indigo-300 dark:border-indigo-500/30",
    advanced:
      "bg-violet-100 text-violet-700 border-violet-200 dark:bg-violet-500/20 dark:text-violet-300 dark:border-violet-500/30",
    intermediate:
      "bg-sky-100 text-sky-700 border-sky-200 dark:bg-sky-500/20 dark:text-sky-300 dark:border-sky-500/30",
  }[level];

  return (
    <motion.span
      whileHover={{ scale: 1.08, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={[
        "inline-flex items-center px-3 py-1.5 rounded-lg text-sm font-medium border cursor-default select-none transition-colors",
        levelClass,
      ].join(" ")}
    >
      {name}
    </motion.span>
  );
}
