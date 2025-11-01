import { useEffect, useState } from "react";
import { experience } from "@/data/profile";

type ExperienceItem = (typeof experience)[number];

const ExperienceSection = () => {
  const [selectedExperience, setSelectedExperience] =
    useState<ExperienceItem | null>(null);

  useEffect(() => {
    if (!selectedExperience) {
      return;
    }

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setSelectedExperience(null);
      }
    };

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [selectedExperience]);

  const closeModal = () => setSelectedExperience(null);

  return (
    <section
      id="experience"
      className="border-b border-slate-100 bg-white py-16 md:py-16"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-12">
        <header className="mb-16 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Experience
          </p>
          <h2 className="text-balance text-3xl font-semibold text-jet md:text-4xl">
            Delivering modern products with a calm, detail-obsessed approach.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            From venture-backed startups to global teams, I lead initiatives end
            to end: aligning requirements, shaping execution, and mentoring
            teams through deployment and growth.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2">
          {experience.map((role) => {
            const previewStack = role.stack.slice(0, 4);
            const hiddenCount = role.stack.length - previewStack.length;

            return (
              <article key={`${role.company}-${role.timeframe}`}>
                <button
                  type="button"
                  onClick={() => setSelectedExperience(role)}
                  className="group flex h-full w-full flex-col rounded-3xl border border-slate-100 bg-white/80 p-10 text-left shadow-[0_35px_85px_-45px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-slate-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-200"
                  aria-label={`View full experience at ${role.company}`}
                >
                  <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-6">
                    <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
                      {role.timeframe}
                    </span>
                    <span className="text-xs tracking-[0.2em] text-slate-300">
                      {role.location}
                    </span>
                  </div>

                  <div className="mb-8 space-y-3">
                    <h3 className="text-balance text-2xl font-semibold leading-tight text-jet md:text-3xl">
                      {role.role}
                    </h3>
                    <div className="flex items-center gap-3">
                      <img
                        src={role.logo}
                        alt={role.company}
                        className="h-8 w-8 rounded-xl border border-slate-100 object-cover"
                      />
                      <p className="text-sm font-medium tracking-[0.15em] text-slate-500">
                        {role.company}
                      </p>
                    </div>
                  </div>

                  <p className="mb-8 text-[15px] leading-relaxed text-slate-600">
                    {role.summary}
                  </p>

                  <div className="mb-6 flex flex-wrap gap-2">
                    {previewStack.map((tech) => (
                      <span
                        key={tech}
                        className="rounded-full bg-slate-900/5 px-3 py-1 text-xs font-medium text-slate-600"
                      >
                        {tech}
                      </span>
                    ))}
                    {hiddenCount > 0 ? (
                      <span className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
                        +{hiddenCount}
                      </span>
                    ) : null}
                  </div>

                  <div className="mt-auto pt-4">
                    <span className="inline-flex items-center gap-1.5 text-sm font-medium text-slate-400 transition group-hover:text-jet">
                      <span>View full details</span>
                      <span className="transition group-hover:translate-x-0.5">
                        {"\u2192"}
                      </span>
                    </span>
                  </div>
                </button>
              </article>
            );
          })}
        </div>
      </div>

      {selectedExperience ? (
        <div className="fixed inset-0 z-50 flex items-center justify-center px-4 py-10">
          <div
            className="absolute inset-0 bg-slate-900/30 backdrop-blur-md"
            onClick={closeModal}
            aria-hidden="true"
          />
          <div
            className="relative w-full max-w-3xl max-h-[85vh] overflow-hidden rounded-[32px] border border-white/60 bg-white/90 p-10 shadow-[0_55px_120px_-35px_rgba(15,23,42,0.5)]"
            role="dialog"
            aria-modal="true"
            aria-labelledby="experience-dialog-title"
          >
            <button
              type="button"
              onClick={closeModal}
              className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-700"
              aria-label="Close dialog"
            >
              {"\u00d7"}
            </button>
            <div className="flex max-h-[70vh] flex-col overflow-y-auto pr-2 md:pr-3">
              <div className="mb-8 flex items-center justify-between border-b border-slate-100 pb-8">
                <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
                  {selectedExperience.timeframe}
                </span>
                <span className="text-xs tracking-[0.2em] text-slate-300">
                  {selectedExperience.location}
                </span>
              </div>

              <div className="mb-10 space-y-4">
                <h3
                  id="experience-dialog-title"
                  className="text-balance text-3xl font-semibold leading-tight text-jet md:text-4xl"
                >
                  {selectedExperience.role}
                </h3>
                <div className="flex items-center gap-3">
                  <img
                    src={selectedExperience.logo}
                    alt={selectedExperience.company}
                    className="h-10 w-10 rounded-xl border border-slate-100 object-cover"
                  />
                  <p className="text-base font-medium tracking-[0.15em] text-slate-500">
                    {selectedExperience.company}
                  </p>
                </div>
              </div>

              <p className="mb-10 text-base leading-relaxed text-slate-600">
                {selectedExperience.summary}
              </p>

              <div className="mb-10 space-y-5">
                <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Areas of impact
                </h4>
                <ul className="space-y-4 text-[15px] leading-relaxed text-slate-600">
                  {selectedExperience.achievements.map((line) => (
                    <li key={line} className="flex gap-4">
                      <span className="mt-2 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-slate-400" />
                      <span>{line}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mb-10 space-y-4">
                <h4 className="text-xs font-semibold uppercase tracking-[0.25em] text-slate-400">
                  Tech stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedExperience.stack.map((tech) => (
                    <span
                      key={tech}
                      className="rounded-full bg-slate-900/5 px-3 py-1.5 text-xs font-medium text-slate-600"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {selectedExperience.url ? (
                <div className="pt-4">
                  <a
                    href={selectedExperience.url}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-medium text-jet transition hover:border-slate-300 hover:bg-slate-50"
                  >
                    Visit website
                    <span aria-hidden="true">{"\u2197"}</span>
                  </a>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      ) : null}
    </section>
  );
};

export default ExperienceSection;
