import { PageShell } from "@/components/page-shell";
import { FaqSection } from "./home/_components/faq-section";

export default function Faqs() {
  return (
    <PageShell>
      {({ openAppointment }) => (
        <div className="py-4">
          <FaqSection />
          <div className="mx-4 rounded-xl border border-border bg-secondary/40 p-5 text-center space-y-3">
            <h3 className="text-lg font-serif font-semibold">
              Have a Specific Date or Property in Mind?
            </h3>
            <p className="text-xs text-muted-foreground">
              Get availability and indicative room-block terms directly from our team.
            </p>
            <button
              type="button"
              onClick={() => openAppointment("FAQ Page Consultation")}
              className="rounded-full bg-primary text-primary-foreground px-6 py-2.5 text-xs uppercase tracking-[0.18em] hover:opacity-90 cursor-pointer"
            >
              Ask a Question
            </button>
          </div>
        </div>
      )}
    </PageShell>
  );
}
