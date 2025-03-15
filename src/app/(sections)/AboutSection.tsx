import HeadingText from "../../components/text/HeadingText";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  StudyIcon,
} from "../../components/Icon";
import PrimaryText from "../../components/text/PrimaryText";
import Link from "next/link";
import { animationClasses, cn } from "@/lib/utils";
import { about } from "@/lib/data";

export default function AboutSection() {
  return (
    <section id="about" className={cn(`grid gap-[5px]`, animationClasses(2))}>
      <HeadingText text="About me" />
      <div className="grid gap-5">
        {/* <ParagraphText text={about.description} /> */}
        <div className="flex flex-col sm:gap-2">
          <div className="grid grid-cols-[30px_1fr] gap-1.5 sm:gap-2.5 items-center">
            <EmailIcon />
            <PrimaryText text={about.email} />
          </div>
          <div className="grid grid-cols-[30px_1fr] gap-1.5 sm:gap-2.5 items-center">
            <StudyIcon />
            <PrimaryText text={about.school} />
          </div>
          <div className="grid grid-cols-[30px_1fr] gap-1.5 sm:gap-2.5 items-center">
            <LocationIcon />
            <PrimaryText text={about.location} />
          </div>
        </div>
        <div className="flex gap-2.5">
          <Link
            href={about.linkedin}
            // rel="noopener noreferrer"
            // target="_blank"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href={about.github}
            // rel="noopener noreferrer"
            // target="_blank"
            className="transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
