import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { cn } from "@/lib/utils";
import { sendGTMEvent } from "@next/third-parties/google";
import Link from "next/link";
import { ReactNode } from "react";

export default function CredentialsButton({
  text,
  className,
  href,
  icon,
  value,
}: {
  text: string;
  className?: string;
  href: string;
  icon: ReactNode;
  value: string;
}) {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger
          className={cn(
            "transition delay-75 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110 hover:drop-shadow-xl",
            className
          )}
        >
          <Link
            onClick={() =>
              sendGTMEvent({
                event: "buttonclicked",
                value: `${value} ${href}`,
              })
            }
            href={href}
            rel="noopener noreferrer"
            target="_blank"
          >
            {icon}
          </Link>
        </TooltipTrigger>
        <TooltipContent className="max-w-[300px] text-center">
          <p>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
}
