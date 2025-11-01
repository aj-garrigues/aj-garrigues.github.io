import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import { HiHome, HiBriefcase, HiFolder, HiAcademicCap } from "react-icons/hi";
import { useContactModal } from "@/contexts/ContactModalContext";

const navItems = [
  { to: "/", label: "Home", end: true, icon: HiHome },
  { to: "/experience", label: "Experience", icon: HiBriefcase },
  { to: "/projects", label: "Projects", icon: HiFolder },
  { to: "/education", label: "Education", icon: HiAcademicCap }
];

const Navigation = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { openModal } = useContactModal();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, []);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleEscape);
    return () => window.removeEventListener("keydown", handleEscape);
  }, []);

  return (
    <header className="sticky top-0 z-50 border-b border-white/20 bg-white/70 backdrop-blur-2xl shadow-[0_1px_0_0_rgba(255,255,255,0.5)_inset]">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-12">
        <Link
          to="/"
          className="text-base font-semibold tracking-tight text-jet transition hover:text-slate-600 sm:text-lg"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          AJ Garrigues
        </Link>

        <div className="hidden items-center gap-6 md:flex">
          <nav className="flex gap-8" aria-label="Primary">
            {navItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  [
                    "text-sm font-medium transition hover:text-jet",
                    isActive ? "text-jet" : "text-slate-500"
                  ].join(" ")
                }
              >
                {item.label}
              </NavLink>
            ))}
          </nav>
          <button
            type="button"
            onClick={openModal}
            className="group inline-flex items-center justify-center rounded-full bg-jet px-5 py-2 text-sm font-medium text-white shadow-soft transition duration-200 hover:-translate-y-0.5 hover:bg-jet-dim"
          >
            Contact Me
          </button>
        </div>

        <button
          type="button"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="flex h-10 w-10 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:border-slate-300 md:hidden"
          aria-label="Toggle menu"
          aria-expanded={isMobileMenuOpen}
        >
          <div className="flex h-4 w-4 flex-col items-center justify-center gap-1">
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "translate-y-1.5 rotate-45" : ""
                }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "opacity-0" : ""
                }`}
            />
            <span
              className={`h-0.5 w-4 rounded-full bg-slate-700 transition-all duration-300 ${isMobileMenuOpen ? "-translate-y-1.5 -rotate-45" : ""
                }`}
            />
          </div>
        </button>
      </div>

      <div
        className={`fixed right-0 top-[57px] z-50 h-[calc(100vh-57px)] w-full max-w-sm transform overflow-y-auto border-l border-slate-100 bg-white/95 backdrop-blur-xl transition-transform duration-300 ease-out md:hidden ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
      >
        <nav className="flex flex-col gap-2 p-6" aria-label="Mobile">
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.end}
                onClick={() => setIsMobileMenuOpen(false)}
                className={({ isActive }) =>
                  [
                    "flex items-center gap-4 rounded-2xl px-6 py-4 text-base font-medium transition",
                    isActive
                      ? "text-jet"
                      : "text-slate-500 hover:bg-slate-50 hover:text-jet"
                  ].join(" ")
                }
              >
                <Icon className="h-5 w-5 flex-shrink-0" />
                <span>{item.label}</span>
              </NavLink>
            );
          })}

          <div className="mt-4 px-2">
            <button
              type="button"
              onClick={() => {
                setIsMobileMenuOpen(false);
                openModal();
              }}
              className="w-full rounded-2xl bg-jet px-6 py-4 text-base font-medium text-white transition hover:bg-jet-dim"
            >
              Contact Me
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navigation;
