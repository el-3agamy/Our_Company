"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./WorkShowcase.css";

gsap.registerPlugin(ScrollTrigger);

const projects = [
    {
        id: "brand-film-axiom",
        category: "Brand Film",
        title: "Axiom Sport — Launch Campaign",
        description: "Full post-production for a global sportswear launch. Color graded, motion graphics, and 4K delivery.",
        thumb: "https://images.pexels.com/photos/2873486/pexels-photo-2873486.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "doc-silent-frames",
        category: "Documentary",
        title: "Silent Frames",
        description: "Feature-length documentary on street photographers. 87 minutes, DaVinci color grade.",
        thumb: "https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "social-neon-nights",
        category: "Social Content",
        title: "Neon Nights — Club Series",
        description: "24-episode vertical social series. Fast-cut editing + custom animated overlays.",
        thumb: "https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "commercial-luxe",
        category: "Commercial",
        title: "Luxe Interiors TVC",
        description: "30-second TV commercial with VFX compositing and luxury grade.",
        thumb: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "music-video-pulse",
        category: "Music Video",
        title: "Pulse — Official Music Video",
        description: "Full edit + grade + motion effects for a chart-topping artist's visual release.",
        thumb: "https://images.pexels.com/photos/1916824/pexels-photo-1916824.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
    {
        id: "corp-summit-reel",
        category: "Corporate",
        title: "Summit 2024 Highlight Reel",
        description: "Multi-camera event highlight reel with live-action B-roll and keynote integration.",
        thumb: "https://images.pexels.com/photos/1181406/pexels-photo-1181406.jpeg?auto=compress&cs=tinysrgb&w=800",
    },
];

export default function WorkShowcase() {
    const t = useTranslations('WorkShowcase');
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLAnchorElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                    },
                }
            );

            cardsRef.current.forEach((card, i) => {
                gsap.fromTo(
                    card,
                    { opacity: 0, y: 50 },
                    {
                        opacity: 1,
                        y: 0,
                        duration: 0.7,
                        delay: (i % 3) * 0.1,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: card,
                            start: "top 88%",
                        },
                    }
                );
            });
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="work-showcase" id="work">
            <div className="work-showcase__container">
                {/* Heading */}
                <div ref={headingRef} className="work-showcase__heading">
                    <span className="work-showcase__eyebrow">{t('eyebrow')}</span>
                    <h2 className="work-showcase__title">
                        {t('title_1')}{" "}
                        <span className="work-showcase__title-accent">{t('title_accent')}</span>
                    </h2>
                    <p className="work-showcase__subtitle">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Grid */}
                <div className="work-showcase__grid">
                    {projects.map((project, i) => (
                        <Link
                            key={project.id}
                            href="/projects"
                            className="work-showcase__card"
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el;
                            }}
                            aria-label={`View project: ${project.title}`}
                        >
                            {/* Thumbnail */}
                            <div className="work-showcase__card-media">
                                {/* eslint-disable-next-line @next/next/no-img-element */}
                                <img
                                    src={project.thumb}
                                    alt={project.title}
                                    className="work-showcase__card-img"
                                    loading="lazy"
                                />
                                {/* Overlay */}
                                <div className="work-showcase__card-overlay">
                                    <span className="work-showcase__card-cta">{t('viewProject')}</span>
                                </div>
                            </div>

                            {/* Info */}
                            <div className="work-showcase__card-info">
                                <span className="work-showcase__card-category">
                                    {t(`projects.${project.id}.category`)}
                                </span>
                                <h3 className="work-showcase__card-title">{t(`projects.${project.id}.title`)}</h3>
                                <p className="work-showcase__card-desc">{t(`projects.${project.id}.description`)}</p>
                            </div>
                        </Link>
                    ))}
                </div>

                {/* CTA */}
                <div className="work-showcase__cta">
                    <Link href="/projects" className="work-showcase__cta-btn">
                        {t('cta')}
                        <span className="work-showcase__cta-arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
