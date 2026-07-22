import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Experience", href: "#experience" },
    { name: "Education", href: "#education" },
    { name: "Certifications", href: "#certifications" },
    { name: "Contact", href: "#contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className={`fixed top-0 z-50 w-full border-b transition-all duration-300 ${
        scrolled
          ? "border-cyan-400/20 bg-slate-950/95 shadow-lg shadow-cyan-500/5 backdrop-blur-xl"
          : "border-slate-800 bg-slate-950/90 backdrop-blur"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">

        {/* Logo */}
        <motion.a
          href="#home"
          whileHover={{ scale: 1.05 }}
          className="text-2xl font-bold text-white"
        >
          Abhishek Tiwari
          <span className="text-cyan-400">.</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden items-center gap-6 lg:flex">

          {navLinks.map((link, index) => (
            <motion.a
              key={link.name}
              href={link.href}
              initial={{ opacity: 0, y: -15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.4,
                delay: index * 0.08,
              }}
              whileHover={{ y: -2 }}
              className="group relative text-sm text-slate-300 transition hover:text-cyan-400"
            >
              {link.name}

              {/* Animated Underline */}
              <span className="absolute -bottom-2 left-0 h-0.5 w-0 bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </motion.a>
          ))}

        </div>

        {/* Mobile Button */}
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsOpen(!isOpen)}
          className="text-2xl text-white lg:hidden"
          aria-label="Toggle menu"
        >
          <motion.span
            key={isOpen ? "close" : "menu"}
            initial={{ opacity: 0, rotate: -90 }}
            animate={{ opacity: 1, rotate: 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? "✕" : "☰"}
          </motion.span>
        </motion.button>

      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden border-t border-slate-800 bg-slate-950 px-6 py-4 lg:hidden"
          >
            <div className="flex flex-col gap-4">

              {navLinks.map((link, index) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{
                    duration: 0.3,
                    delay: index * 0.05,
                  }}
                  onClick={() => setIsOpen(false)}
                  className="text-slate-300 transition hover:translate-x-2 hover:text-cyan-400"
                >
                  {link.name}
                </motion.a>
              ))}

            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.nav>
  );
};

export default Navbar;