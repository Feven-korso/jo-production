import { useScrollReveal } from '../hooks/useScrollReveal';
import './Showreel.css';

const VIDEO_ID = 'KsdzFo9SQaU';
const EMBED_URL = `https://www.youtube-nocookie.com/embed/${VIDEO_ID}?rel=0&modestbranding=1&color=white`;

export default function Showreel() {
    const { ref, isVisible } = useScrollReveal();

    return (
        <section className="showreel" id="showreel">
            <div className="container" ref={ref}>
                {/* Gold heading */}
                <h2 className="section-title">Featured Film</h2>
                <div className="gold-line" />
                <p className="section-subtitle">
                    Watch our cinematic highlight reel — a taste of what we create
                </p>

                {/* Video wrapper */}
                <div className={`showreel__wrapper ${isVisible ? 'showreel--revealed' : ''}`}>

                    {/* Decorative corner accents */}
                    <span className="showreel__corner showreel__corner--tl" aria-hidden="true" />
                    <span className="showreel__corner showreel__corner--tr" aria-hidden="true" />
                    <span className="showreel__corner showreel__corner--bl" aria-hidden="true" />
                    <span className="showreel__corner showreel__corner--br" aria-hidden="true" />

                    {/* 16:9 responsive iframe container */}
                    <div className="showreel__frame" id="showreel-video">
                        <iframe
                            src={EMBED_URL}
                            title="Jo Production — Featured Film"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                            allowFullScreen
                            loading="lazy"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
}
