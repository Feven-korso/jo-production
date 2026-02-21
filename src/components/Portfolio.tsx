import { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useImageLoader } from '../hooks/useImageLoader';
import type { ImageEntry } from '../hooks/useImageLoader';
import './Portfolio.css';

const PAGE_SIZE = 12; // images per batch

export default function Portfolio() {
    const { ref, isVisible } = useScrollReveal();
    const { images, loading } = useImageLoader();
    const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
    const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
    const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
    const lightboxRef = useRef<HTMLDivElement>(null);

    // Filter out broken images
    const handleImageError = useCallback((src: string) => {
        setImageErrors((prev) => new Set(prev).add(src));
    }, []);

    const validImages = useMemo(() =>
        images.filter((img) => !imageErrors.has(img.src)),
        [images, imageErrors]
    );

    const displayedImages = useMemo(() =>
        validImages.slice(0, visibleCount),
        [validImages, visibleCount]
    );

    const hasMore = visibleCount < validImages.length;

    // Lightbox navigation
    const openLightbox = (index: number) => setLightboxIndex(index);
    const closeLightbox = () => setLightboxIndex(null);

    const prevImage = useCallback(() => {
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return prev === 0 ? validImages.length - 1 : prev - 1;
        });
    }, [validImages.length]);

    const nextImage = useCallback(() => {
        setLightboxIndex((prev) => {
            if (prev === null) return null;
            return prev === validImages.length - 1 ? 0 : prev + 1;
        });
    }, [validImages.length]);

    // Keyboard support for lightbox
    useEffect(() => {
        if (lightboxIndex === null) return;
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevImage();
            if (e.key === 'ArrowRight') nextImage();
        };
        window.addEventListener('keydown', onKey);
        return () => window.removeEventListener('keydown', onKey);
    }, [lightboxIndex, prevImage, nextImage]);

    // Focus trap inside lightbox
    useEffect(() => {
        if (lightboxIndex !== null) lightboxRef.current?.focus();
    }, [lightboxIndex]);

    return (
        <section className="portfolio" id="portfolio">
            <div className="container" ref={ref}>
                <h2 className="section-title">Our Portfolio</h2>
                <div className="gold-line" />
                <p className="section-subtitle">
                    A showcase of our finest work — every frame tells a story
                </p>

                {/* Image count badge */}
                {!loading && validImages.length > 0 && (
                    <div className="portfolio__meta">
                        <span className="portfolio__count">
                            {displayedImages.length} / {validImages.length} photos
                        </span>
                    </div>
                )}

                {/* Grid */}
                <div className={`portfolio__grid ${isVisible ? 'portfolio--revealed' : ''}`}>

                    {/* Loading skeleton */}
                    {loading && Array.from({ length: 8 }).map((_, i) => (
                        <div key={i} className="portfolio__skeleton" aria-hidden="true" />
                    ))}

                    {/* Empty state */}
                    {!loading && validImages.length === 0 && (
                        <div className="portfolio__empty">
                            <svg viewBox="0 0 64 64" fill="none" stroke="currentColor" strokeWidth="1.5" width="64" height="64" aria-hidden="true">
                                <rect x="8" y="12" width="48" height="36" rx="4" />
                                <path d="M8 38l14-12 10 8 12-10 12 10" strokeLinejoin="round" />
                                <circle cx="22" cy="24" r="4" />
                            </svg>
                            <h3>Portfolio Coming Soon</h3>
                            <p>
                                Add your images to the{' '}
                                <code>public/images</code> folder and they will appear here automatically.
                            </p>
                        </div>
                    )}

                    {/* Image cards */}
                    {!loading && displayedImages.map((image: ImageEntry, index: number) => (
                        <div
                            key={image.src}
                            className="portfolio__item"
                            style={{ '--item-index': index } as React.CSSProperties}
                            onClick={() => openLightbox(index)}
                            role="button"
                            tabIndex={0}
                            aria-label={`View ${image.name}`}
                            onKeyDown={(e) => e.key === 'Enter' && openLightbox(index)}
                        >
                            <img
                                src={image.src}
                                alt={image.name}
                                loading="lazy"
                                decoding="async"
                                className="portfolio__image"
                                onError={() => handleImageError(image.src)}
                            />

                            {/* Hover overlay */}
                            <div className="portfolio__overlay">
                                <div className="portfolio__overlay-icon" aria-hidden="true">
                                    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                {image.name && (
                                    <span className="portfolio__overlay-caption">{image.name}</span>
                                )}
                            </div>

                            {/* Gold border glow (pseudo-element driven in CSS) */}
                            <div className="portfolio__border-glow" aria-hidden="true" />
                        </div>
                    ))}
                </div>

                {/* Load More */}
                {!loading && hasMore && (
                    <div className="portfolio__load-more-wrap">
                        <button
                            id="portfolio-load-more"
                            className="portfolio__load-more"
                            onClick={() => setVisibleCount((n) => n + PAGE_SIZE)}
                        >
                            <span>Load More</span>
                            <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
                                <path d="M12 5v14M5 12l7 7 7-7" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                        <span className="portfolio__remaining">
                            {validImages.length - visibleCount} more photos
                        </span>
                    </div>
                )}
            </div>

            {/* ===== Lightbox ===== */}
            {lightboxIndex !== null && validImages[lightboxIndex] && (
                <div
                    className="portfolio__lightbox"
                    onClick={closeLightbox}
                    role="dialog"
                    aria-modal="true"
                    aria-label="Image lightbox"
                    ref={lightboxRef}
                    tabIndex={-1}
                >
                    {/* Close */}
                    <button
                        className="portfolio__lb-close"
                        onClick={closeLightbox}
                        aria-label="Close lightbox"
                        id="lightbox-close"
                    >
                        <svg viewBox="0 0 24 24" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" />
                        </svg>
                    </button>

                    {/* Prev */}
                    <button
                        className="portfolio__lb-nav portfolio__lb-nav--prev"
                        onClick={(e) => { e.stopPropagation(); prevImage(); }}
                        aria-label="Previous image"
                        id="lightbox-prev"
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Image */}
                    <div className="portfolio__lb-img-wrap" onClick={(e) => e.stopPropagation()}>
                        <img
                            key={validImages[lightboxIndex].src}
                            src={validImages[lightboxIndex].src}
                            alt={validImages[lightboxIndex].name}
                            className="portfolio__lb-image"
                        />
                    </div>

                    {/* Next */}
                    <button
                        className="portfolio__lb-nav portfolio__lb-nav--next"
                        onClick={(e) => { e.stopPropagation(); nextImage(); }}
                        aria-label="Next image"
                        id="lightbox-next"
                    >
                        <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>

                    {/* Caption + counter */}
                    <div className="portfolio__lb-caption" onClick={(e) => e.stopPropagation()}>
                        <span className="portfolio__lb-name">{validImages[lightboxIndex].name}</span>
                        <span className="portfolio__lb-counter">
                            {lightboxIndex + 1} / {validImages.length}
                        </span>
                    </div>

                    {/* Keyboard hint */}
                    <div className="portfolio__lb-hint" aria-hidden="true">
                        ← → to navigate &nbsp;·&nbsp; ESC to close
                    </div>
                </div>
            )}
        </section>
    );
}
