// =========================================================
// ACTT — GALLERY PHOTOS
// =========================================================
//
// Ordre d'affichage :
//   Photo 1 → grande photo (carré 1:1)
//   Photos 2, 3, 4, 5 → petites photos (carrés 1:1)
//   Photo 6 → panoramique (ratio ~4:1)
//
// Toutes les photos sont accessibles dans la lightbox.

export interface Photo {
  src: string;
  alt: string;
  caption?: string;
}

export const photos: Photo[] = [
  { src: "/images/gallery/photo-1.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-2.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-3.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-4.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-5.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-6.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-7.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-8.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-9.jpg",  alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-10.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-11.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-12.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-13.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-14.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-15.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-16.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-17.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-18.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-19.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-20.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-21.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-22.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-23.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-24.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-25.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-26.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-27.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-28.jpg", alt: "Photo de l'ACTT" },
  { src: "/images/gallery/photo-29.jpg", alt: "Photo de l'ACTT" },
];