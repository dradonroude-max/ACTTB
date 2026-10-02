// =========================================================
// ACTT — CALENDAR DATA
// =========================================================
//
// DONNÉES DE TEST : matchs fictifs pour visualiser la mise
// en page. À remplacer par les vrais matchs et résultats
// du club avant la mise en ligne.
//
// Le champ `date` (ISO) sert à la balise <time datetime>.
// Le champ `dateLabel` est ce qui s'affiche à l'écran.

export interface UpcomingMatch {
  date: string;          // ISO 8601 : "2026-10-12"
  dateLabel: string;     // "Lun. 12 oct."
  time: string;          // "20h00"
  team: string;          // "Équipe 1"
  division: string;      // "Départementale 2 · J3"
  opponent: string;      // "TT Lille"
  location: "domicile" | "extérieur";
  venue?: string;        // Adresse si domicile
  opponentCity?: string; // Ville si extérieur
}

export interface MatchResult {
  date: string;          // ISO 8601
  dateLabel: string;     // "Lun. 05 oct."
  team: string;
  division: string;
  opponent: string;
  score: string;         // "8 - 6"
  outcome: "victoire" | "defaite" | "nul";
}

export const upcomingMatches: UpcomingMatch[] = [
  {
    date: "2026-10-12",
    dateLabel: "Lun. 12 oct.",
    time: "20h00",
    team: "Équipe 1",
    division: "Départementale 2 · J3",
    opponent: "TT Lille",
    location: "domicile",
    venue: "Salle omnisports, Camphin-en-Carembault",
  },
  {
    date: "2026-10-19",
    dateLabel: "Lun. 19 oct.",
    time: "19h30",
    team: "Équipe 2",
    division: "Départementale 3 · J3",
    opponent: "TT Armentières",
    location: "extérieur",
    opponentCity: "Armentières",
  },
  {
    date: "2026-10-26",
    dateLabel: "Lun. 26 oct.",
    time: "20h00",
    team: "Équipe 1",
    division: "Départementale 2 · J4",
    opponent: "TT Roubaix",
    location: "extérieur",
    opponentCity: "Roubaix",
  },
];

export const recentResults: MatchResult[] = [
  {
    date: "2026-10-05",
    dateLabel: "Lun. 05 oct.",
    team: "Équipe 1",
    division: "Départementale 2 · J2",
    opponent: "TT Valenciennes",
    score: "8 - 6",
    outcome: "victoire",
  },
  {
    date: "2026-10-05",
    dateLabel: "Lun. 05 oct.",
    team: "Équipe 2",
    division: "Départementale 3 · J2",
    opponent: "TT Lens",
    score: "4 - 8",
    outcome: "defaite",
  },
  {
    date: "2026-09-28",
    dateLabel: "Lun. 28 sept.",
    team: "Équipe 1",
    division: "Départementale 2 · J1",
    opponent: "TT Douai",
    score: "8 - 8",
    outcome: "nul",
  },
];