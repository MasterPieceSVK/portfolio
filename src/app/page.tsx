"use client";
import ScrollButton from "@/components/buttons/ScrollButton";
import AboutSection from "./(sections)/AboutSection";
import BannerSection from "./(sections)/BannerSection";
import CertificationsSection from "./(sections)/CertificationsSection";
import ExperienceSection from "./(sections)/ExperienceSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import SkillsSection from "./(sections)/SkillsSection";

export default function Home() {
  return (
    <main className="grid gap-10 px-5 sm:px-10 lg:px-24 2xl:px-96">
      <div
        className="grid gap-10"
        // variants={containerVariants}
      >
        <BannerSection />
        <AboutSection />

        <ExperienceSection />

        <ProjectsSection />
        <CertificationsSection />
        <SkillsSection />
        <ScrollButton />
      </div>
    </main>
  );
}
