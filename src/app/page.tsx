import AboutMe from "@/components/AboutMe";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import MyEducations from "@/components/MyEducations";
import MyExperiences from "@/components/MyExperiences";
import MyProjects from "@/components/MyProjects";
import MySkills from "@/components/MySkills";

export default function Home() {
  return (
    <main>
      <Header />
      <HeroSection />
      <AboutMe />
      <MySkills />
      <MyExperiences />
      <MyProjects />
      <MyEducations />
      {/* <Contact /> */}
      <Footer />
    </main>
  );
}
