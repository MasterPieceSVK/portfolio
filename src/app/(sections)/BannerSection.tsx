import { about } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

export default function BannerSection() {
  return (
    <AnimatedSection id="home" className="py-[50px] grid gap-2.5 " delay={0}>
      <h1
        className={`text-primary text-[40px]/10 md:text-[50px]/13 lg:text-[66px]/20 font-hanalei`}
      >
        Hello, I&apos;m <br /> Maximilian Jaroscak
      </h1>
      <h2 className={`text-secondary text-2xl lg:text-3xl`}>
        {about.welcomingText}
      </h2>
    </AnimatedSection>
  );
}
