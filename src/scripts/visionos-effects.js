/**
 * =========================================================
 * ACTT — EFFECTS ENGINE (GSAP)
 * =========================================================
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
    initializeReveal(reducedMotion);
    initializeProgressBar(reducedMotion);

    if (!reducedMotion) {
      initializeSectionHeaders();
      initializeCounters();
      initializeHeroBurst();
    }

    if (!reducedMotion && finePointer) {
      initializeSpotlight();
      initializeMagneticButtons();
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
   3. RÉVÉLATION DES EN-TÊTES
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
            el.textContent = prefix + Math.round(counter.value) + suffix;
          },
        });
      },
    });
  });
}

/* =========================================================
   5. SPOTLIGHT
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

      const x = ((event.clientX - rect.left) / rect.width - 0.5) * strength;
      const y = ((event.clientY - rect.top) / rect.height - 0.5) * strength;

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
   8. EXPLOSION DE BALLES AU NIVEAU DU LOGO HERO
   =========================================================
   Note importante : tous les styles des balles sont
   appliqués en JavaScript. C'est nécessaire car Astro
   scope automatiquement le CSS des composants .astro,
   et les balles créées dynamiquement n'ont pas les
   attributs data-astro-cid nécessaires pour que le CSS
   scopé s'applique.
   ========================================================= */

function initializeHeroBurst() {
  const container = document.querySelector(".actt-hero-burst");
  const hero = document.querySelector(".visionos-hero");

  if (!container || !hero) return;

  let played = false;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting || played) return;
        played = true;
        observer.disconnect();
        playBurst();
      });
    },
    { threshold: 0.3 }
  );

  observer.observe(hero);

  function playBurst() {
    const BALL_COUNT = 18;
    const balls = [];

    for (let i = 0; i < BALL_COUNT; i++) {
      const ball = document.createElement("span");

      // Styles inline (indépendants du CSS scopé)
      Object.assign(ball.style, {
        position: "absolute",
        top: "0",
        left: "0",
        display: "block",
        borderRadius: "50%",
        background: "radial-gradient(circle at 32% 28%, #ffffff 0%, #ffffff 42%, #dde3e8 100%)",
        boxShadow: "0 2px 6px rgba(0,0,0,0.22), 0 0 10px rgba(255,255,255,0.40)",
        willChange: "transform, opacity",
        opacity: "0",
        pointerEvents: "none",
      });

      container.appendChild(ball);
      balls.push(ball);
    }

    const tl = gsap.timeline({
      onComplete: () => {
        balls.forEach((b) => b.remove());
      },
    });

    // Petit délai pour laisser le Hero se poser
    tl.to({}, { duration: 0.5 });

    balls.forEach((ball, index) => {
      const angle =
        (index / BALL_COUNT) * Math.PI * 2 +
        (Math.random() - 0.5) * 0.35;

      const distance = 150 + Math.random() * 280;
      const size = 10 + Math.random() * 14;
      const duration = 1.2 + Math.random() * 0.8;

      const dx = Math.cos(angle) * distance;
      const dy = Math.sin(angle) * distance;

      ball.style.width = `${size}px`;
      ball.style.height = `${size}px`;
      ball.style.margin = `-${size / 2}px 0 0 -${size / 2}px`;

      tl.fromTo(
        ball,
        {
          x: 0,
          y: 0,
          scale: 0.3,
          opacity: 0,
        },
        {
          x: dx,
          y: dy,
          scale: 1,
          opacity: 1,
          duration: duration * 0.3,
          ease: "power2.out",
        },
        "<"
      );

      tl.to(
        ball,
        {
          x: dx * 1.15,
          y: dy * 1.15,
          opacity: 0,
          scale: 0.6,
          duration: duration * 0.7,
          ease: "power1.out",
        },
        ">"
      );
    });

    // Pulse du halo
    const aura = document.querySelector(".actt-logo-aura");

    if (aura) {
      tl.fromTo(
        aura,
        { scale: 1.08, opacity: 1 },
        {
          scale: 1.30,
          opacity: 0.65,
          duration: 0.35,
          ease: "power2.out",
          yoyo: true,
          repeat: 1,
        },
        0.5
      );
    }
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