"use client";

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from '@/i18n/routing';
import React, { useState, useTransition, useRef, useEffect } from 'react';
import './LanguageSwitcher.css';

export default function LanguageSwitcher() {
    const locale = useLocale();
    const router = useRouter();
    const pathname = usePathname();
    const [isPending, startTransition] = useTransition();
    const [isOpen, setIsOpen] = useState(false);
    const dropdownRef = useRef<HTMLDivElement>(null);

    const languages = [
        { code: 'en', label: 'English', short: 'EN' },
        { code: 'de', label: 'Deutsch', short: 'DE' },
        { code: 'ar', label: 'العربية', short: 'AR' }
    ];

    const currentLang = languages.find(lang => lang.code === locale) || languages[0];

    const handleSelect = (nextLocale: string) => {
        setIsOpen(false);
        if (nextLocale === locale) return;

        startTransition(() => {
            router.replace(pathname, { locale: nextLocale });
        });
    };

    // Close dropdown on click outside
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, [isOpen]);

    return (
        <div className="language-switcher" ref={dropdownRef}>
            <button
                className={`language-switcher__toggle ${isOpen ? 'open' : ''} ${isPending ? 'pending' : ''}`}
                onClick={() => setIsOpen(!isOpen)}
                disabled={isPending}
                aria-label="Toggle language menu"
            >
                <div className="language-switcher__icon">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                    </svg>
                </div>
                <span className="language-switcher__current">{currentLang.short}</span>
                <div className="language-switcher__chevron">
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <polyline points="6 9 12 15 18 9"></polyline>
                    </svg>
                </div>
            </button>

            <div className={`language-switcher__dropdown ${isOpen ? 'open' : ''}`}>
                <ul className="language-switcher__list">
                    {languages.map((lang) => (
                        <li key={lang.code} className="language-switcher__item">
                            <button
                                className={`language-switcher__btn ${locale === lang.code ? 'active' : ''}`}
                                onClick={() => handleSelect(lang.code)}
                            >
                                <span className="language-switcher__label">{lang.label}</span>
                                {locale === lang.code && (
                                    <span className="language-switcher__check">
                                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                    </span>
                                )}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
}
