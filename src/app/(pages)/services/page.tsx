"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "./services.css";

gsap.registerPlugin(ScrollTrigger);

const detailedServices = [
  {
    id: "offline-edit",
    prefix: "01 //",
    title: "Offline Editing",
    tags: ["Narrative", "Documentary", "Commercial"],
    description: "The foundation of every great piece. We shape the narrative, establish pacing, and build the story structure. We cut on Premiere Pro, Avid, or DaVinci depending on your workflow needs.",
    features: [
      "Narrative structure development",
      "Multi-cam assembly",
      "Dialogue and performance selection",
      "Pacing and rhythmic cutting",
    ],
    visual: "https://images.pexels.com/photos/257904/pexels-photo-257904.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "color-grade",
    prefix: "02 //",
    title: "Color Grading",
    tags: ["DaVinci Resolve", "HDR", "Look Dev"],
    description: "We don't just balance shots — we create a look. Our grading suite is calibrated for cinema and broadcast standards, ensuring your film looks perfect on a 60-foot screen or an iPhone.",
    features: [
      "Log to Rec.709 / Rec.2020 transforms",
      "Custom LUT development for on-set",
      "Shot matching and continuity",
      "Stylised look development",
    ],
    visual: "https://images.pexels.com/photos/1117132/pexels-photo-1117132.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "motion-vfx",
    prefix: "03 //",
    title: "Motion & VFX",
    tags: ["After Effects", "Nuke", "Cinema 4D"],
    description: "From invisible clean-ups to full CG product integrations. We handle 2D motion graphics, kinetic typography, green-screen keying, and compositing.",
    features: [
      "Wire removal & clean-up",
      "Screen replacements",
      "2D/3D Title sequences",
      "Motion tracking & rotoscoping",
    ],
    visual: "https://images.pexels.com/photos/3183132/pexels-photo-3183132.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "audio-post",
    prefix: "04 //",
    title: "Audio Post",
    tags: ["Sound Design", "Mix", "Foley"],
    description: "Video is 50% sound. We clean up production audio, design immersive soundscapes, and deliver broadcast-compliant mixes that punch through.",
    features: [
      "Dialogue clean-up (iZotope RX)",
      "Custom sound design and Foley",
      "Music search and licensing",
      "Stereo & 5.1 mixing",
    ],
    visual: "https://images.pexels.com/photos/164745/pexels-photo-164745.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ServicesPage() {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero entrance
      gsap.fromTo(
        ".services-page__hero-content",
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: "power3.out", delay: 0.2 }
      );

      // Stagger service blocks
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
            End-to-End<br />
            <span className="services-page__hero-accent">Post-Production</span>
          </h1>
          <p className="services-page__hero-sub">
            We offer a full suite of finishing services under one roof. Work with us for the entire process, or bring us in for specific disciplines.
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="services-page__blocks">
        <div className="services-page__container">
          {detailedServices.map((svc, i) => (
            <div
              key={svc.id}
              className={`services-page__block ${i % 2 !== 0 ? "services-page__block--reverse" : ""
                }`}
            >
              {/* Text side */}
              <div className="services-page__block-text">
                <div className="services-page__block-eyebrow">{svc.prefix}</div>
                <h2 className="services-page__block-title">{svc.title}</h2>
                <div className="services-page__block-tags">
                  {svc.tags.map((tag) => (
                    <span key={tag} className="services-page__block-tag">
                      {tag}
                    </span>
                  ))}
                </div>
                <p className="services-page__block-desc">{svc.description}</p>
                <ul className="services-page__block-features">
                  {svc.features.map((feat) => (
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
                  src={svc.visual}
                  alt={svc.title}
                  className="services-page__block-img"
                  loading="lazy"
                />
                <div className="services-page__block-glow" aria-hidden="true" />
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="services-page__cta">
        <div className="services-page__container services-page__cta-inner">
          <h2 className="services-page__cta-title">Ready to Cut?</h2>
          <p className="services-page__cta-sub">
            Send us your brief, and we'll assemble the perfect team and workflow for your project.
          </p>
          <Link href="/contacts" className="services-page__cta-btn">
            Get a Quote →
          </Link>
        </div>
      </section>
    </div>
  );
}
