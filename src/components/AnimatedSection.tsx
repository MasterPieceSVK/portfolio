"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
export default function AnimatedSection({
  children,
  id,
  className,
  delay,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
  delay: number;
}) {
  return (
    <motion.section
      id={id}
      className={cn(className)}
      initial={{
        y: -50,
        // filter: "blur(5px)",
      }}
      animate={{
        y: 0,
        // filter: "blur(0px)",
      }}
      viewport={{ once: true }}
      transition={{
        duration: 1,
        filter: { delay: delay / 6 },
        type: "spring",
      }}
    >
      {children}
    </motion.section>
  );
}
