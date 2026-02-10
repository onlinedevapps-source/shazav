import { motion } from 'framer-motion';
import { useState, useRef, useEffect } from 'react';
import PropTypes from 'prop-types';
import Button from './Button';
import './VideoHero.css';

const VideoHero = ({
    videoSrc,
    videoSources,
    fallbackImage,
    headline,
    subheadline,
    primaryCTA,
    secondaryCTA,
    height = '100vh'
}) => {
    const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
    const videoRef = useRef(null);

    // Use videoSources array if provided, otherwise use single videoSrc
    const videos = videoSources || (videoSrc ? [videoSrc] : []);

    useEffect(() => {
        if (videoRef.current && videos.length > 0) {
            // Speed set to 0.65x - Smooth Slow Motion
            // Now that heavy CSS animations are removed, this should run smoothly
            videoRef.current.playbackRate = 0.65;
        }
    }, [currentVideoIndex, videos.length]);

    const handleVideoEnd = () => {
        if (videos.length > 1) {
            setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
        }
    };

    return (
        <section className="video-hero" style={{ minHeight: height }}>
            {/* Video Background */}
            {videos.length > 0 ? (
                <video
                    ref={videoRef}
                    key={currentVideoIndex}
                    className="video-hero-bg"
                    autoPlay
                    muted
                    playsInline
                    poster={fallbackImage}
                    crossOrigin="anonymous"
                    onEnded={handleVideoEnd}
                    style={{ willChange: 'transform, opacity' }} // Hardware acceleration hint
                >
                    <source src={videos[currentVideoIndex]} type="video/mp4" />
                </video>
            ) : (
                <div
                    className="video-hero-bg fallback"
                    style={{ backgroundImage: `url(${fallbackImage})` }}
                />
            )}

            {/* Overlay */}
            <div className="video-hero-overlay" />

            {/* Content */}
            <div className="video-hero-content">
                <motion.div
                    className="video-hero-main"
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                >
                    <h1 className="video-hero-headline" style={{ whiteSpace: 'pre-line' }}>{headline}</h1>

                    <motion.div
                        className="video-hero-ctas"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5 }}
                    >
                        {primaryCTA && (
                            <Button
                                variant="primary"
                                size="large"
                                onClick={primaryCTA.onClick}
                                href={primaryCTA.href}
                            >
                                {primaryCTA.text}
                            </Button>
                        )}

                        {secondaryCTA && (
                            <Button
                                variant="secondary"
                                size="large"
                                onClick={secondaryCTA.onClick}
                                href={secondaryCTA.href}
                            >
                                {secondaryCTA.text}
                            </Button>
                        )}
                    </motion.div>
                </motion.div>

                <motion.div
                    className="video-hero-caption"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <p className="video-hero-subheadline">{subheadline}</p>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                className="scroll-indicator"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.2 }}
            >
                <div className="scroll-indicator-line" />
            </motion.div>
        </section>
    );
};

VideoHero.propTypes = {
    videoSrc: PropTypes.string,
    videoSources: PropTypes.arrayOf(PropTypes.string),
    fallbackImage: PropTypes.string.isRequired,
    headline: PropTypes.string.isRequired,
    subheadline: PropTypes.string.isRequired,
    primaryCTA: PropTypes.shape({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        href: PropTypes.string,
    }),
    secondaryCTA: PropTypes.shape({
        text: PropTypes.string.isRequired,
        onClick: PropTypes.func,
        href: PropTypes.string,
    }),
    height: PropTypes.string,
};

export default VideoHero;
