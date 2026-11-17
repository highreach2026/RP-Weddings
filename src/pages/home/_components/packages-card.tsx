import { assetUrl, BRAND } from "@/data/weddings";
import { PostActions, PostHeader } from "./post-actions";

interface PackagesCardProps {
  onEnquire: (label: string) => void;
}

export function PackagesCard({ onEnquire }: PackagesCardProps) {
  return (
    <article className="border-b border-border/60 bg-background shadow-sm mb-2">
      <PostHeader subtitle="Curated Wedding Packages" />

      <div className="relative bg-black overflow-hidden" style={{ aspectRatio: "4 / 5" }}>
        <img
          src={assetUrl("/images/reception-gala.jpg")}
          alt="Destination Wedding Palace Venue"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(0,0,0,0.18) 0%, rgba(0,0,0,0.12) 35%, rgba(0,0,0,0.78) 74%, rgba(0,0,0,0.94) 100%)",
          }}
        />
        <div className="absolute inset-0 flex flex-col items-center justify-end text-center gap-3 px-6 pb-8 text-white">
          <p
            className="text-[10px] tracking-[0.25em] uppercase"
            style={{ color: "oklch(0.84 0.09 70)" }}
          >
            All-Inclusive Celebrations
          </p>
          <h2 className="text-2xl sm:text-3xl font-serif font-semibold leading-snug max-w-sm">
            50+ Curated Heritage Palaces &amp; Coastal Resorts
          </h2>
          <p className="text-xs text-white/80 max-w-sm leading-relaxed">
            Turnkey venue buyouts, seasonal florals, culinary hospitality, and full weekend
            production tailored to your guest count.
          </p>
          <button
            type="button"
            onClick={() => onEnquire("All-Inclusive Destination Wedding Packages")}
            className="mt-1 rounded-full bg-amber-200 text-neutral-950 px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.18em] hover:bg-amber-100 transition-colors cursor-pointer"
          >
            Request Package Dossier
          </button>
        </div>
      </div>

      <PostActions
        shareTitle={`${BRAND.name} All-Inclusive Packages`}
        shareText="Explore curated destination wedding packages across Rajasthan, Goa & Kerala with RP Weddings."
        onEnquire={() => onEnquire("Destination Wedding Packages")}
      />

      <div className="px-4 pb-5">
        <p className="text-sm text-muted-foreground leading-relaxed">
          Receive room-block comparisons and seasonal pricing across Udaipur, Jaipur, Goa, and
          Kerala within 24 hours.
        </p>
      </div>
    </article>
  );
}
