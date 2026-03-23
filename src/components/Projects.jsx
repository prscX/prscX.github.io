import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { FaGithub, FaStar, FaExternalLinkAlt } from "react-icons/fa";
import { featuredProjects } from "../data/portfolio";

function ProjectCard({ project, index }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onClick={() => setExpanded(!expanded)}
      className="group cursor-pointer p-6 rounded-xl bg-dark-900/50 border border-dark-800/50 hover:border-dark-700/80 transition-all duration-300 hover:shadow-lg hover:shadow-primary-500/5"
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <h3 className="font-display font-semibold text-white text-lg group-hover:text-primary-300 transition-colors">
          {project.title}
        </h3>
        <div className="flex items-center gap-1 text-dark-500 text-sm shrink-0 ml-3">
          <FaStar className="text-yellow-500/70" size={12} />
          <span>{project.stars.toLocaleString()}</span>
        </div>
      </div>

      {/* Description */}
      <p className="text-dark-400 text-sm leading-relaxed mb-4">
        {expanded ? project.description : project.description.slice(0, 120) + "..."}
      </p>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {project.tech.map((t) => (
          <span
            key={t}
            className="px-2 py-0.5 bg-dark-800 rounded text-xs text-dark-400"
          >
            {t}
          </span>
        ))}
      </div>

      {/* Expanded Details */}
      {expanded && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="pt-3 border-t border-dark-800/50"
        >
          <div className="flex items-center gap-2 text-sm text-dark-500">
            <span className="px-2 py-0.5 bg-primary-500/10 text-primary-400 rounded text-xs">
              {project.category}
            </span>
          </div>
        </motion.div>
      )}

      {/* GitHub Link */}
      <a
        href={project.github}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => e.stopPropagation()}
        className="inline-flex items-center gap-1.5 text-sm text-dark-500 hover:text-primary-400 transition-colors mt-1"
      >
        <FaGithub size={14} />
        <span>View on GitHub</span>
        <FaExternalLinkAlt size={10} />
      </a>
    </motion.div>
  );
}

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="projects" className="py-24 px-6" ref={ref}>
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 text-sm font-medium mb-3 tracking-wide uppercase">
            Open Source
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Featured Projects
          </h2>
          <p className="text-dark-500 text-sm mb-2">
            30+ React Native libraries with 6,000+ combined GitHub stars
          </p>
          <div className="w-16 h-0.5 bg-primary-500/50 mt-4 mb-10" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {featuredProjects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
