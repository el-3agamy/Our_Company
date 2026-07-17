"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

type FilterKey = "All" | "Brand Film" | "Documentary" | "Social" | "Commercial" | "Music Video";

const filterKeys: FilterKey[] = ["All", "Brand Film", "Documentary", "Social", "Commercial", "Music Video"];
const filterI18nKeys: Record<FilterKey, string> = {
  "All": "filters.All",
  "Brand Film": "filters.Brand Film",
  "Documentary": "filters.Documentary",
  "Social": "filters.Social",
  "Commercial": "filters.Commercial",
  "Music Video": "filters.Music Video",
};

const projectIds = ["axiom-sport", "silent-frames", "neon-nights", "luxe-tvc", "pulse-mv", "summit-reel"] as const;
const projectCategories: Record<string, FilterKey> = {
  "axiom-sport": "Brand Film",
  "silent-frames": "Documentary",
  "neon-nights": "Social",
  "luxe-tvc": "Commercial",
  "pulse-mv": "Music Video",
  "summit-reel": "Brand Film",
};
const projectYears: Record<string, string> = {
  "axiom-sport": "2024",
  "silent-frames": "2024",
  "neon-nights": "2024",
  "luxe-tvc": "2023",
  "pulse-mv": "2024",
  "summit-reel": "2024",
};
const projectDurations: Record<string, string> = {
  "axiom-sport": "3:42",
  "silent-frames": "87:00",
  "neon-nights": "Episode series",
  "luxe-tvc": "0:30",
  "pulse-mv": "3:58",
  "summit-reel": "4:10",
};
const projectThumbs: Record<string, string> = {
  "axiom-sport": "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800",
  "silent-frames": "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
  "neon-nights": "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
  "luxe-tvc": "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  "pulse-mv": "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800",
  "summit-reel": "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
};

export default function ProjectsPage() {
  const t = useTranslations('ProjectsPage');
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const pageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "All"
    ? projectIds
    : projectIds.filter((id) => projectCategories[id] === activeFilter);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".projects-page__hero-content",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (!gridRef.current) return;
    const cards = gridRef.current.querySelectorAll(".projects-page__card");
    gsap.fromTo(
      cards,
      { opacity: 0, y: 30, scale: 0.97 },
      { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.08, ease: "power3.out" }
    );
  }, [activeFilter]);

  return (
    <div ref={pageRef} className="projects-page">
      {/* Hero */}
      <section className="projects-page__hero">
        <div className="projects-page__hero-bg" aria-hidden="true" />
        <div className="projects-page__hero-content">
          <span className="projects-page__eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="projects-page__hero-title">
            {t('hero.title_1')}<br />
            <span className="projects-page__hero-accent">{t('hero.title_accent')}</span>
          </h1>
          <p className="projects-page__hero-sub">{t('hero.sub')}</p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="projects-page__gallery">
        <div className="projects-page__container">
          {/* Filter tabs */}
          <div className="projects-page__filters" role="tablist" aria-label="Filter projects">
            {filterKeys.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                className={`projects-page__filter-btn ${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {t(filterI18nKeys[f])}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="projects-page__grid">
            {filtered.map((id) => (
              <div key={id} className="projects-page__card">
                {/* Media */}
                <div className="projects-page__card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={projectThumbs[id]}
                    alt={t(`projects.${id}.title`)}
                    className="projects-page__card-img"
                    loading="lazy"
                  />
                  <div className="projects-page__card-overlay">
                    <div className="projects-page__card-play" aria-hidden="true">
                      <div className="projects-page__card-play-icon" />
                    </div>
                    <div className="projects-page__card-meta-overlay">
                      <span>{projectDurations[id]}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="projects-page__card-info">
                  <div className="projects-page__card-top">
                    <span className="projects-page__card-category">{t(`projects.${id}.category`)}</span>
                    <span className="projects-page__card-year">{projectYears[id]}</span>
                  </div>
                  <h2 className="projects-page__card-title">{t(`projects.${id}.title`)}</h2>
                  <p className="projects-page__card-desc">{t(`projects.${id}.description`)}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="projects-page__cta">
        <div className="projects-page__cta-glow" aria-hidden="true" />
        <div className="projects-page__container projects-page__cta-inner">
          <h2 className="projects-page__cta-title">{t('cta.title')}</h2>
          <p className="projects-page__cta-sub">{t('cta.sub')}</p>
          <Link href="/contacts" className="projects-page__cta-btn">{t('cta.btn')}</Link>
        </div>
      </section>
    </div>
  );
}
