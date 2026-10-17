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
}

export const news: NewsItem[] = [
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