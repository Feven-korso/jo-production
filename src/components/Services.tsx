import { useScrollReveal } from '../hooks/useScrollReveal';
import './Services.css';

const SERVICES = [
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <rect x="6" y="10" width="36" height="24" rx="3" />
                <circle cx="24" cy="22" r="6" />
                <path d="M22 22l3 2v-4l-3 2z" fill="currentColor" stroke="none" />
                <path d="M16 38h16" strokeLinecap="round" />
            </svg>
        ),
        title: 'Wedding Filming',
        description: 'Cinematic wedding coverage that turns your special day into a timeless visual masterpiece you\'ll treasure forever.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M24 8l3 6 7 1-5 5 1 7-6-3-6 3 1-7-5-5 7-1z" />
                <circle cx="24" cy="32" r="8" />
                <path d="M20 32h8M24 28v8" strokeLinecap="round" />
            </svg>
        ),
        title: 'Engagement (ሽምግልና)',
        description: 'Beautiful documentation of your engagement ceremony — capturing every tradition, emotion, and joyful moment.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M14 38V22l10-12 10 12v16H14z" />
                <rect x="20" y="28" width="8" height="10" rx="1" />
                <path d="M18 14l6-6 6 6" strokeLinecap="round" />
                <circle cx="24" cy="8" r="2" fill="currentColor" stroke="none" />
                <path d="M20 8h8" strokeLinecap="round" />
            </svg>
        ),
        title: 'Birthday',
        description: 'Make birthday celebrations unforgettable with professional filming that captures all the fun and surprises.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="18" r="8" />
                <path d="M24 26c-8 0-14 4-14 10v4h28v-4c0-6-6-10-14-10z" />
                <path d="M30 10l4-4M34 14l4-2" strokeLinecap="round" />
                <circle cx="32" cy="6" r="2" fill="currentColor" stroke="none" />
            </svg>
        ),
        title: 'Bridal Shower',
        description: 'Elegant bridal shower coverage — from décor details to candid laughter, we capture the pre-wedding magic.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <circle cx="24" cy="20" r="10" />
                <path d="M19 18c0-3 2-5 5-5" strokeLinecap="round" />
                <path d="M18 32l-4 10M30 32l4 10" strokeLinecap="round" />
                <path d="M24 30v6" strokeLinecap="round" />
                <circle cx="24" cy="20" r="3" fill="currentColor" stroke="none" opacity="0.3" />
            </svg>
        ),
        title: 'Baby Shower',
        description: 'Heartwarming baby shower documentation — every smile, gift, and tender moment preserved beautifully.',
    },
    {
        icon: (
            <svg viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M8 14h32v20H8z" />
                <path d="M24 14V8M18 8h12" strokeLinecap="round" />
                <circle cx="24" cy="24" r="5" />
                <circle cx="24" cy="24" r="2" />
                <path d="M36 18h2M36 22h2M36 26h2" strokeLinecap="round" />
            </svg>
        ),
        title: 'Event Coverage',
        description: 'Full-scale professional event documentation — conferences, concerts, and corporate events captured with precision.',
    },
];

export default function Services() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="services" id="services">
            <div className="container" ref={ref}>
                <h2 className="section-title">Our Services</h2>
                <div className="gold-line" />
                <p className="section-subtitle">
                    Premium production services tailored to bring your vision to life
                </p>

                <div className={`services__grid ${isVisible ? 'fade-in-up' : ''}`}>
                    {SERVICES.map((service) => (
                        <div key={service.title} className="services__card" id={`service-${service.title.toLowerCase().replace(/[\s()]+/g, '-')}`}>
                            <div className="services__icon">{service.icon}</div>
                            <h3 className="services__card-title">{service.title}</h3>
                            <p className="services__card-desc">{service.description}</p>
                            <div className="services__card-glow" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
