import Image from "next/image";
import Tag from "../buttons/Tag";
import ParagraphText from "../text/ParagraphText";
import { cn } from "@/lib/utils";

const gradientColors = [
  "to-skill-pink",
  "to-skill-purple",
  "to-skill-green",
  "to-skill-orange",
  "to-skill-blue",
];

export default function SkillCard({
  id,
  title,
  image,
  tags,
  description,
  hoverScale = true,
}: {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  hoverScale?: boolean;
}) {
  return (
    <div
      className={cn(
        `flex-1 min-w-64 sm:max-w-72 bg-gradient-to-b from-third rounded-[10px] p-6 grid gap-3.5`,
        gradientColors[id % gradientColors.length]
      )}
    >
      <div className="grid gap-1">
        <Image src={image} width={50} height={50} alt={title} />
        <p className="text-3xl text-white">{title}</p>
        <div className="flex gap-1 flex-wrap">
          {tags.map((tag, i) => (
            <Tag
              key={i}
              text={tag}
              className="bg-white"
              hoverScale={hoverScale}
            />
          ))}
        </div>
      </div>
      <div>
        <ParagraphText className="text-white text-base/5" text={description} />
      </div>
    </div>
  );
}
