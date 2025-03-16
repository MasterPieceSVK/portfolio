import AnimatedSection from "@/components/AnimatedSection";
import Card from "@/components/cards/Card";
import HeadingText from "@/components/text/HeadingText";
import { certifications } from "@/lib/data";

export default function CertificationsSection() {
  return (
    <AnimatedSection delay={4} id="certifications" className={"grid gap-2.5"}>
      <HeadingText text="Certifcations" />
      <div className="flex flex-wrap justify-center gap-14 ">
        {certifications.map((project) => (
          <Card variant="certification" {...project} key={project.id} />
        ))}
      </div>
    </AnimatedSection>
  );
}
