"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const teamMembers = ["Marco Visconti", "Priya Nair", "Remy Fontaine", "Aaliyah Brooks"] as const;
const teamInitials = { "Marco Visconti": "MV", "Priya Nair": "PN", "Remy Fontaine": "RF", "Aaliyah Brooks": "AB" };

const statsKeys = [
  { num: "250+", key: "250+" },
  { num: "98%", key: "98%" },
  { num: "7+", key: "7+" },
  { num: "40+", key: "40+" },
] as const;

export default function AboutPage() {
  const t = useTranslations('AboutPage');
  const pageRef = useRef<HTMLDivElement>(null);

  const awards = (t.raw('awards.items') as string[]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".about-page__hero-content",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      gsap.utils.toArray<HTMLElement>(".about-page__stat").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 30 },
          {
            opacity: 1, y: 0, duration: 0.6, delay: i * 0.1,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      gsap.utils.toArray<HTMLElement>(".about-page__team-card").forEach((el, i) => {
        gsap.fromTo(
          el,
          { opacity: 0, y: 40 },
          {
            opacity: 1, y: 0, duration: 0.7, delay: (i % 2) * 0.12,
            scrollTrigger: { trigger: el, start: "top 85%" },
          }
        );
      });

      gsap.fromTo(
        ".about-page__mission",
        { opacity: 0, x: -50 },
        {
          opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: ".about-page__mission", start: "top 80%" },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="about-page">
      {/* Hero */}
      <section className="about-page__hero">
        <div className="about-page__hero-bg" aria-hidden="true" />
        <div className="about-page__hero-content">
          <span className="about-page__eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="about-page__hero-title">
            {t('hero.title_1')}<br />
            <span className="about-page__hero-accent">{t('hero.title_accent')}</span>
          </h1>
          <p className="about-page__hero-sub">{t('hero.sub')}</p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-page__stats-section">
        <div className="about-page__container">
          <div className="about-page__stats-grid">
            {statsKeys.map((s) => (
              <div key={s.key} className="about-page__stat">
                <div className="about-page__stat-number">{s.num}</div>
                <div className="about-page__stat-label">{t(`stats.${s.key}`)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-page__mission-section">
        <div className="about-page__container about-page__mission-layout">
          <div className="about-page__mission">
            <span className="about-page__eyebrow">{t('mission.eyebrow')}</span>
            <h2 className="about-page__mission-title">
              {t('mission.title_1')}<br />
              <span className="about-page__mission-accent">{t('mission.title_accent')}</span>
            </h2>
            <p className="about-page__mission-body">{t('mission.body_1')}</p>
            <p className="about-page__mission-body">{t('mission.body_2')}</p>
          </div>
          <div className="about-page__mission-visual" aria-hidden="true">
            <div className="about-page__mission-card">
              <div className="about-page__mission-quote">
                {t('mission.quote')}
              </div>
              <div className="about-page__mission-quote-attr">{t('mission.quote_attr')}</div>
            </div>
            <div className="about-page__mission-glow" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-page__team-section">
        <div className="about-page__container">
          <div className="about-page__section-head">
            <span className="about-page__eyebrow">{t('team.eyebrow')}</span>
            <h2 className="about-page__section-title">
              {t('team.title_1')}<br />
              <span className="about-page__mission-accent">{t('team.title_accent')}</span>
            </h2>
          </div>
          <div className="about-page__team-grid">
            {teamMembers.map((name) => (
              <div key={name} className="about-page__team-card">
                <div className="about-page__team-avatar">{teamInitials[name]}</div>
                <h3 className="about-page__team-name">{name}</h3>
                <div className="about-page__team-role">{t(`team.members.${name}.role`)}</div>
                <p className="about-page__team-bio">{t(`team.members.${name}.bio`)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="about-page__awards">
        <div className="about-page__container">
          <div className="about-page__section-head">
            <span className="about-page__eyebrow">{t('awards.eyebrow')}</span>
            <h2 className="about-page__section-title">{t('awards.title')}</h2>
          </div>
          <ul className="about-page__awards-list">
            {awards.map((award) => (
              <li key={award} className="about-page__award-item">
                <span className="about-page__award-icon" aria-hidden="true">✦</span>
                {award}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="about-page__cta">
        <div className="about-page__cta-glow" aria-hidden="true" />
        <div className="about-page__container about-page__cta-inner">
          <h2 className="about-page__cta-title">{t('cta.title')}</h2>
          <p className="about-page__cta-sub">{t('cta.sub')}</p>
          <Link href="/contacts" className="about-page__cta-btn">{t('cta.btn')}</Link>
        </div>
      </section>
    </div>
  );
}
