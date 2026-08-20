import { Database, Layers, CurlyBracesIcon } from "lucide-react";
import { HubDiagram } from "@/components/hub-diagram";
import { ServiceCard } from "@/components/service-card";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-grid-fade opacity-[0.035]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-[36rem] rounded-full bg-accent/10 blur-[140px]"
      />

      <div className="relative max-w-5xl mx-auto px-4 md:px-8 pt-24 md:pt-32 pb-20">
        {/* Hero */}
        <section className="text-center">
          <span className="inline-block font-mono text-[11px] tracking-widest text-accent border border-accent/30 bg-accent/5 rounded-full px-3 py-1 mb-6">
            BY CIKAWAN
          </span>

          <h1 className="font-display text-5xl md:text-7xl font-bold tracking-tighter text-zinc-50 text-balance">
            Kasyaf Cloud
          </h1>

          <p className="mt-5 text-sm md:text-base text-zinc-400 max-w-lg mx-auto text-balance">
            Managed Redis &amp; Vector Infrastructure Tanpa Ribet. 1 codebase, jalan di Local
            &amp; VPS.
          </p>
        </section>

        {/* Signature hub schematic — kasyaf.id routes to both services below */}
        <div className="mt-14 md:mt-16">
          <HubDiagram />
        </div>

        {/* Services */}
        <section className="mt-4 md:mt-6 grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <ServiceCard
            icon={<Database size={20} className="text-accent" />}
            title="Redis Console"
            description="Managed Redis & Qdrant Console - Upstash alternative dark premium."
            status="LIVE"
            href="https://console.kasyaf.id"
            ctaLabel="Open Console"
            delay={0}
          />
          <ServiceCard
            icon={<Layers size={20} className="text-accent" />}
            title="Vector Lab"
            description="Qdrant Vector Search Manager."
            status="BETA"
            href="https://vector.kasyaf.id"
            ctaLabel="Open Vector Lab"
            delay={0.1}
          />
        </section>
      </div>

      {/* Footer */}
      <footer className="relative border-t border-border px-4 md:px-8 py-8">
        <div className="max-w-5xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
          <p className="text-xs text-zinc-500">Built by Cikawan &copy; 2026</p>
          <a
            href="https://www.kasyaf-cv.my.id"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-xs text-zinc-500 hover:text-zinc-300 transition-colors"
          >
            <CurlyBracesIcon size={14} />
            Owner
          </a>
        </div>
      </footer>
    </main>
  );
}
