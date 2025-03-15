import Card from "@/components/cards/Card";
import HeadingText from "@/components/text/HeadingText";
import { certifications } from "@/lib/data";
import { animationClasses } from "@/lib/utils";

export default function CertificationsSection() {
  return (
    <section id="certifications" className={"grid gap-2.5"}>
      <HeadingText text="Certifcations" className={animationClasses(3)} />
      <div className="flex flex-wrap justify-center gap-14 ">
        {certifications.map((project) => (
          <Card variant="certification" {...project} key={project.id} />
        ))}
      </div>
    </section>
  );
}
