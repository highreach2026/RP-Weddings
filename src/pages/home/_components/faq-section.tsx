import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { FAQ_ITEMS } from "@/data/weddings";
import { cn } from "@/lib/utils";

export function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  return (
    <section className="mx-4 my-8" aria-label="Frequently Asked Questions">
      <div className="mb-5 px-1">
        <p
          className="text-[10px] uppercase tracking-[0.22em] text-muted-foreground/70 mb-1"
          style={{ fontFamily: "var(--font-serif)" }}
        >
          Quick Answers
        </p>
        <h2
          className="text-xl text-foreground leading-snug"
          style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.04em" }}
        >
          Frequently Asked Questions
        </h2>
      </div>

      <div className="rounded-xl overflow-hidden border border-border/60 divide-y divide-border/60">
        {FAQ_ITEMS.map((item, idx) => {
          const isOpen = openIdx === idx;
          return (
            <div key={item.q} className="bg-background">
              <button
                type="button"
                onClick={() => setOpenIdx(isOpen ? null : idx)}
                aria-expanded={isOpen}
                className={cn(
                  "w-full text-left px-4 py-4 flex items-start justify-between gap-3 cursor-pointer transition-colors",
                  isOpen ? "bg-muted/40" : "hover:bg-muted/20"
                )}
              >
                <span
                  className="text-base font-medium text-foreground leading-snug flex-1"
                  style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.02em" }}
                >
                  {item.q}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 text-muted-foreground shrink-0 mt-1 transition-transform duration-300",
                    isOpen && "rotate-180"
                  )}
                />
              </button>

              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.25, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <p className="px-4 pb-4 pt-1 text-sm text-muted-foreground leading-relaxed">
                      {item.a}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
