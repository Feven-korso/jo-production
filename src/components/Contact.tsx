import { useState } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import './Contact.css';

export default function Contact() {
    const { ref, isVisible } = useScrollReveal();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
    });
    const [submitted, setSubmitted] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // In production, connect to a backend or email service
        console.log('Form submitted:', formData);
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 4000);
        setFormData({ name: '', email: '', phone: '', service: '', message: '' });
    };

    return (
        <section className="contact" id="contact">
            <div className="container" ref={ref}>
                <h2 className="section-title">Get In Touch</h2>
                <div className="gold-line" />
                <p className="section-subtitle">
                    Ready to create something extraordinary? Let's talk about your project.
                </p>

                <div className={`contact__grid ${isVisible ? 'fade-in-up' : ''}`}>
                    {/* Info Side */}
                    <div className="contact__info">
                        <h3 className="contact__info-title">Let's Work Together</h3>
                        <p className="contact__info-desc">
                            Whether it's a wedding, event, music video, or any creative production — we'd love
                            to hear about your project and bring your vision to life.
                        </p>

                        <div className="contact__details">
                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6A19.79 19.79 0 012.12 4.18 2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">Phone</span>
                                    <a href="tel:0928955865" className="contact__detail-value">0928 955 865</a>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
                                        <circle cx="12" cy="10" r="3" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">Location</span>
                                    <span className="contact__detail-value">Hawassa, Ethiopia</span>
                                </div>
                            </div>

                            <div className="contact__detail">
                                <div className="contact__detail-icon">
                                    <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
                                        <path d="M22 6l-10 7L2 6" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div>
                                    <span className="contact__detail-label">Telegram</span>
                                    <a href="https://t.me/JO_PRODUCTION96" target="_blank" rel="noopener noreferrer" className="contact__detail-value">@JO_PRODUCTION96</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Form Side */}
                    <form className="contact__form" onSubmit={handleSubmit} id="contact-form">
                        <div className="contact__form-row">
                            <div className="contact__field">
                                <label htmlFor="contact-name">Full Name</label>
                                <input
                                    type="text"
                                    id="contact-name"
                                    name="name"
                                    placeholder="Your name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                            <div className="contact__field">
                                <label htmlFor="contact-email">Email</label>
                                <input
                                    type="email"
                                    id="contact-email"
                                    name="email"
                                    placeholder="your@email.com"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                />
                            </div>
                        </div>

                        <div className="contact__form-row">
                            <div className="contact__field">
                                <label htmlFor="contact-phone">Phone</label>
                                <input
                                    type="tel"
                                    id="contact-phone"
                                    name="phone"
                                    placeholder="09XX XXX XXX"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact__field">
                                <label htmlFor="contact-service">Service</label>
                                <select
                                    id="contact-service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    required
                                >
                                    <option value="">Select a service</option>
                                    <option value="wedding">Wedding Filming</option>
                                    <option value="engagement">Engagement (ሽምግልና)</option>
                                    <option value="birthday">Birthday</option>
                                    <option value="bridal">Bridal Shower</option>
                                    <option value="baby">Baby Shower</option>
                                    <option value="event">Event Coverage</option>
                                    <option value="other">Other</option>
                                </select>
                            </div>
                        </div>

                        <div className="contact__field">
                            <label htmlFor="contact-message">Message</label>
                            <textarea
                                id="contact-message"
                                name="message"
                                placeholder="Tell us about your project..."
                                rows={5}
                                value={formData.message}
                                onChange={handleChange}
                                required
                            />
                        </div>

                        <button type="submit" className="contact__submit" id="contact-submit">
                            {submitted ? (
                                <>
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                    Message Sent!
                                </>
                            ) : (
                                <>
                                    Send Message
                                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 2L11 13M22 2l-7 20-4-9-9-4z" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </>
                            )}
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
}
