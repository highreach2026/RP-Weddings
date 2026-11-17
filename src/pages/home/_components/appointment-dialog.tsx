import { useState, type FormEvent } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Calendar, CheckCircle2, Sparkles, X } from "lucide-react";
import { BRAND } from "@/data/weddings";

interface AppointmentDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  contextLabel?: string;
}

export function AppointmentDialog({
  open,
  onOpenChange,
  contextLabel,
}: AppointmentDialogProps) {
  const [submitted, setSubmitted] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [destination, setDestination] = useState("Udaipur");
  const [guests, setGuests] = useState("120–180");
  const [notes, setNotes] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClose = () => {
    onOpenChange(false);
    setTimeout(() => {
      setSubmitted(false);
      setName("");
      setEmail("");
      setNotes("");
    }, 250);
  };

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/55 backdrop-blur-sm"
            onClick={handleClose}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 12 }}
            transition={{ duration: 0.2 }}
            role="dialog"
            aria-modal="true"
            aria-labelledby="appointment-dialog-title"
            className="relative z-10 w-full max-w-md rounded-xl border border-border bg-background p-6 shadow-2xl"
          >
            <button
              type="button"
              onClick={handleClose}
              aria-label="Close dialog"
              className="absolute right-4 top-4 w-8 h-8 rounded-full flex items-center justify-center text-muted-foreground hover:bg-muted transition-colors cursor-pointer"
            >
              <X size={18} />
            </button>

            {submitted ? (
              <div className="py-8 text-center space-y-4">
                <CheckCircle2 className="w-12 h-12 text-primary mx-auto" />
                <h3
                  id="appointment-dialog-title"
                  className="text-2xl font-serif font-semibold text-foreground"
                >
                  Consultation Request Received
                </h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Thank you, <span className="font-medium text-foreground">{name}</span>. Our
                  senior planners at {BRAND.name} will reach out to{" "}
                  <span className="font-medium text-foreground">{email}</span> within 24 hours
                  with curated venue availability for {destination}.
                </p>
                <button
                  type="button"
                  onClick={handleClose}
                  className="mt-2 inline-flex items-center justify-center rounded-md bg-primary px-6 py-2.5 text-xs uppercase tracking-[0.18em] text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
                >
                  Back to Feed
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex items-start justify-between gap-3 pr-6">
                  <div>
                    <p className="text-[10px] uppercase tracking-[0.22em] text-primary flex items-center gap-1.5 mb-1">
                      <Sparkles size={12} /> Private Consultation
                    </p>
                    <h3
                      id="appointment-dialog-title"
                      className="text-2xl font-serif font-semibold text-foreground"
                    >
                      Plan With {BRAND.name}
                    </h3>
                    {contextLabel && (
                      <p className="text-xs text-muted-foreground mt-1">
                        Regarding: <span className="text-foreground">{contextLabel}</span>
                      </p>
                    )}
                  </div>
                  <img
                    src={BRAND.logo}
                    alt={BRAND.name}
                    className="h-10 w-auto max-w-[95px] object-contain shrink-0"
                  />
                </div>

                <div className="grid grid-cols-1 gap-3">
                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="e.g. Aarav & Kiara"
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                    />
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Email Address *
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

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                        Destination
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
                        <option value="Undecided">Help Us Choose</option>
                      </select>
                    </div>
                    <div>
                      <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                        Guest Count
                      </label>
                      <select
                        value={guests}
                        onChange={(e) => setGuests(e.target.value)}
                        className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary"
                      >
                        <option value="50–100">50–100 Guests</option>
                        <option value="120–180">120–180 Guests</option>
                        <option value="200–300">200–300 Guests</option>
                        <option value="300+">300+ Guests</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-[11px] uppercase tracking-wider text-muted-foreground mb-1">
                      Preferred Dates or Vision
                    </label>
                    <textarea
                      rows={3}
                      value={notes}
                      onChange={(e) => setNotes(e.target.value)}
                      placeholder="Month/year, palace style, or multi-day ceremonies..."
                      className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 rounded-md bg-primary px-4 py-3 text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <Calendar size={14} />
                  Request Private Consultation
                </button>
              </form>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
