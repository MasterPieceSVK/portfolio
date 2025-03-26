"use client";
import { motion } from "motion/react";
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
    <section
      id={id}
      // className={cn(
      //   "motion-scale-in-[1.1] motion-duration-[0.34s]/scale motion-ease-bounce",
      //   className
      // )}
    >
      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        whileInView={{ y: 0, opacity: 1 }}
        // viewport={{ once: true }}
        transition={{ delay: 0.2 * delay }}
        className={className}
      >
        {children}
      </motion.div>
    </section>
  );
}
