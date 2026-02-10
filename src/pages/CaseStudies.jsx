import VideoHero from '../components/VideoHero';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import './CaseStudies.css';

const CaseStudies = () => {
    const caseStudies = [
        {
            slug: 'fortune-500-headquarters',
            title: 'Fortune 500 Headquarters Transformation',
            client: 'Confidential Technology Company',
            industry: 'Corporate',
            challenge: 'Outdated AV systems across 12 conference rooms causing productivity loss, frequent technical issues, and poor remote collaboration experiences during the shift to hybrid work.',
            solution: 'Complete technology overhaul with Crestron NVX distribution, Zoom Rooms integration, Shure microphone arrays, and 4K displays. Unified control system across all spaces with consistent user experience.',
            results: [
                '94% user satisfaction score (up from 61%)',
                '40% reduction in meeting technical issues',
                'Seamless hybrid work experience',
                'Reduced IT support tickets by 65%'
            ],
            technologies: ['Crestron', 'Zoom Rooms', 'Shure', 'Samsung', 'Biamp'],
            image: 'https://images.unsplash.com/photo-1560439514-4e9645039924?w=1200&q=80',
            testimonial: {
                quote: 'Shaz AV transformed our conference rooms from frustrating obstacles into competitive advantages. The difference is night and day.',
                author: 'Sarah Chen',
                title: 'CIO'
            }
        },
        {
            slug: 'university-lecture-halls',
            title: 'University Lecture Hall Modernization',
            client: 'Major State University',
            industry: 'Education',
            challenge: '15 lecture halls with aging equipment unable to support hybrid learning models required during pandemic. Faculty struggled with inconsistent technology and poor remote student engagement.',
            solution: 'Installed lecture capture systems, PTZ cameras with auto-tracking, digital podiums, and interactive displays. Integrated with university LMS and enabled one-touch recording and streaming.',
            results: [
                'All 15 halls supporting hybrid learning',
                '87% faculty adoption rate',
                'Lecture recordings accessed 50,000+ times per semester',
                'Consistent experience across all spaces'
            ],
            technologies: ['Extron', 'Panopto', 'Lumens', 'Crestron', 'Biamp'],
            image: 'https://images.unsplash.com/photo-1523050854058-8df4e8faaee5?w=1200&q=80',
            testimonial: {
                quote: 'Technology that used to intimidate our faculty now empowers them. Students participate from anywhere without missing a beat.',
                author: 'Dr. Michael Rodriguez',
                title: 'Dean of Engineering'
            }
        },
        {
            slug: 'healthcare-telemedicine',
            title: 'Healthcare Network Telemedicine Expansion',
            client: 'Regional Healthcare Network',
            industry: 'Healthcare',
            challenge: 'Rapid expansion of telemedicine services required across 8 clinic locations with strict HIPAA compliance and reliability requirements for patient consultations.',
            solution: 'Deployed HIPAA-compliant Zoom for Healthcare rooms with medical-grade cameras, encrypted connections, and specialized lighting for accurate skin tone representation. Integrated with EMR systems.',
            results: [
                '8 telemedicine-ready consultation rooms',
                '15,000+ virtual consultations completed',
                'Zero HIPAA violations',
                '98% patient satisfaction with virtual visits'
            ],
            technologies: ['Zoom Healthcare', 'Poly', 'Crestron', 'Philips Lighting'],
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
            testimonial: {
                quote: 'Our patients now have access to specialists regardless of location. The technology is reliable, secure, and actually enhances care quality.',
                author: 'Jennifer Park, MD',
                title: 'Chief Medical Officer'
            }
        },
        {
            slug: 'emergency-operations-center',
            title: 'Emergency Operations Center',
            client: 'Metropolitan City Government',
            industry: 'Government',
            challenge: 'Critical need for upgraded emergency operations center to coordinate response across multiple agencies during crises. Legacy systems couldn\'t support modern collaboration needs.',
            solution: 'Built state-of-the-art EOC with 24/7 video wall, secure multi-agency conferencing, redundant systems, and unified communications platform. Integrated with city-wide emergency alert systems.',
            results: [
                '99.99% uptime since installation',
                'Coordinated response to 3 major emergencies',
                'Reduced inter-agency coordination time by 45%',
                'Real-time situational awareness'
            ],
            technologies: ['Crestron', 'Planar', 'Cisco', 'Evertz', 'Biamp'],
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
            testimonial: {
                quote: 'When seconds matter, our new EOC gives us the situational awareness and coordination tools to save lives.',
                author: 'Chief Thomas Williams',
                title: 'Emergency Management Director'
            }
        }
    ];

    return (
        <div className="case-studies-page">
            {/* Hero */}
            <VideoHero
                fallbackImage="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1920&q=90"
                headline="Proven Results"
                subheadline="Real projects, measurable outcomes, lasting partnerships."
                primaryCTA={{
                    text: 'Talk to Our Team',
                    href: '/contact',
                }}
                height="70vh"
            />

            {/* Case Studies Grid */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Featured Projects</h2>
                            <p>See how we've transformed spaces across industries</p>
                        </div>
                    </ScrollReveal>

                    <div className="case-studies-grid">
                        {caseStudies.map((study, index) => (
                            <div key={study.slug} className="case-study-full">
                                <ScrollReveal delay={index * 100}>
                                    <div className="case-study-header">
                                        <div className="case-study-meta">
                                            <span className="case-study-industry">{study.industry}</span>
                                            <h3>{study.title}</h3>
                                            <p className="case-study-client">{study.client}</p>
                                        </div>
                                        <div className="case-study-image">
                                            <img src={study.image} alt={study.title} loading="lazy" />
                                        </div>
                                    </div>

                                    <div className="case-study-body">
                                        <div className="case-study-challenge">
                                            <h4>Challenge</h4>
                                            <p>{study.challenge}</p>
                                        </div>

                                        <div className="case-study-solution">
                                            <h4>Solution</h4>
                                            <p>{study.solution}</p>
                                        </div>

                                        <div className="case-study-results">
                                            <h4>Results</h4>
                                            <ul>
                                                {study.results.map((result, i) => (
                                                    <li key={i}>
                                                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                            <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                        </svg>
                                                        {result}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div className="case-study-technologies">
                                            <span className="tech-label">Technologies:</span>
                                            <div className="tech-tags">
                                                {study.technologies.map((tech, i) => (
                                                    <span key={i} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>

                                        {study.testimonial && (
                                            <blockquote className="case-study-testimonial">
                                                <p>"{study.testimonial.quote}"</p>
                                                <footer>
                                                    <strong>{study.testimonial.author}</strong>
                                                    <span>{study.testimonial.title}</span>
                                                </footer>
                                            </blockquote>
                                        )}
                                    </div>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-navy text-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Your Project Could Be Next</h2>
                            <p>Let's create something exceptional together.</p>
                            <Button variant="primary" size="large" href="/contact">
                                Start Your Project
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default CaseStudies;
