import VideoHero from '../components/VideoHero';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import './Industries.css';

const Industries = () => {
    const industries = [
        {
            slug: 'corporate',
            title: 'Corporate',
            tagline: 'Powering the modern workplace',
            description: 'Today\'s corporate environments demand seamless technology that supports collaboration, productivity, and hybrid work. We design and integrate AV solutions that make meetings effortless, remote work natural, and your technology invisible.',
            challenges: [
                'Supporting diverse meeting styles and room sizes',
                'Enabling effective hybrid collaboration',
                'Maintaining consistent user experience',
                'Scaling across multiple locations',
                'Integrating with existing IT infrastructure'
            ],
            solutions: [
                'Executive boardrooms with premium conferencing',
                'Huddle rooms for quick collaboration',
                'Town hall spaces for all-hands meetings',
                'Lobby and reception digital signage',
                'Campus-wide unified communications'
            ],
            image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
        },
        {
            slug: 'education',
            title: 'Education',
            tagline: 'Technology that enhances learning',
            description: 'From K-12 classrooms to university lecture halls, educational spaces require reliable, intuitive technology. We create learning environments where technology supports teaching without getting in the way.',
            challenges: [
                'Supporting multiple teaching modalities',
                'Enabling remote and hybrid learning',
                'Maintaining equipment across campus',
                'Working within education budgets',
                'Training diverse user groups'
            ],
            solutions: [
                'Interactive classroom displays and whiteboards',
                'Lecture capture and streaming systems',
                'Distance learning studios',
                'Campus event and auditorium AV',
                'Student collaboration spaces'
            ],
            image: 'https://images.unsplash.com/photo-1523050854058-8df4e8faaee5?w=1200&q=80',
        },
        {
            slug: 'healthcare',
            title: 'Healthcare',
            tagline: 'Supporting better patient outcomes',
            description: 'Healthcare environments require technology that\'s reliable, secure, and supports critical communication. Our HIPAA-compliant solutions enable telemedicine, medical training, and staff collaboration while maintaining the highest security standards.',
            challenges: [
                'Meeting HIPAA compliance requirements',
                'Supporting telehealth consultations',
                'Enabling medical education and training',
                'Maintaining 24/7 reliability',
                'Integrating with medical systems'
            ],
            solutions: [
                'Telemedicine consultation rooms',
                'Medical training and simulation labs',
                'Operating room documentation systems',
                'Patient education displays',
                'Secure staff collaboration tools'
            ],
            image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=1200&q=80',
        },
        {
            slug: 'government',
            title: 'Government',
            tagline: 'Secure, reliable civic technology',
            description: 'Government facilities require secure, accessible, and dependable AV systems. We provide solutions that meet stringent security requirements while supporting public meetings, emergency operations, and inter-agency collaboration.',
            challenges: [
                'Meeting security and compliance standards',
                'Supporting public transparency',
                'Enabling emergency operations',
                'Maintaining aging infrastructure',
                'Coordinating across departments'
            ],
            solutions: [
                'Council chambers and public meeting rooms',
                'Emergency operations centers',
                'Secure command and control rooms',
                'Public information displays',
                'Inter-agency video conferencing'
            ],
            image: 'https://images.unsplash.com/photo-1555396273-367ea4eb4db5?w=1200&q=80',
        },
    ];

    return (
        <div className="industries-page">
            {/* Hero */}
            <VideoHero
                fallbackImage="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=90"
                headline="Specialized Solutions for Every Sector"
                subheadline="Deep expertise in the unique needs of your industry."
                primaryCTA={{
                    text: 'See Our Work',
                    href: '/case-studies',
                }}
                height="70vh"
            />

            {/* Industries */}
            <section className="section">
                <div className="container">
                    {industries.map((industry, index) => (
                        <div key={industry.slug} className="industry-section">
                            <ScrollReveal>
                                <div className={`industry-content ${index % 2 === 1 ? 'reverse' : ''}`}>
                                    <div className="industry-text">
                                        <span className="industry-tag">{industry.title}</span>
                                        <h2>{industry.tagline}</h2>
                                        <p className="industry-description">{industry.description}</p>

                                        <div className="industry-details">
                                            <div className="industry-challenges">
                                                <h4>Your Challenges:</h4>
                                                <ul>
                                                    {industry.challenges.map((challenge, i) => (
                                                        <li key={i}>{challenge}</li>
                                                    ))}
                                                </ul>
                                            </div>

                                            <div className="industry-solutions">
                                                <h4>Our Solutions:</h4>
                                                <ul>
                                                    {industry.solutions.map((solution, i) => (
                                                        <li key={i}>
                                                            <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                                                <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                            </svg>
                                                            {solution}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="industry-image">
                                        <img src={industry.image} alt={industry.title} loading="lazy" />
                                    </div>
                                </div>
                            </ScrollReveal>
                        </div>
                    ))}
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-navy text-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Industry-Specific Expertise</h2>
                            <p>We understand your sector's unique requirements. Let's discuss how we can support your mission.</p>
                            <a href="/contact" className="btn btn-primary btn-large">
                                Let's Talk
                            </a>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Industries;
