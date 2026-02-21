import { useScrollReveal } from '../hooks/useScrollReveal';
import aboutImg from '../assets/images/imge1.jpg?url';
import './About.css';

const STATS = [
    { value: '200+', label: 'Projects Completed' },
    { value: '6+', label: 'Years Experience' },
    { value: '150+', label: 'Happy Clients' },
    { value: '50+', label: 'Awards & Features' },
];

export default function About() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="about" id="about">
            <div className="container" ref={ref}>
                <h2 className="section-title">About Us</h2>
                <div className="gold-line" />
                <p className="section-subtitle">
                    The creative force behind Hawassa's most talked-about visual stories
                </p>

                <div className={`about__grid ${isVisible ? 'fade-in-up' : ''}`}>
                    {/* Image Side */}
                    <div className="about__image-wrap">
                        <div className="about__image-frame">
                            <img
                                src={aboutImg}
                                alt="Jo Production Cinematic Filming"
                                className="about__image"
                                loading="lazy"
                            />
                            <div className="about__image-border" />
                        </div>
                    </div>

                    {/* Text Side */}
                    <div className="about__text">
                        <h3 className="about__heading">
                            We Don't Just Record —<br />
                            <span className="about__heading-gold">We Create Cinematic Art</span>
                        </h3>

                        {/* Amharic Description */}
                        <div className="about__amharic">
                            <p>
                                ማንኛዉንም የቀረፃ ስራ ከ ብቁ ባለሙያ ጋር አለሎ ከጊዜ ጋር በመራመድ ከዉጪ ባስመጣናቸዉ ሌተስት እቃዎች ለ ሰርግ ሽምግልና ኢዠንት ልደት bridal baby shower ለተለያዩ ስራዎች አለንሎ ይላል
                            </p>
                        </div>

                        <p className="about__description">
                            Jo_Production Hawassa is a premium media production house based in the heart of
                            Hawassa, Ethiopia. We specialize in transforming ordinary moments into extraordinary
                            cinematic experiences.
                        </p>
                        <p className="about__description">
                            From breathtaking wedding films and high-energy event coverage to stunning music
                            videos and commercial productions — every frame we capture is crafted with passion,
                            precision, and a cinematic eye for detail.
                        </p>

                        <div className="about__stats">
                            {STATS.map((stat) => (
                                <div key={stat.label} className="about__stat">
                                    <span className="about__stat-value">{stat.value}</span>
                                    <span className="about__stat-label">{stat.label}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
