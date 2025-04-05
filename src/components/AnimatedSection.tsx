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
      initial={{ opacity: 0, backdropFilter: "blur(10px)", y: 50 }}
      whileInView={{ opacity: 1, backdropFilter: "blur(0px)", y: 0 }}
      transition={{
        duration: 2,
        type: "spring",
      }}
      viewport={{ once: true }}
      id={id}
      className={cn(className)}
    >
      {children}
    </motion.section>
  );
}
