"use client";

import { motion, useInView, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  from?: number;
  to: number;
  suffix?: string;
  label: string;
  duration?: number;
};

export function AnimatedCounter({ from = 0, to, suffix = "", label, duration = 2 }: AnimatedCounterProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [count, setCount] = useState(from);

  useEffect(() => {
    if (!isInView) return;
    const controls = animate(from, to, {
      duration,
      ease: "easeOut",
      onUpdate: (val) => setCount(Math.round(val)),
    });
    return () => controls.stop();
  }, [isInView, from, to, duration]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-4xl md:text-5xl font-extrabold text-primary-container leading-none">
        {count}{suffix}
      </div>
      <div className="text-xs uppercase tracking-wider text-on-surface-variant mt-2 font-semibold">
        {label}
      </div>
    </div>
  );
}
