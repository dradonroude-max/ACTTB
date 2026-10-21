// =========================================================
// ACTT — NEWS DATA
// =========================================================

export interface NewsItem {
  date: string;
  dateLabel: string;
  category?: string;
  title: string;
  body: string[];
  author?: string;
  image?: string;
  images?: string[];
  theme?: "halloween" | "default";
}

export const news: NewsItem[] = [
  {
    date: "2026-10-21",
    dateLabel: "21 oct. 2026",
    category: "Événement",
    theme: "halloween",
    title: "🎃 Soirée Halloween pour les jeunes pongistes !",
    body: [
      "Le club de ping de Camphin-en-Carembault invite ses jeunes pongistes adhérents à venir fêter Halloween.",
      "Rendez-vous le jeudi 29 octobre à partir de 18h !",
      "Nous vous attendons avec votre masque ou votre chapeau afin de partager bonbons, rires, sorts et potion magique... sans oublier votre raquette !",
    ],
    author: "Éric",
    images: [
      "/images/news/halloween-invitation.jpg",
      "/images/news/halloween-masques.jpg",
    ],
  },
  {
    date: "2026-10-18",
    dateLabel: "18 oct. 2026",
    category: "Événement",
    title: "Remise du chèque Octobre Rose",
    body: [
      "Dans le cadre de la campagne Octobre rose, le club a remis ce matin la somme collectée lors de nos entraînements.",
      "Un grand merci à tous pour votre générosité et votre engagement.",
      "Merci aux adhérents qui ont participé à la marche organisée par la mairie en soutien à la lutte contre le cancer du sein.",
    ],
    author: "Éric",
    image: "/images/news/OR26.jpg",
  },
  {
    date: "2026-10-04",
    dateLabel: "4 oct. 2026",
    category: "Vie du club",
    title: "Octobre Rose : tous en rose le 13 octobre",
    body: [
      "Le PING s'associe à Octobre Rose. Tous en tee-shirt rose lors de l'entraînement du mardi 13 octobre prochain.",
      "Libre à chacun de participer à la grande marche du 17 octobre et d'apporter sa contribution à l'association Eollis de Phalempin, qui accompagne les personnes touchées par la maladie.",
    ],
    author: "Éric",
  },
];