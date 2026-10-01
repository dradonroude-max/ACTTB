/**
 * =========================================================
 * ACTT — EFFECTS ENGINE (GSAP)
 * =========================================================
 *
 * Sept effets coordonnés :
 * 1. Barre de progression de scroll
 * 2. Révélation des en-têtes de section
 * 3. Compteurs animés sur les tarifs
 * 4. Spotlight souris sur les cartes
 * 5. Boutons magnétiques
 * 6. Parallaxe subtile du Hero
 * 7. Reveals historiques (.reveal) conservés
 *
 * Règles :
 * - prefers-reduced-motion respecté partout
 * - Aucun effet sur pointeur grossier (tactile)
 * - Aucun blocage de scroll ou de lecture
 */

import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const init = () => {
  const reducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  const finePointer = window.matchMedia(
    "(hover: hover) and (pointer: fine)"
  ).matches;

  document.documentElement.classList.add("js");

  try {
    /* =====================================================
       1. REVEAL HISTORIQUE (.reveal)
       ===================================================== */

    initializeReveal(reducedMotion);

    /* =====================================================
       2. BARRE DE PROGRESSION
       ===================================================== */

    initializeProgressBar(reducedMotion);

    if (!reducedMotion) {
      /* ===================================================
         3. RÉVÉLATION DES EN-TÊTES
         =================================================== */

      initializeSectionHeaders();

      /* ===================================================
         4. COMPTEURS ANIMÉS
         =================================================== */

      initializeCounters();
    }

    if (!reducedMotion && finePointer) {
      /* ===================================================
         5. SPOTLIGHT SUR LES CARTES
         =================================================== */

      initializeSpotlight();

      /* ===================================================
         6. BOUTONS MAGNÉTIQUES
         =================================================== */

      initializeMagneticButtons();

      /* ===================================================
         7. PARALLAXE DU HERO
         =================================================== */

      initializeHeroParallax();
    }

    document.documentElement.classList.add("js-ready");
  } catch (error) {
    console.warn("[ACTT] Effects initialization failed.", error);
    document.documentElement.classList.add("js-ready");
  }
};

/* =========================================================
   1. REVEAL HISTORIQUE
   ========================================================= */

function initializeReveal(reducedMotion) {
  const elements = document.querySelectorAll(".reveal");

  if (!elements.length) return;

  if (reducedMotion) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  if (!("IntersectionObserver" in window)) {
    elements.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries, obs) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("is-visible");
        obs.unobserve(entry.target);
      });
    },
    { threshold: 0.12, rootMargin: "0px 0px -40px 0px" }
  );

  elements.forEach((el) => observer.observe(el));
}

/* =========================================================
   2. BARRE DE PROGRESSION
   ========================================================= */

function initializeProgressBar(reducedMotion) {
  const bar = document.createElement("div");
  bar.className = "scroll-progress-bar";
  bar.setAttribute("aria-hidden", "true");
  document.body.appendChild(bar);

  if (reducedMotion) {
    bar.style.transform = "scaleX(0)";
    return;
  }

  gsap.to(bar, {
    scaleX: 1,
    ease: "none",
    scrollTrigger: {
      trigger: document.documentElement,
      start: "top top",
      end: "bottom bottom",
      scrub: 0.2,
    },
  });
}

/* =========================================================
   3. RÉVÉLATION DES EN-TÊTES DE SECTION
   ========================================================= */

function initializeSectionHeaders() {
  const headers = gsap.utils.toArray(".vision-section-header");

  headers.forEach((header) => {
    const eyebrow = header.querySelector(".vision-section-eyebrow");
    const title = header.querySelector(".vision-section-title");
    const description = header.querySelector(".vision-section-description");

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: header,
        start: "top 85%",
        toggleActions: "play none none none",
      },
    });

    if (eyebrow) {
      tl.from(eyebrow, {
        y: 16,
        autoAlpha: 0,
        duration: 0.5,
        ease: "power2.out",
      });
    }

    if (title) {
      tl.from(
        title,
        {
          y: 26,
          autoAlpha: 0,
          duration: 0.7,
          ease: "power3.out",
        },
        "-=0.30"
      );
    }

    if (description) {
      tl.from(
        description,
        {
          y: 18,
          autoAlpha: 0,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.40"
      );
    }
  });
}

/* =========================================================
   4. COMPTEURS ANIMÉS
   ========================================================= */

function initializeCounters() {
  const counters = gsap.utils.toArray(".vision-pricing-price");

  counters.forEach((el) => {
    const text = (el.textContent || "").trim();
    const match = text.match(/^([^\d]*)(\d+)(.*)$/);

    if (!match) return;

    const prefix = match[1];
    const target = parseInt(match[2], 10);
    const suffix = match[3];

    const counter = { value: 0 };

    ScrollTrigger.create({
      trigger: el,
      start: "top 85%",
      once: true,
      onEnter: () => {
        gsap.to(counter, {
          value: target,
          duration: 1.3,
          ease: "power2.out",
          onUpdate: () => {
            el.textContent =
              prefix + Math.round(counter.value) + suffix;
          },
        });
      },
    });
  });
}

/* =========================================================
   5. SPOTLIGHT SUR LES CARTES
   ========================================================= */

function initializeSpotlight() {
  const cards = document.querySelectorAll(
    [
      ".vision-pricing-card",
      ".vision-partner-card",
      ".calendrier-card",
      ".team-card",
      ".visionos-card",
    ].join(", ")
  );

  cards.forEach((card) => {
    let frameId = null;

    const reset = () => {
      if (frameId) {
        cancelAnimationFrame(frameId);
        frameId = null;
      }
    };

    card.addEventListener("pointermove", (event) => {
      if (frameId) return;

      frameId = requestAnimationFrame(() => {
        frameId = null;

        const rect = card.getBoundingClientRect();
        if (!rect.width || !rect.height) return;

        const x = ((event.clientX - rect.left) / rect.width) * 100;
        const y = ((event.clientY - rect.top) / rect.height) * 100;

        gsap.to(card, {
          "--spotlight-x": x,
          "--spotlight-y": y,
          duration: 0.5,
          ease: "power2.out",
          overwrite: "auto",
        });
      });
    });

    card.addEventListener("pointerleave", () => {
      reset();
      gsap.to(card, {
        "--spotlight-x": 50,
        "--spotlight-y": 50,
        duration: 0.6,
        ease: "power2.out",
        overwrite: "auto",
      });
    });
  });
}

/* =========================================================
   6. BOUTONS MAGNÉTIQUES
   ========================================================= */

function initializeMagneticButtons() {
  const buttons = document.querySelectorAll(
    [
      ".actt-hero-button-primary",
      ".actt-hero-button-secondary",
      ".inscription-download-button",
      ".vision-navbar-cta-link",
    ].join(", ")
  );

  const strength = 18;

  buttons.forEach((button) => {
    const xTo = gsap.quickTo(button, "x", {
      duration: 0.4,
      ease: "power3.out",
    });

    const yTo = gsap.quickTo(button, "y", {
      duration: 0.4,
      ease: "power3.out",
    });

    button.addEventListener("pointermove", (event) => {
      const rect = button.getBoundingClientRect();
      if (!rect.width || !rect.height) return;

      const x =
        ((event.clientX - rect.left) / rect.width - 0.5) * strength;

      const y =
        ((event.clientY - rect.top) / rect.height - 0.5) * strength;

      xTo(x);
      yTo(y);
    });

    button.addEventListener("pointerleave", () => {
      xTo(0);
      yTo(0);
    });
  });
}

/* =========================================================
   7. PARALLAXE DU HERO
   ========================================================= */

function initializeHeroParallax() {
  const visual = document.querySelector(".visionos-hero-visual");
  const hero = document.querySelector(".visionos-hero");

  if (!visual || !hero) return;

  gsap.to(visual, {
    yPercent: 18,
    ease: "none",
    scrollTrigger: {
      trigger: hero,
      start: "top top",
      end: "bottom top",
      scrub: 0.4,
    },
  });

  const content = document.querySelector(".visionos-hero-content");

  if (content) {
    gsap.to(content, {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: hero,
        start: "top top",
        end: "bottom top",
        scrub: 0.4,
      },
    });
  }
}

/* =========================================================
   BOOT
   ========================================================= */

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init, { once: true });
} else {
  init();
}