import HeadingText from "../../components/text/HeadingText";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  StudyIcon,
} from "../../components/Icon";
import PrimaryText from "../../components/text/PrimaryText";
import { about } from "@/lib/data";
import AnimatedSection from "@/components/AnimatedSection";

import CredentialsButton from "@/components/buttons/CredentialsButton";
import Link from "next/link";

export default function AboutSection() {
  return (
    <AnimatedSection id="about" className={`grid gap-[5px]`} delay={1}>
      <HeadingText text="About me" />
      <div className="grid gap-5">
        {/* <ParagraphText text={about.description} /> */}
        <div className="flex flex-col sm:gap-2">
          <div className="grid grid-cols-[30px_1fr] gap-1.5 sm:gap-2.5 items-center">
            <EmailIcon />
            <Link href={`mailto:${about.email}`}>
              <PrimaryText text={about.email} />
            </Link>
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
          <CredentialsButton
            text="Tap to see my Linkedin"
            href={about.linkedin}
            icon={<LinkedInIcon />}
            value="linkedin"
          />
          <CredentialsButton
            text="Tap to see my Github"
            href={about.github}
            icon={<GithubIcon />}
            value="github"
          />
        </div>
      </div>
    </AnimatedSection>
  );
}
