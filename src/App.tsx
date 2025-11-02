import { Helmet } from "react-helmet-async";
import { Routes, Route } from "react-router-dom";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";
import ContactModal from "@/components/ContactModal";
import ScrollToTop from "@/components/ScrollToTop";
import { ContactModalProvider } from "@/contexts/ContactModalContext";
import { profile, socials, expertise, projects } from "@/data/profile";
import ContactSection from "@/sections/ContactSection";
import HomePage from "@/pages/HomePage";
import ExperiencePage from "@/pages/ExperiencePage";
import ProjectsPage from "@/pages/ProjectsPage";
import EducationPage from "@/pages/EducationPage";

const structuredData = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.role,
  description: profile.summary,
  image: "https://ajgarrigues.github.io/images/profile.jpg",
  url: "https://ajgarrigues.github.io/",
  sameAs: socials.map((social) => social.url),
  knowsAbout: expertise.flatMap((item) => item.stack),
  worksFor: [
    {
      "@type": "Organization",
      name: "Wonders Corporation"
    }
  ],
  contactPoint: [
    {
      "@type": "ContactPoint",
      telephone: "+63-927-173-9215",
      contactType: "business",
      availableLanguage: ["English"]
    }
  ],
  hasPart: projects.map((project) => ({
    "@type": "CreativeWork",
    name: project.name,
    url: project.url,
    image: `https://ajgarrigues.github.io${project.image}`
  }))
};

const App = () => {
  const title = `${profile.name} - ${profile.role}`;
  const description =
    "Senior web and mobile engineer delivering calm, detail-obsessed product experiences across React, mobile, and cloud.";
  const url = "https://ajgarrigues.github.io/";

  return (
    <ContactModalProvider>
      <div className="min-h-screen bg-white text-slate-900">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-6 focus:top-6 focus:rounded-full focus:bg-jet focus:px-5 focus:py-3 focus:text-sm focus:font-medium focus:text-white"
        >
          Skip to main content
        </a>
        <Helmet>
          <html lang="en" />
          <title>{title}</title>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:type" content="website" />
          <meta property="og:url" content={url} />
          <meta property="og:image" content="https://ajgarrigues.github.io/images/profile.jpg" />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={title} />
          <meta name="twitter:description" content={description} />
          <meta name="twitter:image" content="https://ajgarrigues.github.io/images/profile.jpg" />
          <link rel="canonical" href={url} />
          <script type="application/ld+json">
            {JSON.stringify(structuredData)}
          </script>
        </Helmet>

        <ScrollToTop />
        <Navigation />
        <main id="main">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/education" element={<EducationPage />} />
            <Route path="*" element={<HomePage />} />
          </Routes>
        </main>
        <ContactSection />
        <Footer />
        <ContactModal />
      </div>
    </ContactModalProvider>
  );
};

export default App;
