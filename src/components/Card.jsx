import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Card.css';

const Card = ({
    title,
    description,
    icon,
    image,
    variant = 'default',
    href,
    className = '',
    children
}) => {
    const Component = href ? motion.a : motion.div;
    const extraProps = href ? { href } : {};

    return (
        <Component
            className={`card card-${variant} ${className}`}
            whileHover={{ y: -8 }}
            transition={{ duration: 0.3 }}
            {...extraProps}
        >
            {image && (
                <div className="card-image">
                    <img src={image} alt={title} loading="lazy" />
                    <div className="card-image-overlay"></div>
                </div>
            )}

            <div className="card-content">
                {icon && <div className="card-icon">{icon}</div>}

                {title && <h3 className="card-title">{title}</h3>}

                {description && <p className="card-description">{description}</p>}

                {children}

                {href && (
                    <div className="card-arrow">
                        <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                            <path d="M4 10H16M16 10L10 4M16 10L10 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </div>
                )}
            </div>
        </Component>
    );
};

Card.propTypes = {
    title: PropTypes.string,
    description: PropTypes.string,
    icon: PropTypes.node,
    image: PropTypes.string,
    variant: PropTypes.oneOf(['default', 'service', 'industry', 'case-study']),
    href: PropTypes.string,
    className: PropTypes.string,
    children: PropTypes.node,
};

export default Card;
