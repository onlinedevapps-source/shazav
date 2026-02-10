import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import './About.css';

const About = () => {
    const team = [
        { name: 'Michael Chen', role: 'Founder & CEO', expertise: '20+ years in commercial AV' },
        { name: 'Sarah Rodriguez', role: 'VP of Engineering', expertise: 'Crestron Diamond Certified' },
        { name: 'David Park', role: 'Director of Project Management', expertise: 'PMP, CTS-D' },
        { name: 'Jennifer Williams', role: 'Head of Customer Success', expertise: 'Enterprise support specialist' },
    ];

    const values = [
        {
            title: 'Reliability',
            description: 'Technology that works when it matters most. We design for 99.99% uptime.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            ),
        },
        {
            title: 'Clarity',
            description: 'We speak your language, not tech jargon. Clear communication at every step.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
                </svg>
            ),
        },
        {
            title: 'Experience',
            description: 'Decades of expertise across industries. We\'ve seen it all and solved it all.',
            icon: (
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="8" r="7" />
                    <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
                </svg>
            ),
        },
    ];

    const certifications = [
        'Crestron Diamond Partner',
        'Zoom Certified Integrator',
        'Microsoft Teams Rooms Partner',
        'Biamp Certified Designer',
        'CTS (Certified Technology Specialist)',
        'AVIXA Member Organization',
    ];

    return (
        <div className="about-page">
            {/* Hero */}
            <section className="about-hero">
                <div className="container">
                    <ScrollReveal>
                        <div className="about-hero-content">
                            <h1>We Make Technology Disappear</h1>
                            <p className="hero-tagline">So you can focus on what matters: your mission.</p>
                            <p className="hero-description">
                                For over two decades, Shaz AV has been the trusted partner for organizations that demand flawless audiovisual experiences. From Fortune 500 boardrooms to university lecture halls, we design, integrate, and support AV systems that just work.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Our Story */}
            <section className="section">
                <div className="container">
                    <div className="story-grid">
                        <ScrollReveal>
                            <div className="story-image">
                                <img
                                    src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80"
                                    alt="Our team at work"
                                    loading="lazy"
                                />
                            </div>
                        </ScrollReveal>

                        <ScrollReveal delay={200}>
                            <div className="story-content">
                                <h2>Our Story</h2>
                                <p>Shaz AV was founded on a simple belief: enterprise technology should empower people, not frustrate them.</p>
                                <p>What started as a small integration firm has grown into a regional leader in commercial AV solutions. But our mission hasn't changed: deliver technology experiences that are reliable, intuitive, and backed by world-class support.</p>
                                <p>Today, we're proud to serve hundreds of clients across corporate, education, healthcare, and government sectors—each with unique needs, each receiving our full dedication.</p>
                            </div>
                        </ScrollReveal>
                    </div>
                </div>
            </section>

            {/* Core Values */}
            <section className="section bg-gray-light">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Our Core Values</h2>
                            <p>The principles that guide everything we do</p>
                        </div>
                    </ScrollReveal>

                    <div className="values-grid">
                        {values.map((value, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="value-card">
                                    <div className="value-icon">{value.icon}</div>
                                    <h3>{value.title}</h3>
                                    <p>{value.description}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Leadership Team</h2>
                            <p>Decades of combined expertise in commercial AV</p>
                        </div>
                    </ScrollReveal>

                    <div className="team-grid">
                        {team.map((member, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="team-member">
                                    <div className="team-avatar">
                                        {member.name.split(' ').map(n => n[0]).join('')}
                                    </div>
                                    <h4>{member.name}</h4>
                                    <p className="team-role">{member.role}</p>
                                    <p className="team-expertise">{member.expertise}</p>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* Certifications */}
            <section className="section bg-navy text-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2 style={{ color: 'var(--color-white)' }}>Certifications & Partnerships</h2>
                            <p style={{ color: 'rgba(255, 255, 255, 0.8)' }}>Recognized expertise by industry leaders</p>
                        </div>
                    </ScrollReveal>

                    <div className="certifications-grid">
                        {certifications.map((cert, index) => (
                            <ScrollReveal key={index} delay={index * 50}>
                                <div className="certification-badge">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <span>{cert}</span>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Partner With Shaz AV</h2>
                            <p>Experience the difference that dedicated expertise makes.</p>
                            <Button variant="primary" size="large" href="/contact">
                                Let's Talk
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default About;
