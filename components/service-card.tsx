"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type Status = "LIVE" | "BETA";

interface ServiceCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  status: Status;
  href: string;
  ctaLabel: string;
  delay?: number;
}

const statusStyles: Record<Status, string> = {
  LIVE: "bg-accent",
  BETA: "bg-warn",
};

export function ServiceCard({
  icon,
  title,
  description,
  status,
  href,
  ctaLabel,
  delay = 0,
}: ServiceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0px)" }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay }}
      className="group relative rounded-2xl border border-border bg-card/60 backdrop-blur-xl p-6 md:p-8
                 hover:border-accent/30 hover:-translate-y-1 transition-[transform,border-color] duration-300"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center">
          {icon}
        </div>
        <span className="flex items-center gap-1.5 font-mono text-[11px] text-zinc-500">
          <span className={cn("w-1.5 h-1.5 rounded-full animate-pulseGlow", statusStyles[status])} />
          {status}
        </span>
      </div>

      <h3 className="font-display text-xl font-semibold text-zinc-100 mb-2">{title}</h3>
      <p className="text-sm text-zinc-500 leading-relaxed mb-8">{description}</p>

      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-zinc-200
                   group-hover:text-accent transition-colors"
      >
        {ctaLabel}
        <ArrowUpRight
          size={15}
          className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
        />
      </Link>
    </motion.div>
  );
}
