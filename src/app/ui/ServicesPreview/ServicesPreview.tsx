"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";
import "./ServicesPreview.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
    {
        id: "video-editing",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 10l4.553-2.277A1 1 0 0121 8.723v6.554a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
            </svg>
        ),
        title: "Video Editing",
        description:
            "Precise cuts, rhythm-driven pacing, and narrative structure that transforms raw footage into compelling stories.",
        tags: ["Premiere Pro", "DaVinci", "Final Cut"],
    },
    {
        id: "color-grading",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10" />
                <path d="M12 2a10 10 0 010 20M12 2C6.477 2 2 6.477 2 12" />
                <path d="M12 6v6l4 2" />
            </svg>
        ),
        title: "Color Grading",
        description:
            "Cinematic color science — from log-to-rec709 transforms to custom LUTs that define your brand's visual signature.",
        tags: ["DaVinci Resolve", "LUT Design", "HDR"],
    },
    {
        id: "motion-graphics",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
        ),
        title: "Motion Graphics",
        description:
            "Animated lower-thirds, kinetic typography, and brand intros that add professional polish to every frame.",
        tags: ["After Effects", "Cinema 4D", "Lottie"],
    },
    {
        id: "showreel",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="12" cy="12" r="3" />
                <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
            </svg>
        ),
        title: "Showreel Production",
        description:
            "Curated highlight reels that showcase your best work with maximum impact — cut to music, timed to perfection.",
        tags: ["Pacing", "Music Sync", "Brand Story"],
    },
    {
        id: "audio-design",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 18V5l12-2v13" />
                <circle cx="6" cy="18" r="3" />
                <circle cx="18" cy="16" r="3" />
            </svg>
        ),
        title: "Audio Design",
        description:
            "Sound design, music licensing, dialogue clean-up, and final mix so your video sounds as good as it looks.",
        tags: ["Audition", "Sound Design", "Foley"],
    },
    {
        id: "vfx",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
        ),
        title: "VFX & Compositing",
        description:
            "Green-screen keying, particle systems, and seamless compositing that pushes creative boundaries.",
        tags: ["Nuke", "After Effects", "Mocha"],
    },
];

export default function ServicesPreview() {
    const t = useTranslations('ServicesPreview');
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const cardsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading animation
            gsap.fromTo(
                headingRef.current,
                { opacity: 0, y: 50 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.8,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: headingRef.current,
                        start: "top 85%",
                        toggleActions: "play none none none",
                    },
                }
            );

            // Cards stagger animation
            gsap.fromTo(
                cardsRef.current,
                { opacity: 0, y: 60, scale: 0.96 },
                {
                    opacity: 1,
                    y: 0,
                    scale: 1,
                    duration: 0.7,
                    stagger: 0.1,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: cardsRef.current[0],
                        start: "top 82%",
                        toggleActions: "play none none none",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="services-preview" id="services">
            {/* Background glow blobs */}
            <div className="services-preview__blob services-preview__blob--left" aria-hidden="true" />
            <div className="services-preview__blob services-preview__blob--right" aria-hidden="true" />

            <div className="services-preview__container">
                {/* Heading */}
                <div ref={headingRef} className="services-preview__heading">
                    <span className="services-preview__eyebrow">{t('eyebrow')}</span>
                    <h2 className="services-preview__title">
                        {t('title_1')}{" "}
                        <span className="services-preview__title-accent">{t('title_accent')}</span>
                    </h2>
                    <p className="services-preview__subtitle">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Cards grid */}
                <div className="services-preview__grid">
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className="services-preview__card"
                            ref={(el) => {
                                if (el) cardsRef.current[i] = el;
                            }}
                        >
                            <div className="services-preview__card-icon">{service.icon}</div>
                            <h3 className="services-preview__card-title">{t(`services.${service.id}.title`)}</h3>
                            <p className="services-preview__card-desc">{t(`services.${service.id}.description`)}</p>
                            <div className="services-preview__card-tags">
                                {t.raw(`services.${service.id}.tags`).map((tag: string) => (
                                    <span key={tag} className="services-preview__card-tag">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                            <div className="services-preview__card-glow" aria-hidden="true" />
                        </div>
                    ))}
                </div>

                {/* CTA */}
                <div className="services-preview__cta">
                    <Link href="/services" className="services-preview__cta-btn">
                        {t('cta')}
                        <span className="services-preview__cta-arrow">→</span>
                    </Link>
                </div>
            </div>
        </section>
    );
}
