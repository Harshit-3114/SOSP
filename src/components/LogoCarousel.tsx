"use client";

import { motion, useMotionValue, animate } from "framer-motion";
import { useEffect, useRef } from "react";

const clients = [
  { name: "Havells", img: "/images/actual/clients/havells.png" },
  { name: "KEI (Wires and Cables)", img: "/images/actual/clients/kei.png" },
  { name: "Unistar Universal Cables Ltd.", img: "/images/actual/clients/universal.png" },
  { name: "Gemscab Cables", img: "/images/actual/clients/gemscab.png" },
  { name: "SC Sriram", img: "/images/actual/clients/sriram.png" },
  { name: "Cords", img: "/images/actual/clients/cords.png" },
  { name: "Venkateshvara Wires (P) Ltd.", img: "/images/actual/clients/venwires.png" },
  { name: "Anamika", img: "/images/actual/clients/anamika.png" },
  { name: "Oswal Cables", img: "/images/actual/clients/oswal.png" },
  { name: "OC (Olympic Cables)", img: "/images/actual/clients/olympic.svg" },
  { name: "Finolex J-Power Systems Ltd.", img: "/images/actual/clients/finolex.png" },
  { name: "Neelkanth Cables", img: "/images/actual/clients/neelkanth.png" },
  { name: "LS Cables India Pvt. Ltd.", img: "/images/actual/clients/lscables.png" },
];

export function LogoCarousel() {
  const x = useMotionValue(0);
  const paused = useRef(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsRef = useRef<ReturnType<typeof animate> | null>(null);

  useEffect(() => {
    const startAnimation = () => {
      if (containerRef.current) {
        const track = containerRef.current.firstChild as HTMLElement;
        if (track) {
          const halfWidth = track.scrollWidth / 2;
          if (controlsRef.current) controlsRef.current.stop();
          controlsRef.current = animate(x, [0, -halfWidth], {
            duration: 20,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
          });
        }
      }
    };

    startAnimation();
    const observer = new ResizeObserver(startAnimation);
    if (containerRef.current) observer.observe(containerRef.current);

    const handlePause = () => {
      paused.current = true;
      if (controlsRef.current) controlsRef.current.stop();
    };
    const handleResume = () => {
      paused.current = false;
      startAnimation();
    };

    const el = containerRef.current;
    el?.addEventListener("mouseenter", handlePause);
    el?.addEventListener("mouseleave", handleResume);
    el?.addEventListener("focusin", handlePause);
    el?.addEventListener("focusout", handleResume);

    return () => {
      observer.disconnect();
      controlsRef.current?.stop();
      el?.removeEventListener("mouseenter", handlePause);
      el?.removeEventListener("mouseleave", handleResume);
      el?.removeEventListener("focusin", handlePause);
      el?.removeEventListener("focusout", handleResume);
    };
  }, [x]);

  return (
    <div
      ref={containerRef}
      className="relative overflow-hidden py-8"
      tabIndex={0}
    >
      <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-surface-container-lowest to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-surface-container-lowest to-transparent z-10 pointer-events-none" />
      <motion.div
        className="flex gap-4 items-center"
        style={{ x }}
      >
        {[...clients, ...clients].map((client, i) => (
          <div
            key={i}
            className="inline-flex items-center gap-3 h-16 px-6 rounded-xl bg-surface-container-low border border-border-gray/50 text-on-surface-variant font-semibold text-sm shrink-0"
          >
            <img src={client.img} alt={client.name} className="h-8 w-auto object-contain" />
            <span>{client.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
