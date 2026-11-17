import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "@/components/theme-provider";
import { BRAND } from "@/data/weddings";
import { cn } from "@/lib/utils";
import { MenuDrawer } from "./menu-drawer";

interface TopBarProps {
  onOpenBudget?: () => void;
}

export function TopBar({ onOpenBudget }: TopBarProps) {
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="sticky top-0 z-40 bg-background/95 backdrop-blur-sm border-b border-border/40 transition-all duration-300">
      <div
        className={cn(
          "max-w-[680px] mx-auto px-4 flex items-center justify-between transition-all duration-300",
          scrolled ? "py-2" : "py-3.5"
        )}
      >
        <MenuDrawer onOpenBudget={onOpenBudget} />

        <Link
          to="/"
          className="flex items-center justify-center transition-all duration-300 py-0.5"
          aria-label={BRAND.name}
        >
          <img
            src={BRAND.logo}
            alt={BRAND.name}
            className={cn(
              "object-contain transition-all duration-300",
              scrolled
                ? "h-11 sm:h-12 max-w-[180px] sm:max-w-[210px]"
                : "h-14 sm:h-16 max-w-[230px] sm:max-w-[270px]"
            )}
          />
          <span className="sr-only">{BRAND.name}</span>
        </Link>

        <button
          type="button"
          onClick={toggleTheme}
          aria-label="Toggle color theme"
          className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-foreground/5 transition-colors cursor-pointer text-foreground/70"
        >
          {theme === "light" ? <Moon size={18} /> : <Sun size={18} />}
        </button>
      </div>
    </header>
  );
}
