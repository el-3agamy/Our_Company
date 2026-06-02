"use client";

import Link from 'next/link';
import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import './Navbar.css';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const navRef = useRef<HTMLElement>(null);
    const logoRef = useRef<HTMLAnchorElement>(null);
    const linksRef = useRef<HTMLLIElement[]>([]);
    const ctaRef = useRef<HTMLDivElement>(null);
    const hamburgerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        const ctx = gsap.context(() => {
            const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

            tl.to(logoRef.current, { opacity: 1, duration: 0 }, 0)
                .fromTo(
                    logoRef.current,
                    { y: -20, opacity: 0 },
                    { y: 0, opacity: 1, duration: 0.8 },
                    0.2
                );

            if (window.innerWidth > 768) {
                tl.to(linksRef.current, { opacity: 1, duration: 0 }, 0)
                    .fromTo(
                        linksRef.current,
                        { y: -20, opacity: 0 },
                        { y: 0, opacity: 1, stagger: 0.1, duration: 0.6 },
                        0.4
                    );

                tl.to(ctaRef.current, { opacity: 1, duration: 0 }, 0)
                    .fromTo(
                        ctaRef.current,
                        { y: -20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6 },
                        0.8
                    );
            } else {
                tl.to(hamburgerRef.current, { opacity: 1, duration: 0 }, 0)
                    .fromTo(
                        hamburgerRef.current,
                        { y: -20, opacity: 0 },
                        { y: 0, opacity: 1, duration: 0.6 },
                        0.4
                    );
            }
        }, navRef);

        return () => ctx.revert();
    }, []);

    const addToLinksRef = (el: HTMLLIElement | null) => {
        if (el && !linksRef.current.includes(el)) {
            linksRef.current.push(el);
        }
    };

    return (
        <nav ref={navRef} className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <Link href="/" className="navbar__logo" ref={logoRef}>
                <div className="navbar__logo-icon">
                    <div className="navbar__logo-play" />
                </div>
                <div className="navbar__logo-text">
                    Frame<span>Forge</span>
                </div>
            </Link>

            <ul className="navbar__links">
                <li className="navbar__link" ref={addToLinksRef}>
                    <Link href="/">Home</Link>
                </li>
                <li className="navbar__link" ref={addToLinksRef}>
                    <Link href="/services">Services</Link>
                </li>
                <li className="navbar__link" ref={addToLinksRef}>
                    <Link href="/projects">Projects</Link>
                </li>
                <li className="navbar__link" ref={addToLinksRef}>
                    <Link href="/about">About</Link>
                </li>
                <li className="navbar__link" ref={addToLinksRef}>
                    <Link href="/contacts">Contact Us</Link>
                </li>
            </ul>

            <div className="navbar__cta" ref={ctaRef}>
                <Link href="/contacts" className="navbar__cta-btn">
                    <span>Start Project</span>
                </Link>
            </div>

            <div
                className="navbar__hamburger"
                ref={hamburgerRef}
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
                <div
                    className="navbar__hamburger-line"
                    style={{ transform: mobileMenuOpen ? 'rotate(45deg) translate(5px, 5px)' : 'none' }}
                />
                <div
                    className="navbar__hamburger-line"
                    style={{ opacity: mobileMenuOpen ? 0 : 1 }}
                />
                <div
                    className="navbar__hamburger-line"
                    style={{ transform: mobileMenuOpen ? 'rotate(-45deg) translate(5px, -5px)' : 'none' }}
                />
            </div>

            <div className={`navbar__mobile-menu ${mobileMenuOpen ? 'open' : ''}`}>
                <Link href="/" className="navbar__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Home
                </Link>
                <Link href="/services" className="navbar__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Services
                </Link>
                <Link href="/projects" className="navbar__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Projects
                </Link>
                <Link href="/about" className="navbar__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    About
                </Link>
                <Link href="/contacts" className="navbar__mobile-link" onClick={() => setMobileMenuOpen(false)}>
                    Contact Us
                </Link>
            </div>
        </nav>
    );
}
