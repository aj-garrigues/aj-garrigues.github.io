import { profile } from "@/data/profile";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-slate-100 bg-white py-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-4 px-6 text-sm text-slate-500 md:flex-row md:items-center md:justify-between lg:px-12">
        <p>
          © {year} {profile.name}. All rights reserved.
        </p>
        <p className="text-xs uppercase tracking-[0.3em] text-slate-400">
          Designed and engineered with obsession for detail.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
