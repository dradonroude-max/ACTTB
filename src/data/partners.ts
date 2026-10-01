// =========================================================
// ACTT — PARTNERS DATA
// =========================================================

export interface Partner {
  name: string;
  logo: string;
  href?: string;
  description?: string;
  size?: "normal" | "large";
}

export const partners: Partner[] = [
  {
    name: "TUI",
    logo: "/images/partners/TUI.svg",
  },
  {
    name: "Département du Nord",
    logo: "/images/partners/nord.svg",
    href: "https://lenord.fr",
  },
  {
    name: "Mairie de Camphin-en-Carembault",
    logo: "/images/partners/camphin-en-carembault.jpg",
    href: "https://www.camphin-en-carembault.fr",
    size: "large",
  },
];