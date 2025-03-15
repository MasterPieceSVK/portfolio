import Card from "@/components/cards/Card";
import HeadingText from "@/components/text/HeadingText";
import { projects } from "@/lib/data";
import { animationClasses } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section id="projects" className={"grid gap-2.5"}>
      <HeadingText text="Projects" className={animationClasses(3)} />
      <div className="flex flex-wrap justify-center gap-14 ">
        {projects.map((project) => (
          <Card variant="project" {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
