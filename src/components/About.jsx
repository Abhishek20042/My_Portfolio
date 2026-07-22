import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-24 px-6">

      <div className="max-w-6xl mx-auto">

        {/* Animated Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-4xl font-bold text-center mb-12"
        >
          About <span className="text-cyan-400">Me</span>
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Animated Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-gray-300 text-lg leading-relaxed mb-6"
            >
              I am a Computer Engineering graduate and a PG-DAC student
              passionate about building modern and scalable software
              applications.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed mb-6"
            >
              My primary focus is Java backend development using Spring Boot,
              REST APIs, Hibernate, JPA, and SQL. I also have experience
              building responsive frontend applications using React.js.
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="text-gray-400 text-lg leading-relaxed"
            >
              I enjoy solving problems, learning new technologies, and
              transforming ideas into real-world applications.
            </motion.p>
          </motion.div>

          {/* Animated Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 60, scale: 0.9 }}
            whileInView={{ opacity: 1, x: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            whileHover={{
              y: -8,
              scale: 1.02,
            }}
            className="bg-slate-900 border border-slate-800 rounded-2xl p-8 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <div className="grid grid-cols-2 gap-6 text-center">

              {/* Project Stat */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  5+
                </h3>
                <p className="text-gray-400 mt-2">
                  Projects
                </p>
              </motion.div>

              {/* Technologies Stat */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  10+
                </h3>
                <p className="text-gray-400 mt-2">
                  Technologies
                </p>
              </motion.div>

              {/* Graduate Stat */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  2025
                </h3>
                <p className="text-gray-400 mt-2">
                  Graduate
                </p>
              </motion.div>

              {/* CDAC Stat */}
              <motion.div
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-3xl font-bold text-cyan-400">
                  CDAC
                </h3>
                <p className="text-gray-400 mt-2">
                  PG-DAC Student
                </p>
              </motion.div>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  )
}

export default About