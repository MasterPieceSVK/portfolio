import Image from "next/image";
import TitleText from "../text/TitleText";
import ParagraphText from "../text/ParagraphText";

export default function ExperienceCard({
  company,
  image,
  position,
  date,
  bulletPoints,
}: {
  company: string;
  image: string;
  position: string;
  date: string;
  bulletPoints: string[];
}) {
  return (
    <>
      <div className="flex flex-col sm:flex-row sm:justify-between">
        <div className="flex gap-5">
          <Image
            alt={company}
            src={image}
            width={100}
            height={100}
            className="rounded-[10px]"
          />
          <div>
            <TitleText text={position} />
            <ParagraphText text={company} color="text-primary" />
          </div>
        </div>
        <div>
          <TitleText text={date} />
        </div>
      </div>
      <ul className="list-disc px-10 md:px-20">
        {bulletPoints.map((bulletPoint, i) => (
          <li key={i}>{bulletPoint}</li>
        ))}
      </ul>
    </>
  );
}
