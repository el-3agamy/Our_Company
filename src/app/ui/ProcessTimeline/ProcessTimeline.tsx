"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import "./ProcessTimeline.css";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        number: "01",
        title: "Discovery Brief",
        description:
            "We dive deep into your vision, audience, and goals. A shared creative brief ensures we're aligned before a single frame is touched.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
        ),
    },
    {
        number: "02",
        title: "Editing & Assembly",
        description:
            "Our editors craft the rough cut — narrative structure, pacing, and rhythm — using the footage and brief as our compass.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                <path d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
        ),
    },
    {
        number: "03",
        title: "Review & Refine",
        description:
            "You receive a private link to review. Feedback is collected, revisions are made — up to 3 rounds until it's exactly right.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
        ),
    },
    {
        number: "04",
        title: "Final Delivery",
        description:
            "Broadcast-ready files delivered in your required formats — 4K ProRes, H.264, vertical cuts, platform-specific exports, all in one package.",
        icon: (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
            </svg>
        ),
    },
];

export default function ProcessTimeline() {
    const t = useTranslations('ProcessTimeline');
    const sectionRef = useRef<HTMLElement>(null);
    const headingRef = useRef<HTMLDivElement>(null);
    const lineRef = useRef<HTMLDivElement>(null);
    const stepsRef = useRef<HTMLDivElement[]>([]);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // Heading
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

            // Connector line draws in
            gsap.fromTo(
                lineRef.current,
                { scaleX: 0 },
                {
                    scaleX: 1,
                    duration: 1.4,
                    ease: "power2.inOut",
                    scrollTrigger: {
                        trigger: lineRef.current,
                        start: "top 80%",
                    },
                }
            );

            // Steps stagger
            gsap.fromTo(
                stepsRef.current,
                { opacity: 0, y: 40 },
                {
                    opacity: 1,
                    y: 0,
                    duration: 0.6,
                    stagger: 0.15,
                    ease: "power3.out",
                    scrollTrigger: {
                        trigger: stepsRef.current[0],
                        start: "top 82%",
                    },
                }
            );
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="process" id="process">
            <div className="process__container">
                {/* Heading */}
                <div ref={headingRef} className="process__heading">
                    <span className="process__eyebrow">{t('eyebrow')}</span>
                    <h2 className="process__title">
                        {t('title_1')}{" "}
                        <span className="process__title-accent">{t('title_accent')}</span>
                    </h2>
                    <p className="process__subtitle">
                        {t('subtitle')}
                    </p>
                </div>

                {/* Timeline */}
                <div className="process__timeline">
                    {/* Connector line */}
                    <div className="process__line-track">
                        <div ref={lineRef} className="process__line" />
                    </div>

                    {/* Steps */}
                    <div className="process__steps">
                        {steps.map((step, i) => (
                            <div
                                key={step.number}
                                className="process__step"
                                ref={(el) => {
                                    if (el) stepsRef.current[i] = el;
                                }}
                            >
                                <div className="process__step-icon">{step.icon}</div>
                                <div className="process__step-number">{step.number}</div>
                                <h3 className="process__step-title">{t(`steps.${step.number}.title`)}</h3>
                                <p className="process__step-desc">{t(`steps.${step.number}.description`)}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
