"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { skills } from "@/lib/data";

export default function Tag({
  text,
  className,
  hoverScale = true,
}: {
  text: string;
  className?: string;
  hoverScale?: boolean;
}) {
  const handleScroll = (
    event: React.MouseEvent<HTMLAnchorElement>,
    href: string
  ) => {
    event.preventDefault();
    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;

      window.scrollTo({ top: y, behavior: "smooth" });
      window.history.pushState(null, "", `#${targetId}`);
    }
  };

  const description = skills.find((skill) => skill.title === text)?.description;

  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <Link
            onClick={(e) => handleScroll(e, "#skills")}
            href={"#skills"}
            className={cn(
              "text-xs font-medium bg-gray-custom w-fit grid place-items-center px-3.5 py-1 rounded-[50px] text-primary ",
              hoverScale &&
                "transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-lg",
              !hoverScale && "hover:cursor-default",
              className
            )}
          >
            {text}
          </Link>
        </TooltipTrigger>
        {description && (
          <TooltipContent className="max-w-[300px] text-center">
            <p>{description}</p>
          </TooltipContent>
        )}
      </Tooltip>
    </TooltipProvider>
  );
}
