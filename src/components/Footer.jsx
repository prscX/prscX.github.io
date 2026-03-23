import { profile } from "../data/portfolio";

export default function Footer() {
  return (
    <footer className="py-8 px-6 border-t border-dark-800/50">
      <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-dark-600 text-xs">
          &copy; {new Date().getFullYear()} {profile.name}. All rights reserved.
        </p>
        <p className="text-dark-700 text-xs">
          Built with React, Tailwind CSS &amp; Framer Motion
        </p>
      </div>
    </footer>
  );
}
