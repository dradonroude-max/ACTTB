/**

=========================================================
ACTT — EFFECTS ENGINE
=========================================================
*/

(() => {
"use strict";

const start = () => {
const reducedMotionQuery = window.matchMedia(
"(prefers-reduced-motion: reduce)"
);
const finePointerQuery = window.matchMedia(
  "(hover: hover) and (pointer: fine)"
);

const prefersReducedMotion = () =>
  reducedMotionQuery.matches;

const hasFinePointer = () =>
  finePointerQuery.matches;

document.documentElement.classList.add("js");

try {
  initializeReveal();
  initializeTilt();

  document.documentElement.classList.add("js-ready");

} catch (error) {
  console.warn(
    "[ACTT] Effects initialization failed.",
    error
  );
}

function initializeReveal() {
  const revealElements =
    document.querySelectorAll(".reveal");

  if (!revealElements.length) {
    return;
  }

  if (prefersReducedMotion()) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  if (!("IntersectionObserver" in window)) {
    revealElements.forEach((element) => {
      element.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    (entries, observerInstance) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");

        observerInstance.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -40px 0px",
    }
  );

  revealElements.forEach((element) => {
    observer.observe(element);
  });
}

function initializeTilt() {
  if (
    prefersReducedMotion() ||
    !hasFinePointer()
  ) {
    return;
  }

  const tiltElements =
    document.querySelectorAll(".vision-tilt");

  if (!tiltElements.length) {
    return;
  }

  tiltElements.forEach((element) => {
    setupTilt(element);
  });
}

function setupTilt(element) {
  let frameId = null;
  let pointerX = 0;
  let pointerY = 0;
  let isInside = false;

  const maxRotation = 4;

  const updateTransform = () => {
    frameId = null;

    if (!isInside) {
      return;
    }

    const rect =
      element.getBoundingClientRect();

    if (!rect.width || !rect.height) {
      return;
    }

    const normalizedX =
      (pointerX - rect.left) /
        rect.width -
      0.5;

    const normalizedY =
      (pointerY - rect.top) /
        rect.height -
      0.5;

    const rotateY =
      normalizedX *
      maxRotation *
      2;

    const rotateX =
      normalizedY *
      -maxRotation *
      2;

    element.style.transform =
      `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateZ(0)`;
  };

  const requestUpdate = () => {
    if (frameId !== null) {
      return;
    }

    frameId =
      requestAnimationFrame(
        updateTransform
      );
  };

  const handlePointerEnter = () => {
    isInside = true;

    element.style.transition =
      "transform 150ms cubic-bezier(0.2, 0, 0, 1)";
  };

  const handlePointerMove = (event) => {
    pointerX = event.clientX;
    pointerY = event.clientY;

    requestUpdate();
  };

  const reset = () => {
    isInside = false;

    if (frameId !== null) {
      cancelAnimationFrame(frameId);
      frameId = null;
    }

    element.style.transition =
      "transform 400ms cubic-bezier(0.22, 1, 0.36, 1)";

    element.style.transform = "";
  };

  element.addEventListener(
    "pointerenter",
    handlePointerEnter,
    { passive: true }
  );

  element.addEventListener(
    "pointermove",
    handlePointerMove,
    { passive: true }
  );

  element.addEventListener(
    "pointerleave",
    reset,
    { passive: true }
  );

  element.addEventListener(
    "pointercancel",
    reset,
    { passive: true }
  );
}
};

if (document.readyState === "loading") {
document.addEventListener(
"DOMContentLoaded",
start,
{ once: true }
);
} else {
start();
}
})();