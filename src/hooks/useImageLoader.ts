import { useState, useEffect } from 'react';

export interface ImageEntry {
    src: string;
    name: string;
    filename: string;
}

/**
 * Dynamically loads images from public/images/*.
 *
 * Strategy:
 *  1. Vite import.meta.glob at build time (zero hardcoded paths).
 *  2. Fallback: fetch /images/manifest.json (a plain JSON array of filenames).
 *
 * The `src` returned is always a root-relative path like /images/foo.jpg —
 * never a hardcoded absolute path — so no code changes are needed when
 * images are added or removed from the folder.
 */
export function useImageLoader(): { images: ImageEntry[]; loading: boolean } {
    const [images, setImages] = useState<ImageEntry[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        let cancelled = false;

        async function loadImages() {
            try {
                // Vite build-time glob — discovers every image in /public/images/
                // The ?url query gives us the resolved public URL for each file.
                const modules = import.meta.glob<string>(
                    '../assets/images/*.{png,jpg,jpeg,webp,gif,svg,avif,PNG,JPG,JPEG,WEBP}',
                    { eager: true, query: '?url', import: 'default' }
                );

                const entries: ImageEntry[] = Object.entries(modules)
                    .filter(([path]) => !path.endsWith('README.md'))
                    .map(([path, url]) => {
                        const filename = path.split('/').pop() ?? '';
                        // url is the resolved hashed URL provided by Vite
                        const name = formatImageName(filename);
                        return { src: url, name, filename };
                    })
                    // Sort alphabetically by filename for consistent order
                    .sort((a, b) => a.filename.localeCompare(b.filename));

                if (!cancelled && entries.length > 0) {
                    setImages(entries);
                    setLoading(false);
                    return;
                }
            } catch {
                // Glob unavailable (e.g. certain SSR contexts) — fall through
            }

            // Fallback: /images/manifest.json listing
            try {
                const res = await fetch('/images/manifest.json');
                if (res.ok) {
                    const fileList: string[] = await res.json();
                    const entries: ImageEntry[] = fileList
                        .filter((f) => /\.(png|jpe?g|webp|gif|svg|avif)$/i.test(f))
                        .map((f) => ({
                            src: `/images/${f}`,
                            name: formatImageName(f),
                            filename: f,
                        }));
                    if (!cancelled) setImages(entries);
                }
            } catch {
                // No manifest — portfolio will show empty state
            } finally {
                if (!cancelled) setLoading(false);
            }
        }

        loadImages();
        return () => { cancelled = true; };
    }, []);

    return { images, loading };
}

/**
 * Converts a raw filename into a human-readable display name.
 * UUIDs (hex-dash patterns) are replaced with a generic label.
 */
function formatImageName(filename: string): string {
    // Strip extension
    const base = filename.replace(/\.[^/.]+$/, '');

    // Check if it's a UUID-like string (all hex + dashes)
    const isUuid = /^[0-9a-f-]+(\s*\(\d+\))?$/i.test(base);
    if (isUuid) return '';  // No caption for UUID filenames

    // Otherwise humanise: replace dashes/underscores with spaces, title-case
    return base
        .replace(/[-_]/g, ' ')
        .replace(/\b\w/g, (c) => c.toUpperCase())
        .trim();
}
