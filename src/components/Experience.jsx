import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="experience"
      className="bg-slate-950 px-6 py-20 text-white"
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
            My Journey
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Experience
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            My professional experience and the skills I have developed
            throughout my career.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative mx-auto max-w-4xl">

          {/* Timeline Line */}
          <motion.div
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="absolute left-4 top-0 hidden h-full w-px origin-top bg-slate-700 md:block"
          />

          {/* eClerx */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative mb-12 flex gap-6"
          >

            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 mt-2 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 md:flex"
            >
              <div className="h-3 w-3 rounded-full bg-slate-950"></div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold">
                    Analyst
                  </h3>

                  <p className="mt-1 text-cyan-400">
                    eClerx · Full-time
                  </p>
                </div>

                <div className="text-sm text-slate-400 md:text-right">
                  <p>Jul 2025 – Mar 2026</p>
                  <p>9 months</p>
                </div>
              </div>

              <p className="mt-2 text-sm text-slate-500">
                Airoli, Navi Mumbai · On-site
              </p>

              <p className="mt-5 leading-7 text-slate-400">
                Worked on a retainership basis, streamlining product data
                processes by maintaining accurate Bill of Materials (BOMs)
                and documentation while ensuring consistency across systems.
                Utilized Excel, SQL, and dashboard creation to improve
                reporting and data accuracy. Collaborated with cross-functional
                teams to support engineering changes, enhance lifecycle
                management, and deliver actionable insights.
              </p>

              {/* Skills */}
              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Excel",
                  "SQL",
                  "Dashboarding",
                  "Data Analysis",
                  "BOM Management",
                  "Lifecycle Management",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.08,
                    }}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </motion.div>
          </motion.div>

          {/* NextLeap */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative flex gap-6"
          >

            {/* Timeline Dot */}
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="relative z-10 mt-2 hidden h-8 w-8 shrink-0 items-center justify-center rounded-full bg-cyan-400 md:flex"
            >
              <div className="h-3 w-3 rounded-full bg-slate-950"></div>
            </motion.div>

            {/* Experience Card */}
            <motion.div
              whileHover={{ y: -8 }}
              className="w-full rounded-2xl border border-slate-800 bg-slate-900 p-6 shadow-lg transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              <div className="flex flex-col justify-between gap-3 md:flex-row">
                <div>
                  <h3 className="text-2xl font-bold">
                    AI-Assisted Content Curator Intern
                  </h3>

                  <p className="mt-1 text-cyan-400">
                    NextLeap
                  </p>
                </div>

                <span className="text-sm text-slate-400">
                  Internship
                </span>
              </div>

              <p className="mt-5 leading-7 text-slate-400">
                Worked on AI-assisted content curation and research workflows,
                focusing on collecting, analyzing, and organizing relevant
                information to improve content quality and accessibility.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">

                {[
                  "Artificial Intelligence",
                  "Content Curation",
                  "Research",
                  "Data Analysis",
                ].map((skill, index) => (
                  <motion.span
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: 0.5 + index * 0.08,
                    }}
                    whileHover={{ scale: 1.08 }}
                    className="rounded-full bg-slate-800 px-4 py-2 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {skill}
                  </motion.span>
                ))}

              </div>

            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default Experience;