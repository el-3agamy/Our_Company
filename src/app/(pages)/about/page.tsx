"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "./about.css";

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { number: "250+", label: "Projects Delivered" },
  { number: "98%", label: "Client Satisfaction" },
  { number: "7+", label: "Years in Post" },
  { number: "40+", label: "Award Nominations" },
];

const team = [
  {
    name: "Marco Visconti",
    role: "Founder & Lead Editor",
    bio: "Former feature film editor with credits on 3 Sundance selections. Marco set up FrameForge to bring cinematic quality to every format.",
    initials: "MV",
  },
  {
    name: "Priya Nair",
    role: "Senior Colorist",
    bio: "Certified DaVinci Resolve colorist with a background in commercial and documentary grade. Priya's palettes are unmistakably cinematic.",
    initials: "PN",
  },
  {
    name: "Remy Fontaine",
    role: "Motion Design Lead",
    bio: "Motion designer and After Effects specialist. Remy transforms static brand identities into kinetic, living animations.",
    initials: "RF",
  },
  {
    name: "Aaliyah Brooks",
    role: "VFX & Compositing",
    bio: "Nuke-certified compositor with a passion for invisible effects. Aaliyah makes the impossible look effortless.",
    initials: "AB",
  },
];

const awards = [
  "Cannes Corporate Media Award — Silver",
  "One Show — Merit, Online Film",
  "Vimeo Staff Pick — 2023 & 2024",
  "D&AD Shortlist — Motion Design",
  "Webby Award — Best Video Series",
];

export default function AboutPage() {
  const pageRef = useRef<HTMLDivElement>(null);

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
          <span className="about-page__eyebrow">Our Story</span>
          <h1 className="about-page__hero-title">
            We Live<br />
            <span className="about-page__hero-accent">In The Edit</span>
          </h1>
          <p className="about-page__hero-sub">
            FrameForge is a boutique post-production studio obsessed with craft. We don't just cut video — we build emotion, frame by frame.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="about-page__stats-section">
        <div className="about-page__container">
          <div className="about-page__stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="about-page__stat">
                <div className="about-page__stat-number">{s.number}</div>
                <div className="about-page__stat-label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="about-page__mission-section">
        <div className="about-page__container about-page__mission-layout">
          <div className="about-page__mission">
            <span className="about-page__eyebrow">Our Philosophy</span>
            <h2 className="about-page__mission-title">
              Great Editing is<br />
              <span className="about-page__mission-accent">Invisible</span>
            </h2>
            <p className="about-page__mission-body">
              The best edit is one where the audience never notices the cut. They're too busy feeling the story. At FrameForge, every decision — every frame held, every transition chosen, every colour pushed — serves the narrative above all else.
            </p>
            <p className="about-page__mission-body">
              We founded this studio on a simple belief: that post-production deserves the same creative investment as production itself. Great footage, poorly edited, is wasted potential. We exist to unlock that potential.
            </p>
          </div>
          <div className="about-page__mission-visual" aria-hidden="true">
            <div className="about-page__mission-card">
              <div className="about-page__mission-quote">
                "Cinema is a mirror by which we often see ourselves."
              </div>
              <div className="about-page__mission-quote-attr">— Martin Scorsese</div>
            </div>
            <div className="about-page__mission-glow" />
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="about-page__team-section">
        <div className="about-page__container">
          <div className="about-page__section-head">
            <span className="about-page__eyebrow">The Team</span>
            <h2 className="about-page__section-title">
              The Minds Behind<br />
              <span className="about-page__mission-accent">The Magic</span>
            </h2>
          </div>
          <div className="about-page__team-grid">
            {team.map((member) => (
              <div key={member.name} className="about-page__team-card">
                <div className="about-page__team-avatar">{member.initials}</div>
                <h3 className="about-page__team-name">{member.name}</h3>
                <div className="about-page__team-role">{member.role}</div>
                <p className="about-page__team-bio">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="about-page__awards">
        <div className="about-page__container">
          <div className="about-page__section-head">
            <span className="about-page__eyebrow">Recognition</span>
            <h2 className="about-page__section-title">Industry Awards</h2>
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
          <h2 className="about-page__cta-title">Work With Us</h2>
          <p className="about-page__cta-sub">Let's make something extraordinary together.</p>
          <Link href="/contacts" className="about-page__cta-btn">Get in Touch →</Link>
        </div>
      </section>
    </div>
  );
}
