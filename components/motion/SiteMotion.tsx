"use client";

import * as React from "react";

export function SiteMotion() {
  const [showBackToTop, setShowBackToTop] = React.useState(false);
  const showBackToTopRef = React.useRef(false);

  React.useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const revealTargets = Array.from(
      document.querySelectorAll<HTMLElement>("main section:not(:first-of-type)")
    );

    revealTargets.forEach((target) => target.classList.add("motion-section"));

    let revealObserver: IntersectionObserver | null = null;

    if (reduceMotion) {
      revealTargets.forEach((target) => target.classList.add("is-visible"));
    } else {
      revealObserver = new IntersectionObserver(
        (entries, observer) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          });
        },
        { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
      );

      revealTargets.forEach((target) => revealObserver?.observe(target));
    }

    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main section[id]")
    );
    const navigationLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>('nav a[href^="#"]')
    );

    const setActiveSection = (id: string) => {
      navigationLinks.forEach((link) => {
        const isCurrent = link.getAttribute("href") === "#" + id;
        if (isCurrent) {
          link.setAttribute("aria-current", "location");
        } else {
          link.removeAttribute("aria-current");
        }
      });
    };

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        const visibleSection = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleSection?.target.id) {
          setActiveSection(visibleSection.target.id);
        }
      },
      { rootMargin: "-30% 0px -58% 0px", threshold: [0.05, 0.25, 0.5] }
    );

    sections.forEach((section) => sectionObserver.observe(section));

    let animationFrame = 0;

    const updateScrollState = () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollable > 0 ? Math.min(window.scrollY / scrollable, 1) : 0;
      document.documentElement.style.setProperty("--scroll-progress", String(progress));

      const nextShowBackToTop = window.scrollY > 720;
      if (nextShowBackToTop !== showBackToTopRef.current) {
        showBackToTopRef.current = nextShowBackToTop;
        setShowBackToTop(nextShowBackToTop);
      }

      animationFrame = 0;
    };

    const handleScroll = () => {
      if (animationFrame) return;
      animationFrame = window.requestAnimationFrame(updateScrollState);
    };

    updateScrollState();
    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll);

    return () => {
      revealObserver?.disconnect();
      sectionObserver.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      if (animationFrame) window.cancelAnimationFrame(animationFrame);
    };
  }, []);

  const scrollToTop = () => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <>
      <div className="reading-progress" aria-hidden="true" />
      <button
        type="button"
        className="back-to-top"
        data-visible={showBackToTop}
        tabIndex={showBackToTop ? 0 : -1}
        aria-hidden={!showBackToTop}
        onClick={scrollToTop}
      >
        <span aria-hidden="true">↑</span>
        Ke atas
      </button>
    </>
  );
}
