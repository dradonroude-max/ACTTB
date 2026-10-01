// =========================================================
// ACTT — TEAMS DATA
// =========================================================
//
// DONNÉES DE TEST : prénoms inventés, photos de démonstration.
// À remplacer par les vraies informations (et photos
// autorisées) avant la mise en ligne.
//
// Champs facultatifs : subtitle, photo, photoAlt, role, photo (joueur).
// Un champ absent n'est simplement pas affiché.

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
    photo: "https://picsum.photos/seed/actt-equipe-1/1200/675",
    photoAlt: "Photo de l’Équipe 1",
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
    photo: "https://picsum.photos/seed/actt-equipe-2/1200/675",
    photoAlt: "Photo de l’Équipe 2",
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