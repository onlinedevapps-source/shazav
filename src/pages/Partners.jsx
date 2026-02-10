import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import './Partners.css';

const Partners = () => {
    const partners = [
        {
            name: 'Crestron',
            category: 'Control Systems',
            partnership: 'Diamond Partner',
            description: 'Industry-leading control and automation systems. Crestron Diamond Partner status reflects our deep expertise and commitment to excellence.',
            capabilities: [
                'Custom control system design',
                'Enterprise-wide automation',
                'Advanced programming and integration',
                'Certified technicians on staff'
            ],
        },
        {
            name: 'Zoom',
            category: 'Video Conferencing',
            partnership: 'Certified Integrator',
            description: 'Zoom Rooms certified integrator bringing enterprise-grade video conferencing to spaces of all sizes.',
            capabilities: [
                'Zoom Rooms deployment',
                'Zoom Phone integration',
                'Webinar and event solutions',
                'Enterprise support services'
            ],
        },
        {
            name: 'Microsoft Teams',
            category: 'Collaboration',
            partnership: 'Teams Rooms Partner',
            description: 'Microsoft Teams Rooms certified partner enabling seamless hybrid collaboration with Microsoft 365 environments.',
            capabilities: [
                'Teams Rooms on Windows',
                'Teams Rooms on Android',
                'Teams panels and displays',
                'Direct Routing solutions'
            ],
        },
        {
            name: 'Biamp',
            category: 'Audio',
            partnership: 'Certified Designer',
            description: 'Biamp Certified Designer for professional audio solutions from small rooms to large venues.',
            capabilities: [
                'Tesira audio DSP systems',
                'Parlé ceiling microphones',
                'Desono loudspeakers',
                'VoIP and conferencing audio'
            ],
        },
        {
            name: 'Shure',
            category: 'Audio',
            partnership: 'Authorized Integrator',
            description: 'Shure authorized integrator delivering professional microphone and audio systems trusted worldwide.',
            capabilities: [
                'MXA microphone arrays',
                'Wireless systems',
                'IntelliMix DSP',
                'Dante networked audio'
            ],
        },
        {
            name: 'Samsung',
            category: 'Displays',
            partnership: 'Commercial Display Partner',
            description: 'Samsung commercial display partner for premium visual solutions from boardrooms to video walls.',
            capabilities: [
                'LED video walls',
                'Interactive displays',
                'Digital signage solutions',
                'UHD and QLED displays'
            ],
        },
        {
            name: 'LG',
            category: 'Displays',
            partnership: 'Commercial Partner',
            description: 'LG commercial partner providing cutting-edge display technology for demanding applications.',
            capabilities: [
                'Ultra-stretch displays',
                'Transparent OLED',
                'Outdoor displays',
                'Hospitality and retail solutions'
            ],
        },
        {
            name: 'Extron',
            category: 'AV Distribution',
            partnership: 'Authorized Reseller',
            description: 'Extron authorized reseller offering reliable signal distribution and control solutions.',
            capabilities: [
                'AV switching and routing',
                'Signal extension',
                'Control systems',
                'Cable and connectivity'
            ],
        },
    ];

    return (
        <div className="partners-page">
            {/* Hero */}
            <section className="partners-hero">
                <div className="container">
                    <ScrollReveal>
                        <div className="partners-hero-content">
                            <h1>Technology Partnerships</h1>
                            <p>We partner with the world's leading AV technology manufacturers to deliver best-in-class solutions. Our certifications and partnerships ensure you receive expert design, integration, and support.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Partners Grid */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Our Partners</h2>
                            <p>Certified expertise in industry-leading technologies</p>
                        </div>
                    </ScrollReveal>

                    <div className="partners-grid">
                        {partners.map((partner, index) => (
                            <ScrollReveal key={index} delay={index * 100}>
                                <div className="partner-card">
                                    <div className="partner-header">
                                        <div className="partner-logo-placeholder">
                                            {partner.name}
                                        </div>
                                        <div className="partner-meta">
                                            <span className="partner-category">{partner.category}</span>
                                            <span className="partner-partnership">{partner.partnership}</span>
                                        </div>
                                    </div>

                                    <div className="partner-body">
                                        <p className="partner-description">{partner.description}</p>

                                        <h4>Our Capabilities:</h4>
                                        <ul className="capabilities-list">
                                            {partner.capabilities.map((capability, i) => (
                                                <li key={i}>
                                                    <svg width="16" height="16" viewBox="0 0 20 20" fill="none">
                                                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {capability}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="section bg-navy text-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Best-in-Class Technology</h2>
                            <p>Our partnerships ensure you get the right solution, expertly designed and flawlessly integrated.</p>
                            <Button variant="primary" size="large" href="/contact">
                                Discuss Your Project
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Partners;
