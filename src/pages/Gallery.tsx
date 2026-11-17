import { useState } from "react";
import { X } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { FEED_POSTS } from "@/data/weddings";

const CITIES = ["All", "Udaipur", "Jaipur", "Goa"] as const;

export default function Gallery() {
  const [city, setCity] = useState<(typeof CITIES)[number]>("All");
  const [lightbox, setLightbox] = useState<{ url: string; caption: string } | null>(null);

  const items = FEED_POSTS.flatMap((post) =>
    post.images.map((img) => ({
      ...img,
      city: post.location.split(",")[0].trim(),
      title: post.heading,
    }))
  ).filter((item) => city === "All" || item.city.includes(city));

  return (
    <PageShell>
      {({ openAppointment }) => (
        <div className="px-4 py-6 space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
              Curated Portfolio
            </p>
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Real Destination Weddings
            </h2>
            <p className="text-sm text-muted-foreground">
              Explore signature mandaps, palace courtyards, and coastal vows styled across India.
            </p>
          </div>

          <div className="flex flex-wrap gap-2">
            {CITIES.map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => setCity(option)}
                className={`px-4 py-1.5 rounded-full text-xs uppercase tracking-wider border transition-colors cursor-pointer ${
                  city === option
                    ? "bg-primary text-primary-foreground border-primary"
                    : "border-border text-muted-foreground hover:text-foreground"
                }`}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-3">
            {items.map((item, idx) => (
              <button
                key={`${item.url}-${idx}`}
                type="button"
                onClick={() =>
                  setLightbox({ url: item.url, caption: item.caption ?? item.title })
                }
                className="group relative aspect-[4/5] rounded-lg overflow-hidden bg-muted text-left cursor-pointer"
              >
                <img
                  src={item.url}
                  alt={item.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-transparent" />
                <div className="absolute bottom-2.5 left-2.5 right-2.5 text-white">
                  <p className="text-[10px] uppercase tracking-wider text-amber-200">
                    {item.city}
                  </p>
                  <p className="text-xs font-serif font-medium leading-tight">
                    {item.caption ?? item.title}
                  </p>
                </div>
              </button>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-secondary/40 p-5 text-center space-y-3">
            <h3 className="text-lg font-serif font-semibold">
              Want a Custom Lookbook For Your Venue?
            </h3>
            <p className="text-xs text-muted-foreground">
              Share your guest count and season to receive curated palace &amp; beach concepts.
            </p>
            <button
              type="button"
              onClick={() => openAppointment("Custom Portfolio Lookbook")}
              className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em] hover:opacity-90 cursor-pointer"
            >
              Request Lookbook
            </button>
          </div>

          {lightbox && (
            <div
              className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
              onClick={() => setLightbox(null)}
            >
              <button
                type="button"
                onClick={() => setLightbox(null)}
                aria-label="Close photo"
                className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/15 text-white flex items-center justify-center cursor-pointer"
              >
                <X size={18} />
              </button>
              <div
                className="max-w-md w-full space-y-3"
                onClick={(e) => e.stopPropagation()}
              >
                <img
                  src={lightbox.url}
                  alt={lightbox.caption}
                  className="w-full max-h-[78vh] object-contain rounded-lg"
                />
                <p className="text-center text-sm font-serif text-white/90">
                  {lightbox.caption}
                </p>
              </div>
            </div>
          )}
        </div>
      )}
    </PageShell>
  );
}
