"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import "./Testimonials.css";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
    {
        id: 1,
        quote: "FrameForge turned our raw footage into a cinematic brand film that exceeded every expectation. The color grade alone was worth every penny.",
        name: "Sophia Reinhardt",
        role: "Creative Director, Axiom Sport",
        avatar: "SR",
    },
    {
        id: 2,
        quote: "The fastest, most communicative post-production team we've ever worked with. 48-hour turnarounds without sacrificing an ounce of quality.",
        name: "Marcus Osei",
        role: "Head of Content, Neon Media",
        avatar: "MO",
    },
    {
        id: 3,
        quote: "They understood our documentary's emotional core immediately. The edit made our subjects' stories feel truly heard.",
        name: "Lena Voss",
        role: "Independent Filmmaker",
        avatar: "LV",
    },
    {
        id: 4,
        quote: "Our TVC increased conversions by 34% — we attribute that directly to the world-class editing and motion work from FrameForge.",
        name: "James Harlow",
        role: "CMO, Luxe Interiors",
        avatar: "JH",
    },
    {
        id: 5,
        quote: "Six music videos in and they still bring fresh energy to every project. The VFX compositing on our last release was absolutely stunning.",
        name: "Aida Serrano",
        role: "Artist Manager, Pulse Records",
        avatar: "AS",
    },
    {
        id: 6,
        quote: "Professional, creative, and obsessively detailed. FrameForge is our go-to for every corporate video project.",
        name: "Daniel Kwame",
        role: "Communications Lead, Summit Corp",
        avatar: "DK",
    },
];

// Duplicate for seamless loop
const allTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
    const t = useTranslations('Testimonials');
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading fade in
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
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="testimonials" id="testimonials">
            <div className="testimonials__container">
                {/* Heading */}
                <div ref={headingRef} className="testimonials__heading">
                    <span className="testimonials__eyebrow">{t('eyebrow')}</span>
                    <h2 className="testimonials__title">
                        {t('title_1')}{" "}
                        <span className="testimonials__title-accent">{t('title_accent')}</span>
                    </h2>
                    <p className="testimonials__subtitle">
                        {t('subtitle')}
                    </p>
                </div>
            </div>

            {/* Marquee track — full-bleed, no container */}
            <div className="testimonials__marquee-outer">
                <div className="testimonials__marquee-fade testimonials__marquee-fade--left" aria-hidden="true" />
                <div className="testimonials__marquee-fade testimonials__marquee-fade--right" aria-hidden="true" />
                <div ref={trackRef} className="testimonials__track">
                    {allTestimonials.map((t_item, i) => (
                        <div key={`${t_item.id}-${i}`} className="testimonials__card">
                            {/* Stars */}
                            <div className="testimonials__stars" aria-label="5 stars">
                                {Array.from({ length: 5 }).map((_, s) => (
                                    <span key={s} className="testimonials__star" aria-hidden="true">★</span>
                                ))}
                            </div>
                            <p className="testimonials__quote">"{t(`reviews.${t_item.id}.quote`)}"</p>
                            <div className="testimonials__author">
                                <div className="testimonials__avatar" aria-hidden="true">
                                    {t_item.avatar}
                                </div>
                                <div>
                                    <div className="testimonials__name">{t(`reviews.${t_item.id}.name`)}</div>
                                    <div className="testimonials__role">{t(`reviews.${t_item.id}.role`)}</div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
