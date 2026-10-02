// =========================================================
// ACTT — TEAMS DATA
// =========================================================
//
// Données des équipes du club.
// Photos : placer les fichiers dans public/images/teams/
// Format photo d'équipe : 16:9, minimum 1600×900.

export interface Player {
  name: string;
  role?: string;
  photo?: string;
}

export interface Team {
  id: string;
  label: string;
  subtitle?: string;
  photo?: string;
  photoAlt?: string;
  players: Player[];
}

export const teams: Team[] = [
  {
    id: "equipe-1",
    label: "Équipe 1",
    photo: "/images/teams/equipe-1.png",
    photoAlt: "Photo de l'Équipe 1 de l'ACTT",
    players: [
      {
        name: "Bruno",
        role: "Capitaine",
        photo: "/images/teams/joueurs/bruno.png",
      },
      {
        name: "Léa D.",
        photo: "https://randomuser.me/api/portraits/women/44.jpg",
      },
      {
        name: "Hugo R.",
        photo: "https://randomuser.me/api/portraits/men/45.jpg",
      },
    ],
  },
  {
    id: "equipe-2",
    label: "Équipe 2",
    photo: "/images/teams/equipe-2.png",
    photoAlt: "Photo de l'Équipe 2 de l'ACTT",
    players: [
      {
        name: "Sarah L.",
        role: "Capitaine",
        photo: "https://randomuser.me/api/portraits/women/21.jpg",
      },
      {
        name: "Julien F.",
        photo: "https://randomuser.me/api/portraits/men/12.jpg",
      },
      {
        name: "Antoine V.",
      },
    ],
  },
];