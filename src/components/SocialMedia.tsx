import { useScrollReveal } from '../hooks/useScrollReveal';
import './SocialMedia.css';

const SOCIALS = [
    {
        platform: 'Instagram',
        handle: '@jo_production96',
        href: 'https://www.instagram.com/jo_production96',
        id: 'social-instagram',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.233 8.418 2.175 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.602.392 3.635 1.36 2.668 2.327 2.406 3.5 2.348 4.778.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.32 2.451 1.288 3.418.967.968 2.14 1.23 3.418 1.288C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.451-.32 3.418-1.288.968-.967 1.23-2.14 1.288-3.418.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.32-2.451-1.288-3.418C19.398.392 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
        ),
    },
    {
        platform: 'TikTok',
        handle: '@jo_production96',
        href: 'https://www.tiktok.com/@jo_production96',
        id: 'social-tiktok',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.85 4.85 0 01-2.87-.96v-4.06h2.87z" />
            </svg>
        ),
    },
    {
        platform: 'YouTube',
        handle: 'Jo Production',
        href: 'https://youtu.be/KsdzFo9SQaU',
        id: 'social-youtube',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
            </svg>
        ),
    },
    {
        platform: 'Telegram',
        handle: '@JO_PRODUCTION96',
        href: 'https://t.me/JO_PRODUCTION96',
        id: 'social-telegram',
        icon: (
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
];

export default function SocialMedia() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="social" id="social">
            {/* Decorative background elements */}
            <div className="social__bg-ring social__bg-ring--1" aria-hidden="true" />
            <div className="social__bg-ring social__bg-ring--2" aria-hidden="true" />
            <div className="social__bg-dots" aria-hidden="true" />

            <div className="container" ref={ref}>
                <h2 className="section-title">Follow Us</h2>
                <div className="gold-line" />
                <p className="section-subtitle">
                    Stay connected — follow our journey across platforms
                </p>

                <div className={`social__icons-row ${isVisible ? 'social--visible' : ''}`}>
                    {SOCIALS.map((s, i) => (
                        <a
                            key={s.platform}
                            id={s.id}
                            href={s.href}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="social__item"
                            style={{ '--delay': `${i * 0.12}s` } as React.CSSProperties}
                            aria-label={`Follow us on ${s.platform}`}
                        >
                            {/* Ripple rings */}
                            <span className="social__ring social__ring--1" aria-hidden="true" />
                            <span className="social__ring social__ring--2" aria-hidden="true" />
                            <span className="social__ring social__ring--3" aria-hidden="true" />

                            {/* Icon circle */}
                            <div className="social__circle">
                                <span className="social__icon-wrap">{s.icon}</span>
                            </div>

                            {/* Label */}
                            <div className="social__label">
                                <span className="social__name">{s.platform}</span>
                                <span className="social__handle">{s.handle}</span>
                            </div>

                            {/* Glow burst */}
                            <span className="social__glow" aria-hidden="true" />
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
