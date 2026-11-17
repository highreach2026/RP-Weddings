import { useState } from "react";
import { Heart, MessageCircle, Send } from "lucide-react";
import { BRAND } from "@/data/weddings";
import { cn } from "@/lib/utils";

interface PostHeaderProps {
  subtitle: string;
  handle?: string;
}

export function PostHeader({ subtitle, handle = BRAND.handle }: PostHeaderProps) {
  return (
    <div className="px-4 py-3 flex items-center gap-3">
      <div className="w-9 h-9 rounded-full bg-secondary/80 border border-border flex items-center justify-center shrink-0 overflow-hidden p-1.5">
        <img
          src={BRAND.logo}
          alt={BRAND.name}
          className="w-full h-full object-contain"
        />
      </div>
      <div>
        <p className="text-sm font-semibold text-muted-foreground leading-tight tracking-wide">
          {handle}
        </p>
        <p className="text-xs italic leading-tight text-primary">{subtitle}</p>
      </div>
    </div>
  );
}

interface PostActionsProps {
  shareTitle: string;
  shareText: string;
  onEnquire: () => void;
}

export function PostActions({ shareTitle, shareText, onEnquire }: PostActionsProps) {
  const [liked, setLiked] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({ title: shareTitle, text: shareText, url });
        return;
      } catch {
        // Fallback to clipboard when share sheet is dismissed
      }
    }
    try {
      await navigator.clipboard.writeText(`${shareText}\n\n${url}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Ignore clipboard errors in restricted environments
    }
  };

  return (
    <div className="px-4 pt-3 pb-1 flex items-center gap-4">
      <button
        type="button"
        onClick={() => setLiked((prev) => !prev)}
        className="cursor-pointer transition-transform active:scale-125"
        aria-label={liked ? "Unlike post" : "Like post"}
      >
        <Heart
          size={23}
          className={cn(
            "transition-colors",
            liked ? "fill-red-500 text-red-500" : "text-foreground"
          )}
        />
      </button>

      <button
        type="button"
        onClick={onEnquire}
        className="cursor-pointer hover:text-primary transition-colors"
        aria-label="Enquire about this wedding"
      >
        <MessageCircle size={23} className="text-foreground" />
      </button>

      <button
        type="button"
        onClick={handleShare}
        className="cursor-pointer hover:text-primary transition-colors relative"
        aria-label="Share post"
      >
        <Send size={21} className="text-foreground" />
        {copied && (
          <span className="absolute -top-7 left-1/2 -translate-x-1/2 bg-foreground text-background text-[10px] px-2 py-0.5 rounded whitespace-nowrap shadow">
            Link copied!
          </span>
        )}
      </button>
    </div>
  );
}
