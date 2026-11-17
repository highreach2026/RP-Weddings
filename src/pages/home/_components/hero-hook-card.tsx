import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Calendar } from "lucide-react";
import { BRAND, HERO_STATS } from "@/data/weddings";
import { PostActions, PostHeader } from "./post-actions";

interface HeroHookCardProps {
  onBookClick: () => void;
}

export function HeroHookCard({ onBookClick }: HeroHookCardProps) {
  return (
    <article className="border-b border-border/60 bg-background shadow-sm mb-2">
      <PostHeader subtitle="India's Premier Destination Wedding Specialists" />

      <div className="relative overflow-hidden" style={{ aspectRatio: "9 / 16" }}>
        <img
          src="/images/udaipur-mandap.jpg"
          alt="Luxury destination wedding in India"
          className="w-full h-full object-cover"
        />

        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0 0 0 / 0.62) 0%, oklch(0 0 0 / 0.18) 32%, oklch(0 0 0 / 0.52) 64%, oklch(0 0 0 / 0.90) 100%)",
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)",
            backgroundSize: "24px 24px",
          }}
        />

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="absolute inset-0 flex flex-col justify-between p-6 text-white"
        >
          <div className="pt-2">
            <span
              className="inline-block text-[10px] uppercase tracking-[0.28em] px-3 py-1 rounded-full border border-amber-300/40 bg-black/35 backdrop-blur-sm"
              style={{ color: "oklch(0.84 0.09 75)" }}
            >
              Udaipur · Jaipur · Goa · Kerala
            </span>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <p
                className="text-2xl sm:text-3xl leading-none"
                style={{ fontFamily: "var(--font-script)", color: "oklch(0.84 0.1 75)" }}
              >
                Timeless Indian Celebrations
              </p>
              <h2 className="text-3xl sm:text-4xl font-serif font-semibold leading-[1.12] tracking-wide">
                Heritage Palaces. Personal Planning. Zero Surprises.
              </h2>
              <p className="text-sm text-white/80 leading-relaxed max-w-md">
                {BRAND.name} curates unhurried, deeply personal multi-day celebrations for
                couples across India and around the world.
              </p>
            </div>

            <div className="grid grid-cols-4 gap-2 py-3 border-y border-white/15">
              {HERO_STATS.map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-lg sm:text-xl font-serif font-semibold text-amber-200">
                    {stat.value}
                  </p>
                  <p className="text-[9px] uppercase tracking-[0.16em] text-white/70">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-2.5 pt-1">
              <button
                type="button"
                onClick={onBookClick}
                className="flex-1 inline-flex items-center justify-center gap-2 rounded-md bg-amber-200 text-neutral-950 px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors cursor-pointer"
              >
                <Calendar size={14} /> Book a Private Call
              </button>
              <Link
                to="/gallery"
                className="inline-flex items-center justify-center gap-2 rounded-md border border-white/35 bg-black/30 backdrop-blur-sm px-5 py-3 text-xs font-medium uppercase tracking-[0.18em] text-white hover:bg-white/10 transition-colors"
              >
                Explore Portfolio <ArrowRight size={14} />
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      <PostActions
        shareTitle={`${BRAND.name} — Luxury Destination Weddings`}
        shareText="Explore bespoke destination weddings in Udaipur, Jaipur, Goa & Kerala with RP Weddings."
        onEnquire={onBookClick}
      />

      <div className="px-4 pb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          <span className="font-semibold text-foreground">{BRAND.handle}</span> Taking on only 8
          handpicked weddings each year so every palace buyout, floral arch, and guest arrival
          receives our undivided attention.
        </p>
      </div>
    </article>
  );
}
