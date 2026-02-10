import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import './Button.css';

const Button = ({
    children,
    variant = 'primary',
    size = 'medium',
    onClick,
    href,
    className = '',
    ...props
}) => {
    const Component = href ? motion.a : motion.button;
    const extraProps = href ? { href } : { type: 'button', onClick };

    return (
        <Component
            className={`btn btn-${variant} btn-${size} ${className}`}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            transition={{ duration: 0.2 }}
            {...extraProps}
            {...props}
        >
            {children}
        </Component>
    );
};

Button.propTypes = {
    children: PropTypes.node.isRequired,
    variant: PropTypes.oneOf(['primary', 'secondary', 'ghost']),
    size: PropTypes.oneOf(['small', 'medium', 'large']),
    onClick: PropTypes.func,
    href: PropTypes.string,
    className: PropTypes.string,
};

export default Button;
