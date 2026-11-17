import { Quote } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { BRAND, TESTIMONIAL_SLIDES } from "@/data/weddings";

export default function Testimonials() {
  return (
    <PageShell>
      {({ openAppointment }) => (
        <div className="px-4 py-6 space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
              Verified Family Stories
            </p>
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Words From Our Couples
            </h2>
            <p className="text-sm text-muted-foreground">
              Celebrations crafted for families travelling from the UK, USA, Singapore, and
              across India.
            </p>
          </div>

          <div className="space-y-4">
            {TESTIMONIAL_SLIDES.map((item) => (
              <article
                key={item.id}
                className="rounded-xl border border-border/70 bg-background overflow-hidden shadow-sm"
              >
                <div className="aspect-[16/10] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.couple}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-5 space-y-3">
                  <Quote className="w-5 h-5 text-primary" />
                  <p className="text-base font-serif italic text-foreground leading-relaxed">
                    “{item.quote}”
                  </p>
                  <div className="pt-2 border-t border-border/50 flex items-center justify-between text-xs">
                    <span className="font-semibold text-foreground">{item.couple}</span>
                    <span className="text-muted-foreground">
                      {item.venue} · {item.origin}
                    </span>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="rounded-xl border border-border bg-secondary/40 p-5 text-center space-y-3">
            <h3 className="text-lg font-serif font-semibold">
              Ready to Write Your Celebration Story?
            </h3>
            <button
              type="button"
              onClick={() => openAppointment(`${BRAND.name} Consultation`)}
              className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em] hover:opacity-90 cursor-pointer"
            >
              Schedule a Discovery Call
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
}
