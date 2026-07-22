function ProjectCard({ project }) {
  return (
    <div className="group bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden hover:border-cyan-400 hover:-translate-y-2 transition-all duration-300">

      {/* Project Image Placeholder */}
      <div className="h-48 bg-slate-800 flex items-center justify-center">
        <span className="text-gray-500 text-lg">
          Project Preview
        </span>
      </div>

      <div className="p-6">

        <h3 className="text-2xl font-bold mb-3">
          {project.title}
        </h3>

        <p className="text-gray-400 leading-relaxed mb-5">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="px-3 py-1 text-sm rounded-full bg-cyan-400/10 text-cyan-400 border border-cyan-400/20"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Buttons */}
        <div className="flex gap-4">

          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 border border-gray-600 rounded-lg hover:border-cyan-400 hover:text-cyan-400 transition"
          >
            GitHub
          </a>

          <a
            href={project.live}
            target="_blank"
            rel="noreferrer"
            className="px-4 py-2 bg-cyan-500 text-black rounded-lg hover:bg-cyan-400 transition font-semibold"
          >
            Live Demo
          </a>

        </div>

      </div>

    </div>
  )
}

export default ProjectCard