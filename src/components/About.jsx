import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { about, skills } from "../data/portfolio";

function SectionTitle({ children }) {
  return (
    <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
      {children}
    </h2>
  );
}

function SkillBadge({ name }) {
  return (
    <span className="px-3 py-1.5 bg-dark-800/80 border border-dark-700/50 rounded-lg text-sm text-dark-300 hover:text-primary-300 hover:border-primary-500/30 transition-all duration-200">
      {name}
    </span>
  );
}

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 text-sm font-medium mb-3 tracking-wide uppercase">
            About Me
          </p>
          <SectionTitle>Building bridges between native and web</SectionTitle>
          <div className="w-16 h-0.5 bg-primary-500/50 mt-4 mb-10" />
        </motion.div>

        {/* Summary */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="space-y-4 mb-12"
        >
          {about.summary.map((text, i) => (
            <p key={i} className="text-dark-400 leading-relaxed text-base">
              {text}
            </p>
          ))}
        </motion.div>

        {/* Specialties */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-12"
        >
          <h3 className="text-sm font-medium text-dark-500 uppercase tracking-wider mb-4">
            Specialties
          </h3>
          <div className="flex flex-wrap gap-2">
            {about.specialties.map((s) => (
              <span
                key={s}
                className="px-4 py-2 bg-primary-500/10 border border-primary-500/20 rounded-lg text-primary-300 text-sm font-medium"
              >
                {s}
              </span>
            ))}
          </div>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.45 }}
        >
          <h3 className="text-sm font-medium text-dark-500 uppercase tracking-wider mb-6">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((group) => (
              <div
                key={group.category}
                className="p-5 rounded-xl bg-dark-900/50 border border-dark-800/50"
              >
                <h4 className="text-white font-medium text-sm mb-3">
                  {group.category}
                </h4>
                <div className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <SkillBadge key={item} name={item} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
