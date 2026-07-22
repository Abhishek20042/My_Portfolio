import { motion } from "framer-motion";

const Certifications = () => {
  const certifications = [
    {
      title: "Java with Data Structures and Algorithms",
      issuer: "Apna College",
      description:
        "Completed comprehensive training in Core Java, Object-Oriented Programming, and Data Structures and Algorithms.",
      skills: ["Java", "OOP", "DSA"],
    },
    {
      title: "Data Visualization",
      issuer: "Certification",
      description:
        "Learned techniques for analyzing data and creating meaningful visualizations to communicate insights effectively.",
      skills: ["Data Analysis", "Visualization", "Power BI"],
    },
    {
      title: "Generative AI Certification",
      issuer: "Certification",
      description:
        "Learned the fundamentals and practical applications of Generative AI and AI-assisted workflows.",
      skills: ["Generative AI", "Artificial Intelligence"],
    },
  ];

  return (
    <section
      id="certifications"
      className="bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Animated Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            Achievements
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Certifications
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            Certifications and courses that have contributed to my technical
            growth.
          </p>
        </motion.div>

        {/* Certification Cards */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">

          {certifications.map((certification, index) => (
            <motion.div
              key={index}
              initial={{
                opacity: 0,
                y: 60,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Certificate Icon */}
              <motion.div
                initial={{ scale: 0, rotate: -20 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.15 + 0.2,
                  type: "spring",
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: 8,
                }}
                className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-400 text-2xl text-slate-950"
              >
                🏆
              </motion.div>

              <h3 className="text-xl font-bold transition duration-300 group-hover:text-cyan-400">
                {certification.title}
              </h3>

              <p className="mt-2 text-cyan-400">
                {certification.issuer}
              </p>

              <p className="mt-4 leading-7 text-slate-400">
                {certification.description}
              </p>

              {/* Skills */}
              <div className="mt-5 flex flex-wrap gap-2">
                {certification.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skillIndex}
                    initial={{
                      opacity: 0,
                      scale: 0.8,
                    }}
                    whileInView={{
                      opacity: 1,
                      scale: 1,
                    }}
                    viewport={{ once: true }}
                    transition={{
                      duration: 0.3,
                      delay: index * 0.15 + skillIndex * 0.08,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Certifications;