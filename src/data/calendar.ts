// =========================================================
// ACTT — CALENDAR DATA
// =========================================================
//
// Phase 1 — Saison 2026-2027
// Tous les matchs des 2 équipes, triés par date puis par équipe.
// Le filtrage des 4 prochains matchs est fait côté navigateur.

export interface CalendarMatch {
  date: string;          // ISO 8601 : "2026-09-20"
  team: "Équipe 1" | "Équipe 2";
  division: string;      // "D1 · J1"
  opponent: string;      // "LOSC TT"
  location: "domicile" | "extérieur";
  opponentCity?: string; // Ville si extérieur
}

// ---------------------------------------------------------
// MATCHS — Phase 1
// ---------------------------------------------------------

export const calendar: CalendarMatch[] = [

  // --- Journée 1 — dim. 20/09/2026 ---
  { date: "2026-09-20", team: "Équipe 1", division: "D1 · J1", opponent: "LOSC TT", location: "domicile" },
  { date: "2026-09-20", team: "Équipe 2", division: "D3 · J1", opponent: "GONDECOURT AL", location: "domicile" },

  // --- Journée 2 — dim. 04/10/2026 ---
  { date: "2026-10-04", team: "Équipe 1", division: "D1 · J2", opponent: "TEMPLEMARS-VENDEVILLE", location: "extérieur", opponentCity: "Templemars" },
  { date: "2026-10-04", team: "Équipe 2", division: "D3 · J2", opponent: "LILL METR TT", location: "extérieur", opponentCity: "Lille" },

  // --- Journée 3 — dim. 18/10/2026 ---
  { date: "2026-10-18", team: "Équipe 1", division: "D1 · J3", opponent: "ANNOEULLIN TT", location: "domicile" },
  { date: "2026-10-18", team: "Équipe 2", division: "D3 · J3", opponent: "CAP EN PEV TT", location: "domicile" },

  // --- Journée 4 — dim. 08/11/2026 ---
  { date: "2026-11-08", team: "Équipe 1", division: "D1 · J4", opponent: "ST ANDRE USTT", location: "extérieur", opponentCity: "Saint-André-lez-Lille" },
  { date: "2026-11-08", team: "Équipe 2", division: "D3 · J4", opponent: "BAISIEUX TT", location: "extérieur", opponentCity: "Baisieux" },

  // --- Journée 5 — dim. 22/11/2026 ---
  { date: "2026-11-22", team: "Équipe 1", division: "D1 · J5", opponent: "SANTES CTT", location: "domicile" },
  { date: "2026-11-22", team: "Équipe 2", division: "D3 · J5", opponent: "ATTICHES ASTT", location: "domicile" },

  // --- Journée 6 — dim. 06/12/2026 ---
  { date: "2026-12-06", team: "Équipe 1", division: "D1 · J6", opponent: "MARCQ TT", location: "extérieur", opponentCity: "Marcq-en-Baroeul" },
  { date: "2026-12-06", team: "Équipe 2", division: "D3 · J6", opponent: "MONS TT", location: "extérieur", opponentCity: "Mons-en-Baroeul" },

  // --- Journée 7 — dim. 13/12/2026 ---
  { date: "2026-12-13", team: "Équipe 1", division: "D1 · J7", opponent: "LA MADELEINE US", location: "domicile" },
  { date: "2026-12-13", team: "Équipe 2", division: "D3 · J7", opponent: "VILLEN/ASCQ FOS", location: "domicile" },

];

// ---------------------------------------------------------
// RÉSULTATS
// ---------------------------------------------------------
// Format du score : ACTT - adversaire.

export interface MatchResult {
  date: string;
  dateLabel: string;
  team: "Équipe 1" | "Équipe 2";
  division: string;
  opponent: string;
  score: string;
  outcome: "victoire" | "defaite" | "nul";
}

export const recentResults: MatchResult[] = [

  // --- Journée 2 — dim. 04/10/2026 ---
  {
    date: "2026-10-04",
    dateLabel: "Dim. 04 oct.",
    team: "Équipe 1",
    division: "D1 · J2",
    opponent: "TEMPLEMARS-VENDEVILLE",
    score: "5 - 9",
    outcome: "defaite",
  },
  {
    date: "2026-10-04",
    dateLabel: "Dim. 04 oct.",
    team: "Équipe 2",
    division: "D3 · J2",
    opponent: "LILL METR TT",
    score: "8 - 6",
    outcome: "victoire",
  },

];