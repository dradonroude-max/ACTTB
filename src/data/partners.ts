// =========================================================
// ACTT — PARTNERS DATA
// =========================================================

export interface Partner {
  name: string;
  logo: string;
  href?: string;
  description?: string;
}

export const partners: Partner[] = [
  {
    name: "TUI",
    logo: "/images/partners/TUI.svg",
    // href: "https://www.tui.fr",
    // description: "Partenaire du club",
  },
];