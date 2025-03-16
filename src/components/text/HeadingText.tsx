import { cn } from "@/lib/utils";

export default function HeadingText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <h3
      className={cn(
        `text-primary font-hanalei underline decoration-2 decoration-dotted decoration-accent  underline-offset-4 text-[28px] md:text-[32px] lg:text-[44px] `,
        className
      )}
    >
      {text}
    </h3>
  );
}
