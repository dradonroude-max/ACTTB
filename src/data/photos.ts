// =========================================================
// ACTT — GALLERY PHOTOS
// =========================================================
//
// Ordre d'affichage :
//   Photo 1 → grande photo (carré 1:1)
//   Photos 2, 3, 4, 5 → petites photos (carrés 1:1)
//   Photo 6 → panoramique (ratio ~4:1)

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export const photos: Photo[] = [
  {
    src: "/images/gallery/photo-1.jpg",
    alt: "Photo principale de la galerie ACTT",
    caption: "À légender",
  },
  {
    src: "/images/gallery/photo-2.jpg",
    alt: "Photo secondaire de la galerie ACTT",
    caption: "À légender",
  },
  {
    src: "/images/gallery/photo-3.jpg",
    alt: "Photo secondaire de la galerie ACTT",
    caption: "À légender",
  },
  {
    src: "/images/gallery/photo-4.jpg",
    alt: "Photo secondaire de la galerie ACTT",
    caption: "À légender",
  },
  {
    src: "/images/gallery/photo-5.jpg",
    alt: "Photo secondaire de la galerie ACTT",
    caption: "À légender",
  },
  {
    src: "/images/gallery/photo-6.jpg",
    alt: "Photo panoramique de la galerie ACTT",
    caption: "À légender",
  },
];