import HeadingText from "../../components/text/HeadingText";
import ExperienceCard from "@/components/cards/ExperienceCard";
import { experience } from "@/lib/data";

export default function ExperienceSection() {
  return (
    <section id="experience" className={`grid gap-2.5`}>
      <HeadingText text="Experience" />
      <div className="grid gap-3.5">
        {experience.map((exp) => (
          <ExperienceCard {...exp} key={exp.id} />
        ))}
      </div>
    </section>
  );
}
