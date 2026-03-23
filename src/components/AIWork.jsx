import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaStar, FaBrain, FaExternalLinkAlt } from "react-icons/fa";
import { HiLightBulb } from "react-icons/hi";
import { aiProjects } from "../data/portfolio";

function AIProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer relative p-6 rounded-xl bg-gradient-to-br from-dark-900/80 to-primary-950/20 border border-primary-500/10 hover:border-primary-500/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
    >
      {/* AI Badge */}
      <div className="absolute top-4 right-4">
        <span className="flex items-center gap-1 px-2 py-1 bg-primary-500/10 border border-primary-500/20 rounded-full text-xs text-primary-400">
          <FaBrain size={10} />
          AI
        </span>
      </div>

      {/* Title */}
      <h3 className="font-display font-semibold text-white text-lg mb-2 group-hover:text-primary-300 transition-colors pr-16">
        {project.title}
      </h3>

      {/* Stars */}
      <div className="flex items-center gap-1 text-dark-500 text-sm mb-3">
        <FaStar className="text-yellow-500/70" size={12} />
        <span>{project.stars.toLocaleString()}</span>
      </div>

      {/* Description */}
      <p className="text-dark-400 text-sm leading-relaxed mb-4">
        {expanded
          ? project.description
          : project.description.slice(0, 140) + "..."}
      </p>

      {/* Tech */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-primary-500/5 border border-primary-500/10 rounded text-xs text-primary-300/80"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Insight - shown when expanded */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pt-3 border-t border-primary-500/10 mb-3"
        >
          <div className="flex items-start gap-2">
            <HiLightBulb className="text-primary-400 mt-0.5 shrink-0" size={14} />
            <p className="text-sm text-primary-300/70 italic">{project.insight}</p>
          </div>
        </motion.div>
      )}

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 text-sm text-dark-500 hover:text-primary-400 transition-colors"
      >
        <FaGithub size={14} />
        <span>View on GitHub</span>
        <FaExternalLinkAlt size={10} />
      </a>
    </motion.div>
  );
}

export default function AIWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="ai-work"
      className="py-24 px-6 relative"
      ref={ref}
    >
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary-950/5 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 text-sm font-medium mb-3 tracking-wide uppercase">
            AI &amp; Intelligent Systems
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            AI-Related Work
          </h2>
          <p className="text-dark-500 text-sm mb-2">
            Projects exploring voice processing, waveform analysis, and intelligent UI patterns
          </p>
          <div className="w-16 h-0.5 bg-primary-500/50 mt-4 mb-10" />
        </motion.div>

        {/* Context note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-8 p-4 rounded-lg bg-dark-900/50 border border-dark-800/50"
        >
          <p className="text-dark-400 text-sm leading-relaxed">
            These projects demonstrate expertise in building AI-adjacent interfaces and intelligent
            system components — from voice assistant waveforms to smart text morphing algorithms.
            They represent the intersection of native mobile engineering and AI/ML-powered user
            experiences.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {aiProjects.map((project, i) => (
            <AIProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
