"use client";
import ScrollButton from "@/components/buttons/ScrollButton";
import AboutSection from "./(sections)/AboutSection";
import BannerSection from "./(sections)/BannerSection";
import CertificationsSection from "./(sections)/CertificationsSection";
import ExperienceSection from "./(sections)/ExperienceSection";
import ProjectsSection from "./(sections)/ProjectsSection";
import SkillsSection from "./(sections)/SkillsSection";
import { motion } from "motion/react";

export default function Home() {
  const containerVariants = {
    hidden: {
      opacity: 0,
      backdropFilter: "blur(10px)",
      scale: 0.8,
    },
    visible: {
      opacity: 1,
      backdropFilter: "blur(0px)",
      scale: 1,
      transition: {
        duration: 2.3,
        type: "spring",
        delayChildren: 0.5,
        staggerChildren: 0.15,
      },
    },
  };

  const childVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
      },
    },
  };

  return (
    <main className="grid gap-10 px-5 sm:px-10 lg:px-24 2xl:px-96">
      <motion.div
        className="grid gap-10"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        whileInView={"visible"}
        viewport={{ once: true }}
      >
        <motion.div variants={childVariants}>
          <BannerSection />
        </motion.div>
        <motion.div variants={childVariants}>
          <AboutSection />
        </motion.div>

        <motion.div variants={childVariants}>
          <ExperienceSection />
        </motion.div>

        <motion.div variants={childVariants}>
          <ProjectsSection />
        </motion.div>
      </motion.div>
      <CertificationsSection />
      <SkillsSection />
      <ScrollButton />
    </main>
  );
}
