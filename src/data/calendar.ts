// =========================================================
// ACTT — CALENDAR DATA
// =========================================================
//
// DONNÉES DE TEST : matchs fictifs pour visualiser la mise
// en page. À remplacer par les vrais matchs et résultats
// du club avant la mise en ligne.

export interface UpcomingMatch {
  date: string;
  time: string;
  team: string;
  opponent: string;
  location: "domicile" | "extérieur";
}

export interface MatchResult {
  date: string;
  team: string;
  opponent: string;
  score: string;
  outcome: "victoire" | "defaite" | "nul";
}

export const upcomingMatches: UpcomingMatch[] = [
  {
    date: "12/10/2026",
    time: "20h00",
    team: "Équipe 1",
    opponent: "TT Lille",
    location: "domicile",
  },
  {
    date: "19/10/2026",
    time: "19h30",
    team: "Équipe 2",
    opponent: "TT Armentières",
    location: "extérieur",
  },
  {
    date: "26/10/2026",
    time: "20h00",
    team: "Équipe 1",
    opponent: "TT Roubaix",
    location: "extérieur",
  },
];

export const recentResults: MatchResult[] = [
  {
    date: "05/10/2026",
    team: "Équipe 1",
    opponent: "TT Valenciennes",
    score: "8 - 6",
    outcome: "victoire",
  },
  {
    date: "05/10/2026",
    team: "Équipe 2",
    opponent: "TT Lens",
    score: "4 - 8",
    outcome: "defaite",
  },
  {
    date: "28/09/2026",
    team: "Équipe 1",
    opponent: "TT Douai",
    score: "8 - 8",
    outcome: "nul",
  },
];