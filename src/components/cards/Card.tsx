import Image from "next/image";
import ParagraphText from "../text/ParagraphText";
import TitleText from "../text/TitleText";
import Tag from "../buttons/Tag";
import LinkButton from "../buttons/LinkButton";
import { FigmaColoredIcon, GithubInvertedIcon, OutwardLinkIcon } from "../Icon";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

export default function Card({
  variant,
  title,
  image,
  tags,
  description,
  github,
  live,
  link,
  figma,
}: {
  variant: "project" | "certification";
  title: string;
  image: string;
  tags: string[];
  description?: string;
  github?: string;
  live?: string;
  link?: string;
  figma?: string;
}) {
  return (
    <div
      className={`flex-1 min-w-[350px] max-w-[450px] h-fit grid gap-3.5 bg-white/80 rounded-[10px] pb-3`}
    >
      <div className="grid gap-2">
        <div className="relative w-full h-[200px]">
          <Image
            src={image}
            alt={title}
            fill
            className="rounded-t-[10px] object-cover"
            loading="eager"
            quality={100}
          />
        </div>
        <TitleText text={title} className="px-1" />
        <div className="flex gap-[5px] flex-wrap px-1 ">
          {tags.map((tag, i) => (
            <Tag key={i} text={tag} />
          ))}
        </div>
      </div>

      {variant === "project" && description && (
        <ParagraphText
          text={description}
          className="text-lg/5 sm:text-lg/5.5 px-1"
        />
      )}
      <div className="flex gap-2.5 px-1">
        {variant == "project" && github && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LinkButton
                  href={github}
                  text="Code"
                  icon={<GithubInvertedIcon />}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Tap to see the code and screenshots</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {variant == "project" && live && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LinkButton
                  href={live}
                  text="Live"
                  icon={<OutwardLinkIcon />}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-center">
                  Tap to see the live website. <br />
                  Some projects run on free hosting servrs and may be down.
                </p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {variant == "project" && figma && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LinkButton
                  href={figma}
                  text="Design"
                  icon={<FigmaColoredIcon />}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p className="text-center">Tap to see the design.</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
        {variant == "certification" && link && (
          <TooltipProvider>
            <Tooltip>
              <TooltipTrigger>
                <LinkButton
                  href={link}
                  text="Certificate"
                  icon={<OutwardLinkIcon />}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>Tap to see the certificate</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        )}
      </div>
    </div>
  );
}
