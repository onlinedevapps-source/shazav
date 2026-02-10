import VideoHero from '../components/VideoHero';
import Card from '../components/Card';
import ScrollReveal from '../components/ScrollReveal';
import Button from '../components/Button';
import './Services.css';

const Services = () => {
    const services = [
        {
            slug: 'conference-boardroom',
            title: 'Conference & Boardroom Technology',
            tagline: 'Where critical decisions happen',
            description: 'Transform your conference rooms and boardrooms into world-class collaboration spaces. From intimate huddle rooms to executive boardrooms, we design and integrate technology that disappears into the background while elevating every meeting.',
            benefits: [
                'Seamless wireless presentation and screen sharing',
                'Integrated video conferencing for hybrid meetings',
                'Intuitive one-touch room controls',
                'Professional audio for crystal-clear communication',
                'Automated lighting and shade control',
                'Digital signage and wayfinding integration'
            ],
            technologies: ['Crestron', 'Zoom Rooms', 'Microsoft Teams Rooms', 'Extron', 'Biamp'],
        },
        {
            slug: 'video-conferencing',
            title: 'Video Conferencing Environments',
            tagline: 'Connect anywhere, work everywhere',
            description: 'The future of work is hybrid. Our video conferencing solutions bring remote and in-office teams together with flawless audio, crisp video, and intuitive operation. Compatible with Zoom, Microsoft Teams, Webex, and all major platforms.',
            benefits: [
                'Enterprise-grade camera and microphone arrays',
                'Echo cancellation and noise suppression',
                'Automatic camera tracking and framing',
                'Content sharing with BYOD support',
                'Consistent experience across all rooms',
                'Remote monitoring and management'
            ],
            technologies: ['Zoom', 'Microsoft Teams', 'Cisco Webex', 'Poly', 'Logitech'],
        },
        {
            slug: 'digital-signage',
            title: 'Digital Signage & Video Walls',
            tagline: 'Make your message impossible to ignore',
            description: 'Captivate your audience with stunning visual experiences. From lobby video walls to wayfinding displays, we create digital canvases that inform, engage, and impress. Dynamic content management keeps your message fresh and relevant.',
            benefits: [
                'Stunning high-resolution LED and LCD displays',
                'Custom content management systems',
                'Cloud-based scheduling and updates',
                'Interactive touchscreen capabilities',
                'Analytics and engagement tracking',
                'Scalable from single screens to massive walls'
            ],
            technologies: ['Samsung', 'LG', 'Planar', 'BrightSign', 'Navori'],
        },
        {
            slug: 'control-systems',
            title: 'Control Systems',
            tagline: 'Simple control of complex technology',
            description: 'Put sophisticated room control at your fingertips. Our Crestron-class control systems unify lighting, shades, audio, video, and HVAC into elegant, intuitive interfaces. One touch orchestrates the entire environment.',
            benefits: [
                'Unified control of all room systems',
                'Custom touchpanel interfaces',
                'Mobile device control options',
                'Scheduled automation and presets',
                'Integration with building management',
                'Remote diagnostics and support'
            ],
            technologies: ['Crestron', 'Extron', 'QSC', 'Control4', 'AMX'],
        },
    ];

    return (
        <div className="services-page">
            {/* Hero */}
            <VideoHero
                fallbackImage="https://images.unsplash.com/photo-1560439513-74b037a25d84?w=1920&q=90"
                headline="Complete AV Solutions"
                subheadline="From design to installation to support, we make technology work for you."
                primaryCTA={{
                    text: 'View Case Studies',
                    href: '/case-studies',
                }}
                height="70vh"
            />

            {/* Services Grid */}
            <section className="section">
                <div className="container">
                    <ScrollReveal>
                        <div className="section-header">
                            <h2>Our Services</h2>
                            <p>Comprehensive solutions for every AV challenge</p>
                        </div>
                    </ScrollReveal>

                    <div className="services-detail-grid">
                        {services.map((service, index) => (
                            <ScrollReveal key={service.slug} delay={index * 100}>
                                <div className="service-detail-card">
                                    <div className="service-detail-header">
                                        <span className="service-tag">Service</span>
                                        <h3>{service.title}</h3>
                                        <p className="service-tagline">{service.tagline}</p>
                                    </div>

                                    <div className="service-detail-body">
                                        <p className="service-description">{service.description}</p>

                                        <h4>What You Get:</h4>
                                        <ul className="benefits-list">
                                            {service.benefits.map((benefit, i) => (
                                                <li key={i}>
                                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                        <path d="M16.6667 5L7.50004 14.1667L3.33337 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                    {benefit}
                                                </li>
                                            ))}
                                        </ul>

                                        <div className="service-tech">
                                            <span className="tech-label">Technologies:</span>
                                            <div className="tech-tags">
                                                {service.technologies.map((tech, i) => (
                                                    <span key={i} className="tech-tag">{tech}</span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="section bg-navy text-white">
                <div className="container">
                    <ScrollReveal>
                        <div className="cta-content">
                            <h2>Ready to Transform Your Space?</h2>
                            <p>Let's discuss how our AV solutions can support your mission.</p>
                            <Button variant="primary" size="large" href="/contact">
                                Start a Conversation
                            </Button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Services;
