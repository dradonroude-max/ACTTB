// =========================================================
// ACTT — CALENDAR & RESULTS DATA
// =========================================================

export interface Match {
  date: string;
  dateLabel: string;
  time: string;
  team: string;
  division: string;
  journee: string; // Ajout de la journée
  opponent: string;
  location: "domicile" | "extérieur";
  opponentCity?: string;
}

export interface Result {
  date: string;
  dateLabel: string;
  team: string;
  division: string;
  journee: string; // Ajout de la journée
  opponent: string;
  score: string;
  outcome: "victoire" | "defaite" | "nul";
  location: "domicile" | "extérieur";
}

// ---------------------------------------------------------
// CALENDRIER (Matchs à venir : Journées 4 à 7)
// ---------------------------------------------------------
export const calendar: Match[] = [
  // --- Journée 4 : 08/11/2026 ---
  {
    date: "2026-11-08",
    dateLabel: "Dim. 8 nov.",
    time: "14h00",
    team: "Équipe 1",
    division: "D1",
    journee: "J4",
    opponent: "ST ANDRE USTT",
    location: "extérieur",
    opponentCity: "ST ANDRE",
  },
  {
    date: "2026-11-08",
    dateLabel: "Dim. 8 nov.",
    time: "14h00",
    team: "Équipe 2",
    division: "D3",
    journee: "J4",
    opponent: "BAISIEUX TT 15",
    location: "extérieur",
    opponentCity: "BAISIEUX",
  },

  // --- Journée 5 : 22/11/2026 ---
  {
    date: "2026-11-22",
    dateLabel: "Dim. 22 nov.",
    time: "14h00",
    team: "Équipe 1",
    division: "D1",
    journee: "J5",
    opponent: "SANTES CTT",
    location: "domicile",
  },
  {
    date: "2026-11-22",
    dateLabel: "Dim. 22 nov.",
    time: "14h00",
    team: "Équipe 2",
    division: "D3",
    journee: "J5",
    opponent: "VILLEN/ASCQ FOS 19",
    location: "extérieur",
    opponentCity: "VILLEN/ASCQ",
  },

  // --- Journée 6 : 06/12/2026 ---
  {
    date: "2026-12-06",
    dateLabel: "Dim. 6 déc.",
    time: "14h00",
    team: "Équipe 1",
    division: "D1",
    journee: "J6",
    opponent: "MARCQ TT",
    location: "extérieur",
    opponentCity: "MARCQ",
  },
  {
    date: "2026-12-06",
    dateLabel: "Dim. 6 déc.",
    time: "14h00",
    team: "Équipe 2",
    division: "D3",
    journee: "J6",
    opponent: "MONS TT",
    location: "domicile",
  },

  // --- Journée 7 : 13/12/2026 ---
  {
    date: "2026-12-13",
    dateLabel: "Dim. 13 déc.",
    time: "14h00",
    team: "Équipe 1",
    division: "D1",
    journee: "J7",
    opponent: "LA MADELEINE US",
    location: "domicile",
  },
  {
    date: "2026-12-13",
    dateLabel: "Dim. 13 déc.",
    time: "14h00",
    team: "Équipe 2",
    division: "D3",
    journee: "J7",
    opponent: "VILLEN/ASCQ FOS 19",
    location: "domicile",
  },
];

// ---------------------------------------------------------
// RÉSULTATS (Journées 1 à 3)
// ---------------------------------------------------------
export const recentResults: Result[] = [
  // --- Journée 3 : 18/10/2026 ---
  {
    date: "2026-10-18",
    dateLabel: "18 oct. 2026",
    team: "Équipe 1",
    division: "D1",
    journee: "J3",
    opponent: "ANNOEULLIN TT",
    score: "1-13",
    outcome: "defaite",
    location: "domicile",
  },
  {
    date: "2026-10-18",
    dateLabel: "18 oct. 2026",
    team: "Équipe 2",
    division: "D3",
    journee: "J3",
    opponent: "CAP EN PEV TT",
    score: "13-1",
    outcome: "victoire",
    location: "domicile",
  },

  // --- Journée 2 : 04/10/2026 ---
  {
    date: "2026-10-04",
    dateLabel: "4 oct. 2026",
    team: "Équipe 1",
    division: "D1",
    journee: "J2",
    opponent: "TEMPLEMARS-VENDEVILLE",
    score: "9-5",
    outcome: "defaite",
    location: "extérieur", 
  },
  {
    date: "2026-10-04",
    dateLabel: "4 oct. 2026",
    team: "Équipe 2",
    division: "D3",
    journee: "J2",
    opponent: "LILL METR TT",
    score: "6-8",
    outcome: "defaite",
    location: "extérieur",
  },

  // --- Journée 1 : 20/09/2026 ---
  {
    date: "2026-09-20",
    dateLabel: "20 sept. 2026",
    team: "Équipe 1",
    division: "D1",
    journee: "J1",
    opponent: "LOSC TT",
    score: "?",
    outcome: "defaite",
    location: "domicile",
  },
  {
    date: "2026-09-20",
    dateLabel: "20 sept. 2026",
    team: "Équipe 2",
    division: "D3",
    journee: "J1",
    opponent: "GONDECOURT AL",
    score: "?",
    outcome: "defaite",
    location: "domicile",
  },
];