import { useState, type ReactNode } from "react";
import { AppointmentDialog } from "@/pages/home/_components/appointment-dialog";
import { BudgetEstimatorModal } from "@/pages/home/_components/budget-estimator-card";
import { FloatingFooter } from "@/pages/home/_components/floating-footer";
import { TopBar } from "@/pages/home/_components/top-bar";

interface PageShellProps {
  children: (actions: {
    openBudget: () => void;
    openAppointment: (contextLabel?: string) => void;
  }) => ReactNode;
}

export function PageShell({ children }: PageShellProps) {
  const [budgetOpen, setBudgetOpen] = useState(false);
  const [appointmentOpen, setAppointmentOpen] = useState(false);
  const [appointmentContext, setAppointmentContext] = useState<string | undefined>();

  const openAppointment = (contextLabel?: string) => {
    setAppointmentContext(contextLabel);
    setAppointmentOpen(true);
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <TopBar onOpenBudget={() => setBudgetOpen(true)} />

      <main className="max-w-[680px] mx-auto">
        {children({
          openBudget: () => setBudgetOpen(true),
          openAppointment,
        })}
      </main>

      <FloatingFooter
        onOpenBudget={() => setBudgetOpen(true)}
        onOpenAppointment={() => openAppointment()}
      />

      <BudgetEstimatorModal
        open={budgetOpen}
        onOpenChange={setBudgetOpen}
        onBookCall={(label) => openAppointment(label)}
      />

      <AppointmentDialog
        open={appointmentOpen}
        onOpenChange={setAppointmentOpen}
        contextLabel={appointmentContext}
      />
    </div>
  );
}
