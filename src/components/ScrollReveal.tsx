"use client";

import {
  motion,
  type Transition,
  type UseInViewOptions,
  useInView,
  type Variant,
} from "framer-motion";
import { type ReactNode, useRef, useState, useEffect } from "react";

export type ScrollRevealProps = {
  children: ReactNode;
  variants?: {
    hidden: Variant;
    visible: Variant;
  };
  transition?: Transition;
  viewOptions?: UseInViewOptions;
  as?: React.ElementType;
  once?: boolean;
};

const defaultVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

export function ScrollReveal({
  children,
  variants = defaultVariants,
  transition,
  viewOptions,
  as = "div",
  once = true,
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, viewOptions);
  const [isClient, setIsClient] = useState(false);
  const [isViewed, setIsViewed] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const MotionComponent = motion[as as keyof typeof motion] as typeof motion.div;

  // SSR: always visible (no opacity:0 in static HTML)
  // Client: hidden until scrolled into view, then animated visible
  const animateState = isClient ? (isInView || isViewed ? "visible" : "hidden") : "visible";
  const initialState = isClient ? "hidden" : undefined;

  return (
    <MotionComponent
      animate={animateState}
      initial={initialState}
      onAnimationComplete={() => {
        if (once) setIsViewed(true);
      }}
      ref={ref}
      transition={transition ?? { duration: 0.6, ease: "easeOut" }}
      variants={variants}
    >
      {children}
    </MotionComponent>
  );
}
