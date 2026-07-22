import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function Hero() {
  const roles = [
    "Software Engineer",
    "Full Stack Developer",
    "Java Developer",
  ];

  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prevIndex) => (prevIndex + 1) % roles.length);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-20"
    >
      {/* Animated Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute left-1/2 top-1/2 -z-10 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      {/* Purple Floating Glow */}
      <motion.div
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute right-10 top-32 -z-10 h-32 w-32 rounded-full bg-purple-500/10 blur-3xl"
      />

      <div className="mx-auto grid max-w-6xl items-center gap-12 lg:grid-cols-2">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center lg:text-left"
        >
          {/* Hello Text */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="mb-4 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400"
          >
            Hello, I am
          </motion.p>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Abhishek{" "}
            <span className="text-cyan-400">Tiwari</span>
          </motion.h1>

          {/* Animated Job Titles */}
          <div className="mt-4 h-10 overflow-hidden text-2xl font-semibold sm:text-3xl">
            <AnimatePresence mode="wait">
              <motion.h2
                key={roles[roleIndex]}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5 }}
                className="text-cyan-400"
              >
                {roles[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mx-auto mt-6 max-w-xl text-base leading-8 text-gray-400 lg:mx-0"
          >
            I am a Computer Engineering graduate and software developer
            passionate about building scalable web applications using Java,
            Spring Boot, React.js, .NET, SQL, and modern technologies.
          </motion.p>

          {/* Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-8 flex flex-wrap justify-center gap-4 lg:justify-start"
          >
            {/* View My Work */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#projects"
              className="rounded-lg bg-cyan-500 px-6 py-3 font-semibold text-slate-950 transition hover:bg-cyan-400"
            >
              View My Work
            </motion.a>

            {/* View Resume */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume/Abhishek_Tiwari_Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-cyan-400 px-6 py-3 font-semibold text-cyan-400 transition hover:bg-cyan-400 hover:text-slate-950"
            >
              View Resume
            </motion.a>

            {/* Download Resume */}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/resume/Abhishek_Tiwari_Resume.pdf"
              download="Abhishek_Tiwari_Resume.pdf"
              className="rounded-lg border border-gray-600 px-6 py-3 font-semibold text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
            >
              Download Resume
            </motion.a>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT ANIMATED CARD ================= */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5, rotate: -10 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{
            duration: 1,
            delay: 0.3,
            type: "spring",
          }}
          className="flex justify-center lg:justify-end"
        >
          <motion.div
            animate={{
              y: [0, -15, 0],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative flex h-72 w-72 items-center justify-center rounded-full border border-cyan-400/30 bg-slate-900/60 shadow-2xl shadow-cyan-500/10 sm:h-96 sm:w-96"
          >
            {/* Rotating Dashed Border */}
            <motion.div
              animate={{ rotate: 360 }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              }}
              className="absolute inset-4 rounded-full border border-cyan-400/20 border-dashed"
            />

            {/* Developer Icon */}
            <div className="text-center">
              <motion.div
                animate={{
                  rotate: [0, 10, -10, 0],
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                }}
                className="text-7xl"
              >
                💻
              </motion.div>

              <p className="mt-4 text-xl font-semibold text-white">
                Software
              </p>

              <p className="mt-1 text-cyan-400">
                Engineer
              </p>
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;