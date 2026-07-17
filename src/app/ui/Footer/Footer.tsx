"use client";

import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./Footer.css";

const navCols = [
  {
    heading: "Services",
    links: [
      { label: "Video Editing", href: "/services" },
      { label: "Color Grading", href: "/services" },
      { label: "Motion Graphics", href: "/services" },
      { label: "Showreel Production", href: "/services" },
      { label: "Audio Design", href: "/services" },
      { label: "VFX & Compositing", href: "/services" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Our Work", href: "/projects" },
      { label: "Process", href: "/#process" },
      { label: "Contact", href: "/contacts" },
    ],
  },
];

const socials = [
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" />
      </svg>
    ),
  },
  {
    label: "Vimeo",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22 7.42c-.09 2.01-1.49 4.76-4.21 8.25C15.03 19.31 12.6 21 10.54 21c-1.3 0-2.39-1.2-3.28-3.59L5.5 11.68C4.87 9.29 4.2 8.09 3.5 8.09c-.16 0-.72.34-1.67 1.01L1 7.77c1.05-.92 2.08-1.84 3.1-2.77 1.4-1.21 2.45-1.85 3.15-1.91 1.65-.16 2.67.97 3.05 3.38.41 2.6.7 4.22.86 4.85.48 2.17 1 3.25 1.56 3.25.44 0 1.1-.7 1.99-2.09.88-1.4 1.35-2.46 1.41-3.19.13-1.2-.35-1.81-1.41-1.81-.5 0-1.02.12-1.55.34.98-3.23 2.86-4.79 5.65-4.68 2.06.08 3.03 1.4 2.89 3.96z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.97C18.88 4 12 4 12 4s-6.88 0-8.59.45a2.78 2.78 0 00-1.95 1.97A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.4a2.78 2.78 0 001.95-1.97A29 29 0 0023 12a29 29 0 00-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden="true">
        <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
];

export default function Footer() {
  const t = useTranslations('Footer');

  return (
    <footer className="footer" aria-label="Site footer">
      {/* Top divider glow */}
      <div className="footer__top-glow" aria-hidden="true" />

      <div className="footer__container">
        {/* Upper: brand + nav */}
        <div className="footer__upper">
          {/* Brand column */}
          <div className="footer__brand">
            <Link href="/" className="footer__logo">
              <div className="footer__logo-icon" aria-hidden="true">
                <div className="footer__logo-play" />
              </div>
              <span className="footer__logo-text">
                Frame<span>Forge</span>
              </span>
            </Link>
            <p className="footer__tagline">
              {t('tagline')}
            </p>
            {/* Social icons */}
            <div className="footer__socials" aria-label="Social media links">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  className="footer__social-icon"
                  aria-label={s.label}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Nav columns */}
          {navCols.map((col) => (
            <div key={col.heading} className="footer__nav-col">
              <h3 className="footer__nav-heading">{t(`nav.${col.heading}`)}</h3>
              <ul className="footer__nav-list">
                {col.links.map((link) => (
                  <li key={link.label}>
                    <Link href={link.href as any} className="footer__nav-link">
                      {t(`nav.${link.label}`)}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          {/* Contact column */}
          <div className="footer__nav-col">
            <h3 className="footer__nav-heading">{t('contact.heading')}</h3>
            <ul className="footer__contact-list">
              <li>
                <a href="mailto:hello@frameforge.studio" className="footer__nav-link">
                  hello@frameforge.studio
                </a>
              </li>
              <li>
                <a href="tel:+10000000000" className="footer__nav-link">
                  +1 (000) 000-0000
                </a>
              </li>
              <li className="footer__address">
                {t('contact.address').split('\n').map((line: string, i: number) => (
                  <span key={i}>{line}<br /></span>
                ))}
              </li>
            </ul>
            <Link href="/contacts" className="footer__cta">
              {t('contact.cta')}
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="footer__divider" aria-hidden="true" />

        {/* Bottom bar */}
        <div className="footer__bottom">
          <span className="footer__copy">
            © {new Date().getFullYear()} {t('contact.copyright')}
          </span>
          <div className="footer__legal">
            <Link href="#" className="footer__legal-link">{t('contact.privacy')}</Link>
            <Link href="#" className="footer__legal-link">{t('contact.terms')}</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
