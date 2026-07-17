"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const serviceIds = ["offline-edit", "color-grade", "motion-vfx", "audio-post"] as const;

const serviceVisuals: Record<string, string> = {
  "offline-edit": "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=800",
  "color-grade": "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
  "motion-vfx": "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800",
  "audio-post": "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800",
};

const prefixes: Record<string, string> = {
  "offline-edit": "01 //",
  "color-grade": "02 //",
  "motion-vfx": "03 //",
  "audio-post": "04 //",
};

export default function ServicesPage() {
  const t = useTranslations('ServicesPage');
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".services-page__hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      gsap.utils.toArray<HTMLElement>(".services-page__block").forEach((block) => {
        const text = block.querySelector(".services-page__block-text");
        const visual = block.querySelector(".services-page__block-visual");

        gsap.fromTo(
          [text, visual],
          { opacity: 0, y: 60 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            ease: "power3.out",
            scrollTrigger: {
              trigger: block,
              start: "top 80%",
            },
          }
        );
      });
    }, pageRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="services-page">
      {/* Hero */}
      <section className="services-page__hero">
        <div className="services-page__hero-bg" aria-hidden="true" />
        <div className="services-page__hero-content">
          <h1 className="services-page__hero-title">
            {t('hero.title_1')}<br />
            <span className="services-page__hero-accent">{t('hero.title_accent')}</span>
          </h1>
          <p className="services-page__hero-sub">{t('hero.sub')}</p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-page__blocks">
        <div className="services-page__container">
          {serviceIds.map((id, i) => {
            const tags = t.raw(`services.${id}.tags`) as string[];
            const features = t.raw(`services.${id}.features`) as string[];
            return (
              <div
                key={id}
                className={`services-page__block ${i % 2 !== 0 ? "services-page__block--reverse" : ""}`}
              >
                {/* Text side */}
                <div className="services-page__block-text">
                  <div className="services-page__block-eyebrow">{prefixes[id]}</div>
                  <h2 className="services-page__block-title">{t(`services.${id}.title`)}</h2>
                  <div className="services-page__block-tags">
                    {tags.map((tag) => (
                      <span key={tag} className="services-page__block-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <p className="services-page__block-desc">{t(`services.${id}.description`)}</p>
                  <ul className="services-page__block-features">
                    {features.map((feat) => (
                      <li key={feat}>
                        <span className="services-page__block-check">✓</span>
                        {feat}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Visual side */}
                <div className="services-page__block-visual">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={serviceVisuals[id]}
                    alt={t(`services.${id}.title`)}
                    className="services-page__block-img"
                    loading="lazy"
                  />
                  <div className="services-page__block-glow" aria-hidden="true" />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="services-page__cta">
        <div className="services-page__container services-page__cta-inner">
          <h2 className="services-page__cta-title">{t('cta.title')}</h2>
          <p className="services-page__cta-sub">{t('cta.sub')}</p>
          <Link href="/contacts" className="services-page__cta-btn">
            {t('cta.btn')}
          </Link>
        </div>
      </section>
    </div>
  );
}
