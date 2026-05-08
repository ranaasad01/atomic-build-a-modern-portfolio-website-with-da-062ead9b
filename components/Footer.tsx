"use client";

import { motion } from "framer-motion";
import { Code2 as Github, Briefcase as Linkedin, MessageCircle as Twitter, Heart } from 'lucide-react';
import { SOCIAL_LINKS, SITE_CONFIG, NAV_LINKS } from "@/lib/constants";

export function Footer() {
  const currentYear = new Date().getFullYear();

  const handleNavClick = (href: string) => {
    const id = href.replace("#", "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-slate-900 dark:bg-slate-950 border-t border-slate-800 dark:border-slate-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid sm:grid-cols-3 gap-8 mb-10">
          {/* Brand */}
          <div className="sm:col-span-1">
            <span className="text-xl font-bold bg-gradient-to-r from-indigo-400 to-violet-400 bg-clip-text text-transparent">
              {SITE_CONFIG.name}
            </span>
            <p className="mt-3 text-sm text-slate-400 leading-relaxed max-w-xs">
              Full-stack developer crafting exceptional digital experiences with modern web technologies.
            </p>
          </div>

          {/* Nav links */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Navigation
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNavClick(link.href)}
                    className="text-sm text-slate-400 hover:text-indigo-400 transition-colors"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm font-semibold text-slate-300 uppercase tracking-wider mb-4">
              Connect
            </h3>
            <div className="flex gap-3">
              {[
                { href: SOCIAL_LINKS.github, icon: Github, label: "GitHub" },
                { href: SOCIAL_LINKS.linkedin, icon: Linkedin, label: "LinkedIn" },
                { href: SOCIAL_LINKS.twitter, icon: Twitter, label: "Twitter" },
              ].map(({ href, icon: Icon, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={label}
                  className="w-9 h-9 flex items-center justify-center rounded-lg
                    bg-slate-800 text-slate-400 hover:text-indigo-400
                    border border-slate-700 hover:border-indigo-500/50
                    transition-colors duration-200"
                >
                  <Icon className="w-4 h-4" />
                </motion.a>
              ))}
            </div>
            <p className="mt-4 text-sm text-slate-400">
              <a
                href={"mailto:" + SITE_CONFIG.email}
                className="hover:text-indigo-400 transition-colors"
              >
                {SITE_CONFIG.email}
              </a>
            </p>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-slate-500">
            &copy; {currentYear} {SITE_CONFIG.name}. All rights reserved.
          </p>
          <p className="text-sm text-slate-500 flex items-center gap-1.5">
            Built with{" "}
            <Heart className="w-3.5 h-3.5 text-red-400 fill-red-400" />
            {" "}using Next.js &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
