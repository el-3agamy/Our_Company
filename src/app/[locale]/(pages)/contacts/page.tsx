"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./contacts.css";

gsap.registerPlugin(ScrollTrigger);

export default function ContactsPage() {
  const t = useTranslations('ContactsPage');
  const pageRef = useRef<HTMLDivElement>(null);

  const contactInfo = [
    {
      label: t('info.Email Us'),
      value: t('info.Email Us'),
      href: `mailto:${t('info.Email Us')}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      label: t('info.Call Us'),
      value: t('info.Call Us'),
      href: `tel:${t('info.Call Us').replace(/\D/g, '')}`,
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
    },
    {
      label: "Studio",
      value: t('info.Studio Location'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
    {
      label: t('info.Response Time'),
      value: t('info.Response Time'),
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".contacts-page__hero-content",
        { opacity: 0, y: 60 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.3 }
      );

      gsap.fromTo(
        ".contacts-page__form-wrapper",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contacts-page__form-wrapper",
            start: "top 85%",
          },
        }
      );

      gsap.fromTo(
        ".contacts-page__info",
        { opacity: 0, y: 50 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".contacts-page__info",
            start: "top 85%",
          },
        }
      );
    }, pageRef);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you! We'll be in touch within 4 business hours.");
  };

  return (
    <div ref={pageRef} className="contacts-page">
      {/* Hero */}
      <section className="contacts-page__hero">
        <div className="contacts-page__hero-bg" aria-hidden="true" />
        <div className="contacts-page__hero-content">
          <span className="contacts-page__eyebrow">{t('hero.eyebrow')}</span>
          <h1 className="contacts-page__hero-title">
            {t('hero.title_1')}<br />
            <span className="contacts-page__hero-accent">{t('hero.title_accent')}</span>
          </h1>
          <p className="contacts-page__hero-sub">{t('hero.sub')}</p>
        </div>
      </section>

      {/* Form + Info */}
      <section className="contacts-page__main">
        <div className="contacts-page__container">
          <div className="contacts-page__layout">
            {/* Form */}
            <div className="contacts-page__form-wrapper">
              <form className="contacts-page__form" onSubmit={handleSubmit}>
                <div className="contacts-page__form-row">
                  <div className="contacts-page__form-group">
                    <label className="contacts-page__form-label" htmlFor="contact-name">
                      {t('form.name_lbl')}
                    </label>
                    <input
                      id="contact-name"
                      className="contacts-page__form-input"
                      type="text"
                      placeholder={t('form.name_plh')}
                      required
                    />
                  </div>
                  <div className="contacts-page__form-group">
                    <label className="contacts-page__form-label" htmlFor="contact-email">
                      {t('form.email_lbl')}
                    </label>
                    <input
                      id="contact-email"
                      className="contacts-page__form-input"
                      type="email"
                      placeholder={t('form.email_plh')}
                      required
                    />
                  </div>
                </div>

                <div className="contacts-page__form-row">
                  <div className="contacts-page__form-group">
                    <label className="contacts-page__form-label" htmlFor="contact-type">
                      {t('form.type_lbl')}
                    </label>
                    <select
                      id="contact-type"
                      className="contacts-page__form-select"
                      defaultValue=""
                      required
                    >
                      <option value="" disabled>
                        {t('form.type_opt_ph')}
                      </option>
                      <option value="video-editing">{t('form.type_opts.video-editing')}</option>
                      <option value="color-grading">{t('form.type_opts.color-grading')}</option>
                      <option value="motion-graphics">{t('form.type_opts.motion-graphics')}</option>
                      <option value="vfx">{t('form.type_opts.vfx')}</option>
                      <option value="audio-post">{t('form.type_opts.audio-post')}</option>
                      <option value="full-post">{t('form.type_opts.full-post')}</option>
                      <option value="other">{t('form.type_opts.other')}</option>
                    </select>
                  </div>
                  <div className="contacts-page__form-group">
                    <label className="contacts-page__form-label" htmlFor="contact-budget">
                      {t('form.budget_lbl')}
                    </label>
                    <select
                      id="contact-budget"
                      className="contacts-page__form-select"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        {t('form.budget_opt_ph')}
                      </option>
                      <option value="under-5k">{t('form.budget_opts.under-5k')}</option>
                      <option value="5k-15k">{t('form.budget_opts.5k-15k')}</option>
                      <option value="15k-50k">{t('form.budget_opts.15k-50k')}</option>
                      <option value="50k-plus">{t('form.budget_opts.50k-plus')}</option>
                      <option value="not-sure">{t('form.budget_opts.not-sure')}</option>
                    </select>
                  </div>
                </div>

                <div className="contacts-page__form-group">
                  <label className="contacts-page__form-label" htmlFor="contact-message">
                    {t('form.msg_lbl')}
                  </label>
                  <textarea
                    id="contact-message"
                    className="contacts-page__form-textarea"
                    placeholder={t('form.msg_plh')}
                    required
                  />
                </div>

                <button type="submit" className="contacts-page__form-submit">
                  <span>{t('form.submit')}</span>
                  <span aria-hidden="true">→</span>
                </button>
              </form>
            </div>

            {/* Info sidebar */}
            <div className="contacts-page__info">
              <h2 className="contacts-page__info-title">{t('info.title')}</h2>
              <div className="contacts-page__info-list">
                {contactInfo.map((item) => (
                  <div key={item.label} className="contacts-page__info-item">
                    <div className="contacts-page__info-icon">{item.icon}</div>
                    <div>
                      <div className="contacts-page__info-label">{item.label}</div>
                      <div className="contacts-page__info-value">
                        {item.href ? (
                          <a href={item.href}>{item.value}</a>
                        ) : (
                          item.value.split("\\n").map((line, i) => (
                            <span key={i}>
                              {line}
                              {i < item.value.split("\\n").length - 1 && <br />}
                            </span>
                          ))
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Availability */}
              <div className="contacts-page__availability">
                <div className="contacts-page__availability-dot" />
                <div className="contacts-page__availability-text">
                  <strong>{t('info.avail_strong')}</strong>
                  <br />
                  {t('info.avail_next')}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
