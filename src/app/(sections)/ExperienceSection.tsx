import Image from "next/image";
import HeadingText from "../../components/text/HeadingText";
import ParagraphText from "../../components/text/ParagraphText";
import TitleText from "../../components/text/TitleText";
import { animationClasses } from "@/lib/utils";

export default function ExperienceSection() {
  return (
    <section
      id="experience"
      className={`grid gap-2.5 ${animationClasses(2.5)}`}
    >
      <HeadingText text="Experience" />
      <div className="grid gap-3.5">
        <div className="flex flex-col sm:flex-row sm:justify-between">
          <div className="flex gap-5">
            <Image
              alt="UNIIT logo"
              src={"/uniit-logo.png"}
              width={85}
              height={85}
              className="rounded-[10px]"
            />
            <div>
              <TitleText text="Junior Developer" />
              <ParagraphText text="UNIIT" color="text-primary" />
            </div>
          </div>
          <div>
            <TitleText text="2024 - Present" />
          </div>
        </div>
        <ul className="list-disc px-10 md:px-20">
          <li>ASDASD</li>
          <li>ASDASD</li>
          <li>ASDASD</li>
          <li>ASDASD</li>
          <li>ASDASD</li>
          <li>ASDASD</li>
          <li>ASDASD</li>
          <li>ASDASD</li>
        </ul>
      </div>
    </section>
  );
}
