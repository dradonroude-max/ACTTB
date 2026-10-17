// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// URL de production
const SITE_URL = 'https://camphin-en-carembault-actt.fr';

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,

  // ---------------------------------------------------------
  // COMPORTEMENT DES URLS
  // ---------------------------------------------------------
  // Force l'utilisation de la barre oblique finale (ex: /mentions-legales/)
  // pour s'aligner sur le comportement par défaut de Cloudflare Pages.
  // Cela évite les erreurs de redirection dans Google Search Console.
  trailingSlash: 'always',

  // ---------------------------------------------------------
  // INTÉGRATIONS
  // ---------------------------------------------------------

  integrations: [
    sitemap({
      // Politique de confidentialité exclue de l'indexation
      filter: (page) => !page.includes('/politique-confidentialite'),

      // Fréquence de mise à jour estimée
      changefreq: 'weekly',

      // Priorité maximale (toutes les pages sont importantes ici)
      priority: 1.0,

      // Date de dernière modification
      lastmod: new Date(),

      // Génère les liens alternates multilingues (inutile ici, site FR)
      i18n: undefined,
    }),
  ],

  // ---------------------------------------------------------
  // PERFORMANCE
  // ---------------------------------------------------------

  // Minifie le HTML au build
  compressHTML: true,

  // Inline les petites feuilles de style critiques → meilleur FCP
  build: {
    inlineStylesheets: 'auto',
  },

  // Préchargement des pages au survol / scroll → navigation instantanée
  prefetch: {
    prefetchAll: true,
    defaultStrategy: 'viewport',
  },
});