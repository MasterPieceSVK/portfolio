import Card from "@/components/Card";
import HeadingText from "@/components/text/HeadingText";
import { animationClasses } from "@/lib/utils";

export default function ProjectsSection() {
  return (
    <section id="projects" className={`grid gap-2.5 ${animationClasses(3)}`}>
      <HeadingText text="Projects" />
      <div className="flex flex-wrap justify-center gap-14">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}
