// =========================================================
// ACTT — NAVIGATION CONFIGURATION
// =========================================================

export interface NavigationItem {
  label: string;
  href: string;
  external?: boolean;
}

export const navigation = {

  // -------------------------------------------------------
  // MAIN NAVIGATION
  // -------------------------------------------------------

  main: [
    {
      label: "Accueil",
      href: "/",
    },

    {
      label: "Le Club",
      href: "#club",
    },

    {
      label: "Jouer",
      href: "#jouer",
    },

    {
      label: "Équipes",
      href: "#equipes",
    },

    {
      label: "Tarifs",
      href: "#tarifs",
    },

    {
      label: "Contact",
      href: "#essayer",
    },
  ] satisfies NavigationItem[],

  // -------------------------------------------------------
  // PRIMARY CTA
  // -------------------------------------------------------

  cta: {
    label: "S’inscrire",
    href: "#inscription",
  },

  // -------------------------------------------------------
  // FOOTER
  // -------------------------------------------------------

  footer: [
    {
      label: "Mentions légales",
      href: "/mentions-legales",
    },

    {
      label: "Politique de confidentialité",
      href: "/politique-confidentialite",
    },
  ] satisfies NavigationItem[],

} as const;