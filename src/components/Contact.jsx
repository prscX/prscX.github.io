import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiMail } from "react-icons/hi";
import { profile } from "../data/portfolio";

export default function Contact() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="contact" className="py-24 px-6" ref={ref}>
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-400 text-sm font-medium mb-3 tracking-wide uppercase">
            Get in Touch
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Let&apos;s Connect
          </h2>
          <p className="text-dark-400 text-sm leading-relaxed mb-10 max-w-lg mx-auto">
            Interested in collaborating, discussing open source, or just want to
            say hello? Feel free to reach out through any of the channels below.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex items-center justify-center gap-5"
        >
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-dark-900 border border-dark-800 hover:border-dark-600 text-dark-300 hover:text-white rounded-lg transition-all duration-200"
          >
            <FaGithub size={18} />
            <span className="text-sm font-medium">GitHub</span>
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-dark-900 border border-dark-800 hover:border-dark-600 text-dark-300 hover:text-white rounded-lg transition-all duration-200"
          >
            <FaLinkedin size={18} />
            <span className="text-sm font-medium">LinkedIn</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
