import { useState } from "react";
import { createPortal } from "react-dom";
import { Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import {
  BookOpen,
  Calculator,
  HelpCircle,
  Home,
  Images,
  Mail,
  Menu,
  MessageSquareQuote,
  Moon,
  Phone,
  Sun,
  X,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { BRAND } from "@/data/weddings";
import { cn } from "@/lib/utils";

interface MenuDrawerProps {
  onOpenBudget?: () => void;
}

const NAV_LINKS = [
  { to: "/", label: "Home Feed", icon: Home },
  { to: "/gallery", label: "Wedding Portfolio", icon: Images },
  { to: "/testimonials", label: "Couple Stories", icon: MessageSquareQuote },
  { to: "/blog", label: "Planning Journal", icon: BookOpen },
  { to: "/faqs", label: "FAQs", icon: HelpCircle },
  { to: "/contact", label: "Book Consultation", icon: Mail },
];

export function MenuDrawer({ onOpenBudget }: MenuDrawerProps) {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open menu"
        className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors cursor-pointer"
      >
        <Menu size={20} className="text-foreground/75" />
      </button>

      {createPortal(
        <AnimatePresence>
          {open && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.2 }}
                className="fixed inset-0 bg-black/45 z-[59] backdrop-blur-sm"
                onClick={() => setOpen(false)}
              />
              <motion.aside
                initial={{ x: "-100%" }}
                animate={{ x: 0 }}
                exit={{ x: "-100%" }}
                transition={{ type: "spring", stiffness: 320, damping: 32 }}
                className="fixed top-0 left-0 h-full w-72 z-[60] flex flex-col border-r border-border bg-background text-foreground shadow-2xl"
              >
                <div className="flex items-center justify-between px-5 py-4 border-b border-border/60">
                  <div className="flex items-center gap-3">
                    <img
                      src={BRAND.logo}
                      alt={BRAND.name}
                      className="h-12 w-auto max-w-[115px] object-contain"
                    />
                    <div>
                      <p
                        className="text-sm font-semibold leading-tight text-foreground"
                        style={{ fontFamily: "var(--font-serif)", letterSpacing: "0.05em" }}
                      >
                        {BRAND.name}
                      </p>
                      <p className="text-[9px] tracking-[0.18em] uppercase text-muted-foreground mt-0.5">
                        {BRAND.since}
                      </p>
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={() => setOpen(false)}
                    aria-label="Close menu"
                    className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors cursor-pointer"
                  >
                    <X size={18} className="text-foreground/65" />
                  </button>
                </div>

                <nav className="flex-1 px-3 py-4 space-y-1 overflow-y-auto">
                  {NAV_LINKS.map(({ to, label, icon: Icon }) => {
                    const active = pathname === to;
                    return (
                      <Link
                        key={to}
                        to={to}
                        onClick={() => setOpen(false)}
                        className={cn(
                          "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm transition-colors",
                          active
                            ? "bg-primary/12 text-primary font-medium"
                            : "text-foreground/80 hover:bg-muted"
                        )}
                      >
                        <Icon size={17} />
                        <span>{label}</span>
                      </Link>
                    );
                  })}

                  {onOpenBudget && (
                    <button
                      type="button"
                      onClick={() => {
                        setOpen(false);
                        onOpenBudget();
                      }}
                      className="w-full flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-foreground/80 hover:bg-muted transition-colors cursor-pointer"
                    >
                      <Calculator size={17} />
                      <span>Budget Estimator</span>
                    </button>
                  )}
                </nav>

                <div className="p-4 border-t border-border/60 space-y-3">
                  <button
                    type="button"
                    onClick={toggleTheme}
                    className="w-full flex items-center justify-between px-3 py-2 rounded-lg border border-border text-xs font-medium hover:bg-muted transition-colors cursor-pointer"
                  >
                    <span>Appearance</span>
                    <span className="flex items-center gap-1.5 text-primary">
                      {theme === "light" ? (
                        <>
                          <Sun size={14} /> Ivory Light
                        </>
                      ) : (
                        <>
                          <Moon size={14} /> Obsidian Dark
                        </>
                      )}
                    </span>
                  </button>

                  <a
                    href={BRAND.phoneHref}
                    className="flex items-center gap-2 text-xs text-muted-foreground hover:text-foreground px-2"
                  >
                    <Phone size={13} />
                    <span>{BRAND.phoneDisplay}</span>
                  </a>
                </div>
              </motion.aside>
            </>
          )}
        </AnimatePresence>,
        document.body
      )}
    </>
  );
}
