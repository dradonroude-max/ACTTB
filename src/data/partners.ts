// =========================================================
// ACTT — PARTNERS DATA
// =========================================================

export interface Partner {
  name: string;
  logo: string;
  href?: string;
  description?: string;
  size?: "normal" | "large" | "xl" | "xxl";
  dark?: boolean;
}

export const partners: Partner[] = [
  {
    name: "Mairie de Camphin-en-Carembault",
    logo: "/images/partners/camphin-en-carembault.jpg",
    href: "https://camphincarembault.fr",
    size: "large",
  },
  {
    name: "Département du Nord",
    logo: "/images/partners/nord.svg",
    href: "https://lenord.fr",
  },
  {
    name: "TC Couvertures",
    logo: "/images/partners/tc-couvertures.png",
    size: "xxl",
  },
  {
    name: "TUI",
    logo: "/images/partners/TUI.svg",
    href: "https://www.tui.fr",
  },
  {
    name: "Crédit Agricole Nord de France",
    logo: "/images/partners/credit-agricole-nord-de-france.png",
    href: "https://www.credit-agricole.fr",
    size: "xl",
  },
];