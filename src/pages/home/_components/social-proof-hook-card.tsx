import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { BRAND, TESTIMONIAL_SLIDES } from "@/data/weddings";
import { PostActions, PostHeader } from "./post-actions";

interface SocialProofHookCardProps {
  onEnquire: () => void;
}

export function SocialProofHookCard({ onEnquire }: SocialProofHookCardProps) {
  const [index, setIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slide = TESTIMONIAL_SLIDES[index];
  const progressPct = ((index + 1) / TESTIMONIAL_SLIDES.length) * 100;

  const prev = () => setIndex((i) => Math.max(0, i - 1));
  const next = () => setIndex((i) => Math.min(TESTIMONIAL_SLIDES.length - 1, i + 1));

  const onTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const diff = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(diff) > 40) {
      if (diff > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <article className="border-b border-border/60 bg-background shadow-sm mb-2">
      <PostHeader subtitle="What Our Couples Say" />

      <div
        className="relative select-none overflow-hidden bg-neutral-950 text-white"
        style={{ aspectRatio: "4 / 5" }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
      >
        <img
          src={slide.image}
          alt={slide.couple}
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-500"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.2) 35%, rgba(0,0,0,0.78) 72%, rgba(0,0,0,0.94) 100%)",
          }}
        />

        {/* Top progress bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/15 z-20">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progressPct}%`, backgroundColor: "oklch(0.78 0.1 75)" }}
          />
        </div>

        {/* Slide count */}
        <div className="absolute top-3 right-3 z-20 rounded-sm bg-black/50 px-2 py-0.5 text-[10px] tracking-widest uppercase text-white/90">
          {index + 1}/{TESTIMONIAL_SLIDES.length}
        </div>

        {/* Quote content */}
        <div className="absolute inset-x-0 bottom-0 z-10 p-6 space-y-3">
          <Quote className="w-7 h-7 text-amber-300/80" />
          <p className="text-lg sm:text-xl font-serif italic leading-relaxed text-white">
            “{slide.quote}”
          </p>
          <div className="pt-2 border-t border-white/15 flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold tracking-wide text-amber-200">
                {slide.couple}
              </p>
              <p className="text-xs text-white/75">
                {slide.venue} · {slide.origin}
              </p>
            </div>
            <div className="flex items-center gap-1.5">
              <button
                type="button"
                onClick={prev}
                disabled={index === 0}
                aria-label="Previous couple review"
                className="w-8 h-8 rounded-full border border-white/25 bg-black/40 flex items-center justify-center disabled:opacity-35 hover:bg-white/15 cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={next}
                disabled={index === TESTIMONIAL_SLIDES.length - 1}
                aria-label="Next couple review"
                className="w-8 h-8 rounded-full border border-white/25 bg-black/40 flex items-center justify-center disabled:opacity-35 hover:bg-white/15 cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>

      <PostActions
        shareTitle={`${BRAND.name} Couple Testimonials`}
        shareText={`"${slide.quote}" — ${slide.couple}`}
        onEnquire={onEnquire}
      />

      <div className="px-4 pb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Swipe through notes from families who trusted {BRAND.name} across London, New York,
          and Singapore.
        </p>
      </div>
    </article>
  );
}
