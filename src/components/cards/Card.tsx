import Image from "next/image";
import ParagraphText from "../text/ParagraphText";
import TitleText from "../text/TitleText";
import Tag from "../buttons/Tag";
import LinkButton from "../buttons/LinkButton";
import { GithubInvertedIcon, OutwardLinkIcon } from "../Icon";
import { animationClasses, cn } from "@/lib/utils";

export default function Card({
  variant,
  title,
  image,
  tags,
  description,
  github,
  live,
  link,
}: {
  variant: "project" | "certification";
  title: string;
  image: string;
  tags: string[];
  description: string;
  github?: string;
  live?: string;
  link?: string;
}) {
  return (
    <div
      className={cn(
        `flex-1 min-w-[350px] max-w-[450px] h-fit grid gap-[5px] bg-transparent backdrop-blur-xs rounded-[10px] pb-3`,
        animationClasses(3)
      )}
    >
      <div className="relative w-full h-[200px]">
        <Image
          src={image}
          alt={title}
          fill
          //   className="object-cover"
          className="rounded-t-[10px]"
          loading="eager"
        />
      </div>
      <TitleText text={title} className="px-1" />
      <div className="flex gap-[5px] flex-wrap px-1 ">
        {tags.map((tag, i) => (
          <Tag key={i} text={tag} />
        ))}
      </div>

      <ParagraphText
        text={description}
        className="text-base/5 sm:text-lg/6 px-1"
      />
      <div className="flex gap-2.5 px-1">
        {variant == "project" && github && (
          <LinkButton href={github} text="Code" icon={<GithubInvertedIcon />} />
        )}
        {variant == "project" && live && (
          <LinkButton href={live} text="Live" icon={<OutwardLinkIcon />} />
        )}
        {variant == "certification" && link && (
          <LinkButton
            href={link}
            text="Certification"
            icon={<OutwardLinkIcon />}
          />
        )}
      </div>
    </div>
  );
}
