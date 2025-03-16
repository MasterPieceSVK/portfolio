"use client";
import { cn } from "@/lib/utils";
export default function AnimatedSection({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay: number;
}) {
  return (
    <section
      id={id}
      className={cn(
        "motion-scale-in-[1.1] motion-duration-[0.34s]/scale motion-ease-bounce",
        className
      )}
    >
      {children}
    </section>
  );
}
