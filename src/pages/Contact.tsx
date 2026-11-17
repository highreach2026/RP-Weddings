import { useState, type FormEvent } from "react";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageShell } from "@/components/page-shell";
import { BRAND } from "@/data/weddings";

export default function Contact() {
  const [sent, setSent] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [destination, setDestination] = useState("Udaipur");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <PageShell>
      {() => (
        <div className="px-4 py-6 space-y-6">
          <div className="space-y-1">
            <p className="text-[10px] uppercase tracking-[0.22em] text-primary">
              Start Your Journey
            </p>
            <h2 className="text-2xl font-serif font-semibold text-foreground">
              Contact {BRAND.name}
            </h2>
            <p className="text-sm text-muted-foreground">
              Share your vision, preferred months, and approximate guest count. Our planning
              directors respond within 24 hours.
            </p>
          </div>

          <div className="rounded-xl border border-border/70 bg-background p-5 shadow-sm">
            {sent ? (
              <div className="py-8 text-center space-y-3">
                <CheckCircle2 className="w-11 h-11 text-primary mx-auto" />
                <h3 className="text-xl font-serif font-semibold">
                  Thank You, {name}
                </h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto leading-relaxed">
                  Your enquiry for <span className="text-foreground">{destination}</span> has
                  been noted. Our studio will write back to{" "}
                  <span className="text-foreground">{email}</span> shortly.
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setSent(false);
                    setName("");
                    setEmail("");
                    setPhone("");
                    setMessage("");
                  }}
                  className="text-xs uppercase tracking-wider text-primary underline cursor-pointer"
                >
                  Send Another Enquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Names *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Couple or Family Name"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Email *
                    </label>
                    <input
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="you@example.com"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Phone / WhatsApp
                    </label>
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+91 / +44 / +1 ..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Preferred Destination
                    </label>
                    <select
                      value={destination}
                      onChange={(e) => setDestination(e.target.value)}
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    >
                      <option value="Udaipur">Udaipur</option>
                      <option value="Jaipur">Jaipur</option>
                      <option value="Goa">Goa</option>
                      <option value="Kerala">Kerala</option>
                      <option value="Multiple Destinations">Open to Suggestions</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                    Celebration Details *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Estimated guest count, ideal season/month, and any dream venues..."
                    className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-5 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Send size={14} /> Send Enquiry
                </button>
              </form>
            )}
          </div>

          <div className="rounded-xl border border-border/60 bg-secondary/35 p-5 space-y-3 text-sm">
            <h3 className="text-base font-serif font-semibold text-foreground">
              {BRAND.name} Studio
            </h3>
            <div className="space-y-2 text-xs text-muted-foreground">
              <p className="flex items-start gap-2">
                <MapPin size={15} className="text-primary shrink-0 mt-0.5" />
                <span>{BRAND.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-primary shrink-0" />
                <a href={BRAND.phoneHref} className="hover:text-foreground">
                  {BRAND.phoneDisplay}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-primary shrink-0" />
                <a href={`mailto:${BRAND.email}`} className="hover:text-foreground">
                  {BRAND.email}
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </PageShell>
  );
}
