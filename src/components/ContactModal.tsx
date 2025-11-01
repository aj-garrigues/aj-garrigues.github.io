import { useEffect } from "react";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { LuMail } from "react-icons/lu";
import { TbPhone } from "react-icons/tb";
import { contact, profile, socials } from "@/data/profile";
import { resolveIcon } from "@/lib/icons";
import { useContactModal } from "@/contexts/ContactModalContext";

const avatarUrl = "/images/profile.jpg";

const ContactModal = () => {
  const { isOpen, closeModal } = useContactModal();

  // Prevent body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        closeModal();
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, [isOpen, closeModal]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center px-4 py-10">
      <div
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-md"
        onClick={closeModal}
        aria-hidden="true"
      />
      <div
        className="relative z-10 w-full max-w-md max-h-[85vh] overflow-y-auto rounded-[32px] border border-white/60 bg-white/90 p-8 shadow-[0_55px_120px_-35px_rgba(15,23,42,0.5)]"
        role="dialog"
        aria-modal="true"
        aria-labelledby="contact-dialog-title"
      >
        <button
          type="button"
          onClick={closeModal}
          className="absolute right-6 top-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-slate-200 bg-white/70 text-slate-500 transition hover:-translate-y-0.5 hover:text-slate-700"
          aria-label="Close dialog"
        >
          {"\u00d7"}
        </button>

        <div className="flex flex-col gap-6">
          <img
            src={avatarUrl}
            alt={profile.name}
            className="h-32 w-32 self-center rounded-full border border-slate-200 object-cover shadow-[0_15px_40px_-25px_rgba(15,23,42,0.45)]"
          />

          <div className="text-center">
            <h2
              id="contact-dialog-title"
              className="text-2xl font-semibold text-jet"
            >
              {profile.name}
            </h2>
            <p className="mt-1 text-sm text-slate-500">{profile.role}</p>
          </div>

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
  );
};

export default ContactModal;

