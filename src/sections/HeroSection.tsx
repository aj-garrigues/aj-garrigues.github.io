import { FaArrowRight } from "react-icons/fa";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { TbPhone } from "react-icons/tb";
import { contact, profile, socials } from "@/data/profile";
import { resolveIcon } from "@/lib/icons";

const avatarUrl = "/images/profile.jpg";

const HeroSection = () => {
  return (
    <section
      id="hero"
      className="relative overflow-hidden border-b border-slate-100 bg-white"
    >
      <div className="absolute inset-0 bg-gradient-to-br from-white via-slate-50 to-white" />
      <div className="relative mx-auto flex max-w-6xl flex-col gap-12 px-6 pb-16 pt-16 md:gap-16 lg:flex-row lg:px-12">
        <div className="w-full space-y-8 lg:flex-1 lg:space-y-10">
          <p className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-3 py-1.5 text-[10px] uppercase leading-tight tracking-[0.2em] text-slate-600 backdrop-blur sm:gap-3 sm:px-4 sm:py-2 sm:text-xs sm:tracking-[0.3em] md:px-5">
            <span className="h-1.5 w-1.5 flex-shrink-0 rounded-full bg-emerald-400 sm:h-2 sm:w-2" />
            <span className="break-words sm:truncate">{profile.availability}</span>
          </p>
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-balance text-3xl font-semibold leading-tight text-jet sm:text-4xl md:text-5xl">
              {profile.name}
              <span className="mt-2 block text-sm font-normal text-slate-500 sm:text-base">
                {profile.role}
              </span>
            </h1>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl">
              {profile.headline}
            </p>
            <p className="text-base leading-relaxed text-slate-600 sm:text-lg">
              {profile.summary}
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4 md:gap-6">
            <a
              href={`mailto:${contact.email}`}
              className="group inline-flex items-center justify-center rounded-full bg-jet px-6 py-3 text-sm font-medium text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-jet-dim"
            >
              <span>Email AJ</span>
              <FaArrowRight className="ml-3 text-xs transition-transform duration-200 group-hover:translate-x-1" />
            </a>
            {socials
              .filter((item) => item.label === "LinkedIn")
              .map((item) => (
                <a
                  key={item.url}
                  href={item.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center gap-3 rounded-full border border-slate-200 px-6 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                >
                  <span>Connect on LinkedIn</span>
                </a>
              ))}
          </div>
        </div>

        <div className="w-full flex-shrink-0 lg:mx-0 lg:w-80">
          <div className="flex flex-col gap-6 rounded-3xl border border-slate-200 bg-white/80 p-6 shadow-2xl shadow-slate-100 backdrop-blur sm:p-8">
            <img
              src={avatarUrl}
              alt={profile.name}
              className="h-32 w-32 self-center rounded-full border border-slate-200 object-cover shadow-[0_15px_40px_-25px_rgba(15,23,42,0.45)] sm:h-40 sm:w-40"
            />
            <div className="space-y-3 text-sm text-slate-600">
              <div className="flex items-center gap-3">
                <HiOutlineLocationMarker className="flex-shrink-0 text-lg text-slate-400" />
                <span className="break-words">{profile.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <LuMail className="flex-shrink-0 text-lg text-slate-400" />
                <a
                  href={`mailto:${contact.email}`}
                  className="break-all text-slate-700 hover:text-slate-900"
                >
                  {contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <TbPhone className="flex-shrink-0 text-lg text-slate-400" />
                <a
                  href="tel:+639271739215"
                  className="text-slate-700 hover:text-slate-900"
                >
                  {contact.phone}
                </a>
              </div>
            </div>
            <div className="space-y-3">
              <span className="text-xs uppercase tracking-[0.3em] text-slate-400">
                Touchpoints
              </span>
              <ul className="flex flex-col gap-2">
                {socials.map((item) => {
                  const Icon = resolveIcon(item.icon);
                  return (
                    <li key={item.label}>
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noreferrer"
                        className="flex items-center justify-between rounded-xl border border-slate-200 px-4 py-3 text-sm font-medium text-slate-700 transition hover:border-slate-300 hover:text-slate-900"
                      >
                        <span>{item.label}</span>
                        <Icon className="flex-shrink-0 text-lg text-slate-400" />
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
