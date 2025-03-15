import Image from "next/image";
import Tag from "../buttons/Tag";
import ParagraphText from "../text/ParagraphText";
import { animationClasses, cn } from "@/lib/utils";

const gradientColors = [
  "to-skill-pink",
  "to-skill-purple",
  "to-skill-green",
  "to-skill-orange",
];

export default function SkillCard({
  id,
  title,
  image,
  tags,
  description,
}: {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
}) {
  return (
    <div
      className={cn(
        `flex-1 min-w-64 sm:max-w-72 bg-gradient-to-b from-third rounded-[10px] p-6 grid gap-3.5`,
        gradientColors[id % 4],
        animationClasses(3.5)
      )}
    >
      <div className="grid gap-1">
        <Image src={image} width={50} height={50} alt={title} />
        <p className="text-3xl text-white">{title}</p>
        <div className="flex gap-0.5 flex-wrap">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} className="bg-white" />
          ))}
        </div>
      </div>
      <div>
        <ParagraphText className="text-white text-base/5" text={description} />
      </div>
    </div>
  );
}
