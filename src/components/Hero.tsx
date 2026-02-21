import { useScrollReveal } from '../hooks/useScrollReveal';
import './Hero.css';

export default function Hero() {
    const { ref, isVisible } = useScrollReveal(0.1);

    return (
        <section className="hero" id="hero" ref={ref}>
            {/* Cinematic background overlay */}
            <div className="hero__bg">
                <div className="hero__bg-grain" />
                <div className="hero__bg-gradient" />
                <div className="hero__bg-vignette" />
                <div className="hero__bg-lines">
                    {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className="hero__bg-line" style={{ animationDelay: `${i * 0.8}s` }} />
                    ))}
                </div>
                {/* Cinematic light flares */}
                <div className="hero__bg-flare hero__bg-flare--1" />
                <div className="hero__bg-flare hero__bg-flare--2" />
            </div>

            <div className={`hero__content container ${isVisible ? 'fade-in-up' : ''}`}>
                <div className="hero__eyebrow">
                    <span className="hero__eyebrow-line" />
                    <span className="hero__eyebrow-text">Cinematic Media Production</span>
                    <span className="hero__eyebrow-line" />
                </div>

                <h1 className="hero__title">
                    <span className="hero__title-line hero__title-line--gold">Jo_Production</span>
                    <span className="hero__title-line hero__title-line--white">Hawassa</span>
                </h1>

                <p className="hero__subtitle">
                    Professional Event &amp; Video Services in Hawassa
                </p>

                <div className="hero__actions">
                    {/* Call Now */}
                    <a href="tel:0928955865" className="hero__btn hero__btn--primary">
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="hero__btn-icon">
                            <path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1.003 1.003 0 011.01-.24c1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.1.31.03.66-.25 1.01l-2.2 2.21z" />
                        </svg>
                        Call Now
                    </a>

                    {/* Instagram */}
                    <a
                        href="https://www.instagram.com/jo_production96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__btn hero__btn--outline"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="hero__btn-icon">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.311 3.608.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.062 1.366-.336 2.633-1.311 3.608-.975.975-2.242 1.249-3.608 1.311-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.366-.062-2.633-.336-3.608-1.311-.975-.975-1.249-2.242-1.311-3.608C2.175 15.584 2.163 15.204 2.163 12s.012-3.584.07-4.85c.062-1.366.336-2.633 1.311-3.608C4.519 2.567 5.786 2.293 7.152 2.233 8.418 2.175 8.798 2.163 12 2.163zm0-2.163C8.741 0 8.333.014 7.053.072 5.775.13 4.602.392 3.635 1.36 2.668 2.327 2.406 3.5 2.348 4.778.014 8.333 0 8.741 0 12s.014 3.667.072 4.947c.058 1.278.32 2.451 1.288 3.418.967.968 2.14 1.23 3.418 1.288C8.333 23.986 8.741 24 12 24s3.667-.014 4.947-.072c1.278-.058 2.451-.32 3.418-1.288.968-.967 1.23-2.14 1.288-3.418.058-1.28.072-1.688.072-4.947s-.014-3.667-.072-4.947c-.058-1.278-.32-2.451-1.288-3.418C19.398.392 18.225.13 16.947.072 15.667.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zm0 10.162a3.999 3.999 0 110-7.998 3.999 3.999 0 010 7.998zm6.406-10.845a1.44 1.44 0 11-2.88 0 1.44 1.44 0 012.88 0z" />
                        </svg>
                        Instagram
                    </a>

                    {/* TikTok */}
                    <a
                        href="https://www.tiktok.com/@jo_production96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hero__btn hero__btn--outline"
                    >
                        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" className="hero__btn-icon">
                            <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 00-.79-.05A6.34 6.34 0 003.15 15.2a6.34 6.34 0 0010.86 4.46V13a8.28 8.28 0 005.58 2.16v-3.45a4.85 4.85 0 01-2.87-.96v-4.06h2.87z" />
                        </svg>
                        TikTok
                    </a>
                </div>

                <div className="hero__scroll-indicator">
                    <div className="hero__scroll-mouse">
                        <div className="hero__scroll-wheel" />
                    </div>
                    <span>Scroll to explore</span>
                </div>
            </div>
        </section>
    );
}
