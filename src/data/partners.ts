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
    href: "https://www.tui.fr",
  },
  {
    name: "Département du Nord",
    logo: "/images/partners/nord.svg",
    href: "https://lenord.fr",
  },
  {
    name: "Mairie de Camphin-en-Carembault",
    logo: "/images/partners/camphin-en-carembault.jpg",
    href: "https://camphincarembault.fr",
    size: "large",
  },
];