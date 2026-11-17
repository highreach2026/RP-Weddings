import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { BRAND, JOURNEY_SLIDES } from "@/data/weddings";
import { cn } from "@/lib/utils";
import { PostActions, PostHeader } from "./post-actions";

interface JourneyCarouselProps {
  onEnquire: () => void;
}

export function JourneyCarousel({ onEnquire }: JourneyCarouselProps) {
  const [stepIndex, setStepIndex] = useState(0);
  const touchStartX = useRef<number | null>(null);

  const slide = JOURNEY_SLIDES[stepIndex];
  const progress = ((stepIndex + 1) / JOURNEY_SLIDES.length) * 100;

  const prev = () => setStepIndex((i) => Math.max(0, i - 1));
  const next = () => setStepIndex((i) => Math.min(JOURNEY_SLIDES.length - 1, i + 1));

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
      <PostHeader subtitle="How We Plan Together · 4 Stages" />

      <div
        className="relative select-none overflow-hidden text-white"
        style={{
          aspectRatio: "4 / 5",
          background:
            "linear-gradient(135deg, oklch(0.14 0.02 60), oklch(0.10 0.01 50))",
        }}
        onTouchStart={onTouchStart}
        onTouchEnd={onTouchEnd}
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
              "linear-gradient(to bottom, oklch(0.08 0.02 60 / 0.72) 0%, oklch(0.08 0.02 60 / 0.35) 38%, oklch(0.08 0.02 60 / 0.65) 68%, oklch(0.08 0.02 60 / 0.92) 100%)",
          }}
        />

        <div className="absolute top-0 left-0 right-0 h-0.5 bg-white/10 z-20">
          <div
            className="h-full transition-all duration-300"
            style={{ width: `${progress}%`, backgroundColor: "oklch(0.75 0.1 75)" }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-between p-6">
          <div className="flex items-center justify-between">
            <span className="font-mono text-xs tracking-widest text-amber-300">
              STAGE {slide.step} / 0{JOURNEY_SLIDES.length}
            </span>
            {slide.highlight && (
              <span className="text-[10px] uppercase tracking-[0.18em] px-2.5 py-1 rounded-full bg-white/10 border border-white/20">
                {slide.highlight}
              </span>
            )}
          </div>

          <div className="space-y-4">
            <div>
              <p className="text-[11px] uppercase tracking-[0.22em] text-amber-300/90 mb-1">
                {slide.eyebrow}
              </p>
              <h2 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug">
                {slide.title}
              </h2>
            </div>

            <p className="text-sm text-white/85 leading-relaxed">{slide.description}</p>

            <div className="flex items-center justify-between pt-2">
              <div className="flex gap-1.5">
                {JOURNEY_SLIDES.map((s, idx) => (
                  <button
                    key={s.step}
                    type="button"
                    onClick={() => setStepIndex(idx)}
                    aria-label={`Go to stage ${s.step}`}
                    className={cn(
                      "h-1.5 rounded-full transition-all cursor-pointer",
                      idx === stepIndex ? "w-5 bg-amber-300" : "w-1.5 bg-white/40"
                    )}
                  />
                ))}
              </div>
              <div className="flex gap-2">
                <button
                  type="button"
                  onClick={prev}
                  disabled={stepIndex === 0}
                  aria-label="Previous stage"
                  className="w-8 h-8 rounded-full border border-white/25 bg-black/40 flex items-center justify-center disabled:opacity-35 hover:bg-white/15 cursor-pointer"
                >
                  <ChevronLeft size={16} />
                </button>
                <button
                  type="button"
                  onClick={next}
                  disabled={stepIndex === JOURNEY_SLIDES.length - 1}
                  aria-label="Next stage"
                  className="w-8 h-8 rounded-full border border-white/25 bg-black/40 flex items-center justify-center disabled:opacity-35 hover:bg-white/15 cursor-pointer"
                >
                  <ChevronRight size={16} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <PostActions
        shareTitle={`${BRAND.name} Planning Journey`}
        shareText="Discover our 4-stage destination wedding planning process at RP Weddings."
        onEnquire={onEnquire}
      />

      <div className="px-4 pb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          From venue shortlisting to the final departure transfer — a structured, calm journey
          built around your family.
        </p>
      </div>
    </article>
  );
}
