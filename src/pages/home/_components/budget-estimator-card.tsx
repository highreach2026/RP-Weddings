import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calculator, Sparkles, X } from "lucide-react";
import { formatINR } from "@/lib/utils";
import { PostActions, PostHeader } from "./post-actions";

interface BudgetEstimatorModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onBookCall: (contextLabel: string) => void;
}

const DESTINATION_MULTIPLIER: Record<string, number> = {
  Udaipur: 1.15,
  Jaipur: 1.05,
  Goa: 0.95,
  Kerala: 0.9,
};

const TIER_BASE_PER_GUEST_NIGHT: Record<string, { label: string; rateLakhs: number }> = {
  heritage: { label: "Boutique Heritage Resort", rateLakhs: 0.34 },
  palace: { label: "Royal Palace Property", rateLakhs: 0.56 },
  iconic: { label: "Iconic Luxury Buyout", rateLakhs: 0.92 },
};

export function BudgetEstimatorModal({
  open,
  onOpenChange,
  onBookCall,
}: BudgetEstimatorModalProps) {
  const [destination, setDestination] = useState("Udaipur");
  const [tier, setTier] = useState<keyof typeof TIER_BASE_PER_GUEST_NIGHT>("palace");
  const [guests, setGuests] = useState(140);
  const [nights, setNights] = useState(2);

  const estimate = useMemo(() => {
    const destFactor = DESTINATION_MULTIPLIER[destination] ?? 1;
    const rate = TIER_BASE_PER_GUEST_NIGHT[tier].rateLakhs;
    const stayAndFood = guests * nights * rate * destFactor * 0.52;
    const decorAndLighting = (18 + guests * 0.14) * (nights / 2) * destFactor;
    const photoEntertainment = 12 + nights * 4.5;
    const logisticsPlanning = 10 + guests * 0.05;
    const total = stayAndFood + decorAndLighting + photoEntertainment + logisticsPlanning;

    return {
      total,
      stayAndFood,
      decorAndLighting,
      photoEntertainment,
      logisticsPlanning,
      usdApprox: Math.round((total * 100000) / 84 / 1000) * 1000,
    };
  }, [destination, tier, guests, nights]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => onOpenChange(false)}
          />
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 16, scale: 0.97 }}
            transition={{ duration: 0.22 }}
            role="dialog"
            aria-modal="true"
            aria-label="Destination Wedding Budget Estimator"
            className="relative z-10 w-full max-w-lg max-h-[90vh] overflow-y-auto rounded-xl border border-border bg-background p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={() => onOpenChange(false)}
              aria-label="Close budget estimator"
              className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            <p className="text-[10px] uppercase tracking-[0.22em] text-primary mb-1">
              Instant Planning Guide
            </p>
            <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">
              Destination Wedding Budget Estimator
            </h3>

            <div className="space-y-4">
              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                  Destination
                </p>
                <div className="grid grid-cols-4 gap-2">
                  {Object.keys(DESTINATION_MULTIPLIER).map((city) => (
                    <button
                      key={city}
                      type="button"
                      onClick={() => setDestination(city)}
                      className={`py-2 rounded-md text-xs font-medium border transition-colors cursor-pointer ${
                        destination === city
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-muted text-foreground"
                      }`}
                    >
                      {city}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <p className="text-[11px] uppercase tracking-wider text-muted-foreground mb-2">
                  Property Tier
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {Object.entries(TIER_BASE_PER_GUEST_NIGHT).map(([key, item]) => (
                    <button
                      key={key}
                      type="button"
                      onClick={() => setTier(key as keyof typeof TIER_BASE_PER_GUEST_NIGHT)}
                      className={`px-3 py-2 rounded-md text-xs font-medium border text-left transition-colors cursor-pointer ${
                        tier === key
                          ? "bg-primary text-primary-foreground border-primary"
                          : "border-border hover:bg-muted text-foreground"
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground uppercase tracking-wider text-[11px]">
                      Guests
                    </span>
                    <span className="font-mono font-medium">{guests}</span>
                  </div>
                  <input
                    type="range"
                    min={50}
                    max={350}
                    step={10}
                    value={guests}
                    onChange={(e) => setGuests(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
                <div>
                  <div className="flex justify-between text-xs mb-1">
                    <span className="text-muted-foreground uppercase tracking-wider text-[11px]">
                      Nights
                    </span>
                    <span className="font-mono font-medium">{nights} Nights</span>
                  </div>
                  <input
                    type="range"
                    min={2}
                    max={4}
                    step={1}
                    value={nights}
                    onChange={(e) => setNights(Number(e.target.value))}
                    className="w-full accent-primary cursor-pointer"
                  />
                </div>
              </div>

              <div className="rounded-lg border border-primary/30 bg-primary/5 p-4 space-y-3">
                <div className="flex items-baseline justify-between">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                      Estimated Investment
                    </p>
                    <p className="text-3xl font-serif font-semibold text-foreground">
                      {formatINR(estimate.total)}
                    </p>
                  </div>
                  <p className="text-xs font-mono text-muted-foreground">
                    ≈ \${estimate.usdApprox.toLocaleString()} USD
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-border/60 text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Rooms & Catering</span>
                    <span className="font-mono">{formatINR(estimate.stayAndFood)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Décor & Florals</span>
                    <span className="font-mono">{formatINR(estimate.decorAndLighting)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Cinema & Artists</span>
                    <span className="font-mono">{formatINR(estimate.photoEntertainment)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Hospitality & Plan</span>
                    <span className="font-mono">{formatINR(estimate.logisticsPlanning)}</span>
                  </div>
                </div>
              </div>

              <button
                type="button"
                onClick={() => {
                  onOpenChange(false);
                  onBookCall(
                    `${destination} (${TIER_BASE_PER_GUEST_NIGHT[tier].label}, ${guests} guests, ${nights} nights)`
                  );
                }}
                className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
              >
                <Sparkles size={14} /> Get Venue-Specific Quote
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}

interface BudgetEstimatorCardProps {
  onOpenEstimator: () => void;
  onEnquire: () => void;
}

export function BudgetEstimatorCard({
  onOpenEstimator,
  onEnquire,
}: BudgetEstimatorCardProps) {
  return (
    <article className="border-b border-border/60 bg-background shadow-sm mb-2">
      <PostHeader subtitle="Transparent Wedding Budget Tool" />

      <div className="relative overflow-hidden mx-4 rounded-lg border border-border/80 bg-gradient-to-br from-[#1d1712] via-[#2b2117] to-[#14100c] text-white p-6">
        <div className="flex items-start justify-between gap-4">
          <div className="space-y-2">
            <p className="text-[10px] uppercase tracking-[0.25em] text-amber-300/90">
              Interactive Cost Breakdown
            </p>
            <h2 className="text-2xl font-serif font-semibold leading-snug">
              What Does Your Dream Palace Wedding Cost?
            </h2>
            <p className="text-xs text-white/75 leading-relaxed max-w-md">
              Estimate room buyouts, décor production, cinema, and guest hospitality across
              Udaipur, Jaipur, Goa, and Kerala in 15 seconds.
            </p>
          </div>
          <div className="w-11 h-11 rounded-full bg-amber-300/15 border border-amber-300/30 flex items-center justify-center shrink-0">
            <Calculator className="w-5 h-5 text-amber-300" />
          </div>
        </div>

        <button
          type="button"
          onClick={onOpenEstimator}
          className="mt-5 w-full rounded-md bg-amber-200 text-[#1d1712] py-2.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors cursor-pointer"
        >
          Launch Budget Estimator
        </button>
      </div>

      <PostActions
        shareTitle="RP Weddings Budget Estimator"
        shareText="Estimate your destination wedding budget in India with RP Weddings."
        onEnquire={onEnquire}
      />

      <div className="px-4 pb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Every family deserves clarity before signing a hotel contract. Explore realistic
          numbers upfront with zero hidden markups.
        </p>
      </div>
    </article>
  );
}
