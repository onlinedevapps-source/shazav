import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import './Contact.css';

const Contact = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        // Form submission logic would go here
        alert('Thank you for your message! We\'ll be in touch soon.');
    };

    return (
        <div className="contact-page">
            {/* Hero Section */}
            <section className="contact-hero">
                <div className="container">
                    <ScrollReveal>
                        <div className="contact-hero-content">
                            <h1>Let's Start a Conversation</h1>
                            <p>Whether you're planning a single conference room or a campus-wide transformation, we're here to help you succeed.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Contact Content */}
            <section className="section">
                <div className="container">
                    <div className="contact-grid">
                        {/* Form */}
                        <ScrollReveal>
                            <div className="contact-form-wrapper">
                                <h2>Send Us a Message</h2>
                                <p className="form-intro">Tell us about your project and we'll get back to you within 24 hours.</p>

                                <form onSubmit={handleSubmit} className="contact-form">
                                    <div className="form-group">
                                        <label htmlFor="name">Your Name *</label>
                                        <input
                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="John Smith"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="email">Email *</label>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            required
                                            placeholder="john.smith@company.com"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="company">Company *</label>
                                        <input
                                            type="text"
                                            id="company"
                                            name="company"
                                            required
                                            placeholder="Your Company"
                                        />
                                    </div>

                                    <div className="form-group">
                                        <label htmlFor="phone">Phone</label>
                                        <input
                                            type="tel"
                                            id="phone"
                                            name="phone"
                                            placeholder="(555) 123-4567"
                                        />
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="industry">Industry</label>
                                        <select id="industry" name="industry">
                                            <option value="">Select an industry</option>
                                            <option value="corporate">Corporate</option>
                                            <option value="education">Education</option>
                                            <option value="healthcare">Healthcare</option>
                                            <option value="government">Government</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    <div className="form-group full-width">
                                        <label htmlFor="message">Tell Us About Your Project *</label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            rows="6"
                                            required
                                            placeholder="What are you looking to accomplish? Any specific challenges or requirements?"
                                        ></textarea>
                                    </div>

                                    <Button variant="primary" size="large" type="submit">
                                        Send Message
                                    </Button>
                                </form>
                            </div>
                        </ScrollReveal>

                        {/* Contact Info */}
                        <ScrollReveal delay={200}>
                            <div className="contact-info">
                                <h2>Get In Touch</h2>

                                <div className="contact-methods">
                                    <div className="contact-method">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Email</h4>
                                            <a href="mailto:info@shazav.com">info@shazav.com</a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Phone</h4>
                                            <a href="tel:+15551234567">(555) 123-4567</a>
                                        </div>
                                    </div>

                                    <div className="contact-method">
                                        <div className="contact-icon">
                                            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                                <circle cx="12" cy="10" r="3" />
                                                <path d="M12 21.7C17.3 17 20 13 20 10a8 8 0 10-16 0c0 3 2.7 6.9 8 11.7z" />
                                            </svg>
                                        </div>
                                        <div>
                                            <h4>Office</h4>
                                            <p>123 Innovation Drive<br />Suite 100<br />Tech City, TC 12345</p>
                                        </div>
                                    </div>
                                </div>

                                <div className="contact-hours">
                                    <h4>Business Hours</h4>
                                    <p>Monday - Friday: 8:00 AM - 6:00 PM<br />
                                        Saturday - Sunday: Closed</p>
                                    <p className="emergency-note">24/7 emergency support available for existing clients</p>
                                </div>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Contact;
