import VideoHero from '../components/VideoHero';
import Button from '../components/Button';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

const Home = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const services = [
        {
            title: 'Conference & Boardroom Technology',
            description: 'Seamless collaboration spaces that work when it matters most. From small huddle rooms to executive boardrooms.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect>
                    <polyline points="17 2 12 7 7 2"></polyline>
                </svg>
            ),
        },
        {
            title: 'Video Conferencing Environments',
            description: 'Crystal-clear connections for Zoom, Teams, and Webex. Technology that brings your team together, anywhere.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M23 7l-7 5 7 5V7z"></path>
                    <rect x="1" y="5" width="15" height="14" rx="2" ry="2"></rect>
                </svg>
            ),
        },
        {
            title: 'Digital Signage & Video Walls',
            description: 'Stunning visual experiences that captivate and inform. Make your message impossible to ignore.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect>
                    <line x1="8" y1="21" x2="16" y2="21"></line>
                    <line x1="12" y1="17" x2="12" y2="21"></line>
                </svg>
            ),
        },
        {
            title: 'Control Systems',
            description: 'Crestron-class solutions that put you in command. Intuitive control, effortless operation.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="12" y1="8" x2="12" y2="12"></line>
                    <line x1="12" y1="16" x2="12.01" y2="16"></line>
                </svg>
            ),
        },
    ];

    const industries = [
        { title: 'Corporate', slug: 'corporate' },
        { title: 'Education', slug: 'education' },
        { title: 'Healthcare', slug: 'healthcare' },
        { title: 'Government', slug: 'government' },
    ];

    const partners = [
        'Crestron', 'Zoom', 'Microsoft', 'Cisco', 'Samsung', 'LG', 'Biamp', 'Shure'
    ];

    const testimonials = [
        {
            quote: 'Shaz AV transformed our boardroom into a world-class collaboration space. The difference is night and day.',
            author: 'Sarah Chen',
            title: 'CIO, Fortune 500 Company',
        },
        {
            quote: 'From design to installation, the team was professional, knowledgeable, and delivered exactly what they promised.',
            author: 'Michael Rodriguez',
            title: 'Facilities Director, University System',
        },
        {
            quote: 'We needed a partner who understood enterprise AV. Shaz AV exceeded every expectation.',
            author: 'Jennifer Park',
            title: 'IT Manager, Healthcare Network',
        },
    ];

    return (
        <div className="home">
            {/* Hero Section */}
            <VideoHero
                videoSources={[
                    '/grok-video-6621f6f7-8636-4b69-baae-ecee6e8af404.mp4',
                    '/grok-video-6621f6f7-8636-4b69-baae-ecee6e8af404 (1).mp4'
                ]}
                fallbackImage="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=95"
                headline={`Spaces That Work\nWhen It Matters`}
                subheadline="Trusted AV partners for enterprise environments. From concept to completion."
                primaryCTA={{
                    text: 'See Our Work',
                    onClick: () => scrollToSection('case-study'),
                }}
            />

            {/* Value Proposition Bar */}
            <section className="value-prop section bg-navy">
                <div className="container">
                    <div className="value-prop-grid">
                        <ScrollReveal delay={0}>
                            <div className="value-prop-item">
                                <div className="value-prop-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                                        <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                                    </svg>
                                </div>
                                <h3>Design</h3>
                                <p>Creative solutions tailored to your space</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={100}>
                            <div className="value-prop-item">
                                <div className="value-prop-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                        <polyline points="14 2 14 8 20 8"></polyline>
                                        <line x1="9" y1="15" x2="15" y2="15"></line>
                                    </svg>
                                </div>
                                <h3>Install</h3>
                                <p>Flawless execution, on time and on budget</p>
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="value-prop-item">
                                <div className="value-prop-icon">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                    </svg>
                                </div>
                                <h3>Support</h3>
                                <p>Ongoing partnership for lasting success</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Services Overview */}
            <section className="services section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>What We Make Disappear</h2>
                            <p>Complex technology, simplified for what matters: your mission.</p>
                        </div>
                    </ScrollReveal>

                    <div className="services-grid">
                        {services.map((service, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <Card
                                    variant="service"
                                    title={service.title}
                                    description={service.description}
                                    icon={service.icon}
                                    href="/services"
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Industry Solutions */}
            <section className="industries section bg-gray-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Industries We Serve</h2>
                            <p>Specialized expertise for your sector</p>
                        </div>
                    </ScrollReveal>

                    <div className="industries-grid">
                        {industries.map((industry, index) => (
                            <ScrollReveal key={industry.slug} delay={index * 100}>
                                <Card
                                    variant="industry"
                                    title={industry.title}
                                    image={`https://images.unsplash.com/photo-${index === 0 ? '1486406146926-c627a92ad1ab' : // Corporate
                                        index === 1 ? '1523050854058-8df4e8faaee5' : // Education
                                            index === 2 ? '1519494026892-80bbd2d6fd0d' : // Healthcare
                                                '1555396273-367ea4eb4db5' // Government
                                        }?w=800&q=80`}
                                    href="/industries"
                                />
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Case Study Spotlight */}
            <section id="case-study" className="case-study-spotlight section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Proven Results</h2>
                            <p>Real projects, measurable outcomes</p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal>
                        <div className="case-study-featured">
                            <div className="case-study-image">
                                <img
                                    src="https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80"
                                    alt="Featured case study"
                                    loading="lazy"
                                />
                            </div>
                            <div className="case-study-content">
                                <span className="case-study-tag">CORPORATE</span>
                                <h3>Fortune 500 Headquarters Transformation</h3>
                                <p className="case-study-challenge">
                                    <strong>Challenge:</strong> Outdated AV systems across 12 conference rooms causing productivity loss and poor remote collaboration.
                                </p>
                                <p className="case-study-solution">
                                    <strong>Solution:</strong> Complete technology overhaul with Crestron control, Zoom Rooms integration, and 4K displays.
                                </p>
                                <p className="case-study-result">
                                    <strong>Result:</strong> 94% user satisfaction score, 40% reduction in meeting technical issues, seamless hybrid work experience.
                                </p>
                                <Button variant="ghost" href="/case-studies">
                                    View All Projects →
                                </Button>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Technology Trust Signals */}
            <section className="partners section bg-gray-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Trusted Technology Partners</h2>
                            <p>We work with the best to deliver the best</p>
                        </div>
                    </ScrollReveal>

                    <div className="partners-grid">
                        {partners.map((partner, index) => (
                            <ScrollReveal key={partner} delay={index * 50}>
                                <div className="partner-logo">
                                    <span>{partner}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="testimonials section">
                <div className="container">
                    <ScrollReveal>
                        <div className="testimonials-slider">
                            {testimonials.map((testimonial, index) => (
                                <div key={index} className="testimonial">
                                    <blockquote className="testimonial-quote">
                                        "{testimonial.quote}"
                                    </blockquote>
                                    <div className="testimonial-author">
                                        <strong>{testimonial.author}</strong>
                                        <span>{testimonial.title}</span>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Final CTA */}
            <section id="contact" className="final-cta section bg-navy">
                <div className="container">
                    <ScrollReveal>
                        <div className="final-cta-content">
                            <h2>Let's Build Something Exceptional</h2>
                            <p>Whether you're planning a single conference room or a campus-wide transformation, we'll guide you through it.</p>

                            <form className="contact-form">
                                <div className="form-row">
                                    <input type="text" placeholder="Your Name" required />
                                    <input type="email" placeholder="Email" required />
                                </div>
                                <div className="form-row">
                                    <input type="text" placeholder="Company" required />
                                    <input type="tel" placeholder="Phone" />
                                </div>
                                <textarea placeholder="Tell us about your project" rows="4" required></textarea>
                                <Button variant="primary" size="large">
                                    Send Message
                                </Button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Home;
