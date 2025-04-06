import { cn } from "@/lib/utils";
import { motion } from "motion/react";
export default function AnimatedSection({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) {
  return (
    <motion.section
      initial={{
        opacity: 0,
        backdropFilter: "blur(10px)",
        y: 100,
      }}
      animate={{
        opacity: 1,
        backdropFilter: "blur(0px)",
        y: 0,
        transition: {
          duration: 2.3,
          type: "spring",
        },
      }}
      id={id}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
