// =========================================================
// ACTT — CALENDAR DATA
// =========================================================
//
// Phase 1 — Saison 2026-2027

export interface CalendarMatch {
  date: string;
  team: "Équipe 1" | "Équipe 2";
  division: string;
  opponent: string;
  location: "domicile" | "extérieur";
  opponentCity?: string;
}

export const calendar: CalendarMatch[] = [

  { date: "2026-09-20", team: "Équipe 1", division: "D1 · J1", opponent: "LOSC TT", location: "domicile" },
  { date: "2026-09-20", team: "Équipe 2", division: "D3 · J1", opponent: "GONDECOURT AL", location: "domicile" },

  { date: "2026-10-04", team: "Équipe 1", division: "D1 · J2", opponent: "TEMPLEMARS-VENDEVILLE", location: "extérieur", opponentCity: "Templemars" },
  { date: "2026-10-04", team: "Équipe 2", division: "D3 · J2", opponent: "LILL METR TT", location: "extérieur", opponentCity: "Lille" },

  { date: "2026-10-18", team: "Équipe 1", division: "D1 · J3", opponent: "ANNOEULLIN TT", location: "domicile" },
  { date: "2026-10-18", team: "Équipe 2", division: "D3 · J3", opponent: "CAP EN PEV TT", location: "domicile" },

  { date: "2026-11-08", team: "Équipe 1", division: "D1 · J4", opponent: "ST ANDRE USTT", location: "extérieur", opponentCity: "Saint-André-lez-Lille" },
  { date: "2026-11-08", team: "Équipe 2", division: "D3 · J4", opponent: "BAISIEUX TT", location: "extérieur", opponentCity: "Baisieux" },

  { date: "2026-11-22", team: "Équipe 1", division: "D1 · J5", opponent: "SANTES CTT", location: "domicile" },
  { date: "2026-11-22", team: "Équipe 2", division: "D3 · J5", opponent: "ATTICHES ASTT", location: "domicile" },

  { date: "2026-12-06", team: "Équipe 1", division: "D1 · J6", opponent: "MARCQ TT", location: "extérieur", opponentCity: "Marcq-en-Baroeul" },
  { date: "2026-12-06", team: "Équipe 2", division: "D3 · J6", opponent: "MONS TT", location: "extérieur", opponentCity: "Mons-en-Baroeul" },

  { date: "2026-12-13", team: "Équipe 1", division: "D1 · J7", opponent: "LA MADELEINE US", location: "domicile" },
  { date: "2026-12-13", team: "Équipe 2", division: "D3 · J7", opponent: "VILLEN/ASCQ FOS", location: "domicile" },

];

// ---------------------------------------------------------
// RÉSULTATS
// ---------------------------------------------------------
// Convention : le score est TOUJOURS dans l'ordre
// "recevant - visiteur". Le champ `location` indique si
// l'ACTT jouait à domicile ou à l'extérieur.

export interface MatchResult {
  date: string;
  dateLabel: string;
  team: "Équipe 1" | "Équipe 2";
  division: string;
  opponent: string;
  score: string;
  outcome: "victoire" | "defaite" | "nul";
  location: "domicile" | "extérieur";
}

export const recentResults: MatchResult[] = [

  {
    date: "2026-10-04",
    dateLabel: "Dim. 04 oct.",
    team: "Équipe 1",
    division: "D1 · J2",
    opponent: "TEMPLEMARS-VENDEVILLE",
    score: "5 - 9",
    outcome: "defaite",
    location: "extérieur",
  },
  {
    date: "2026-10-04",
    dateLabel: "Dim. 04 oct.",
    team: "Équipe 2",
    division: "D3 · J2",
    opponent: "LILL METR TT",
    score: "8 - 6",
    outcome: "victoire",
    location: "extérieur",
  },

];