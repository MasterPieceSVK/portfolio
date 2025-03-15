import { cn } from "@/lib/utils";

export default function TitleText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h4
      className={cn(
        `text-primary font-hanalei text-[24px] md:text-[28px] lg:text-[32px] `,
        className
      )}
    >
      {text}
    </h4>
  );
}
