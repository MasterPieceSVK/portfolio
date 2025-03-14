import HeadingText from "../components/text/HeadingText";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  StudyIcon,
} from "../components/Icon";
import ParagraphText from "../components/text/ParagraphText";
import PrimaryText from "../components/text/PrimaryText";
import Link from "next/link";

export default function AboutSection() {
  return (
    <section id="about" className="grid gap-[5px]">
      <HeadingText text="About me" />
      <div className="grid gap-5">
        <ParagraphText text="As a high school student passionate about software engineering, I am eager to learn and create impactful projects. I have developed applications that solve real-world problems and enhance everyday experiences. With a strong foundation in both front-end and back-end development, I am excited to further my skills in college." />
        <div className="grid grid-cols-[30px_1fr] gap-y-[10px] gap-x-[20px] items-center  ">
          <StudyIcon />
          <PrimaryText text="STU FIIT, exp. graduation yr. 2028" />
          <EmailIcon />
          <PrimaryText text="maximilian.jaroscak@gmail.com" />
          <LocationIcon />
          <PrimaryText text="Bratislava" />
        </div>
        <div className="flex gap-2.5 hover:cursor:--outward-link-cursor">
          <Link
            href={
              "https://www.linkedin.com/in/maximilian-jaro%C5%A1%C4%8D%C3%A1k-32323529a"
            }
            rel="noopener noreferrer"
            target="_blank"
          >
            <LinkedInIcon />
          </Link>
          <Link
            href={"https://github.com/MasterPieceSVK"}
            rel="noopener noreferrer"
            target="_blank"
          >
            <GithubIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
