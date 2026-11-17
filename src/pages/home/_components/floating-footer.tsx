import { Link, useLocation } from "react-router-dom";
import { Calculator, Calendar, Home, Images, MessageCircle } from "lucide-react";
import { cn } from "@/lib/utils";

interface FloatingFooterProps {
  onOpenBudget: () => void;
  onOpenAppointment: () => void;
}

export function FloatingFooter({
  onOpenBudget,
  onOpenAppointment,
}: FloatingFooterProps) {
  const { pathname } = useLocation();

  return (
    <nav
      aria-label="Primary bottom navigation"
      className="fixed bottom-0 left-0 right-0 z-40 bg-background/95 backdrop-blur-sm border-t border-border"
    >
      <div className="max-w-[680px] mx-auto flex items-center justify-around h-16 px-2">
        <Link
          to="/"
          className={cn(
            "flex flex-col items-center gap-1 px-3 py-1 transition-colors",
            pathname === "/"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Home className="w-5 h-5" />
          <span className="text-[9px] tracking-widest uppercase">Home</span>
        </Link>

        <button
          type="button"
          onClick={onOpenBudget}
          className="flex flex-col items-center gap-1 px-3 py-1 cursor-pointer transition-colors text-muted-foreground hover:text-foreground"
        >
          <Calculator className="w-5 h-5" />
          <span className="text-[9px] tracking-widest uppercase">Budget</span>
        </button>

        <button
          type="button"
          onClick={onOpenAppointment}
          className="flex flex-col items-center gap-1 px-3 py-1 cursor-pointer transition-colors text-primary"
        >
          <Calendar className="w-5 h-5" />
          <span className="text-[9px] tracking-widest uppercase font-medium">Book Call</span>
        </button>

        <Link
          to="/gallery"
          className={cn(
            "flex flex-col items-center gap-1 px-3 py-1 transition-colors",
            pathname === "/gallery"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <Images className="w-5 h-5" />
          <span className="text-[9px] tracking-widest uppercase">Gallery</span>
        </Link>

        <Link
          to="/contact"
          className={cn(
            "flex flex-col items-center gap-1 px-3 py-1 transition-colors",
            pathname === "/contact"
              ? "text-primary"
              : "text-muted-foreground hover:text-foreground"
          )}
        >
          <MessageCircle className="w-5 h-5" />
          <span className="text-[9px] tracking-widest uppercase">Contact</span>
        </Link>
      </div>
    </nav>
  );
}
