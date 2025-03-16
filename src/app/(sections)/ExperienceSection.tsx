import HeadingText from "../../components/text/HeadingText";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { experience } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

export default function ExperienceSection() {
  return (
    <AnimatedSection delay={2} id="experience" className={`grid gap-2.5`}>
      <HeadingText text="Experience" />
      <div className="grid gap-3.5">
        {experience.map((exp) => (
          <ExperienceCard {...exp} key={exp.id} />
        ))}
      </div>
    </AnimatedSection>
  );
}
