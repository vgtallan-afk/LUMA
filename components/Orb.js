"use client";

import { motion } from "framer-motion";

export default function Orb() {
  return (
    <div className="relative mx-auto flex h-[18.5rem] w-[18.5rem] items-center justify-center sm:h-80 sm:w-80">
      <motion.div
        aria-hidden="true"
        animate={{ rotate: 360 }}
        transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        className="absolute inset-0 rounded-full bg-[conic-gradient(from_90deg,rgba(52,211,153,0.95),rgba(20,184,166,0.72),rgba(15,23,42,0.9),rgba(52,211,153,0.95))] opacity-90 blur-[1px]"
      />

      <motion.div
        aria-hidden="true"
        animate={{ scale: [0.98, 1.055, 0.98], opacity: [0.75, 1, 0.75] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute inset-[0.58rem] rounded-full bg-[radial-gradient(circle_at_50%_18%,rgba(45,212,191,0.98),rgba(13,148,136,0.74)_34%,rgba(2,8,23,0.92)_68%)] shadow-[0_0_95px_rgba(16,185,129,0.32)]"
      />

      <div className="absolute inset-10 rounded-full bg-slate-950/45 blur-2xl" aria-hidden="true" />

      <div className="relative text-center">
        <p className="text-[0.68rem] font-bold uppercase tracking-[0.38em] text-white/45">
          foco atual
        </p>
        <p className="mt-2 text-6xl font-black tracking-[-0.06em] text-white drop-shadow-2xl">
          92%
        </p>
        <p className="mt-3 text-sm font-medium text-emerald-100/60">
          estável e limpo
        </p>
      </div>
    </div>
  );
}
