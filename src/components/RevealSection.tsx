import type { ReactNode } from "react";
import { ScrollReveal } from "./ScrollReveal";

type RevealSectionProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right";
};

export function RevealSection({ children, className, delay = 0, direction = "up" }: RevealSectionProps) {
  const directionVariants = {
    up: { opacity: 0, y: 32 },
    left: { opacity: 0, x: -32 },
    right: { opacity: 0, x: 32 },
  };

  return (
    <ScrollReveal
      variants={{
        hidden: directionVariants[direction],
        visible: { opacity: 1, y: 0, x: 0 },
      }}
      transition={{ delay, duration: 0.6, ease: "easeOut" }}
      viewOptions={{ amount: 0.2 }}
      as="section"
    >
      <div className={className}>{children}</div>
    </ScrollReveal>
  );
}
