"use client";
import { motion } from "framer-motion";

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
    <section id={id}>
      <motion.div
        initial={{ opacity: 0, transform: "translateY(120px)" }}
        animate={{ opacity: 1, transform: "translateY(0)" }}
        transition={{
          delay: delay * 0.2,
          duration: 0.5,
          ease: "easeOut",
        }}
        className={className}
      >
        {children}
      </motion.div>
    </section>
  );
}
