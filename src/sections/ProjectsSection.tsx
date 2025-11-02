import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "@/data/profile";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="border-b border-slate-100 bg-white py-12 md:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <header className="mb-16 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Selected Work
          </p>
          <h2 className="text-balance text-3xl font-semibold text-jet md:text-4xl">
            A sample of client collaborations across mobility, tech, and media.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Each engagement blended strategy, interface design, engineering, and
            analytics to drive measurable outcomes.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.name}>
              <a
                href={project.url}
                target="_blank"
                rel="noreferrer"
                className="group block overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_20px_40px_-20px_rgba(15,23,42,0.12)] transition hover:-translate-y-1 hover:shadow-[0_25px_50px_-15px_rgba(15,23,42,0.2)]"
              >
                <div className="relative aspect-square overflow-hidden bg-gradient-to-br from-slate-50 to-slate-100">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="h-full w-full object-contain transition duration-700 ease-out group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                </div>

                <div className="p-6">
                  <span className="mb-4 inline-block text-xs font-medium tracking-[0.15em] text-slate-400">
                    {project.type}
                  </span>

                  <h3 className="mb-3 text-balance text-xl font-semibold leading-tight text-jet transition-colors group-hover:text-slate-700">
                    {project.name}
                  </h3>

                  <p className="mb-4 line-clamp-3 text-sm leading-relaxed text-slate-600">
                    {project.description}
                  </p>

                  <div className="flex items-center gap-2 text-xs font-medium text-slate-400 transition-colors group-hover:text-jet">
                    <span>View project</span>
                    <FaArrowUpRightFromSquare className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
