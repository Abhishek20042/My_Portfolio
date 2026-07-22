import { motion } from "framer-motion";

const Education = () => {
  return (
    <section
      id="education"
      className="bg-slate-900 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Background
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Education
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My academic journey and continuous learning in technology.
          </p>
        </motion.div>

        {/* Education Timeline */}
        <div className="mx-auto max-w-4xl space-y-6">

          {/* CDAC */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">
                  Post Graduate Diploma in Advanced Computing
                </h3>

                <p className="mt-2 text-cyan-400">
                  CDAC (PG-DAC)
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Feb 2026 – Aug 2026
              </span>
            </div>

            <p className="mt-5 leading-7 text-slate-400">
              Advanced training in software development, Java, Spring Boot,
              .NET, React, databases, data structures, and enterprise
              application development.
            </p>

          </motion.div>


          {/* Bachelor's Degree */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">
                  Bachelor of Engineering - BE
                </h3>

                <p className="mt-2 text-cyan-400">
                  Computer Engineering
                </p>

                <p className="mt-2 text-slate-400">
                  G.V. Acharya Institute of Engineering and Technology
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Aug 2021 – Jun 2025
              </span>
            </div>

            <p className="mt-5 text-slate-400">
              CGPA: <span className="font-semibold text-white">8.12</span>
            </p>

          </motion.div>


          {/* HSC */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">
                  Higher Secondary Certificate (HSC)
                </h3>

                <p className="mt-2 text-cyan-400">
                  St. Xavier's Junior College
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Mar 2020 - Mar2021
              </span>
            </div>

            <p className="mt-5 text-slate-400">
              Percentage:{" "}
              <span className="font-semibold text-white">
                85%
              </span>
            </p>

          </motion.div>


          {/* SSC */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 }}
            whileHover={{ y: -8, scale: 1.01 }}
            className="rounded-2xl border border-slate-700 bg-slate-950 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
          >

            <div className="flex flex-col justify-between gap-4 md:flex-row">
              <div>
                <h3 className="text-2xl font-bold">
                  Secondary School Certificate (SSC)
                </h3>

                <p className="mt-2 text-cyan-400">
                  Indian Education Society (I.E.S)
                </p>
              </div>

              <span className="text-sm text-slate-400">
                Apr 2018 - Mar 2019
              </span>
            </div>

            <p className="mt-5 text-slate-400">
              Percentage:{" "}
              <span className="font-semibold text-white">
                78.60%
              </span>
            </p>

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Education;