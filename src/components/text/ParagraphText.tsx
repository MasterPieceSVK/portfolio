import { cn } from "@/lib/utils";

export default function ParagraphText({
  text,
  color = "text-secondary",
  className = "text-lg md:text-xl",
}: {
  text: string;
  color?: string;
  className?: string;
}) {
  return <p className={cn(`text-justify`, color, className)}>{text}</p>;
}
