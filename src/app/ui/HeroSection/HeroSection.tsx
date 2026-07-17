"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { Link } from '@/i18n/routing';
import { useTranslations } from 'next-intl';
import "./HeroSection.css";

export default function HeroSection() {
    const t = useTranslations('Hero');
    const sectionRef = useRef<HTMLDivElement>(null);
    const videoWrapRef = useRef<HTMLDivElement>(null);
    const eyebrowRef = useRef<HTMLDivElement>(null);
    const headline1Ref = useRef<HTMLSpanElement>(null);
    const headline2Ref = useRef<HTMLSpanElement>(null);
    const headline3Ref = useRef<HTMLSpanElement>(null);
    const subtitleRef = useRef<HTMLParagraphElement>(null);
    const ctasRef = useRef<HTMLDivElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({
                defaults: { ease: "power3.out" },
                delay: 0.3,
            });

            // 1. Video fades in with slight zoom
            tl.fromTo(
                videoWrapRef.current,
                { opacity: 0, scale: 1.08 },
                { opacity: 1, scale: 1, duration: 1.8, ease: "power2.out" }
            );

            // 2. Eyebrow pill fades in
            tl.fromTo(
                eyebrowRef.current,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=1.2"
            );

            // 3. Headline words fly up from bottom
            tl.fromTo(
                [headline1Ref.current, headline2Ref.current, headline3Ref.current],
                { y: "110%" },
                {
                    y: "0%",
                    duration: 0.9,
                    stagger: 0.12,
                    ease: "expo.out",
                },
                "-=0.5"
            );

            // 4. Subtitle fades up
            tl.fromTo(
                subtitleRef.current,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.7 },
                "-=0.4"
            );

            // 5. CTAs slide up
            tl.fromTo(
                ctasRef.current,
                { opacity: 0, y: 24 },
                { opacity: 1, y: 0, duration: 0.6 },
                "-=0.4"
            );

            // 6. Stats row fades in
            tl.fromTo(
                statsRef.current,
                { opacity: 0, y: 16 },
                { opacity: 1, y: 0, duration: 0.5 },
                "-=0.3"
            );

            // 7. Scroll indicator appears
            tl.fromTo(
                scrollRef.current,
                { opacity: 0 },
                { opacity: 1, duration: 0.6 },
                "-=0.2"
            );

            // Ambient parallax on mouse move
            const section = sectionRef.current;
            const video = videoWrapRef.current;
            if (!section || !video) return;

            const handleMouseMove = (e: MouseEvent) => {
                const { clientX, clientY } = e;
                const { innerWidth, innerHeight } = window;
                const xPct = (clientX / innerWidth - 0.5) * 2;
                const yPct = (clientY / innerHeight - 0.5) * 2;

                gsap.to(video, {
                    xPercent: xPct * -1.5,
                    yPercent: yPct * -1.5,
                    duration: 2.5,
                    ease: "power2.out",
                });
            };

            section.addEventListener("mousemove", handleMouseMove);
            return () => section.removeEventListener("mousemove", handleMouseMove);
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    const handleScrollDown = () => {
        window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
    };

    return (
        <section ref={sectionRef} className="hero" aria-label="Hero">
            {/* Background Video */}
            <div ref={videoWrapRef} className="hero__video-wrap">
                <video
                    className="hero__video"
                    autoPlay
                    muted
                    loop
                    playsInline
                    preload="auto"
                    src="https://videos.pexels.com/video-files/2278095/2278095-hd_1920_1080_30fps.mp4"
                    aria-hidden="true"
                />
                <div className="hero__overlay" />
                <div className="hero__noise" />
            </div>

            {/* Content */}
            <div className="hero__content">
                {/* Eyebrow */}
                <div ref={eyebrowRef} className="hero__eyebrow">
                    <span className="hero__eyebrow-dot" />
                    <span className="hero__eyebrow-text">{t('eyebrow')}</span>
                </div>

                {/* Headline – split into lines for GSAP */}
                <h1 className="hero__headline" aria-label={t('title')}>
                    <span className="hero__headline-line">
                        <span ref={headline1Ref} className="hero__headline-word">
                            {t('title').split(' ')[0]} {t('title').split(' ')[1]}
                        </span>
                    </span>
                    <span className="hero__headline-line">
                        <span
                            ref={headline2Ref}
                            className="hero__headline-word hero__headline-accent"
                        >
                            {t('title').split(' ')[2]}
                        </span>
                    </span>
                    <span className="hero__headline-line">
                        <span ref={headline3Ref} className="hero__headline-word">
                            {t('title').split(' ').slice(3).join(' ')}
                        </span>
                    </span>
                </h1>

                {/* Subtitle */}
                <p ref={subtitleRef} className="hero__subtitle">
                    {t('subtitle')}
                </p>

                {/* CTAs */}
                <div ref={ctasRef} className="hero__ctas">
                    <button
                        className="hero__btn-primary"
                        aria-label={t('watchShowreel')}
                        onClick={() => alert("Showreel coming soon!")}
                    >
                        <span className="hero__btn-primary-icon" aria-hidden="true">
                            <span className="hero__btn-primary-play" />
                        </span>
                        <span>{t('watchShowreel')}</span>
                    </button>
                    <Link href="/contacts" className="hero__btn-secondary">
                        <span>{t('startProject')}</span>
                        <span className="hero__btn-arrow" aria-hidden="true">→</span>
                    </Link>
                </div>

                {/* Stats */}
                <div ref={statsRef} className="hero__stats">
                    <div className="hero__stat">
                        <div className="hero__stat-number">{t('stat_projects_num')}</div>
                        <div className="hero__stat-label">{t('stat_projects_label')}</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-number">{t('stat_satisfaction_num')}</div>
                        <div className="hero__stat-label">{t('stat_satisfaction_label')}</div>
                    </div>
                    <div className="hero__stat-divider" />
                    <div className="hero__stat">
                        <div className="hero__stat-number">{t('stat_years_num')}</div>
                        <div className="hero__stat-label">{t('stat_years_label')}</div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div
                ref={scrollRef}
                className="hero__scroll"
                role="button"
                aria-label={t('scrollDown')}
                tabIndex={0}
                onClick={handleScrollDown}
                onKeyDown={(e) => e.key === "Enter" && handleScrollDown()}
            >
                <span className="hero__scroll-label">{t('scrollDown')}</span>
                <div className="hero__scroll-line" />
            </div>
        </section>
    );
}
