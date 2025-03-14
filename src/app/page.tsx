import AboutSection from "./(sections)/AboutSection";
import BannerSection from "./(sections)/BannerSection";
import ExperienceSection from "./(sections)/ExperienceSection";
import ProjectsSection from "./(sections)/ProjectsSection";
export default function Home() {
  return (
    <main className="px-10 lg:px-24 2xl:px-96 grid gap-10">
      <BannerSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
    </main>
  );
}
