import Image from "next/image";
import Tag from "../buttons/Tag";
import ParagraphText from "../text/ParagraphText";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";
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
  setHoveredId,
  hoveredId,
}: {
  id: number;
  title: string;
  image: string;
  tags: string[];
  description: string;
  hoverScale?: boolean;
  setHoveredId: Dispatch<SetStateAction<number | null>>;
  hoveredId?: number | null;
}) {
  return (
    <div
      className={cn(
        `flex-1 min-w-64 sm:max-w-72 bg-gradient-to-b from-third rounded-[10px] p-6 grid gap-3.5 transition duration-200 ease-in-out hover:scale-110 hover:shadow-lg`,
        `${gradientColors[id % gradientColors.length]}`,
        hoveredId === id
          ? "brightness-125 transition duration-400 ease-in-out z-20"
          : " brightness-50 transition duration-400 ease-in-out",
        hoveredId === null &&
          "brightness-100 transition duration-400 ease-in-out"
      )}
      onMouseEnter={() => {
        setHoveredId(id);
      }}
      onMouseLeave={() => {
        setHoveredId(null);
      }}
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
