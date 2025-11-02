import { education } from "@/data/profile";

type EducationItem = (typeof education)[number];

const EducationSection = () => {
  return (
    <section id="education" className="bg-white py-12 md:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-12">
        <header className="mb-16 max-w-3xl space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
            Education
          </p>
          <h2 className="text-balance text-3xl font-semibold text-jet md:text-4xl">
            Foundations in computer science with a lifelong bias for learning.
          </h2>
          <p className="text-lg leading-relaxed text-slate-600">
            Academic journey spanning computer science, information technology,
            and continuous professional development.
          </p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {education.map((entry: EducationItem) => (
            <article
              key={`${entry.school}-${entry.timeframe}`}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-[0_25px_50px_-25px_rgba(15,23,42,0.15)] transition hover:-translate-y-1 hover:border-slate-200"
            >
              <div className="relative h-56 overflow-hidden bg-slate-100">
                <img
                  src={entry.image}
                  alt={entry.school}
                  className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                />
              </div>
              <div className="flex flex-1 flex-col p-8">
                <div className="mb-6 flex items-center justify-between border-b border-slate-100 pb-6">
                  <span className="text-xs font-medium tracking-[0.2em] text-slate-400">
                    {entry.timeframe}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-slate-300">
                    {entry.location}
                  </span>
                </div>

                <h3 className="mb-4 text-balance text-2xl font-semibold leading-tight text-jet">
                  {entry.credential}
                </h3>

                <p className="text-sm font-medium tracking-[0.15em] text-slate-500">
                  {entry.school}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
