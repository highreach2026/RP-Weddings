import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BRAND, DIFFERENCE_SLIDES } from "@/data/weddings";
import { cn } from "@/lib/utils";
import { PostActions, PostHeader } from "./post-actions";

interface DifferenceCardProps {
  onBookAppointment: () => void;
}

export function DifferenceCard({ onBookAppointment }: DifferenceCardProps) {
  const [idx, setIdx] = useState(0);
  const slide = DIFFERENCE_SLIDES[idx];

  const prev = () => setIdx((i) => Math.max(0, i - 1));
  const next = () => setIdx((i) => Math.min(DIFFERENCE_SLIDES.length - 1, i + 1));

  return (
    <article className="border-b border-border/60 bg-background shadow-sm mb-2">
      <PostHeader subtitle="Why Families Choose RP Weddings" />

      <div
        className="relative overflow-hidden bg-neutral-950 text-white"
        style={{ aspectRatio: "4 / 5" }}
      >
        <img
          src={slide.image}
          alt={slide.title}
          className="absolute inset-0 w-full h-full object-cover opacity-55 transition-all duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.5) 45%, rgba(0,0,0,0.92) 100%)",
          }}
        />

        <div className="absolute top-3 right-3 bg-black/50 text-white text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm z-10">
          {idx + 1}/{DIFFERENCE_SLIDES.length}
        </div>

        <button
          type="button"
          onClick={prev}
          disabled={idx === 0}
          aria-label="Previous slide"
          className="absolute left-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/45 flex items-center justify-center disabled:opacity-25 hover:bg-black/70 cursor-pointer"
        >
          <ChevronLeft size={18} />
        </button>

        <button
          type="button"
          onClick={next}
          disabled={idx === DIFFERENCE_SLIDES.length - 1}
          aria-label="Next slide"
          className="absolute right-2.5 top-1/2 -translate-y-1/2 z-10 w-8 h-8 rounded-full bg-black/45 flex items-center justify-center disabled:opacity-25 hover:bg-black/70 cursor-pointer"
        >
          <ChevronRight size={18} />
        </button>

        <div className="absolute inset-x-0 bottom-0 z-10 p-6 space-y-3 text-center">
          <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300">
            {slide.eyebrow}
          </p>
          <h3 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug">
            {slide.title}
          </h3>
          <p className="text-sm text-white/80 leading-relaxed max-w-md mx-auto">
            {slide.body}
          </p>

          {slide.isFinalCta && (
            <div className="pt-2">
              <button
                type="button"
                onClick={onBookAppointment}
                className="bg-amber-200 text-neutral-950 text-[11px] font-semibold tracking-widest uppercase px-5 py-2.5 rounded-full hover:bg-amber-100 transition-colors cursor-pointer"
              >
                Tap to book an appointment
              </button>
            </div>
          )}

          <div className="flex justify-center gap-1.5 pt-2">
            {DIFFERENCE_SLIDES.map((_, sIdx) => (
              <button
                key={sIdx}
                type="button"
                onClick={() => setIdx(sIdx)}
                aria-label={`Slide ${sIdx + 1}`}
                className={cn(
                  "rounded-full transition-all cursor-pointer",
                  sIdx === idx ? "w-4 h-1.5 bg-white" : "w-1.5 h-1.5 bg-white/40"
                )}
              />
            ))}
          </div>
        </div>
      </div>

      <PostActions
        shareTitle={`The ${BRAND.name} Difference`}
        shareText="Only 8 bespoke destination weddings a year — transparent budgets and dedicated senior planners."
        onEnquire={onBookAppointment}
      />

      <div className="px-4 pb-5">
        <h2
          className="text-lg font-bold mb-1.5 leading-snug tracking-wide uppercase text-foreground"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
        >
          THE {BRAND.name.toUpperCase()} DIFFERENCE
        </h2>
        <p className="text-sm leading-relaxed text-muted-foreground">
          Bespoke direction, open-book vendor quotes, and a dedicated planning desk built for
          modern Indian &amp; NRI families.
        </p>
      </div>
    </article>
  );
}
