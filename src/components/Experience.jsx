import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { experience, education } from "../data/portfolio";

function TimelineItem({ item, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 group"
    >
      {/* Timeline line */}
      {!isLast && (
        <div className="absolute left-[7px] top-3 bottom-0 w-px bg-dark-800 group-hover:bg-primary-500/20 transition-colors duration-300" />
      )}

      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-[15px] h-[15px] rounded-full border-2 border-dark-700 bg-dark-950 group-hover:border-primary-500 transition-colors duration-300" />

      {/* Content */}
      <div>
        <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-3 mb-2">
          <h3 className="font-display font-semibold text-white text-lg">
            {item.role}
          </h3>
          <span className="text-primary-400 text-sm font-medium">
            {item.company}
          </span>
        </div>
        <p className="text-dark-500 text-xs mb-3">{item.period}</p>
        <p className="text-dark-400 text-sm leading-relaxed mb-3">
          {item.description}
        </p>

        {/* Impact Points */}
        <ul className="space-y-1.5">
          {item.impact.map((point, i) => (
            <li
              key={i}
              className="flex items-start gap-2 text-sm text-dark-500"
            >
              <span className="text-primary-500 mt-1.5 shrink-0">•</span>
              {point}
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="experience" className="py-24 px-6" ref={ref}>
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 text-sm font-medium mb-3 tracking-wide uppercase">
            Career
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-2">
            Experience
          </h2>
          <div className="w-16 h-0.5 bg-primary-500/50 mt-4 mb-10" />
        </motion.div>

        {/* Timeline */}
        <div>
          {experience.map((item, i) => (
            <TimelineItem
              key={item.role + item.company}
              item={item}
              index={i}
              isLast={i === experience.length - 1}
            />
          ))}
        </div>

        {/* Education */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mt-12 p-6 rounded-xl bg-dark-900/50 border border-dark-800/50"
        >
          <p className="text-dark-500 text-xs uppercase tracking-wider mb-2">
            Education
          </p>
          <h3 className="font-display font-semibold text-white text-lg">
            {education.degree}
          </h3>
          <p className="text-dark-400 text-sm mt-1">
            {education.institution} · {education.year}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
