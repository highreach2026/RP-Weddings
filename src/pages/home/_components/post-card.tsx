import { useRef, useState, type TouchEvent } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { type WeddingPost } from "@/data/weddings";
import { cn } from "@/lib/utils";
import { PostActions, PostHeader } from "./post-actions";

interface PostCardProps {
  post: WeddingPost;
  onEnquire: (heading: string) => void;
}

export function PostCard({ post, onEnquire }: PostCardProps) {
  const [slideIdx, setSlideIdx] = useState(0);
  const [expanded, setExpanded] = useState(false);
  const touchStartX = useRef<number | null>(null);

  const total = post.images.length;
  const activeImage = post.images[slideIdx];

  const prev = () => setSlideIdx((i) => Math.max(0, i - 1));
  const next = () => setSlideIdx((i) => Math.min(total - 1, i + 1));

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    if (touchStartX.current === null) return;
    const delta = touchStartX.current - e.changedTouches[0].clientX;
    if (Math.abs(delta) > 40) {
      if (delta > 0) next();
      else prev();
    }
    touchStartX.current = null;
  };

  return (
    <article
      data-post-id={post.id}
      className="border-b border-border/60 bg-background shadow-sm mb-2 transition-shadow"
    >
      <PostHeader subtitle={`${post.location} · ${post.subtitle}`} />

      <div
        className="relative group bg-black overflow-hidden select-none"
        style={{ aspectRatio: post.aspectRatio ?? "4 / 5" }}
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <img
          src={activeImage.url}
          alt={activeImage.alt}
          className="w-full h-full object-cover transition-transform duration-500"
        />

        {activeImage.caption && (
          <div className="absolute bottom-3 left-3 z-10 rounded-full bg-black/55 backdrop-blur-xs px-3 py-1 text-[11px] text-white/95">
            {activeImage.caption}
          </div>
        )}

        {total > 1 && (
          <>
            <div className="absolute top-3 right-3 bg-black/55 text-white text-[10px] tracking-widest uppercase px-2 py-0.5 rounded-sm z-10">
              {slideIdx + 1}/{total}
            </div>

            {slideIdx > 0 && (
              <button
                type="button"
                onClick={prev}
                aria-label="Previous photo"
                className="absolute left-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center opacity-85 hover:bg-black/70 transition-opacity cursor-pointer z-10"
              >
                <ChevronLeft size={18} />
              </button>
            )}

            {slideIdx < total - 1 && (
              <button
                type="button"
                onClick={next}
                aria-label="Next photo"
                className="absolute right-2.5 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-black/45 text-white flex items-center justify-center opacity-85 hover:bg-black/70 transition-opacity cursor-pointer z-10"
              >
                <ChevronRight size={18} />
              </button>
            )}

            <div className="absolute bottom-3 right-3 flex items-center gap-1.5 z-10">
              {post.images.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  onClick={() => setSlideIdx(idx)}
                  aria-label={`View slide ${idx + 1}`}
                  className={cn(
                    "rounded-full transition-all cursor-pointer",
                    idx === slideIdx
                      ? "w-4 h-1.5 bg-white"
                      : "w-1.5 h-1.5 bg-white/45 hover:bg-white/75"
                  )}
                />
              ))}
            </div>
          </>
        )}
      </div>

      <PostActions
        shareTitle={post.heading}
        shareText={`${post.heading} — ${post.location}`}
        onEnquire={() => onEnquire(post.heading)}
      />

      <div className="px-4 pb-5">
        <h2
          className="text-lg font-bold mb-1.5 leading-snug tracking-wide uppercase text-foreground"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.06em" }}
        >
          {post.heading}
        </h2>

        <p
          className={cn(
            "text-sm leading-relaxed text-muted-foreground whitespace-pre-line",
            !expanded && "line-clamp-3"
          )}
        >
          {post.caption}
        </p>

        <button
          type="button"
          onClick={() => setExpanded((prevState) => !prevState)}
          className="text-xs mt-1 cursor-pointer transition-colors text-foreground/55 hover:text-foreground"
        >
          {expanded ? "Show less" : "... more"}
        </button>

        <div className="flex flex-wrap gap-1.5 mt-3">
          {post.tags.map((tag) => (
            <span
              key={tag}
              className="text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-secondary text-secondary-foreground"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </article>
  );
}
