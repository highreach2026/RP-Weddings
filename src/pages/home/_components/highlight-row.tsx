import { motion } from "framer-motion";
import { type HighlightItem } from "@/data/weddings";

interface HighlightRowProps {
  highlights: HighlightItem[];
  onOpen: (index: number) => void;
  visitedIds: Set<string>;
}

export function HighlightRow({ highlights, onOpen, visitedIds }: HighlightRowProps) {
  return (
    <div className="w-full overflow-x-auto scrollbar-hide">
      <div className="flex gap-4 px-4 pt-5 pb-4 w-max">
        {highlights.map((item, idx) => {
          const visited = visitedIds.has(item.id);
          return (
            <motion.button
              key={item.id}
              type="button"
              initial={{ opacity: 0, scale: 0.88 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.35, delay: idx * 0.05 }}
              onClick={() => onOpen(idx)}
              className="flex flex-col items-center gap-1.5 cursor-pointer group shrink-0 w-[84px]"
            >
              <div
                className={`p-[2.5px] rounded-full transition-all duration-500 ${
                  visited
                    ? "bg-gradient-to-tr from-neutral-300 to-neutral-400"
                    : "bg-gradient-to-tr from-amber-400 via-rose-400 to-amber-600"
                }`}
              >
                <div className="p-[2px] rounded-full bg-background">
                  <div
                    className={`w-20 h-20 rounded-full flex items-center justify-center overflow-hidden transition-all duration-300 group-hover:scale-105 ${
                      visited ? "opacity-65 grayscale" : ""
                    }`}
                    style={{ backgroundColor: item.bgColor }}
                  >
                    {item.iconUrl ? (
                      <img
                        src={item.iconUrl}
                        alt={item.label}
                        width={80}
                        height={80}
                        className={
                          item.iconUrl.endsWith(".svg")
                            ? "w-full h-full object-contain p-2 rounded-full"
                            : "w-full h-full object-cover rounded-full"
                        }
                      />
                    ) : (
                      <span
                        className="text-center leading-tight px-1 whitespace-pre-line font-serif font-semibold"
                        style={{
                          fontSize: "0.72rem",
                          letterSpacing: "0.08em",
                          color: item.iconColor ?? "oklch(0.45 0.09 70)",
                        }}
                      >
                        {item.iconText}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <span
                className={`text-[11px] w-[84px] truncate text-center leading-tight transition-colors duration-300 ${
                  visited ? "text-foreground/40" : "text-foreground/75"
                }`}
              >
                {item.label}
              </span>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
