import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { type HighlightItem } from "@/data/weddings";

interface StoryModalProps {
  highlights: HighlightItem[];
  activeIndex: number | null;
  onClose: () => void;
  onPrevHighlight: () => void;
  onNextHighlight: () => void;
}

export function StoryModal({
  highlights,
  activeIndex,
  onClose,
  onPrevHighlight,
  onNextHighlight,
}: StoryModalProps) {
  const [slideIndex, setSlideIndex] = useState(0);

  const highlight = activeIndex !== null ? highlights[activeIndex] : null;

  useEffect(() => {
    setSlideIndex(0);
  }, [activeIndex]);

  useEffect(() => {
    if (activeIndex === null) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") handleNextSlide();
      if (e.key === "ArrowLeft") handlePrevSlide();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  });

  if (!highlight) return null;

  const slides = highlight.items;
  const currentSlide = slides[slideIndex] ?? slides[0];

  const handleNextSlide = () => {
    if (slideIndex < slides.length - 1) {
      setSlideIndex((prev) => prev + 1);
    } else {
      onNextHighlight();
    }
  };

  const handlePrevSlide = () => {
    if (slideIndex > 0) {
      setSlideIndex((prev) => prev - 1);
    } else {
      onPrevHighlight();
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-50 bg-black/92 flex items-center justify-center p-0 sm:p-4"
      >
        <div className="relative w-full max-w-[430px] h-full sm:h-[86vh] sm:rounded-2xl overflow-hidden bg-neutral-950 text-white flex flex-col">
          {/* Progress bars */}
          <div className="absolute top-3 left-3 right-3 z-20 flex gap-1.5">
            {slides.map((_, idx) => (
              <div key={idx} className="h-0.5 flex-1 bg-white/25 rounded-full overflow-hidden">
                <div
                  className={`h-full bg-white transition-all duration-300 ${
                    idx <= slideIndex ? "w-full" : "w-0"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Header */}
          <div className="absolute top-6 left-4 right-4 z-20 flex items-center justify-between">
            <span className="text-xs font-medium tracking-widest uppercase text-white/90">
              {highlight.label}
            </span>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close story"
              className="w-8 h-8 rounded-full bg-black/40 flex items-center justify-center text-white hover:bg-black/60 cursor-pointer"
            >
              <X size={18} />
            </button>
          </div>

          {/* Slide content */}
          <div className="relative flex-1 flex items-center justify-center">
            {currentSlide?.type === "cta" ? (
              <div className="px-8 text-center space-y-5">
                <p className="text-[10px] uppercase tracking-[0.28em] text-amber-300">
                  RP Weddings
                </p>
                <h3 className="text-3xl font-serif font-semibold leading-snug">
                  {currentSlide.heading}
                </h3>
                <p className="text-sm text-white/80 whitespace-pre-line leading-relaxed">
                  {currentSlide.subheading}
                </p>
                {currentSlide.ctaLink && (
                  <Link
                    to={currentSlide.ctaLink}
                    onClick={onClose}
                    className="relative z-30 inline-block rounded-full bg-amber-200 text-neutral-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors"
                  >
                    {currentSlide.ctaText}
                  </Link>
                )}
              </div>
            ) : (
              <>
                <img
                  src={currentSlide?.url}
                  alt={currentSlide?.caption ?? highlight.label}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-black/85 to-transparent" />
                {currentSlide?.caption && (
                  <p className="absolute bottom-8 left-5 right-5 text-sm text-white/95 font-serif tracking-wide">
                    {currentSlide.caption}
                  </p>
                )}
              </>
            )}

            {/* Tap navigation zones */}
            <button
              type="button"
              onClick={handlePrevSlide}
              aria-label="Previous slide"
              className="absolute inset-y-16 left-0 w-1/3 z-10 cursor-pointer"
            />
            <button
              type="button"
              onClick={handleNextSlide}
              aria-label="Next slide"
              className="absolute inset-y-16 right-0 w-1/3 z-10 cursor-pointer"
            />
          </div>

          {/* Desktop prev/next controls */}
          <button
            type="button"
            onClick={handlePrevSlide}
            aria-label="Previous"
            className="hidden sm:flex absolute left-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 items-center justify-center hover:bg-black/65 cursor-pointer"
          >
            <ChevronLeft size={18} />
          </button>
          <button
            type="button"
            onClick={handleNextSlide}
            aria-label="Next"
            className="hidden sm:flex absolute right-2 top-1/2 -translate-y-1/2 z-20 w-8 h-8 rounded-full bg-black/40 items-center justify-center hover:bg-black/65 cursor-pointer"
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
