// =========================================================
// ACTT — STANDINGS DATA
// =========================================================

export interface StandingRow {
  pos: number;
  team: string;
  played: number;
  points: number;
}

export interface TeamStanding {
  teamName: string;
  division: string;
  poule: string;
  data: StandingRow[];
}

export const standings: TeamStanding[] = [
  {
    teamName: "Équipe 2",
    division: "D3",
    poule: "B",
    data: [
      { pos: 1, team: "A CAMPHIN TT 2", played: 5, points: 15 },
      { pos: 2, team: "MONS TT 8", played: 5, points: 15 },
      { pos: 3, team: "LILL METR TT 16", played: 5, points: 13 },
      { pos: 4, team: "ATTICHES ASTT 9", played: 5, points: 11 },
      { pos: 5, team: "BAISIEUX TT 15", played: 5, points: 7 },
      { pos: 6, team: "VILLEN/ASCQ FOS 19", played: 5, points: 7 },
      { pos: 7, team: "CAP EN PEV TT 16", played: 5, points: 7 },
      { pos: 8, team: "GONDECOURT AL 4", played: 5, points: 5 },
    ],
  },
  {
    teamName: "Équipe 1",
    division: "D1",
    poule: "W",
    data: [
      { pos: 1, team: "SANTES CTT 3", played: 5, points: 15 },
      { pos: 2, team: "ANNOEULLIN TT 5", played: 5, points: 13 },
      { pos: 3, team: "TEMPLEMARS-VENDEVILLE 3", played: 5, points: 11 },
      { pos: 4, team: "MARCQ TT 6", played: 5, points: 9 },
      { pos: 5, team: "ST ANDRE USTT 6", played: 5, points: 9 },
      { pos: 6, team: "LA MADELEINE US 5", played: 5, points: 9 },
      { pos: 7, team: "LOSC TT 4", played: 5, points: 8 },
      { pos: 8, team: "A CAMPHIN TT 1", played: 5, points: 6 },
    ],
  },
];