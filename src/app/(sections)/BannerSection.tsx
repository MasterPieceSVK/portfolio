import { about } from "@/lib/data";
import { animationClasses, cn } from "@/lib/utils";

export default function BannerSection() {
  return (
    <section id="home" className="py-[50px] grid gap-2.5 ">
      <h1
        className={`text-primary text-[40px] md:text-[50px]/13 lg:text-[66px]/20 font-hanalei ${animationClasses(
          0
        )}  `}
      >
        Hello, I&apos;m <br /> Maximilian Jaroscak
      </h1>
      <h2
        className={cn(
          `text-secondary text-2xl lg:text-3xl`,
          animationClasses(0)
        )}
      >
        {about.welcomingText}
      </h2>
    </section>
  );
}
