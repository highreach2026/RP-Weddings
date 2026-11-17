import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatINR(lakhs: number): string {
  if (lakhs >= 100) {
    const cr = lakhs / 100;
    return `₹${cr.toFixed(cr % 1 === 0 ? 0 : 2)} Cr`;
  }
  return `₹${Math.round(lakhs)} Lakh`;
}
