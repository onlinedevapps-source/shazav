import { useEffect, useRef, useState } from 'react';
import PropTypes from 'prop-types';

const ScrollReveal = ({
    children,
    direction = 'up',
    delay = 0,
    threshold = 0.2,
    className = ''
}) => {
    const [isVisible, setIsVisible] = useState(false);
    const elementRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                }
            },
            {
                threshold,
                rootMargin: '50px',
            }
        );

        const currentElement = elementRef.current;
        if (currentElement) {
            observer.observe(currentElement);
        }

        return () => {
            if (currentElement) {
                observer.unobserve(currentElement);
            }
        };
    }, [threshold]);

    const getRevealClass = () => {
        if (direction === 'left') return 'scroll-reveal-left';
        if (direction === 'right') return 'scroll-reveal-right';
        return 'scroll-reveal';
    };

    return (
        <div
            ref={elementRef}
            className={`${getRevealClass()} ${isVisible ? 'is-visible' : ''} ${className}`}
            style={{ transitionDelay: `${delay}ms` }}
        >
            {children}
        </div>
    );
};

ScrollReveal.propTypes = {
    children: PropTypes.node.isRequired,
    direction: PropTypes.oneOf(['up', 'left', 'right']),
    delay: PropTypes.number,
    threshold: PropTypes.number,
    className: PropTypes.string,
};

export default ScrollReveal;
