import { expertise } from "@/data/profile";
import { resolveIcon } from "@/lib/icons";

const ExpertiseSection = () => {
  return (
    <section
      id="expertise"
      className="border-b border-slate-100 bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <header className="mb-16 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Areas of Focus
          </p>
          <h2 className="text-balance text-3xl font-semibold text-jet md:text-4xl">
            Product, engineering, and delivery aligned for calm execution.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            From architecture and design systems to analytics and iteration, I
            lead teams through the full software lifecycle with clarity and
            craftsmanship.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {expertise.map((item) => {
            const Icon = resolveIcon(item.icon);
            return (
              <article
                key={item.title}
                className="group flex h-full flex-col gap-5 rounded-3xl border border-slate-100 bg-white/70 p-8 shadow-[0_25px_50px_-25px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:border-slate-200"
              >
                <div className="flex items-center gap-4">
                  <span className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-slate-900 text-white">
                    <Icon className="text-xl" />
                  </span>
                  <h3 className="text-lg font-semibold text-jet">
                    {item.title}
                  </h3>
                </div>
                <p className="flex-1 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {item.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ExpertiseSection;
