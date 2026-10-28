"use client";

import { motion } from "framer-motion";
import { useId } from "react";

interface FilterTabsProps {
  tabs: readonly string[];
  active: string;
  onChange: (tab: string) => void;
  label: string;
  className?: string;
}

// Tab filter dengan "pill" aktif yang meluncur antar tombol (shared layout animation)
export function FilterTabs({ tabs, active, onChange, label, className }: FilterTabsProps) {
  const pillId = useId();

  return (
    <div role="tablist" aria-label={label} className={`flex flex-wrap gap-2 ${className ?? ""}`}>
      {tabs.map((tab) => {
        const isActive = active === tab;
        return (
          <button
            key={tab}
            role="tab"
            type="button"
            aria-selected={isActive}
            onClick={() => onChange(tab)}
            className={`relative min-h-11 cursor-pointer rounded-full px-5 font-label text-xs font-semibold tracking-wide transition-colors duration-200 ${
              isActive ? "text-white" : "bg-sand/70 text-ink hover:bg-blush/60"
            }`}
          >
            {isActive && (
              <motion.span
                layoutId={pillId}
                className="absolute inset-0 rounded-full bg-primary-150 shadow-sm"
                transition={{ type: "spring", stiffness: 380, damping: 30 }}
              />
            )}
            <span className="relative">{tab}</span>
          </button>
        );
      })}
    </div>
  );
}
