import React from 'react';
import { Instagram, Image } from 'lucide-react';
import { motion } from 'framer-motion';
import './Gallery.css';

const Gallery = () => {
    return (
        <section className="section gallery-section" id="gallery">
            <div className="container">
                <div className="section-header">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                    >
                        NUESTRA <span className="text-primary">GALERÍA</span>
                    </motion.h2>
                    <div className="header-line"></div>
                </div>

                <div className="gallery-grid">
                    {[1, 2, 3, 4, 5, 6].map((item, index) => (
                        <motion.div
                            className="gallery-item"
                            key={item}
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="placeholder-image">
                                <Image size={40} className="gallery-icon" />
                                <span>TRABAJO REALIZADO {item}</span>
                            </div>
                            <div className="gallery-overlay">
                                <span>Ver en Instagram</span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="gallery-cta">
                    <a href="https://www.instagram.com/motorjoseauto/" target="_blank" rel="noopener noreferrer" className="btn-outline-neon">
                        <Instagram size={20} style={{ marginRight: '8px', verticalAlign: 'middle' }} />
                        SEGUIR EN INSTAGRAM
                    </a>
                </div>
            </div>
        </section>
    );
};

export default Gallery;
