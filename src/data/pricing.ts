// =========================================================
// ACTT — PRICING DATA
// =========================================================

export interface PricingTier {
  label: string;
  audience: string;
  price: string;
  schedule: string;
  note?: string;
}

export const pricing: PricingTier[] = [
  {
    label: "Enfants",
    audience: "Jusqu'à 18 ans",
    price: "25 €",
    schedule: "Mardi et jeudi · 18h00 → 19h00",
    note: "Hors licence FFTT",
  },
  {
    label: "Adultes",
    audience: "À partir de 18 ans",
    price: "30 €",
    schedule: "Mardi et jeudi · 19h00 → 21h00",
    note: "Hors licence FFTT",
  },
];