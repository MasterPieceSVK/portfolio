import { cn } from "@/lib/utils";

export default function AnimatedSection({
  children,
  id,
  className,
  delay = 0,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay?: number;
}) {
  return (
    <section
      id={id}
      className={cn(
        `
        opacity-0 
        transition-opacity 
        duration-500 
        ease-out 
        delay-${delay}
        animate-fade-in 
      `,
        className
      )}
    >
      {children}
    </section>
  );
}
