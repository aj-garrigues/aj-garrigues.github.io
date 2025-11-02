import { FaArrowRightLong } from "react-icons/fa6";
import { contact, socials } from "@/data/profile";
import { resolveIcon } from "@/lib/icons";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="border-t border-slate-100 bg-slate-50/50 py-12 md:py-20 lg:py-24"
    >
      <div className="mx-auto flex max-w-5xl flex-col gap-10 px-4 text-center sm:px-6 lg:px-12">
        <p className="text-xs uppercase tracking-[0.4em] text-slate-400">
          Collaborate
        </p>
        <h2 className="text-balance text-3xl font-semibold text-jet md:text-4xl">
          Ready for your next product sprint, platform rebuild, or strategic
          consultation.
        </h2>
        <p className="mx-auto max-w-2xl text-lg leading-relaxed text-slate-600">
          Tell me about your roadmap, the outcomes you are targeting, and the
          constraints we should mind. I will respond with next steps within one
          business day.
        </p>
        <div className="flex flex-col items-center gap-5 text-sm font-medium text-slate-600 md:flex-row md:justify-center">
          <a
            href={`mailto:${contact.email}`}
            className="group inline-flex items-center gap-3 rounded-full bg-jet px-6 py-3 text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-jet-dim"
          >
            Start a conversation
            <FaArrowRightLong className="text-xs transition group-hover:translate-x-1" />
          </a>
          <a
            href={contact.telegram}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-6 py-3 text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Message on Telegram
          </a>
        </div>
        <div className="mt-10 flex flex-wrap justify-center gap-4 text-xs uppercase tracking-[0.3em] text-slate-400">
          <span>{contact.phone}</span>
          <span>{contact.email}</span>
        </div>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          {socials.map((item) => {
            const Icon = resolveIcon(item.icon);
            return (
              <a
                key={item.label}
                href={item.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-600 transition hover:border-slate-300 hover:text-slate-900"
              >
                <Icon className="text-base" />
                {item.label}
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
