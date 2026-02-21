import './Footer.css';

const FOOTER_LINKS = [
    { label: 'Home', href: '#hero' },
    { label: 'About', href: '#about' },
    { label: 'Services', href: '#services' },
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Contact', href: '#contact' },
];

const SOCIAL_LINKS = [
    {
        label: 'Instagram',
        href: 'https://www.instagram.com/jo_production96',
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.233 8.418 2.175 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.602.392 3.635 1.36 2.668 2.327 2.406 3.5 2.348 4.778.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.32 2.451 1.288 3.418.967.968 2.14 1.23 3.418 1.288C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.451-.32 3.418-1.288.968-.967 1.23-2.14 1.288-3.418.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.32-2.451-1.288-3.418C19.398.392 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
            </svg>
        ),
    },
    {
        label: 'TikTok',
        href: 'https://www.tiktok.com/@jo_production96',
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.85 4.85 0 01-2.87-.96v-4.06h2.87z" />
            </svg>
        ),
    },
    {
        label: 'Telegram',
        href: 'https://t.me/JO_PRODUCTION96',
        icon: (
            <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                <path d="M11.944 0A12 12 0 000 12a12 12 0 0012 12 12 12 0 0012-12A12 12 0 0012 0h-.056zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 01.171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.479.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
            </svg>
        ),
    },
];

export default function Footer() {
    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <footer className="footer" id="footer">
            <div className="container">
                <div className="footer__top">
                    {/* Brand */}
                    <div className="footer__brand">
                        <a href="#hero" className="footer__logo" onClick={(e) => handleNavClick(e, '#hero')} aria-label="Jo Production Home">
                            <img
                                src="/logo.svg"
                                alt="Jo Production logo"
                                className="footer__logo-img"
                                width="48"
                                height="48"
                            />
                            <span className="footer__logo-text">
                                <span className="footer__logo-jo">Jo</span>
                                <span className="footer__logo-sep">_</span>
                                <span className="footer__logo-prod">Production</span>
                            </span>
                        </a>
                        <p className="footer__tagline">
                            Crafting cinematic stories from the heart of Hawassa, Ethiopia.
                        </p>
                    </div>

                    {/* Navigation */}
                    <div className="footer__nav">
                        <h4 className="footer__nav-title">Navigation</h4>
                        <ul className="footer__nav-list">
                            {FOOTER_LINKS.map((link) => (
                                <li key={link.href}>
                                    <a href={link.href} onClick={(e) => handleNavClick(e, link.href)}>
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div className="footer__social">
                        <h4 className="footer__nav-title">Connect</h4>
                        <div className="footer__social-icons">
                            {SOCIAL_LINKS.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="footer__social-link"
                                    aria-label={s.label}
                                    title={s.label}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                        <a href="tel:0928955865" className="footer__phone">
                            <svg viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
                                <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.01l-2.2 2.21z" />
                            </svg>
                            0928 955 865
                        </a>
                    </div>
                </div>

                <div className="footer__divider" />

                <div className="footer__bottom">
                    <p className="footer__copyright">
                        &copy; {new Date().getFullYear()} Jo_Production Hawassa. All rights reserved.
                    </p>
                    <p className="footer__credit">
                        Crafted with passion in Hawassa, Ethiopia 🇪🇹
                    </p>
                </div>
            </div>
        </footer>
    );
}
