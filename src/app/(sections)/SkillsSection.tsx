import SkillCard from "@/components/cards/SkillCard";
import HeadingText from "@/components/text/HeadingText";
import { skills } from "@/lib/data";
import { animationClasses } from "@/lib/utils";

export default function SkillsSection() {
  return (
    <section id="skills" className={`grid gap-2.5`}>
      <HeadingText text="Skills" className={animationClasses(3.5)} />
      {/* <div className="grid gap-3.5">
      {experience.map((exp) => (
        <ExperienceCard {...exp} key={exp.id} />
      ))}
    </div> */}
      <div className="flex flex-wrap gap-2.5 justify-center">
        {skills.map((skill) => (
          <SkillCard {...skill} key={skill.id} />
        ))}
      </div>
    </section>
  );
}
