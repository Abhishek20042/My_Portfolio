import { motion } from "framer-motion";

const Projects = () => {
  const projects = [
    {
      title: "Employee Management System",
      description:
        "A full-stack employee management application for managing employee records and performing CRUD operations with a structured backend and database integration.",
      technologies: [
        "ASP.NET Core",
        "Entity Framework Core",
        "SQL Server",
        "Alpine.js",
      ],
      github:
        "https://github.com/Abhishek20042/employee-management-alpinejs",
      live: "http://abhishek-18.runasp.net/",
    },

    {
      title: "Weather Application",
      description:
        "A responsive weather application that fetches real-time weather data using the OpenWeatherMap API and provides a clean and user-friendly interface.",
      technologies: [
        "React.js",
        "Vite",
        "JavaScript",
        "OpenWeatherMap API",
      ],
      github: "https://github.com/Abhishek20042/Weather-App",
      live: "https://weather-app-iota-drab-52.vercel.app",
    },

    {
      title: "Financial Literacy & Market Forum",
      description:
        "A financial education and discussion platform designed to help users improve financial awareness and engage in market-related discussions.",
      technologies: [
        "Java",
        "PHP",
        "SQL",
        "Bootstrap",
      ],
      github:
        "https://github.com/Abhishek20042/Financial-Literacy-And-Market-Forum",
      live: "https://financialliteracyandmarketforum.netlify.app/",
    },

    {
      title: "Movie Application",
      description:
        "A movie discovery application that uses the TMDB API to display movie information, ratings, and details through a responsive React interface.",
      technologies: [
        "React.js",
        "JavaScript",
        "TMDB API",
      ],
      github: "https://github.com/Abhishek20042/Movie-App",
      live: "https://movie-app-sigma-virid.vercel.app",
    },
  ];

  return (
    <section
      id="projects"
      className="bg-slate-950 px-6 py-20 text-white"
    >
      <div className="mx-auto max-w-6xl">

        {/* Animated Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mb-12 text-center"
        >
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-cyan-400">
            My Work
          </p>

          <h2 className="text-4xl font-bold md:text-5xl">
            Featured Projects
          </h2>

          <p className="mx-auto mt-4 max-w-2xl text-slate-400">
            A selection of projects that demonstrate my experience in
            full-stack development, backend engineering, and API integration.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid gap-8 md:grid-cols-2">

          {projects.map((project, index) => (
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
              className="group rounded-2xl border border-slate-800 bg-slate-900 p-6 transition duration-300 hover:border-cyan-400 hover:shadow-xl hover:shadow-cyan-500/10"
            >

              {/* Project Number and Links */}
              <div className="mb-5 flex items-center justify-between">

                <motion.span
                  whileHover={{
                    scale: 1.15,
                    color: "#22d3ee",
                  }}
                  className="text-4xl font-bold text-slate-700"
                >
                  0{index + 1}
                </motion.span>

                <div className="flex gap-4">

                  {/* GitHub */}
                  <motion.a
                    whileHover={{
                      scale: 1.08,
                      x: 2,
                    }}
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    GitHub ↗
                  </motion.a>

                  {/* Live Demo */}
                  <motion.a
                    whileHover={{
                      scale: 1.08,
                      x: 2,
                    }}
                    href={project.live}
                    target="_blank"
                    rel="noreferrer"
                    className="text-sm text-slate-400 transition hover:text-cyan-400"
                  >
                    Live Demo ↗
                  </motion.a>

                </div>

              </div>

              {/* Project Title */}
              <h3 className="mb-4 text-2xl font-bold transition group-hover:text-cyan-400">
                {project.title}
              </h3>

              {/* Description */}
              <p className="mb-6 leading-7 text-slate-400">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((technology, techIndex) => (
                  <motion.span
                    key={technology}
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
                      delay: index * 0.15 + techIndex * 0.05,
                    }}
                    whileHover={{
                      scale: 1.08,
                    }}
                    className="rounded-full bg-slate-800 px-3 py-1 text-sm text-cyan-300 transition hover:bg-cyan-400 hover:text-slate-950"
                  >
                    {technology}
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

export default Projects;