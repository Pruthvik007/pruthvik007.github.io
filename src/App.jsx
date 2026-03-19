import NavBar from "./components/NavBar";
import HeroSection from "./components/HeroSection";
import AboutSection from "./components/AboutSection";
import SkillsSection from "./components/SkillsSection";
import ProjectsSection from "./components/ProjectsSection";
import CertificationsSection from "./components/CertificationsSection";
import ContactSection from "./components/ContactSection";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const App = () => {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <NavBar />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ProjectsSection />
      <CertificationsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </main>
  );
};

export default App;
