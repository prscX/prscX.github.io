import { motion } from "framer-motion";
import { HiArrowDown } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { profile, stats } from "../data/portfolio";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-950/20 via-dark-950 to-dark-950" />

      {/* Floating orbs */}
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-primary-500/5 rounded-full blur-3xl animate-float" />
      <div
        className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-600/5 rounded-full blur-3xl animate-float"
        style={{ animationDelay: "3s" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        {/* Avatar */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-8"
        >
          <img
            src={profile.avatar}
            alt={profile.name}
            className="w-28 h-28 rounded-full mx-auto ring-2 ring-primary-500/30 ring-offset-4 ring-offset-dark-950"
          />
        </motion.div>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl font-bold text-white mb-4 tracking-tight"
        >
          {profile.name}
        </motion.h1>

        {/* Title */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-xl text-dark-400 mb-3"
        >
          {profile.title} at{" "}
          <span className="text-primary-400">{profile.company}</span>
        </motion.p>

        {/* Tagline */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="text-dark-500 mb-10 text-sm md:text-base tracking-wide"
        >
          {profile.tagline}
        </motion.p>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-wrap justify-center gap-8 md:gap-12 mb-12"
        >
          {[
            { value: stats.yearsExperience, label: "Years Experience" },
            { value: stats.openSourceLibraries, label: "Open Source Libraries" },
            { value: stats.githubStars, label: "GitHub Stars" },
            { value: stats.platformsSupported, label: "Platforms" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-display text-2xl md:text-3xl font-bold text-white">
                {stat.value}
              </div>
              <div className="text-xs text-dark-500 mt-1">{stat.label}</div>
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="flex items-center justify-center gap-4"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-primary-600 hover:bg-primary-500 text-white rounded-lg text-sm font-medium transition-colors duration-200"
          >
            View Projects
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-dark-700 hover:border-dark-500 text-dark-300 hover:text-white rounded-lg text-sm font-medium transition-all duration-200 flex items-center gap-2"
          >
            <FaGithub size={16} />
            GitHub
          </a>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 0.6 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          >
            <HiArrowDown className="text-dark-600" size={20} />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
