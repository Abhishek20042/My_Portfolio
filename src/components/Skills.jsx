import { motion } from "framer-motion";
import {
  Code2,
  Database,
  Globe,
  GitBranch,
  Server,
  Wrench,
} from "lucide-react";

const skillGroups = [
  {
    title: "Programming",
    icon: <Code2 size={28} />,
    skills: ["Java", "JavaScript", "C#", "SQL"],
  },
  {
    title: "Frontend",
    icon: <Globe size={28} />,
    skills: ["React.js", "HTML", "CSS", "Tailwind CSS", "Bootstrap"],
  },
  {
    title: "Backend",
    icon: <Server size={28} />,
    skills: ["Spring Boot", "ASP.NET Core", "REST APIs", "Hibernate", "JPA","Entity Framework Core"],
  },
  {
    title: "Database",
    icon: <Database size={28} />,
    skills: ["MySQL", "SQL Server", "SQLite"],
  },
  {
    title: "Tools & Technologies",
    icon: <Wrench size={28} />,
    skills: ["Git", "GitHub", "Postman", "VS Code", "IntelliJ IDEA"],
  },
  {
    title: "Core Concepts",
    icon: <GitBranch size={28} />,
    skills: [
      "OOP",
      "Data Structures",
      "DBMS",
      "REST Architecture",
      "JWT Authentication",
    ],
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="relative overflow-hidden bg-slate-950 px-6 py-24 text-white"
    >

      {/* Background Glow */}
      <motion.div
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.15, 0.25, 0.15],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="pointer-events-none absolute left-1/2 top-1/2 -z-0 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-500/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto max-w-6xl">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-16 text-center"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.3em] text-cyan-400">
            My Expertise
          </p>

          <h2 className="text-4xl font-bold sm:text-5xl">
            Skills & <span className="text-cyan-400">Technologies</span>
          </h2>

          <p className="mx-auto mt-5 max-w-2xl text-gray-400">
            Technologies and tools I use to build scalable, reliable, and
            modern web applications.
          </p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">

          {skillGroups.map((group, index) => (
            <motion.div
              key={group.title}
              initial={{
                opacity: 0,
                y: 60,
                scale: 0.95,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
              whileHover={{
                y: -10,
                scale: 1.03,
              }}
              className="group rounded-2xl border border-slate-800 bg-slate-900/60 p-6 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Icon + Title */}
              <div className="mb-6 flex items-center gap-4">

                <motion.div
                  whileHover={{
                    rotate: 10,
                    scale: 1.15,
                  }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                  }}
                  className="rounded-xl bg-cyan-400/10 p-3 text-cyan-400 transition group-hover:bg-cyan-400 group-hover:text-slate-950"
                >
                  {group.icon}
                </motion.div>

                <h3 className="text-xl font-semibold transition group-hover:text-cyan-400">
                  {group.title}
                </h3>

              </div>

              {/* Skills */}
              <div className="flex flex-wrap gap-3">

                {group.skills.map((skill, skillIndex) => (
                  <motion.span
                    key={skill}
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
                      delay: index * 0.1 + skillIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -3,
                    }}
                    className="rounded-lg border border-slate-700 bg-slate-800/70 px-3 py-2 text-sm text-gray-300 transition hover:border-cyan-400 hover:text-cyan-400"
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
}

export default Skills;