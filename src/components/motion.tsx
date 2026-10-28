"use client";

import {
  animate,
  motion,
  useInView,
  useScroll,
  useSpring,
  type HTMLMotionProps,
  type Variants,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

/*
 * Bahasa animasi Kopi Nusa: "Roast & Pour"
 * - Pour        : konten "dituang" dari bawah (clip-path wipe) seperti kopi mengisi cangkir
 * - Steep       : card berdiri dari posisi miring 3D dengan spring, bergantian (stagger)
 * - RoastReveal : foto dibuka tirai warna kopi lalu "mengendap" dari zoom ke ukuran normal
 * - CountUp     : angka statistik naik saat terlihat
 * Semua otomatis nonaktif untuk user dengan prefers-reduced-motion (lihat MotionConfig).
 */

const EASE_POUR = [0.7, 0, 0.2, 1] as const;
const VIEWPORT = { once: true, margin: "-60px" } as const;

export function Pour({
  delay = 0,
  className,
  children,
  ...rest
}: HTMLMotionProps<"div"> & { delay?: number }) {
  return (
    <motion.div
      initial={{ clipPath: "inset(100% 0% 0% 0%)", y: 18 }}
      whileInView={{ clipPath: "inset(0% 0% 0% 0%)", y: 0 }}
      viewport={VIEWPORT}
      transition={{ duration: 0.85, ease: EASE_POUR, delay }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

const steepContainer: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.09, delayChildren: 0.05 } },
};

const steepItem: Variants = {
  hidden: { opacity: 0, y: 48, rotateX: 14, transformPerspective: 900 },
  show: {
    opacity: 1,
    y: 0,
    rotateX: 0,
    transition: { type: "spring", stiffness: 140, damping: 20, mass: 0.9 },
  },
};

export function Steep({ className, children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={steepContainer}
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function SteepItem({ className, children, ...rest }: HTMLMotionProps<"div">) {
  return (
    <motion.div
      variants={steepItem}
      whileHover={{ y: -6, transition: { type: "spring", stiffness: 300, damping: 18 } }}
      className={className}
      {...rest}
    >
      {children}
    </motion.div>
  );
}

export function RoastReveal({
  className,
  children,
  delay = 0,
}: {
  className?: string;
  children: React.ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={VIEWPORT}
      className={`relative overflow-hidden ${className ?? ""}`}
    >
      <motion.div
        className="absolute inset-0"
        variants={{ hidden: { scale: 1.18 }, show: { scale: 1 } }}
        transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay }}
      >
        {children}
      </motion.div>
      {/* tirai warna kopi yang tersibak ke atas */}
      <motion.div
        aria-hidden
        className="absolute inset-0 z-10 origin-top bg-primary-150"
        variants={{ hidden: { scaleY: 1 }, show: { scaleY: 0 } }}
        transition={{ duration: 0.9, ease: EASE_POUR, delay }}
      />
    </motion.div>
  );
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true });
  const match = value.match(/^(\d+)(.*)$/);
  const isNumeric = !!match;
  const target = match ? Number(match[1]) : 0;
  const suffix = match ? match[2] : value;
  const [display, setDisplay] = useState(isNumeric ? 0 : null);

  useEffect(() => {
    if (!inView || !isNumeric) return;
    const controls = animate(0, target, {
      duration: 1.6,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, isNumeric]);

  return (
    <span ref={ref} className={className} aria-label={value}>
      {display === null ? value : `${display}${suffix}`}
    </span>
  );
}

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 30 });
  return (
    <motion.div
      aria-hidden
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-60 h-0.75 origin-left bg-linear-to-r from-star via-primary-150 to-cocoa"
    />
  );
}
