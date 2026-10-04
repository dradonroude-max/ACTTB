// =========================================================
// ACTT — TEAMS DATA
// =========================================================

export interface Player {
  name: string;
  role?: "Capitaine" | "Remplaçant";
  photo?: string;
}

export interface Team {
  id: string;
  label: string;
  division: string;
  subtitle?: string;
  photo?: string;
  photoAlt?: string;
  players: Player[];
}

export const teams: Team[] = [
  {
    id: "equipe-1",
    label: "Équipe 1",
    division: "D1",
    players: [
      {
        name: "M'Hand",
        role: "Capitaine",
        photo: "/images/teams/joueurs/mhand.jpg",
      },
      {
        name: "Nicolas",
        photo: "/images/teams/joueurs/nicolas.jpg",
      },
      {
        name: "Bruno",
        photo: "/images/teams/joueurs/bruno.png",
      },
      {
        name: "Geoffrey",
        photo: "/images/teams/joueurs/geoffrey.jpg",
      },
      {
        name: "Michel",
        photo: "/images/teams/joueurs/michel.jpg",
      },
      {
        name: "Aymeric",
        role: "Remplaçant",
        // Photo à venir
      },
    ],
  },
  {
    id: "equipe-2",
    label: "Équipe 2",
    division: "D3",
    players: [
      {
        name: "Hervé",
        role: "Capitaine",
        photo: "/images/teams/joueurs/herve.jpg",
      },
      {
        name: "Marc Alexandre",
        // Photo à venir
      },
      {
        name: "Stéphane",
        // Photo à venir
      },
      {
        name: "Richard",
        // Photo à venir
      },
      {
        name: "Pierre",
        photo: "/images/teams/joueurs/pierre.jpg",
      },
      {
        name: "Éric",
        photo: "/images/teams/joueurs/eric.jpg",
      },
    ],
  },
];