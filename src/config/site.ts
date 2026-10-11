// =========================================================
// ACTT — SITE CONFIGURATION
// =========================================================

export const site = {
  // -------------------------------------------------------
  // IDENTITY
  // -------------------------------------------------------

  name: "ACTT",
  description: "Club de tennis de table de Camphin-en-Carembault.",

  url: "https://camphin-en-carembault-actt.fr",

  // -------------------------------------------------------
  // CONTACT
  // -------------------------------------------------------

  contact: {
    email: "eric.rambure@orange.fr",
    phone: "06 70 88 65 68",
    address: "7 Rue du Joncquoy",
    city: "Camphin-en-Carembault",
    postalCode: "59133",
    country: "France",
  },

  // -------------------------------------------------------
  // SOCIAL LINKS
  // -------------------------------------------------------

  social: {
    instagram: "",
    facebook: "https://www.facebook.com/actennisdetable",
    linkedin: "",
    x: "",
    youtube: "",
  },

  // -------------------------------------------------------
  // SEO
  // -------------------------------------------------------

  seo: {
    title: "Tennis de table à Camphin-en-Carembault — Club ACTT",
    description:
      "Club de tennis de table à Camphin-en-Carembault (Nord). Jeunes, adultes, loisir ou compétition. Première séance gratuite, mardi et jeudi, salle omnisports.",
    image: "/og-image.jpg",
    twitterCard: "summary_large_image" as const,
  },

  // -------------------------------------------------------
  // BRAND ASSETS
  // -------------------------------------------------------

  assets: {
    logo: "/images/logo/logoactt.png",
    favicon: "/favicon.svg",
  },

  // -------------------------------------------------------
  // LOCATION
  // -------------------------------------------------------

  coordinates: {
    latitude: null as number | null,
    longitude: null as number | null,
  },
} as const;