import AboutSection from "./AboutSection";
import BannerSection from "./BannerSection";
import ExperienceSection from "./ExperienceSection";

const a = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

export default function Home() {
  return (
    <main className="px-10 lg:px-24 2xl:px-96  grid gap-10">
      <BannerSection />
      <AboutSection />
      <ExperienceSection />
      <div className="flex flex-wrap gap-14 ">
        {a.map((aa, i) => (
          <div
            key={i}
            className="grow-1 min-w-[300px] h-[446px] bg-primary text-secondary p-10"
          >
            {aa}
          </div>
        ))}
      </div>
    </main>
  );
}
