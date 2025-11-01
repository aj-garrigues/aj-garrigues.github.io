import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { projects } from "@/data/profile";

const ProjectsSection = () => {
  return (
    <section
      id="projects"
      className="border-b border-slate-100 bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
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
            <article
              key={project.name}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_25px_50px_-25px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:border-slate-200"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={project.image}
                  alt={project.name}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 border-b border-slate-100 pb-6">
                  <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
                    {project.type}
                  </span>
                </div>

                <h3 className="mb-6 text-balance text-2xl font-semibold leading-tight text-jet">
                  {project.name}
                </h3>

                <p className="mb-8 flex-1 text-[15px] leading-relaxed text-slate-600">
                  {project.description}
                </p>

                <div className="mt-auto">
                  <a
                    href={project.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-medium text-slate-400 transition group-hover:text-jet"
                  >
                    <span>View project</span>
                    <FaArrowUpRightFromSquare className="text-xs transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
