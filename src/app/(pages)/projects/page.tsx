"use client";

import { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Link from "next/link";
import "./projects.css";

gsap.registerPlugin(ScrollTrigger);

type FilterKey = "All" | "Brand Film" | "Documentary" | "Social" | "Commercial" | "Music Video";

const filters: FilterKey[] = ["All", "Brand Film", "Documentary", "Social", "Commercial", "Music Video"];

const projects = [
  {
    id: "axiom-sport",
    category: "Brand Film" as FilterKey,
    title: "Axiom Sport — Global Launch",
    year: "2024",
    duration: "3:42",
    description: "A cinematic product launch film distributed across 14 markets. Full edit, color grade, and international versioning.",
    thumb: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "silent-frames",
    category: "Documentary" as FilterKey,
    title: "Silent Frames",
    year: "2024",
    duration: "87:00",
    description: "Feature documentary on urban street photographers. Selected for three international film festivals.",
    thumb: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "neon-nights",
    category: "Social" as FilterKey,
    title: "Neon Nights — Club Series",
    year: "2024",
    duration: "Episode series",
    description: "24-episode vertical social series. Combined 18M+ views across platforms in first 30 days.",
    thumb: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "luxe-tvc",
    category: "Commercial" as FilterKey,
    title: "Luxe Interiors TVC",
    year: "2023",
    duration: "0:30",
    description: "30-second broadcast commercial with VFX compositing and luxury color treatment.",
    thumb: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "pulse-mv",
    category: "Music Video" as FilterKey,
    title: "Pulse — Official Music Video",
    year: "2024",
    duration: "3:58",
    description: "Chart-topping artist's visual release. Full edit, VFX, and custom animated elements.",
    thumb: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
  {
    id: "summit-reel",
    category: "Brand Film" as FilterKey,
    title: "Summit 2024 Highlight Reel",
    year: "2024",
    duration: "4:10",
    description: "Multi-camera event coverage condensed into a high-energy highlight reel.",
    thumb: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
  },
];

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState<FilterKey>("All");
  const pageRef = useRef<HTMLDivElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  const filtered = activeFilter === "All"
    ? projects
    : projects.filter((p) => p.category === activeFilter);

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
          <span className="projects-page__eyebrow">Portfolio</span>
          <h1 className="projects-page__hero-title">
            Work That<br />
            <span className="projects-page__hero-accent">Speaks</span>
          </h1>
          <p className="projects-page__hero-sub">
            Selected projects spanning brand films, documentaries, social content, and beyond.
          </p>
        </div>
      </section>

      {/* Filter + Grid */}
      <section className="projects-page__gallery">
        <div className="projects-page__container">
          {/* Filter tabs */}
          <div className="projects-page__filters" role="tablist" aria-label="Filter projects">
            {filters.map((f) => (
              <button
                key={f}
                role="tab"
                aria-selected={activeFilter === f}
                className={`projects-page__filter-btn ${activeFilter === f ? " active" : ""}`}
                onClick={() => setActiveFilter(f)}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Grid */}
          <div ref={gridRef} className="projects-page__grid">
            {filtered.map((project) => (
              <div key={project.id} className="projects-page__card">
                {/* Media */}
                <div className="projects-page__card-media">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.thumb}
                    alt={project.title}
                    className="projects-page__card-img"
                    loading="lazy"
                  />
                  <div className="projects-page__card-overlay">
                    <div className="projects-page__card-play" aria-hidden="true">
                      <div className="projects-page__card-play-icon" />
                    </div>
                    <div className="projects-page__card-meta-overlay">
                      <span>{project.duration}</span>
                    </div>
                  </div>
                </div>

                {/* Info */}
                <div className="projects-page__card-info">
                  <div className="projects-page__card-top">
                    <span className="projects-page__card-category">{project.category}</span>
                    <span className="projects-page__card-year">{project.year}</span>
                  </div>
                  <h2 className="projects-page__card-title">{project.title}</h2>
                  <p className="projects-page__card-desc">{project.description}</p>
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
          <h2 className="projects-page__cta-title">Your Project Could Be Next</h2>
          <p className="projects-page__cta-sub">Let's create something you're proud to share.</p>
          <Link href="/contacts" className="projects-page__cta-btn">Start a Conversation →</Link>
        </div>
      </section>
    </div>
  );
}
