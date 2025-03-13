import HeadingText from "./components/HeadingText";
import {
  EmailIcon,
  GithubIcon,
  LinkedInIcon,
  LocationIcon,
  StudyIcon,
} from "./components/Icon";
import ParagraphText from "./components/ParagraphText";
import PrimaryText from "./components/PrimaryText";
import { hanalei_fill } from "./layout";

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <main className="px-10 lg:px-24 2xl:px-96  grid gap-10">
      <section id="home" className="py-[50px] grid gap-2.5">
        <h1
          className={`text-primary text-[40px] md:text-[50px]/13 lg:text-[66px]/20  ${hanalei_fill.className}`}
        >
          Hello, I&apos;m <br /> Maximilian Jaroscak
        </h1>
        <h2 className="text-secondary text-2xl lg:text-3xl">
          A high school student passionate about computers
        </h2>
      </section>
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
            <LinkedInIcon />
            <GithubIcon />
          </div>
        </div>
      </section>
      <div className="flex flex-wrap gap-14 ">
        {a.map((aa, i) => (
          <div
            key={i}
            className="grow-1 min-w-[356px] h-[446px] bg-primary text-secondary p-10"
          >
            {aa}
          </div>
        ))}
      </div>
    </main>
  );
}
