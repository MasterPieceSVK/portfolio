import AnimatedSection from "@/components/AnimatedSection";
import Card from "@/components/cards/Card";
import HeadingText from "@/components/text/HeadingText";
import { projects } from "@/lib/data";

export default function ProjectsSection() {
  return (
    <AnimatedSection id="projects" className={"grid gap-2.5"}>
      <HeadingText text="Projects" />
      <div className="flex flex-wrap justify-center gap-14 ">
        {projects.map((project) => (
          <Card variant="project" {...project} key={project.id} />
        ))}
      </div>
    </AnimatedSection>
  );
}
